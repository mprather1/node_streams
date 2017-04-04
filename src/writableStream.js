import fs from 'fs'
const readableStream = fs.createReadStream('file1.txt')
const writableStream = fs.createWriteStream('file2.txt')

readableStream.setEncoding('utf8')

readableStream.on('data', (chunk) => {
  writableStream.write(chunk)
})