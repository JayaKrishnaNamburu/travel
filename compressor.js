const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async() => {
  const files = await imagemin(
      ['src/images/banglore/*.jpg'],
      'src/compressed/images/banglore/',
      {plugins: [imageminMozjpeg({quality: 30})]}
  );
  console.log(files);
})();

(async() => {
  const files = await imagemin(
      ['src/images/generic/*.jpg'],
      'src/compressed/images/generic/',
      {plugins: [imageminMozjpeg({quality: 30})]}
  );
  console.log(files);
})();

(async() => {
  const files = await imagemin(
      ['src/images/kedarkantha/*.jpg'],
      'src/compressed/images/kedarkantha/',
      {plugins: [imageminMozjpeg({quality: 30})]}
  );
  console.log(files);
})();

(async() => {
  const files = await imagemin(
      ['src/images/udaipur/*.jpg'],
      'src/compressed/images/udaipur/',
      {plugins: [imageminMozjpeg({quality: 30 })]}
  );
  console.log(files);
})();

(async() => {
  const files = await imagemin(
      ['src/images/yercaud/*.jpg'],
      'src/compressed/images/yercaud/',
      {plugins: [imageminMozjpeg({quality: 30 })]}
  );
  console.log(files);
})();

(async() => {
  const files = await imagemin(
      ['src/images/wayanad/*.jpg'],
      'src/compressed/images/wayanad/',
      {plugins: [imageminMozjpeg({quality: 30 })]}
  );
  console.log(files);
})();

(async() => {
  const files = await imagemin(
      ['src/images/coorg/*.jpg'],
      'src/compressed/images/coorg/',
      {plugins: [imageminMozjpeg({quality: 30 })]}
  );
  console.log(files);
})();

(async() => {
  const files = await imagemin(
      ['src/images/pollachi/*.jpg'],
      'src/compressed/images/pollachi/',
      {plugins: [imageminMozjpeg({quality: 30 })]}
  );
  console.log(files);
})();

(async() => {
  const files = await imagemin(
      ['src/images/pichavaram/*.jpg'],
      'src/compressed/images/pichavaram/',
      {plugins: [imageminMozjpeg({quality: 30 })]}
  );
  console.log(files);
})();
