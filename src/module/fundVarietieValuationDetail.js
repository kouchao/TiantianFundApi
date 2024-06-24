const { request } = require('../utils/index.js');

/**
 * 获取基金净值估算（实时）
 */
module.exports = async (params = {}) => {
  const url =
    'https://fundcomapi.tiantianfunds.com/mm/fundTrade/FundValuationDetail';
  const res = await request(url, params);

  return res.data ? JSON.parse(res.data) : res.data
};
