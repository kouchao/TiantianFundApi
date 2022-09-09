const fundMNDetailInformation = require('../src/module/fundMNDetailInformation.js');

module.exports = async function handler(request, response) {
  const data = await fundMNDetailInformation(request.query);
  response.status(200).json(data);
};
