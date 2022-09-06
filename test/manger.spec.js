const assert = require('assert');
const axios = require('axios');
const host = 'http://localhost:3000';

describe('经理接口', function () {
  it('获取基金经理信息', async function () {
    const res = await axios(`${host}/fundMSNMangerInfo`, {
      params: {
        FCODE: '30379614',
      },
    });

    assert.equal(res.data.Datas.MGRID, '30379614');
  });

  it('获取基金经理业绩走势', async function () {
    const res = await axios(`${host}/fundMSNMangerAcc`, {
      params: {
        mGRID: '30379614',
        rANGe: 'y',
      },
    });

    assert.ok(res.data.Datas.length);
  });

  it('获取基金经理业绩排行', async function () {
    const res = await axios(`${host}/fundMSNMangerPerRank`, {
      params: {
        mGRID: '30379614',
      },
    });
    assert.ok(res.data.Datas.W);
  });

  it('获取基金经理业绩评价', async function () {
    const res = await axios(`${host}/fundMSNMangerPerEval`, {
      params: {
        mGRID: '30379614',
      },
    });
    assert.ok(res.data.Datas.MAXRETRA_1);
  });

  it('获取基金经理风格', async function () {
    const res = await axios(`${host}/fundMSNMangerPosMark`, {
      params: {
        mGRID: '30379614',
      },
    });
    assert.ok(res.data.Datas.Pos.length);
  });

  it('获取基金经理持仓特点', async function () {
    const res = await axios(`${host}/fundMSNMangerPosChar`, {
      params: {
        mGRID: '30379614',
      },
    });
    assert.ok(res.data.Datas.REPORTDATE);
  });

  it('获取基金经理持仓历史管理资金', async function () {
    const res = await axios(`${host}/fundMSNMangerProContr`, {
      params: {
        mGRID: '30379614',
      },
    });
    assert.ok(res.data.Datas.length);
  });
});
