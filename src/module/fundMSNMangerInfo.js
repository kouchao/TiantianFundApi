const { post } = require('../utils/index.js');

/**
 * 获取基金经理信息
 */
module.exports = async (params) => {
  const url =
    'https://fundztapi.eastmoney.com/FundSpecialApiNew/FundMSNMangerInfo';
  return post(url, params);
};
