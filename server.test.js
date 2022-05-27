const fs = require('fs')
const path = require('path')
const startServe = require('./index')
let server
before(async () => {
  server = await startServe()
})

after((done) => {
  server.close(done)
})

fs.readdirSync(path.join(__dirname, 'test')).forEach((file) => {
  require(path.join(__dirname, 'test', file))
})