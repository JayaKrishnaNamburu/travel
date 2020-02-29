const fs = require("fs");
const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const ora = require("ora");

const spinner = ora("Compressing Images");

const compress = folder => {
  return new Promise((resolve, reject) => {
    imagemin(
      [`src/images/${folder}/*.jpg`],
      `src/compressed/images/${folder}/`,
      { plugins: [imageminMozjpeg({ quality: 30 })] }
    ).then(files => resolve(files));
  });
};

const run = async () => {
  spinner.start();
  try {
    const folders = fs.readdirSync("./src/images/", { withFileTypes: true });
    for (let i = 0; i < folders.length; i++) {
      if (folders[i].isDirectory()) {
        const folder = folders[i];
        await compress(folder.name);
      }
    }
    spinner.succeed("Compression Successful");
  } catch (e) {
    console.error(e);
    spinner.fail("Failed in compressing images");
  }
};

run();
