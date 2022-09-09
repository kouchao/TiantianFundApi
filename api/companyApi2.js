const companyApi2 = require('../src/module/companyApi2.js');

module.exports = async function handler(request, response) {
  const data = await companyApi2(request.query);
  response.status(200).json(data);
};
