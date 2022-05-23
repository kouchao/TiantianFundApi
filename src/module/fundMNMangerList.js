const { request } = require('../utils/index.js')

/**
 * 获取基金的基金经理
 */
module.exports = async (params) => {
  const url = 'https://fundmobapi.eastmoney.com/FundMNewApi/FundMNMangerList'
  return request(url, params)
}
