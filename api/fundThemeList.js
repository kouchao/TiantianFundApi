const fundThemeList = require('../src/module/fundThemeList.js');

module.exports = async function handler(request, response) {
  const data = await fundThemeList(request.query);
  response.status(200).json(data);
};
