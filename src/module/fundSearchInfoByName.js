const { request } = require('../utils/index.js');

/**
 * 以基金名称搜索
 */
module.exports = async (params) => {
  const url = 'https://fundts.eastmoney.com/search/s/fundinfobynohigh';
  return request(url, params);
};
