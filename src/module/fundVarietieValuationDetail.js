const { request } = require('../utils/index.js');

/**
 * 获取基金净值估算（实时）
 */
module.exports = async (params = {}) => {
  const url =
    'https://fundmobapi.eastmoney.com/FundMApi/FundVarietieValuationDetail.ashx';
  return request(url, params);
};
