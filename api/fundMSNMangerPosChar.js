const fundMSNMangerPosChar = require('../src/module/fundMSNMangerPosChar.js');

module.exports = async function handler(request, response) {
  const data = await fundMSNMangerPosChar(request.query);
  response.status(200).json(data);
};
