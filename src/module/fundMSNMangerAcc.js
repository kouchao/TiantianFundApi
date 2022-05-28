const { post } = require('../utils/index.js')

/**
 * 获取基金经理业绩走势
 */
module.exports = async (params) => {
  const url =
    'https://fundztapi.eastmoney.com/FundSpecialApiNew/FundMSNMangerAcc'
  return post(url, params)
}
