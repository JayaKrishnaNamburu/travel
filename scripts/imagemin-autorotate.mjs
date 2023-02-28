import isJpg from "is-jpg";
import jo from "jpeg-autorotate";

const jpegAutorotate = (buffer) => {
  return new Promise((resolve, reject) => {
    jo.rotate(
      buffer,
      {
        quality: 100,
      },
      (err, newBuffer) => {
        if (err) {
          return reject(err);
        }

        resolve(newBuffer);
      }
    );
  });
};

export default function ({ disable = false, quality = 100 } = {}) {
  return (buffer) => {
    if (disable || !isJpg(buffer)) {
      return buffer;
    }

    return (
      jpegAutorotate(buffer, {
        quality,
      })
        // Ignore rotate error
        .catch((err) => {
          return buffer;
        })
    );
  };
}
