const assert = require('assert');
const axios = require('axios');
const host = 'http://localhost:3000';

describe('公司接口', function () {
  it('获取基金公司基础信息(旗下基金和相关主题)', async function () {
    const res = await axios(`${host}/companyApi2`, {
      params: {
        action: 'fundcompanybaseinfo',
        cc: '80065113',
      },
    });
    assert.ok(res.data.data.Count);
  });

  it('获取基金公司基础信息(旗下基金列表)', async function () {
    const res = await axios(`${host}/companyApi2`, {
      params: {
        action: 'fundlist',
        cc: '80065113',
      },
    });
    assert.ok(res.data.data.length);
  });

  it('获取基金公司基础信息(旗下基金分类)', async function () {
    const res = await axios(`${host}/companyApi2`, {
      params: {
        action: 'categoryoffund',
        cc: '80065113',
        ftype: '25',
      },
    });
    assert.ok(res.data.data.Info);
  });

  it('获取基金公司基础信息(基本情况)', async function () {
    const res = await axios(`${host}/companyApi2`, {
      params: {
        action: 'companyarchives',
        cc: '80065113',
      },
    });
    assert.ok(res.data.data.FDMC);
  });

  it('获取基金公司基础信息(规模变动)', async function () {
    const res = await axios(`${host}/companyApi2`, {
      params: {
        action: 'companygmbd',
        cc: '80065113',
      },
    });
    assert.ok(res.data.data.Datas.length);
  });
});
