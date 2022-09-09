const bigDataList = require('../src/module/bigDataList.js');

module.exports = async function handler(request, response) {
  const data = await bigDataList(request.query);
  response.status(200).json(data);
};
