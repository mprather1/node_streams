import fs from 'fs'
const readableStream = fs.createReadStream('package.json')
var data = ''
var chunk

readableStream.on('readable', () => {
  while ((chunk=readableStream.read()) != null) {
    data+=chunk
  }
})

readableStream.on('end', () => {
  console.log(data)
})