const { request } = require('../utils/index.js')

/**
 * 获取主题基金列表（所有）
 */
module.exports = async (params = {}) => {
  const url = 'https://h5.1234567.com.cn/AggregationStaticService/getFundThemeListAggr'
  return request(url, params)
}
