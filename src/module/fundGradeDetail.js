const { request } = require('../utils/index.js');

/**
 * 获取评级
 */
module.exports = async (params) => {
  const url = 'https://fundmobapi.eastmoney.com/FundMApi/FundGradeDetail.ashx';
  return request(url, params);
};
