const { request } = require('../utils/index.js')

/**
 * m 基金:1 基金经理:6 基金公司:7
 * key 关键字
 */
module.exports = async (params) => {
  const url =
    'https://fundsuggest.eastmoney.com/FundSearch/api/FundSearchAPI.ashx'
  return request(url, params)
}
