const { post } = require('../utils/index.js')

/**
 * 获取基金历史净值
 */
module.exports = async (params = {}) => {
  const url = 'https://fundmobapi.eastmoney.com/FundMNewApi/FundMNHisNetList'
  return post(url, params)
}
