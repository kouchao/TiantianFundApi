const assert = require('assert');
const axios = require('axios')
const host = 'http://localhost:3001'

describe('基金接口', function () {
  it('获取基金详情', async function () {
    const res = await axios(`${host}/fundMNStopWatch`, {
      params: {
        FCODE: '003834'
      }
    })
    assert.equal(res.data.Datas.FCODE, '003834');
  });

  it('获取基金详情', async function () {
    const res = await axios(`${host}/fundMNDetailInformation`, {
      params: {
        FCODE: '003834'
      }
    })
    assert.equal(res.data.Datas.FCODE, '003834');
  });

  it('获取基金评级', async function () {
    const res = await axios(`${host}/fundGradeDetail`, {
      params: {
        FCODE: '003834'
      }
    })
    assert.ok(res.data.Datas.length);
  });

  it('获取基金涨幅', async function () {
    const res = await axios(`${host}/fundMNPeriodIncrease`, {
      params: {
        FCODE: '003834'
      }
    })
    assert.ok(res.data.Datas.length);
  });

  it('获取基金同类排名走势', async function () {
    const res = await axios(`${host}/fundRankDiagram`, {
      params: {
        FCODE: '003834'
      }
    })
    assert.ok(res.data.Datas.length);
  });

  it('获取基金的基金经理', async function () {
    const res = await axios(`${host}/fundMNMangerList`, {
      params: {
        FCODE: '003834'
      }
    })
    assert.ok(res.data.Datas.length);
  });

  it('获取基金累计收益', async function () {
    const res = await axios(`${host}/fundVPageAcc`, {
      params: {
        FCODE: '003834'
      }
    })
    assert.ok(res.data.data.length);
  });

  it('获取基金净值', async function () {
    const res = await axios(`${host}/fundVPageDiagram`, {
      params: {
        FCODE: '003834'
      }
    })
    assert.ok(res.data.data.length);
  });

  it('获取基金净值估算（实时）', async function () {
    const res = await axios(`${host}/fundVarietieValuationDetail`, {
      params: {
        FCODE: '003834'
      }
    })
    assert.ok(res.data.Datas.length);
  });

  it('获取基金历史净值', async function () {
    const res = await axios(`${host}/fundMNHisNetList`, {
      params: {
        FCODE: '003834'
      }
    })
    assert.ok(res.data.Datas.length);
  });


});
