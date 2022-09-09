const fundThemeFocusList = require('../src/module/fundThemeFocusList.js');

module.exports = async function handler(request, response) {
  const data = await fundThemeFocusList(request.query);
  response.status(200).json(data);
};
