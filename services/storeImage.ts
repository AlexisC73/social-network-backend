import fs from 'fs'
import path from 'path'

export const storeImage = ({ stream, filename }) => {
  const folder = 'photos'
  const myPath = path.join(__dirname + `../../${folder}/` + filename)
  return new Promise((resolve, reject) =>
    stream
      .on('error', (error) => {
        if (stream.truncated)
          // delete the truncated file
          fs.unlinkSync(myPath)
        reject(error)
      })
      .pipe(fs.createWriteStream(myPath))
      .on('error', (error) => reject(error))
      .on('finish', () => resolve({ myPath }))
  )
}
