const { request } = require('../utils/index.js')

/**
 * 获取基金列表（按类型）
 */
module.exports = async (params) => {
  const url = 'https://fundmobapi.eastmoney.com/FundMNewApi/FundMNNetNewList'
  return request(url, params)
}
