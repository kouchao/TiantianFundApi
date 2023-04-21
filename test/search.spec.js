const assert = require('assert');
const axios = require('axios');
const host = 'http://localhost:3000';

describe('搜索接口', function () {
  it('获取基金详情', async function () {
    const res = await axios(`${host}/fundSearch`, {
      params: {
        key: '新能源',
        m: 1,
      },
    });
    assert.ok(res.data.Datas.length);
  });

  it('获取基金列表（按字母）', async function () {
    const res = await axios(`${host}/fundNetList`);
    assert.ok(res.data.Datas.length);
  });

  it('获取基金列表（按类型）', async function () {
    const res = await axios(`${host}/fundMNNetNewList`);
    assert.ok(res.data.Datas.length);
  });

  it('获取基金列表(所有-简单)', async function () {
    const res = await axios(`${host}/fundSuggestList`);
    assert.ok(res.data.Datas.length);
  });

  it('获取基金公司列表（所有）', async function () {
    const res = await axios(`${host}/fundCompanyBaseList`);
    assert.ok(res.data.Datas.length);
  });

  it('获取基金公司列表（所有）', async function () {
    const res = await axios(`${host}/fundCompanyBaseList`);
    assert.ok(res.data.Datas.length);
  });

  it('基金搜索（以名称）', async function () {
    const res = await axios(`${host}/fundSearchInfoByName`, {
      params: {
        key: '华夏',
        orderType: '2',
        pageindex: 1,
        pagesize: 20,
      },
    });
    assert.ok(res.data.totalCount);
  });
});
