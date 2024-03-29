const { ExifImage } = require("exif");
const walk = require("walkdir");
const { dirname, basename, join, extname } = require("path");
const places = require("../src/components/Map/points.json");
const { writeFileSync } = require("fs");

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
const convertDMSToDD = (degrees, minutes, seconds, direction) => {
  let dd = +degrees + +minutes / 60 + +seconds / (60 * 60);
  if (direction === "S" || direction === "W") {
    dd = dd * -1;
  }
  return dd;
};

const newPlaces = [];
const promises = [];
const emitter = walk("src/images", (path, stat) => {
  if (!extname(path)) {
    return;
  }

  promises.push(
    new Promise((resolve, reject) => {
      try {
        new ExifImage({ image: path }, (err, meta) => {
          if (err) {
            return reject(err);
          }

          const location = capitalize(basename(dirname(path)));
          if (!meta?.gps) {
            return reject(`No location data`);
          }

          const {
            GPSLatitude,
            GPSLongitude,
            GPSLatitudeRef,
            GPSLongitudeRef,
          } = meta.gps;
          if (
            !GPSLatitude ||
            !GPSLongitude ||
            !GPSLatitudeRef ||
            !GPSLongitudeRef
          ) {
            return reject("No GPS lat-long data");
          }

          newPlaces.push({
            name: location,
            points: [
              convertDMSToDD(...GPSLongitude, GPSLongitudeRef),
              convertDMSToDD(...GPSLatitude, GPSLatitudeRef),
            ],
          });
          return resolve();
        });
      } catch (e) {
        console.log(e);
      }
    })
  );
});

const getUniquesFromArray = (arr) => {
  return arr.filter((a, i) => arr.findIndex((s) => a.name === s.name) === i);
};

emitter.on("end", async () => {
  try {
    await Promise.allSettled(promises);
    writeFileSync(
      join(__dirname, "../src/components/Map/points.json"),
      JSON.stringify(getUniquesFromArray([...places, ...newPlaces]), null, 2),
      "utf-8"
    );
    console.log("Parsing GPS coordinates done !");
  } catch (e) {
    console.log(e);
  }
});
