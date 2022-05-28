const { post } = require('../utils/index.js')

/**
 * 获取基金经理持仓特点
 */
module.exports = async (params) => {
  const url =
    'https://fundztapi.eastmoney.com/FundSpecialApiNew/FundMSNMangerPosChar'
  return post(url, params)
}
