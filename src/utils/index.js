const axios = require('axios')

// 发送请求
const request = async (url, params) => {
  const res = await axios(url, { params })
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
