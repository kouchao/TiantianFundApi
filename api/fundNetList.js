const fundNetList = require('../src/module/fundNetList.js');

module.exports = async function handler(request, response) {
  const data = await fundNetList(request.query);
  response.status(200).json(data);
};
