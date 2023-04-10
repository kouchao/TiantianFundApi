const assert = require('assert');
const axios = require('axios');
const host = 'http://localhost:3000';

describe('大数据接口', function () {
  it('获取大数据榜单', async function () {
    const res = await axios(`${host}/bigDataList`);
    assert.ok(res.data.datas.length);
  });

  it('获取大数据榜单数据详情', async function () {
    const res = await axios(`${host}/bigDataDetail`, {
      params: {
        cltype: '061',
      },
    });
    assert.equal(res.data.datas.ClType, '061');
  });
});
