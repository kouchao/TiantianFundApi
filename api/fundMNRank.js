const fundMNRank = require('../src/module/fundMNRank.js');

module.exports = async function handler(request, response) {
  const data = await fundMNRank(request.query);
  response.status(200).json(data);
};
