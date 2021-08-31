const { request } = require('../utils/index.js')

/**
 * 获取基金列表
 * fundtype 基金类型 全部:0 股票:25 混合:27 货币:35 QDII:6 债券:31 指数:26 FOF:15 ETF:3 ETF联接:33 LOF:4 理财:2949
 * SortColumn 排序列 日涨幅:RDZF 最新净值:DWJZ
 * Sort 排序方式 降序:desc 升序:asc
 * pageIndex 页码
 * pagesize 每页条数
 * Letter 字母排序 全部:null A:a 以此类推
 * companyid 基金公司id
 */
module.exports = async (params) => {
  const url =
    'https://fundmobapi.eastmoney.com/FundMApi/FundNetList.ashx'
  return request(url, params)
}
