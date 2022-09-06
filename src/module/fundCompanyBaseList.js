const { request } = require('../utils/index.js');

/**
 * 获取基金公司列表（所有）
 */
module.exports = async () => {
  const url =
    'https://fundmobapi.eastmoney.com/FundMApi/FundCompanyBaseList.ashx';
  return request(url);
};
