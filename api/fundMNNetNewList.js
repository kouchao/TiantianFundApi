const fundMNNetNewList = require('../src/module/fundMNNetNewList.js');

module.exports = async function handler(request, response) {
  const data = await fundMNNetNewList(request.query);
  response.status(200).json(data);
};
