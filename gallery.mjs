import fs from "fs";
import path from "path";
import { ensureFileSync } from "fs-extra";

// Utility to convert folder + filename into a valid identifier
const toIdentifier = (folder, filename) =>
  folder.replace(/[-\s]/g, "_") +
  filename.replace(/\.[^/.]+$/, "").replace(/[-\s]/g, "_");

// Base directories
const imagesDir = "src/assets/images";
const outputDir = "src/pages";

// Collect all images and generate import statements
const folders = fs
  .readdirSync(imagesDir)
  .filter((f) => !f.includes(".DS_Store"));

let imports = [];
let galleryItems = [];
let index = 0;

folders.forEach((folder) => {
  const folderPath = path.join(imagesDir, folder);
  const files = fs
    .readdirSync(folderPath)
    .filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

  files.forEach((fileName) => {
    const importVar = toIdentifier(folder, fileName);
    const importPath = `../assets/images/${folder}/${fileName}`;
    imports.push(`import ${importVar} from '${importPath}';`);
    galleryItems.push(`
      <div class="grid-item">
        <Image alt="${folder + "_" + fileName.replace(/\.[^/.]+$/, "")}" src={${importVar}} />
      </div>
    `);
    index++;
  });
});

// Magic string for the Astro component
const componentContent = `---
import { Image } from 'astro:assets';
${imports.join("\n")}
import BaseHead from '../components/BaseHead.astro';
import Header from '../components/Header.astro';
---
<html lang="en">
  <body>
    <BaseHead title="Image Gallery" description="A gallery of images." />
    <Header />
<div class="grid-wrapper">
  ${galleryItems.join("\n")}
</div>
<style>
body {
  margin: 0;
  padding: 0;
}

.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 8px;
  padding: 8px;
}

.grid-item {
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
}

.grid-item > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: translateZ(0);
}
</style>
  </body>
</html>
`;

// Write to file
ensureFileSync(path.join(outputDir, "gallery.astro"));
fs.writeFileSync(
  path.join(outputDir, "gallery.astro"),
  componentContent,
  "utf-8",
);

console.log("Astro Gallery component generated successfully!");
