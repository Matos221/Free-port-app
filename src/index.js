import { createServer } from 'node:http' // protocolo HTTP
import pc from 'picocolors'
import findeAvailable from './findeAvailable.js'

import { config } from 'dotenv'
config()

const desiredPort = process.env.PORT ?? 3000


const server = createServer((req, res) => {
  console.log(pc.green('request received'))
  res.end('Este servidor esta disponible')
})


findeAvailable(desiredPort).then(port => {
  server.listen(port, () => {
    console.log('server listening on port', pc.cyan(`http://localhost:${port}`))
  })
})


