const { request } = require('../utils/index.js')

/**
 * 获取同类排名
 */
module.exports = async (params) => {
  const url = 'https://fundmobapi.eastmoney.com/FundMApi/FundRankDiagram.ashx'
  return request(url, params)
}
