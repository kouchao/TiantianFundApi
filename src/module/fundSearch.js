const { request } = require('../utils/index.js')

/**
 * 基金搜索
 */
module.exports = async (params) => {
  const url =
    'https://fundsuggest.eastmoney.com/FundSearch/api/FundSearchAPI.ashx'
  return request(url, params)
}
