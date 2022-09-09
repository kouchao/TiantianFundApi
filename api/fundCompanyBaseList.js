const fundCompanyBaseList = require('../src/module/fundCompanyBaseList.js');

module.exports = async function handler(request, response) {
  const data = await fundCompanyBaseList(request.query);
  response.status(200).json(data);
};
