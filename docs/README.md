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

## 基金主题

### 获取基金主题列表

**路由**

`/fundMNSubjectList`

### 获取热门主题

> app 底部提示数据来源来自 choice
> **路由**

`/fundThemeList`
**参数**

`RankItems`: 时间

- 涨幅（实时）: `ZDF`
- 涨幅（近 1 周）: `SYL_W`
- 涨幅（近 1 月）: `SYL_M`
- 涨幅（近 3 月）: `SYL_Q`
- 涨幅（近 1 年）: `SYL_1N`
- 涨幅（近 1 年）: `SYL_1N`
- 涨幅（今年来）: `SYL_JN`
- 资金流（实时）: `Cinflow`
- 资金流（近 1 周）: `Cinflow_W`
- 涨速（3 分钟）: `ZS_3`
- 涨速（5 分钟）: `ZS_5`

`RankVectors`: 排序

- 降序: `desc`
- 升序: `asc`

`category` 类别

- 全部: `2`
- 行业: `0`
- 概念: `1`

### 获取主题焦点

> app 底部提示数据来源来自 choice
> **路由**

`/fundThemeFocusList`

**参数**

`code`: 焦点所属 code （没找到在哪，可不填）

## 排行

### 获取基金排行

**路由**

`/fundMNRank`

**参数**

`FundType`: 类型

- 全部： `0`
- 股票： `25`
- 混合 `27`
- 指数 `26`
- 债券 `31`
- 货币 `35`
- QDII: `6`
- ETF: `3`
- 接联: `33`
- FOF: `15`
- LOF: `4`
- 商品: `50`
- 定开债: `32`
- 理财: `2949`

`SortColumn`: 排序字段

- 收益（全部 股票 混合 指数 债券 货币 QDLL ETF 接联 FOF LOF 商品 定开债 理财）

  - 收益率(近 1 周): `SYL_Z`
  - 收益率(近 1 月): `SYL_Y`
  - 收益率(近 3 月): `SYL_3Y`
  - 收益率(近 6 月): `SYL_6Y`
  - 收益率(今年来): `SYL_JN`
  - 收益率(近 1 年): `SYL_1N`
  - 收益率(近 2 年): `SYL_2N`
  - 收益率(近 3 年): `SYL_3N`
  - 收益率(近 5 年): `SYL_5N`
  - 收益率(成立以来): `SYL_LN`
  - 规模: `ENDNAV`

- 净值涨幅（全部 股票 混合 指数 债券 QDLL ETF 接联 FOF LOF 商品 定开债）

  - 净值: `HLDWJZ`
  - 日涨幅: `RZDF`

- 年化 (货币 35 理财 2949)

  - 万份收益: `DWJZ`
  - 7 日年化: `LJJZ`
  - 14 日年化: `FTYI`
  - 28 日年化: `TEYI`
  - 35 日年化: `TFYI`

- 封闭期开放日 (定开债 32)

  - 封闭期: `CYCLE`
  - 下一个开放日: `KFR`

- 定投（全部 股票 混合 QDLL 债券 指数）

  - 定投（普通定投 近 1 年）: `PTDT_Y`
  - 定投（普通定投 近 2 年）: `PTDT_TWY`
  - 定投（普通定投 近 3 年）: `PTDT_TRY`
  - 定投（普通定投 近 5 年）: `PTDT_FY`

  - 定投（智慧定投 近 1 年）: `DWDT_Y`
  - 定投（智慧定投 近 2 年）: `DWDT_TWY`
  - 定投（智慧定投 近 3 年）: `DWDT_TRY`
  - 定投（智慧定投 近 5 年）: `DWDT_FY`

  - 定投（目标止盈 近 1 年）: `MBDT_Y`
  - 定投（目标止盈 近 2 年）: `MBDT_TWY`
  - 定投（目标止盈 近 3 年）: `MBDT_TRY`
  - 定投（目标止盈 近 5 年）: `MBDT_FY`

  - 定投（移动止盈 近 1 年）: `YDDT_Y`
  - 定投（移动止盈 近 2 年）: `YDDT_TWY`
  - 定投（移动止盈 近 3 年）: `YDDT_TRY`
  - 定投（移动止盈 近 5 年）: `YDDT_FY`

- 热销（全部 股票 混合 QDLL 债券 指数）

  - 热销（日榜）: `SALESRANK_D`
  - 热销（周榜）: `SALESRANK_Z`
  - 热销（月榜）: `SALESRANK`
  - 热销（季榜）: `SALESRANK_3Y`
  - 热销（半年榜）: `SALESRANK_6Y`
  - 热销（年榜）: `SALESRANK_1N`

- 访问（全部 股票 混合 债券 指数）

  - 访问（日榜）: `PVRANK_D`
  - 访问（周榜）: `PVRANK_Z`
  - 访问（月榜）: `PVRANK_Y`
  - 访问（季榜）: `PVRANK_3Y`

- 定投热销（全部 股票 混合 QDLL 债券 指数）: `DTSALESRANK_Y`

`Sort`: 排序

- 降序: `desc`
- 升序: `asc`

`pageIndex`: 页码 1 开始

`pageSize`: 每页条数

`CompanyId`: 基金公司 id （通过`/fundCompanyBaseList`获取）

`CLTYPE`: 筛选方案（多选用`,`分开，如`022,006`）

- 全部: `0`
- 金牛奖: `022`
- 五星评级: `006`
- 2020 年度收益排行: `042`
- 2020 年度收益排行: `024`
- 高股息红利: `029`
- 优质债券: `038`
- 高夏普比率: `021`
- 持续霸榜: `025`
- 沪深 300 指数增强: `030`
- 十年老牌: `031`
- 低回撤: `034`
- 电子信息主题: `044`

`ISABNORMAL`: 是否去除因巨额赎回导致的异常涨幅

- 是: `true`
- 否: `false`

`BUY`: 开放状态

- 可购: `true`
- 全部: `false`

`DISCOUNT`: 申购费率（多选用`,`分开，如`0,1`）可不填为不过滤

- 0 费率: `0`
- 1 折: `1`

`LevelOne`: 股票型类型（多选用`,`分开，如`N050,050`）可不填为不过滤

- 股票型: `N050`
- 股票指数: `050`

`ENDNAV`：基金规模 单位：亿元 （多选用`,`分开，如`1,2`）可不填为不过滤

- 小于等于 2: `1`
- 2-10: `2`
- 10-50: `3`
- 50-100: `4`
- 大于 100: `5`

`RLEVEL_SZ`：基金评级 上海证券评级 （多选用`,`分开，如`5,4`）可不填为不过滤

- 五星: `5`
- 四星: `4`
- 三星: `3`
- 二星: `2`
- 一星: `1`

`ESTABDATE`：成立年限 单位：年 （多选用`,`分开，如`1,2`）可不填为不过滤

- 小于等于 1: `1`
- 1-2: `2`
- 2-3: `3`
- 3-4: `4`
- 4-5: `5`
- 大于 5: `6`

`TOPICAL`：基金主题 参考（`/fundMNSubjectList`）（多选用`,`分开，如`BK0735,BK0499`）可不填为不过滤

`RISKLEVEL`：风险类型 （多选用`,`分开，如`1,2`）可不填为不过滤

- 低风险: `1`
- 中低风险: `2`
- 中风险: `3`
- 中高风险: `4`
- 高风险: `5`

**未知参数**

- 如出错请传

  - `DataConstraintType`: `0`

- 可不传
  - `LevelTwo`

### 获取基金排行（香港）

**路由**
`/fundMNHKRank`

**参数**
`FundType`: 类型

- 全部： `0`

`SortColumn`: 排序字段

- 净值: `NAV`
- 币种: `JZCUNIT`
- 日涨幅: `NAVCHGRT`
- 收益率(近 1 周): `W`
- 收益率(近 1 月): `M`
- 收益率(近 3 月): `Q`
- 收益率(今年来): `SY`
- 收益率(近 1 年): `Y`
- 收益率(近 2 年): `TWY`
- 收益率(近 3 年): `TRY`
- 收益率(成立以来): `SE`
- 收益率(近 2 年): `TWY`

`Sort`: 排序

- 降序: `desc`
- 升序: `asc`

`pageIndex`: 页码 1 开始

`pageSize`: 每页条数

`CompanyId`: 基金公司 id （通过`/fundCompanyBaseList`获取）

`CLTYPE`: 筛选方案（多选用`,`分开，如`022,006`）

- 全部: `0`
- 金牛奖: `022`
- 五星评级: `006`
- 2020 年度收益排行: `042`
- 2020 年度收益排行: `024`
- 高股息红利: `029`
- 优质债券: `038`
- 高夏普比率: `021`
- 持续霸榜: `025`
- 沪深 300 指数增强: `030`
- 十年老牌: `031`
- 低回撤: `034`
- 电子信息主题: `044`

`ISABNORMAL`: 是否去除因巨额赎回导致的异常涨幅

- 是: `true`
- 否: `false`

`BUY`: 开放状态

- 可购: `true`
- 全部: `false`

`DISCOUNT`: 申购费率（多选用`,`分开，如`0,1`）可不填为不过滤

- 0 费率: `0`
- 1 折: `1`

`LevelOne`: 股票型类型（多选用`,`分开，如`N050,050`）可不填为不过滤

- 股票型: `N050`
- 股票指数: `050`

`ENDNAV`：基金规模 单位：亿元 （多选用`,`分开，如`1,2`）可不填为不过滤

- 小于等于 2: `1`
- 2-10: `2`
- 10-50: `3`
- 50-100: `4`
- 大于 100: `5`

`RLEVEL_SZ`：基金评级 上海证券评级 （多选用`,`分开，如`5,4`）可不填为不过滤

- 五星: `5`
- 四星: `4`
- 三星: `3`
- 二星: `2`
- 一星: `1`

`ESTABDATE`：成立年限 单位：年 （多选用`,`分开，如`1,2`）可不填为不过滤

- 小于等于 1: `1`
- 1-2: `2`
- 2-3: `3`
- 3-4: `4`
- 4-5: `5`
- 大于 5: `6`

`TOPICAL`：基金主题 参考（`/fundMNSubjectList`）（多选用`,`分开，如`BK0735,BK0499`）可不填为不过滤

`RISKLEVEL`：风险类型 （多选用`,`分开，如`1,2`）可不填为不过滤

- 低风险: `1`
- 中低风险: `2`
- 中风险: `3`
- 中高风险: `4`
- 高风险: `5`

**未知参数**

- 如出错请传

  - `DataConstraintType`: `0`

- 可不传
  - `LevelTwo`
