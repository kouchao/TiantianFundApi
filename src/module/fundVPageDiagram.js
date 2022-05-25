const { post } = require('../utils/index.js')

/**
 * 获取基金净值
 */
module.exports = async (params = {}) => {
  const url = 'https://fundcomapi.tiantianfunds.com/mm/newCore/FundVPageDiagram'
  return post(url, params)
}
