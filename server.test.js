const fs = require('fs')
const path = require('path')
const serverLoad = require('./index')
let server
before(async () => {
  server = await serverLoad
})

after((done) => {
  server.close(done)
})

fs.readdirSync(path.join(__dirname, 'test')).forEach((file) => {
  require(path.join(__dirname, 'test', file))
})