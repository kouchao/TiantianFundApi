const { request } = require('../utils/index.js');

/**
 * 获取大数据榜单数据详情
 */
module.exports = async (params = {}) => {
  const url = 'https://appconfig2.1234567.com.cn/config/BigDatadetail';
  return request(url, params);
};
