const fs = require("fs");
const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");

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
  try {
    const folders = fs.readdirSync("src/images/");
    for (let i = 0; i < folders.length; i++) {
      const folder = folders[i];
      await compress(folder);
    }
    console.log("Compression Successful");
  } catch (e) {
    console.error(e);
  }
};

run();
