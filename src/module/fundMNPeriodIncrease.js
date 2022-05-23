const { request } = require('../utils/index.js')

/**
 * 获取年度涨幅
 */
module.exports = async (params) => {
  const url = 'https://fundmobapi.eastmoney.com/FundMNewApi/FundMNPeriodIncrease'
  return request(url, params)
}
