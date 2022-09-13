
## 安装

```
npm i
```


## 运行
### node 中启动
```
npm run start
```

### docker 中启动
```
docker run -d -p 3000:3000 kouchao/tiantian_fund_api
```

### node 中使用
#### 安装
```
npm i tiantian-fund-api -S
```
#### 使用
```javascript
const { fundSearch } = require('tiantian-fund-api')
async function main() {
  const res = await fundSearch({
    m: '1',
    key: '11'
  })
}
```

### vercel 示例
支持了在 `vercel` 中调用 `api`，在 `vercel` 中个人版只能创建 12 个 `api`，同过一种巧妙的转换，使得支持多个接口调用。

用 `action_name` 表示请求哪个接口

> https://tiantian-fund-api.vercel.app/api/action?action_name={路由名}&{请求的参数}

如基金搜索接口`/fundSearch?m=1&key=11`

在 `vercel` 示例中要改造成: [https://tiantian-fund-api.vercel.app/api/action?action_name=fundSearch&m=1&key=11](https://tiantian-fund-api.vercel.app/api/action?action_name=fundSearch&m=1&key=11)
