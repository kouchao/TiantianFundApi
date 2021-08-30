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

## 获取基金列表

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
