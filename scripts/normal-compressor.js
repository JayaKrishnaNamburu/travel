const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");

(async () => {
  const files = await imagemin(
    ["src/images/banglore/*.jpg"],
    "src/compressed/normal-compression/images/banglore/",
    { plugins: [imageminMozjpeg({ quality: 30, progressive: false })] }
  );
  console.log(files);
})();

(async () => {
  const files = await imagemin(
    ["src/images/yercaud/*.jpg"],
    "src/compressed/normal-compression/images/yercaud/",
    { plugins: [imageminMozjpeg({ quality: 30, progressive: false })] }
  );
  console.log(files);
})();

(async () => {
  const files = await imagemin(
    ["src/images/kedarkantha/*.jpg"],
    "src/compressed/normal-compression/images/kedarkantha/",
    { plugins: [imageminMozjpeg({ quality: 30, progressive: false })] }
  );
  console.log(files);
})();

(() => {
  console.log("Baseline compression started");
})();
