const axios = require('axios')

const deviceId = '874C427C-7C24-4980-A835-66FD40B67605'
const version = '6.5.5'

// 发送请求
const request = async (url, params) => {
  const res = await axios(url, {
    params: {
      product: 'EFund',
      deviceid: deviceId,
      MobileKey: deviceId,
      plat: 'Iphone',
      PhoneType: 'IOS15.1.0',
      OSVersion: '15.5',
      version,
      ServerVersion: version,
      Version: version,
      appVersion: version,
      ...params,
    },
  })
  return res.data
}

// 发送 jsonp 请求
const jsonp = async (url, callback, params) => {
  const res = await axios(url, { params })
  const js = res.data.replace(/[\n]/g, '').replace(/\r/g, '')
  return JSON.parse(js.slice(callback.length + 1, js.length - 1))
}

module.exports = {
  request,
  jsonp,
}
