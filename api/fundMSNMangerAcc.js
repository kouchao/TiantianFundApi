const fundMSNMangerAcc = require('../src/module/fundMSNMangerAcc.js');

module.exports = async function handler(request, response) {
  const data = await fundMSNMangerAcc(request.query);
  response.status(200).json(data);
};
