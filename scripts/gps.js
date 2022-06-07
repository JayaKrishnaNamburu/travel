const { ExifImage } = require('exif')
const walk = require('walkdir')
const { dirname, basename, join, extname } = require('path')
const places = require('../src/components/Map/points.json')
const { writeFileSync } = require('fs')

const capitalize = (str) => str[0].toUpperCase() + str.slice(1)
const newPlaces = []
const promises = []
const emitter =  walk('src/images', (path, stat) => {
        if (!extname(path)) {
            return
        }
        
        promises.push(
           new Promise((resolve, reject) => {
               try {
                new ExifImage({ image: path }, (err, meta) => {
                    if (err) {
                        return reject(err)
                    }
                    const location = capitalize(basename(dirname(path)))
                    if (!meta?.gps) {
                        return reject(`No location data`)
                    }

                    const { GPSLatitude, GPSLongitude  } = meta.gps
                    if (!GPSLatitude || !GPSLongitude) {
                        return reject('No GPS lat-long data')
                    }
                    
                    console.log(location)
                    newPlaces.push({ name: location, points: [GPSLatitude, GPSLongitude] })
                    return resolve()
                })
               } catch(e) {
                   console.log(e)
               }
           })
        )
})

emitter.on('end', async () => {
    try {
        await Promise.allSettled(promises)
        // console.log(newPlaces)
        writeFileSync(join(__dirname, '../src/components/Map/points.json'), JSON.stringify([...places, ...newPlaces], null, 2), 'utf-8')
        console.log('Parsing GPS coordinates done !')
    } catch(e) {
        console.log(e)
    }
})

