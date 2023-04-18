const { request } = require('../utils/index.js');

/**
 * 获取股票k线走势图
 */
module.exports = async (params = {}) => {
  const url = 'https://push2his.eastmoney.com/api/qt/stock/kline/get';
  return await request(url, {
    secid: `${params.type}.${params.code}`,
    klt: params.klt,
    lmt: params.lmt,
    fqt: params.fqt,
    end: params.end,
    iscca: 1,
    fields1: 'f1,f2,f3,f4,f5',
    fields2: 'f51,f52,f53,f54,f55,f56,f57',
    ...params,
  });
};
