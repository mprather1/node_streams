import fs from 'fs'
const readableStream = fs.createReadStream('package.json')
var data = ''

readableStream.setEncoding('utf8')

readableStream.on('data', (chunk) => {
  data+=chunk
})

readableStream.on('end', () => {
  console.log(data)
})