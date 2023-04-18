const { sse } = require('../utils/index.js');

/**
 * 获取股票详情
 */
module.exports = async (params = {}, ctx) => {
    ctx.request.socket.setTimeout(0);
    ctx.request.socket.setNoDelay(true);
    ctx.request.socket.setKeepAlive(true);

    ctx.set('Content-Type', 'text/event-stream; charset=utf-8');
    ctx.set('Cache-Control', 'no-cache');
    ctx.set('Connection', 'keep-alive');

    return await sse('https://push2.eastmoney.com/api/qt/ulist/sse', {
        "fltt": "2",
        "secids": "1.000001,0.399001,0.399006,1.000300,0.399005,1.000016,0.899050,100.HSI,100.HSCEI,100.DJIA,100.NDX,100.SPX",
        "fields": "f1,f2,f3,f4,f12,f13,f14,f292",
        "dpt": "jj.hqpush",
        "pn": "1",
        "pz": "15"
    });
};

// secids 表示股票代码，可以是多个，用逗号分隔
