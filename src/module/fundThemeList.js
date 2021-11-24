const { request } = require('../utils/index.js')

/**
 * 获取热门主题
 */
module.exports = async (params = {}) => {
  const url = 'https://h5.1234567.com.cn/AggregationStaticService/getFundThemeListAggr'
  return request(url, params)
}
