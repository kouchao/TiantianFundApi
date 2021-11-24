# 快速开始

## 安装

```
npm i
```

## 启动

```
npm run start
```

# 接口列表

## 基金搜索

**路由**

`/fundSearch`

**参数**

`m` 搜索类别

- 搜基金: `1`
- 按字母公司搜基金: `3`
- 搜基金经理: `7`
- 搜基金公司: `8`

`key`: 关键字，当值为`3`时,仅`a-z`有效

**结果**
`/fundSearch?m=1&key=11`

```
[{
  "_id": "110003",
  "CODE": "110003",
  "NAME": "易方达上证50增强A",
  "JP": "YFDSZ50ZQA",
  "CATEGORY": 700,
  "CATEGORYDESC": "基金",
  "STOCKMARKET": "",
  "BACKCODE": "",
  "MatchCount": 1,
  "FundBaseInfo": {
    "_id": "110003",
    "DWJZ": 2.0939,
    "FCODE": "110003",
    "FSRQ": "2021-08-30",
    "FTYPE": "指数型-股票",
    "FUNDTYPE": "001",
    "ISBUY": "1",
    "JJGS": "易方达基金",
    "JJGSBID": 4,
    "JJGSID": "80000229",
    "JJJL": "张胜记",
    "JJJLID": "30057450",
    "MINSG": 10,
    "NAVURL": "http://fund.eastmoney.com/ZS_jzzzl.html#os_0;isall_0;ft_;pt_5",
    "OTHERNAME": "易方达50指数,易方达上证50增强,易方达上证50指数,易方达上证50指数A,易基50,易基50增强A,易基50指数,易基50指数A",
    "SHORTNAME": "易方达上证50增强A"
  },
  "StockHolder": "",
  "ZTJJInfo": [
    {
    "TTYPE": "BK0438",
    "TTYPENAME": "食品饮料"
    }
  ]
}]
```

`/fundSearch?m=7&key=w`

```
[{
  "MgrId": "30728448",
  "MgrName": "徐维君",
  "AbbName": "XWJ",
  "JJGS": "方正富邦基金",
  "JJGSID": "80174741",
  "MatchCount": 2
}]
```

`/fundSearch?m=3&key=w`

```
[{
  "JJGSID": "81052915",
  "JJGS": "安信证券资产",
  "JJGSJP": "",
  "GSJJBID": null,
  "QXJJ": [
    {
    "_id": "970003",
    "FCODE": "970003",
    "SHORTNAME": "安信瑞鸿中短债A"
    }
  ]
}]
```

`/fundSearch?m=8&key=w`

```
[{
  "JJGSID": "80000031",
  "JJGS": "东吴证券",
  "JJGSJP": "DWZQ",
  "GSJJBID": "",
  "QXJJ": null
}]
```

## 获取基金列表（按字母）

**路由**

`/fundNetList`

**参数**

`fundtype`: 基金类型

- 全部: `0`
- 股票: `25`
- 混合: `27`
- 货币: `35`
- QDII: `6`
- LOF: `4`
- 理财: `2949`

`SortColumn`: 排序列

- 日涨幅: `RDZF`
- 最新净值: `DWJZ`

`Sort`: 排序方式

- 降序: `desc`
- 升序: `asc`

`Letter`: 字母排序

- 全部: 不写
- A: `a`
- B: `b`
- 以此类推到`z`

`companyid`: 基金公司 id

`pageIndex`: 页码

`pagesize`: 每页条数

## 获取基金列表（按类型）

**路由**

`/fundMNNetNewList`

**参数**

`fundtype`: 基金类型

- 全部: `0`
- 股票: `25`
- 混合: `27`
- 货币: `35`
- QDII: `6`
- LOF: `4`
- 理财: `2949`

`SortColumn`: 排序列

- 最新净值: `HLDWJZ`
- 七日年化: `LJJZ`

`Sort`: 排序方式

- 降序: `desc`
- 升序: `asc`

`Letter`: 字母排序

- 全部: 不写
- A: `a`
- B: `b`
- 以此类推到`z`

`companyid`: 基金公司 id

`pageIndex`: 页码

`pagesize`: 每页条数

## 获取基金列表(所有-简单)

**路由**

`/fundSuggestList`

## 获取基金公司列表（所有）

**路由**

`/fundCompanyBaseList`

## 获取基金简介

**路由**

`/fundMNStopWatch`
**参数**

`FCODE`: 基金代码

```
{
  "FCODE": "580007",
  "SHORTNAME": "东吴安享量化混合",
  "ABBTNAME": "DONGWUANXIANGLIANGHUAHUNHE",
  "P": "F",
  "T": "H",
  "F": "--",
  "FTYPE": "混合型-灵活",
  "BACKCODE": "--",
  "REALSGCODE": "--",
  "QDTCODE": "--",
  "LISTTEXCH": "--",
  "FEATURE": "215",
  "TSRQ": "--",
  "INDEXCODE": "--",
  "INDEXNAME": "--",
  "INDEXTEXCH": "--",
  "BFUNDTYPE": "002",
  "ESTABDATE": "2010-06-29",
  "ISPTP": "--"
}
```

## 热门主题
> app 底部提示数据来源来自 choice
**路由**

`/fundThemeList`
**参数**

`RankItems`: 时间
- 涨幅（实时）: `ZDF`
- 涨幅（近1周）: `SYL_W`
- 涨幅（近1月）: `SYL_M`
- 涨幅（近3月）: `SYL_Q`
- 涨幅（近1年）: `SYL_1N`
- 涨幅（近1年）: `SYL_1N`
- 涨幅（今年来）: `SYL_JN`
- 资金流（实时）: `Cinflow`
- 资金流（近1周）: `Cinflow_W`
- 涨速（3分钟）: `ZS_3`
- 涨速（5分钟）: `ZS_5`

`RankVectors`: 排序
- 降序: `desc`
- 升序: `asc`

`category` 类别
- 全部: `2`
- 行业: `0`
- 概念: `1`