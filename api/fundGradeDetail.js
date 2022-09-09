const fundGradeDetail = require('../src/module/fundGradeDetail.js');

module.exports = async function handler(request, response) {
  const data = await fundGradeDetail(request.query);
  response.status(200).json(data);
};
