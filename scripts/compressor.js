const fs = require('fs')
const imagemin = require('imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')
const ora = require('ora')

const compress = (folder) => {
  return new Promise((resolve, reject) => {
    imagemin(
      [`src/images/${folder}/*.jpg`, `src/images/${folder}/*.jpeg`, `src/images/${folder}/*.png`],
      `src/compressed/images/${folder}/`,
      {
        plugins: [imageminMozjpeg({ quality: 30 }), imageminPngquant({ quality: [0.6, 0.8] })],
      }
    )
      .then((files) => {
        resolve(files)
      })
      .catch((e) => {
        reject(e)
        console.log(e)
      })
  })
}

const run = async () => {
  const spinner = ora('Compression is in progress').start()
  try {
    const folders = fs.readdirSync('src/images/')
    spinner.start()
    const promises = []
    folders.forEach((folder) => {
      if (folder.includes('.DS_Store')) {
        return
      }
      promises.push(compress(folder))
    })
    await Promise.all(promises)
    spinner.stop()
    console.log('Compression Successful')
  } catch (e) {
    console.error(e)
    spinner.fail('Failed in compressing images')
  }
}

run()
