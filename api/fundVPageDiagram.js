const fundVPageDiagram = require('../src/module/fundVPageDiagram.js');

module.exports = async function handler(request, response) {
  const data = await fundVPageDiagram(request.query);
  response.status(200).json(data);
};
