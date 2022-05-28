const { post } = require('../utils/index.js')

/**
 * 获取基金经理风格
 */
module.exports = async (params) => {
  const url =
    'https://fundztapi.eastmoney.com/FundSpecialApiNew/FundMSNMangerPosMark'
  return post(url, params)
}
