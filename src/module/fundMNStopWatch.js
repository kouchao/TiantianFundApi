const { request } = require('../utils/index.js');

/**
 * 获取基金简介
 */
module.exports = async (params) => {
  const url = 'https://fundmobapi.eastmoney.com/FundMNewApi/FundMNStopWatch';
  return request(url, {
    ...params,
    deviceid: '123',
    plat: 'Iphone',
    version: '6.3.5',
    appVersion: '6.3.5',
  });
};
