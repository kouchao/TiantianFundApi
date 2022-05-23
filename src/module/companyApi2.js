const { request } = require('../utils/index.js')

/**
 * 获取基金公司基础信息
 */
module.exports = async (params) => {
  const url = 'https://fundztapi.eastmoney.com/FundCompanyApi/CompanyApi2.ashx'
  return request(url, params)
}
