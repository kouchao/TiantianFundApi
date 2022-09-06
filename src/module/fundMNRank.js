const { request } = require('../utils/index.js');

/**
 * 获取基金排行
 */
module.exports = async (params = {}) => {
  const url = 'https://fundmobapi.eastmoney.com/FundMNewApi/FundMNRank';
  return request(url, params);
};
