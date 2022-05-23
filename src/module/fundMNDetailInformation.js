const { request } = require('../utils/index.js')

/**
 * 获取基金详情
 */
module.exports = async (params) => {
  const url = 'https://fundmobapi.eastmoney.com/FundMNewApi/FundMNDetailInformation'
  return request(url, params)
}
