const fundMNPeriodIncrease = require('../src/module/fundMNPeriodIncrease.js');

module.exports = async function handler(request, response) {
  const data = await fundMNPeriodIncrease(request.query);
  response.status(200).json(data);
};
