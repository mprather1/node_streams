import fs from 'fs'
import logger from 'winston-color'

const readableStream = fs.createReadStream('package.json')
var data = ''
var chunk

readableStream.on('readable', () => {
  while ((chunk=readableStream.read()) != null) {
    data+=chunk
  }
})

readableStream.on('end', () => {
  const parsed = JSON.parse(data)
  logger.info('Version:', parsed.version)
})