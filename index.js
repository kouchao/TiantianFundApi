const { startServe } = require('./src/app.js');

if (process.env.NODE_ENV !== 'test') {
  startServe();
}

module.exports = startServe;
