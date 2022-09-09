const fundMNHisNetList = require('../src/module/fundMNHisNetList.js');

module.exports = async function handler(request, response) {
  const data = await fundMNHisNetList(request.query);
  response.status(200).json(data);
};
