const { request } = require('../utils/index.js');

/**
 * 获取股票走势图
 */
module.exports = async (params = {}) => {
  const url = 'https://push2.eastmoney.com/api/qt/stock/trends2/get';
  return await request(url, {
    secid: `${params.type}.${params.code}`,
    fields1: 'f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13',
    fields2: 'f51,f53,f56,f58',
    iscr: 0,
    iscca: 0,
    ndays: params.ndays,
    ...params,
  });
};
