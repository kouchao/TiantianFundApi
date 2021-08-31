const { jsonp } = require('../utils/index.js')

/**
 * 获取基金公司列表（所有）
 */
module.exports = async () => {
  const url = 'https://m.1234567.com.cn/data/FundCompanyBaseList.js'
  return jsonp(url, 'FundCompanyBaseList')
}
