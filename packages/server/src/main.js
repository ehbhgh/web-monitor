/*
 * @Description:
 * @Author: Wang Su
 * @Date: 2023-09-16 23:31:37
 * @LastEditors: Wang Su
 * @LastEditTime: 2023-09-21 14:36:46
 */
const Koa = require("koa");
const jsErrorRouter = require("./router/jsError.router.js");
const cors = require("koa-cors");
const bodyParser = require("koa-bodyparser");
const app = new Koa();
//处理跨域问题中间件
app.use(cors());
//处理post参数解析中间件
app.use(bodyParser());
//自定义路由中间件
app.use(jsErrorRouter.routes()).use(jsErrorRouter.allowedMethods());

const port = 3200;
app.listen(port, () => {
  console.log(`3200端口服务启用`);
});
