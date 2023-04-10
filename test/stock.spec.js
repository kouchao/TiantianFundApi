const assert = require('assert');
const axios = require('axios');
const host = 'http://localhost:3000';

describe('股票', function () {
  it('获取股票趋势', async function () {
    const res = await axios(`${host}/stockTrends2`, {
      params: {
        code: '300750',
      },
    });
    assert.equal(res.data.data.code, '300750');
  });
  it('获取股票k线', async function () {
    const res = await axios(`${host}/stockKline`, {
      params: {
        code: '300750',
        end: '20230410',
        klt: '101',
        lmt: '80',
        fqt: '1',
      },
    });
    assert.equal(res.data.data.code, '300750');
  });

  it('获取股票交易明细', async function () {
    const res = await axios(`${host}/stockDetails`, {
      params: {
        code: '300750',
      },
    });
    assert.equal(res.data.data.code, '300750');
  });
  it('股票详情', async function () {
    const res = await axios(`${host}/stockGet`, {
      params: {
        code: '300750',
      },
    });
    assert.equal(res.data.data.f57, '300750');
  });
});
