const { request } = require('../utils/index.js')

/**
 * 获取主题焦点列表
 */
module.exports = async (params = {}) => {
  const url = 'https://h5.1234567.com.cn/AggregationStaticService/chooseCustomRouter/getFundThemeFocusAggr'
  return request(url, params)
}
