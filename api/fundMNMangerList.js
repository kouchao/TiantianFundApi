const fundMNMangerList = require('../src/module/fundMNMangerList.js');

module.exports = async function handler(request, response) {
  const data = await fundMNMangerList(request.query);
  response.status(200).json(data);
};
