const fundSearch = require('../src/module/fundSearch.js');

module.exports = async function handler(request, response) {
  const data = await fundSearch(request.query);
  response.status(200).json(data);
};
