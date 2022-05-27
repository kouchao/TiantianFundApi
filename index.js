const { startServe } = require('./src/app.js')

if (process.env.NODE_ENV !== 'test') {
  startServe()
  return
}

module.exports = startServe