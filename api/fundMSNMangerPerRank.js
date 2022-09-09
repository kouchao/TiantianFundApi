const fundMSNMangerPerRank = require('../src/module/fundMSNMangerPerRank.js');

module.exports = async function handler(request, response) {
  const data = await fundMSNMangerPerRank(request.query);
  response.status(200).json(data);
};
