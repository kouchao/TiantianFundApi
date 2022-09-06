const { startServe } = require('../src/app');
let server;

async function mochaGlobalSetup() {
  server = await startServe();
}

async function mochaGlobalTeardown() {
  await server.close();
}

module.exports = {
  mochaGlobalSetup,
  mochaGlobalTeardown,
};
