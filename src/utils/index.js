const axios = require('axios')

// 发送请求
const request = async (url, params) => {
  const res = await axios(url, {
    params: {
      ...params,
      deviceid: 'Wap',
      plat: 'Wap',
      product: 'EFund',
      version: '2.0.0',
    },
  })
  return res.data
}

// 发送 jsonp 请求
const jsonp = async (url, callback) => {
  const res = await axios(url)
  const js = res.data.replace(/[\n]/g, '').replace(/\r/g, '')
  return JSON.parse(js.slice(callback.length + 1, js.length - 1))
}

module.exports = {
  request,
  jsonp,
}
