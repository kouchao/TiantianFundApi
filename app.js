const koa = require('koa')
const Router = require('@koa/router')
const glob = require("glob")
const routes = require('./routes/index.js')

const app = new koa()

const router = new Router()

const files = glob.sync("./module/*.js")
files.forEach(path => {
  const fileName = path.replace('./module/', '').replace('.js', '')
  const routerPath = `/${fileName}`
  const api = require(path)
  console.log(`✅ 生成路由(文件) ${routerPath}`)

  router.get(routerPath, async (ctx, next) => {
    ctx.status = 200
    ctx.body = await api(ctx.request.query)
    next()
  })
})

routes(router)

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('🚀 server is running at port 3000')
})
