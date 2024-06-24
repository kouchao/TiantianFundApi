const assert = require('assert');
const axios = require('axios');
const host = 'http://localhost:3000';

describe('股票', function () {
  it('获取股票趋势', async function () {
    const res = await axios(`${host}/stockTrends2`, {
      params: {
        type: '0',
        code: '300750',
      },
    });
    assert.equal(res.data.data.name, '宁德时代');
  });
  it('获取股票k线', async function () {
    const res = await axios(`${host}/stockKline`, {
      params: {
        type: '1',
        code: '603711',
        end: '20230410',
        klt: '101',
        lmt: '80',
        fqt: '1',
      },
    });
    assert.equal(res.data.data.name, '香飘飘');
  });

  it('获取股票交易明细', async function () {
    const res = await axios(`${host}/stockDetails`, {
      params: {
        type: '116',
        code: '00789',
      },
    });
    assert.equal(res.data.data.code, '00789');
  });
  it('股票详情', async function () {
    const res = await axios(`${host}/stockGet`, {
      params: {
        type: '105',
        code: 'MSFT',
      },
    });
    assert.equal(res.data.data.f58, '微软');
  });
});
