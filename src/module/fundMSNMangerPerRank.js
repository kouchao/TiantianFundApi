const { post } = require('../utils/index.js')

/**
 * 获取基金经理业绩排行
 */
module.exports = async (params) => {
  const url =
    'https://fundztapi.eastmoney.com/FundSpecialApiNew/FundMSNMangerPerRank'
  return post(url, params)
}
