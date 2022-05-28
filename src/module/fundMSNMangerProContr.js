const { post } = require('../utils/index.js')

/**
 * 获取基金经理历史管理基金
 */
module.exports = async (params) => {
  const url =
    'https://fundztapi.eastmoney.com/FundSpecialApiNew/FundMSNMangerProContr'
  return post(url, params)
}
