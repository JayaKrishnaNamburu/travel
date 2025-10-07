import fs from "fs";
import { ensureFileSync } from "fs-extra";
import imagemin from "imagemin";
import imageminJpeg from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";
import autoRotate from "./imagemin-autorotate.mjs";
import ora from "ora";
import {
  createReactComponentGenerator,
  ReactStyleVariation,
} from "@teleporthq/teleport-component-generator-react";
import { fileURLToPath } from "url";
import path from "path";
import { StringUtils } from "@teleporthq/teleport-shared";
import heicConvert from "heic-convert";

const generator = createReactComponentGenerator(ReactStyleVariation.CSSModules);

const ignoreFoldersInGallery = ["generic", "jawadhihills", "varkala", "panjim"];

const UIDL = {
  name: "Gallery",
  importDefinitions: {},
  node: {
    type: "element",
    content: {
      elementType: "container",
      name: "girid-wrapper",
      style: {
        "margin-top": "5px",
        display: "grid",
        "grid-template-columns": "repeat(3, 1fr)",
        "grid-row-gap": "5px",
        "grid-column-gap": "5px",
        position: "relative",
        "will-change": "transform",
      },
      children: [],
    },
  },
};

const convertHeicToJpeg = async (inputPath, outputPath) => {
  try {
    const inputBuffer = await fs.promises.readFile(inputPath);
    const outputBuffer = await heicConvert({
      buffer: inputBuffer,
      format: "JPEG",
      quality: 1, // Max quality for conversion, we'll compress later
    });
    await fs.promises.writeFile(outputPath, outputBuffer);
    return outputPath;
  } catch (error) {
    console.error(`Error converting HEIC file ${inputPath}:`, error);
    throw error;
  }
};

const processHeicFiles = async (folder) => {
  const folderPath = `src/images/${folder}`;
  const files = await fs.promises.readdir(folderPath);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === ".heic" || ext === ".HEIC") {
      const inputPath = path.join(folderPath, file);
      const outputPath = path.join(
        folderPath,
        file.replace(/\.heic$/i, ".jpg")
      );

      await convertHeicToJpeg(inputPath, outputPath);
      console.log(
        `Converted ${file} from ${folderPath} to ${path.basename(outputPath)}`
      );

      // Delete the original HEIC file
      await fs.promises.unlink(inputPath);
      console.log(`Deleted original HEIC file: ${file}`);
    }
  }
};

const compress = (folder) => {
  return new Promise((resolve, reject) => {
    return imagemin([`src/images/${folder}/*.{jpg,png,jpeg}`], {
      meta: false,
      plugins: [
        autoRotate(),
        imageminJpeg({ quality: 30 }),
        imageminPngquant({ quality: [0.6, 0.8] }),
      ],
    })
      .then((files) => {
        files.forEach((file) => {
          file.destinationPath = file.sourcePath.replace(
            "images",
            "compressed"
          );
          const importPath = file.sourcePath.replace(
            "src/images/",
            "../../compressed/"
          );
          const { dir, name } = path.parse(importPath);
          const importDef =
            StringUtils.dashCaseToCamelCase(dir.split("../../compressed/")[1]) +
            StringUtils.dashCaseToUpperCamelCase(name);

          if (!ignoreFoldersInGallery.some((def) => importDef.includes(def))) {
            UIDL.importDefinitions[importDef] = {
              type: "package",
              path: importPath,
              version: "0.0.0",
            };

            const elm = {
              type: "element",
              content: {
                elementType: "container",
                name: "grid-item",
                style: {
                  "background-color": "#dddddd",
                  display: "block",
                  position: "relative",
                  height: "350px",
                  width: "auto",
                  overflow: "hidden",
                },
                children: [
                  {
                    type: "element",
                    content: {
                      elementType: "image",
                      semanticType: "img",
                      style: {
                        height: "350px",
                        width: "100%",
                        "object-fit": "cover",
                        "object-position": "center",
                        transform: "translateZ(0)",
                      },
                      attrs: {
                        alt: StringUtils.camelCaseToDashCase(name),
                        src: {
                          type: "import",
                          content: {
                            id: importDef,
                          },
                        },
                      },
                    },
                  },
                ],
              },
            };

            UIDL.node.content.children.push(elm);
          }

          const filePath = fileURLToPath(
            new URL(`../${file.destinationPath}`, import.meta.url).toString()
          );
          ensureFileSync(filePath);
          fs.writeFileSync(filePath, file.data, "utf-8");
        });
        resolve(files);
      })
      .catch((e) => {
        reject(e);
        console.log(e);
      });
  });
};

const run = async () => {
  const spinner = ora("Compression is in progress").start();
  try {
    const folders = fs.readdirSync("src/images/");
    spinner.start();

    // First, convert all HEIC files to JPEG
    spinner.text = "Converting HEIC files to JPEG...";
    for (const folder of folders) {
      if (folder.includes(".DS_Store")) {
        continue;
      }
      await processHeicFiles(folder);
    }

    const promises = [];
    folders.forEach((folder) => {
      if (folder.includes(".DS_Store")) {
        return;
      }
      promises.push(compress(folder));
    });
    await Promise.all(promises);
    spinner.stop();
    console.log("Compression Successful");
  } catch (e) {
    console.error(e);
    spinner.fail("Failed in compressing images");
  }
};

const generate = async () => {
  const result = await generator.generateComponent(UIDL);
  result.files.forEach((file) => {
    const filePath = fileURLToPath(
      new URL(
        `../src/components/Gallery/${
          file.fileType === "js" ? "index" : file.name
        }.${file.fileType === "js" ? "jsx" : file.fileType}`,
        import.meta.url
      )
    ).toString();
    ensureFileSync(filePath);
    fs.writeFileSync(filePath, file.content, "utf-8");
  });
};

await run();
await generate();
