const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
const { promisify } = require("util");
const path = require("path");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const isJsonString = require("../utils/isJsonString");
const lockFile = require('proper-lockfile');

class JsErrorLog {
    // js报错日志写入
    async additionJsLogs(ctx, next) {
        const data = ctx.request.body;
        const filePath = path.resolve(__dirname, '../db/jsError.json');
        try {
            // 加锁文件，设置超时（例如 5000 毫秒），如果不能获取锁会抛出错误
            await lockFile.lock(filePath, { retries: 5, retryWait: 200 });

            // 读取当前的 jsError.json 文件内容
            let fileContent = await readFile(filePath, "utf-8");

            // 检查文件内容是否为有效 JSON
            if (!isJsonString(fileContent)) {
                console.error("Invalid JSON format in jsError.json");
                ctx.throw(400, "Invalid JSON format in jsError.json");
                return;
            }

            let json = JSON.parse(fileContent);

            // 确保 `json.list` 是数组
            if (!Array.isArray(json.list)) {
                json.list = [];
            }

            // 给数据添加一个唯一 ID
            data.id = uuidv4();

            // 将新数据推入 `list`
            json.list.push(data);

            // 将更新后的内容写回文件
            await writeFile(filePath, JSON.stringify(json, null, 2), "utf-8");

            ctx.body = {
                code: 200,
                msg: "success"
            };

        } catch (error) {
            console.error("Error handling jsError.json file:", error);
            ctx.throw(500, "Internal Server Error");
        } finally {
            try {
                // 解锁文件
                await lockFile.unlock(filePath);
            } catch (unlockError) {
                console.error("Error unlocking file:", unlockError);
            }
        }

        await next();
    }

    // 日志读取
    async queryJsLogs(ctx, next) {
        const filePath = path.resolve(__dirname, '../db/jsError.json');
        try {
            // 加锁文件，设置超时（例如 5000 毫秒）
            await lockFile.lock(filePath, { retries: 5, retryWait: 200 });

            let fileContent = await readFile(filePath, 'utf-8');
            let json = JSON.parse(fileContent);
            ctx.body = {
                code: 200,
                msg: "查询日志成功",
                data: json.list
            };

        } catch (error) {
            console.error("Error reading jsError.json:", error);
            ctx.throw(500, "Internal Server Error");
        } finally {
            try {
                // 解锁文件
                await lockFile.unlock(filePath);
            } catch (unlockError) {
                console.error("Error unlocking file:", unlockError);
            }
        }

        await next();
    }

    // 日志删除
    async deleteJsLogs(ctx, next) {
        const filePath = path.resolve(__dirname, '../db/jsError.json');
        const { id } = ctx.request.body;  // 假设删除时通过 id 来删除
        try {
            // 加锁文件，设置超时（例如 5000 毫秒）
            await lockFile.lock(filePath, { retries: 5, retryWait: 200 });

            let fileContent = await readFile(filePath, 'utf-8');
            let json = JSON.parse(fileContent);

            // 过滤掉删除的日志
            json.list = json.list.filter(log => log.id !== id);

            // 更新文件
            await writeFile(filePath, JSON.stringify(json, null, 2), 'utf-8');
            ctx.body = {
                code: 200,
                msg: "删除日志成功"
            };

        } catch (error) {
            console.error("Error deleting jsError.json:", error);
            ctx.throw(500, "Internal Server Error");
        } finally {
            try {
                // 解锁文件
                await lockFile.unlock(filePath);
            } catch (unlockError) {
                console.error("Error unlocking file:", unlockError);
            }
        }

        await next();
    }
}

module.exports = new JsErrorLog();
