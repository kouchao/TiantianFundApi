const fundMSNMangerPosMark = require('../src/module/fundMSNMangerPosMark.js');

module.exports = async function handler(request, response) {
  const data = await fundMSNMangerPosMark(request.query);
  response.status(200).json(data);
};
