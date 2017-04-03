import fs from 'fs'
import logger from 'winston-color'

const readableStream = fs.createReadStream("package.json")
let data = ''

readableStream.on('data', (chunk) => {
  data+=chunk
})

// When there is no more data to read the stream emits an "end" event
readableStream.on('end', () => { 
  const parsed = JSON.parse(data)
  logger.info('Version:', parsed.version)
})

