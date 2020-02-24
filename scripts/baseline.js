const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");

const compress = folder => {
  return new Promise((resolve, reject) => {
    imagemin(
      [`src/images/${folder}/*.jpg`],
      `src/compressed/normal-compression/images/${folder}/`,
      { plugins: [imageminMozjpeg({ quality: 30, progressive: false })] }
    ).then(files => resolve(files));
  });
};

const run = async () => {
  try {
    const folders = ["kedarkantha", "yercaud", "banglore"];
    for (let i = 0; i < folders.length; i++) {
      const folder = folders[i];
      await compress(folder);
    }
  } catch (e) {
    console.error(e);
  }
};

run();
