const { jsonp } = require('../utils/index.js');

/**
 * 获取基金列表(所有-简单)
 */
module.exports = async () => {
  const url = 'https://m.1234567.com.cn/data/FundSuggestList.js';
  return jsonp(url, 'FundSuggestList');
};
