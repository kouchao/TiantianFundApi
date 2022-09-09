const fundRankDiagram = require('../src/module/fundRankDiagram.js');

module.exports = async function handler(request, response) {
  const data = await fundRankDiagram(request.query);
  response.status(200).json(data);
};
