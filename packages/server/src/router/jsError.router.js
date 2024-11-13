const Router = require('koa-router');
const router = new Router();
const jsErrorLog = require("../controller/jsError.controller.js")
router.post("/jsErrorLog/addition", async (ctx, next) => {
    // 这里可以调用控制器函数，传递 ctx 处理请求数据
    await jsErrorLog.additionJsLogs(ctx,next);

});

module.exports = router