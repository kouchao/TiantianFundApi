const fundSuggestList = require('../src/module/fundSuggestList.js');

module.exports = async function handler(request, response) {
  const data = await fundSuggestList(request.query);
  response.status(200).json(data);
};
