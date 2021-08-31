const koa = require('koa')
const Router = require('@koa/router')
const glob = require("glob")

const app = new koa()

const router = new Router()

const files = glob.sync("./src/module/*.js")

files.forEach(path => {
  const fileName = path.replace('./src/module/', '').replace('.js', '')
  const routerPath = `/${fileName}`
  const api = require(path.replace('/src', ''))

  console.log(`✅ 生成路由(文件) ${routerPath}`)

  router.get(routerPath, async (ctx, next) => {
    ctx.status = 200
    ctx.body = await api(ctx.request.query)
    next()
  })
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('🚀 server is running at port 3000')
})
