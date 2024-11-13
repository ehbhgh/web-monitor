
import getLastEvent from "../utils/getLastEvent"
import { getSelector } from "../utils/getSelector"
import tracker from "../utils/tracker"
export function injectJsError() {
    //监听全局未捕获的错误
    window.addEventListener("error", (event) => {
        const lastEvent = getLastEvent()
        // 判断是否是资源加载错误
        if (event.target && (event.target instanceof HTMLScriptElement ||
                             event.target instanceof HTMLLinkElement ||
                             event.target instanceof HTMLImageElement)) {
            tracker.send("/jsErrorLog/addition", {
                title:"监控-资源加载错误",
                kind: "stability",         // 监控指标大类
                type: "error",             // 小类型，资源加载错误
                errorType: "resourceError",// 资源加载错误
                message: `${event.target.tagName} resource load error`, // 错误信息
                filename: event.target.src || event.target.href,        // 出错的资源文件
                position: "0:0",           // 资源加载错误无行列号
                stack: "",                 // 无堆栈信息
                selector: getSelector(event.target)
            })
        } else {
            // JS 执行错误
            tracker.send("/jsErrorLog/addition", {
                title:"监控-js执行错误",
                kind: "stability",         // 监控指标大类
                type: "error",             // 小类型，js错误
                errorType: "jsError",      // JS 执行错误
                message: event.message,    // 错误信息
                filename: event.filename,  // 报错文件
                position: `${event.lineno}:${event.colno}`, // 报错位置
                stack: getLines(event?.error?.stack),       // 堆栈信息
                selector: lastEvent ? getSelector(lastEvent) : ""      // 最后一个操作的元素
            })
        }
    }, true)


    window.addEventListener("unhandledrejection", (event) => {
        //获取最后一个交互事件
        const lastEvent = getLastEvent()
        let message
        let reason = event.reason
        let filename
        let line = 0
        let column = 0
        let stack = ""
        if (typeof reason == "string") {
            message = reason
        }
        //说明是一个错误对象
        else if (typeof reason == "object") {
            if (reason.stack) {
                let matchResult = reason.stack.match(/at\s+(.+):(\d+):(\d+)/)
                filename = matchResult[1]
                line = matchResult[2]
                column = matchResult[3]
            }
            stack = getLines(reason.stack)
            message = reason.stack.message
        }
        tracker.send("/jsErrorLog/addition", {
            title:"监控-promise错误",
            kind: "stability",//监控指标大类
            type: "error",//小类型,js报错
            errorType: "promiseError",//promise执行错误
            //报错信息
            message,
            //哪个文件报错
            filename,
            //报错位置
            position: `${line}:${column}`,
            //堆栈信息
            stack,
            //最后一个操作的元素
            selector: lastEvent ? getSelector(lastEvent) : ""
        })
    })
    function getLines(stack) {
        return stack.split("\n").slice(1).map(item => item.replace(/^\s+at\s+/g, " ")).join("^")
    }

}