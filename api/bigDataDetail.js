const bigDataDetail = require('../src/module/bigDataDetail.js');

module.exports = async function handler(request, response) {
  const data = await bigDataDetail(request.query);
  console.log(data);
  response.status(200).json(data);
};
