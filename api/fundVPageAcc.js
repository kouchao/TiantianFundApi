const fundVPageAcc = require('../src/module/fundVPageAcc.js');

module.exports = async function handler(request, response) {
  const data = await fundVPageAcc(request.query);
  response.status(200).json(data);
};
