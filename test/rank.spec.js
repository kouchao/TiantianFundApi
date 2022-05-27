const assert = require('assert');
const axios = require('axios')
const host = 'http://localhost:3001'

describe('排行接口', function () {
  it('获取基金排行', async function () {
    const res = await axios(`${host}/fundMNRank`)
    assert.ok(res.data.Datas.length);
  });

  it('获取基金排行（香港）', async function () {
    const res = await axios(`${host}/fundMNHKRank`)
    assert.ok(res.data.Datas.length);
  });

});
