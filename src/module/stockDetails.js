const { request } = require('../utils/index.js');

/**
 * 获取股票交易明细
 */
module.exports = async (params = {}) => {
  const url = 'https://push2.eastmoney.com/api/qt/stock/details/get';
  return await request(url, {
    secid: `${params.type}.${params.code}`,
    fields1: 'f1,f2,f3,f4,f5',
    fields2: 'f51,f52,f53,f54,f55',
    pos: '-14',
    iscca: 1,
    invt: 2,
    ...params,
  });
};
