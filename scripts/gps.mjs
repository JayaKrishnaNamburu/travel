import pkg from 'exif'
import walk from 'walkdir'
import { dirname, basename } from 'path'
const { ExifImage } = pkg
import pkgPlaces from '../src/components/Map/points.js'
const { places } = pkgPlaces

const capitalize = (str) => str[0].toUpperCase() + str.slice(1)

walk('src/images', (path, stat) => {
    try {
        new ExifImage({ image: path }, (err, meta) => {
            if (err) {
                /* Failing images */
            }
            const location = capitalize(basename(dirname(path)))
            if (!meta?.gps) {
                return
            }

            const { GPSLatitude, GPSLongitude  } = meta.gps
            if (GPSLatitude && GPSLongitude) {
                const isExists =  places.find((place) => place.name === location)
                if (!isExists) {
                    places.push({ name: location, points: [GPSLatitude, GPSLongitude] })
                }
            }
        })
    } catch(e) {
        console.error(e)
    }
})
console.log('Parsing GPS coordinates done !')