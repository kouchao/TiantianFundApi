const bigDataDetail = require('../src/module/bigDataDetail.js');

module.exports = async function handler(request, response) {
  const action = request.query.action_name;
  const api = require(`../src/module/${action}.js`);

  const data = await api(request.query);
  response.status(200).json(data);
};
