// yarn add koa
// 引入koa
// 引入koa 新一代的node.js 网站开发框架
const Koa = require('koa')
// 路由
const route = require('koa-route')
const fs = require('fs')
// 一个web server 就好像一个app
const app = new Koa()
// 监听3000端口 启动服务器
// web服务就是一个基于http协议的服务 
// 用户访问-执行-返回结果（页面）
// 基于http协议 koa要做的是响应用户请求
// 用户通过url访问
// main 中间件 请求到返回结果之间，有n个中间件
// 一切皆资源
const main = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./index.html')
}
const about = ctx => {
    ctx.response.type = 'html'
    // ctx.response.body = '<a href="/">Index Page</a>'
    ctx.response.body = fs.createReadStream('./about.html')
}
app.use(route.get('/', main))
app.use(route.get('/about', about))
// app.use(main)
app.listen(3000)