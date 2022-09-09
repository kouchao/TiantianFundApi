const fundMNHKRank = require('../src/module/fundMNHKRank.js');

module.exports = async function handler(request, response) {
  const data = await fundMNHKRank(request.query);
  response.status(200).json(data);
};
