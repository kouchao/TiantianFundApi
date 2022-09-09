const fundMSNMangerProContr = require('../src/module/fundMSNMangerProContr.js');

module.exports = async function handler(request, response) {
  const data = await fundMSNMangerProContr(request.query);
  response.status(200).json(data);
};
