const fundVarietieValuationDetail = require('../src/module/fundVarietieValuationDetail.js');

module.exports = async function handler(request, response) {
  const data = await fundVarietieValuationDetail(request.query);
  response.status(200).json(data);
};
