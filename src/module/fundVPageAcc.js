const { post } = require('../utils/index.js')

/**
 * 获取基金累计收益
 */
module.exports = async (params = {}) => {
  const url = 'https://fundcomapi.tiantianfunds.com/mm/newCore/FundVPageAcc'
  return post(url, params)
}
