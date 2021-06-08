const imagemin = require('imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const ora = require('ora')

const spinner = ora('Compressing Images to Baseline')

const compress = (folder) => {
  return new Promise((resolve, reject) => {
    imagemin(
      [`src/images/${folder}/*.jpg`],
      `src/compressed/normal-compression/images/${folder}/`,
      { plugins: [imageminMozjpeg({ quality: 30, progressive: false })] }
    ).then((files) => resolve(files))
  })
}

const run = async () => {
  spinner.start()
  try {
    const folders = ['kedarkantha', 'yercaud', 'banglore']
    for (let i = 0; i < folders.length; i++) {
      const folder = folders[i]
      await compress(folder)
    }
    spinner.succeed('Compressed using baseline compression')
  } catch (e) {
    console.error(e)
    spinner.fail('Failed in compressing images to baseline')
  }
}

run()
