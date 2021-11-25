const axios = require('axios')

// 发送请求
const request = async (url, params) => {
  const res = await axios(url, {
    params: {
      product: 'EFund',
      deviceid: '874C427C-7C24-4980-A835-66FD40B67605',
      plat: 'Iphone',
      version: '6.4.9',
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
