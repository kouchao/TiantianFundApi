const assert = require('assert');
const axios = require('axios')
const host = 'http://localhost:3001'

describe('主题接口', function () {
  it('获取主题列表', async function () {
    const res = await axios(`${host}/fundMNSubjectList`)
    assert.ok(res.data.Datas.length);
  });

  it('获取热门主题', async function () {
    const res = await axios(`${host}/fundThemeList`)
    assert.ok(res.data.data.length);
  });

  it('获取主题焦点', async function () {
    const res = await axios(`${host}/fundThemeFocusList`)
    assert.ok(res.data.data.length);
  });
});
