const { request } = require('../utils/index.js');

/**
 * 获取基金列表（按字母）
 */
module.exports = async (params) => {
  const url = 'https://fundmobapi.eastmoney.com/FundMApi/FundNetList.ashx';
  return request(url, params);
};
