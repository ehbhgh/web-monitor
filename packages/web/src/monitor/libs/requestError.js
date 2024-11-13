import tracker from "../utils/tracker"

export function injectXHR() {
    let XMLHttpRequest = window.XMLHttpRequest;
    let oldOpen = XMLHttpRequest.prototype.open;
    let oldSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function (method, url, async) {
        if (!url.match(/logstores/) && !url.match(/sockjs/)) {
            this.logData = {
                method, url, async
            };
        }
        return oldOpen.apply(this, arguments);
    };

    XMLHttpRequest.prototype.send = function (body) {
        if (this.logData) {
            let startTime = Date.now();
            let handler = (type) => (event) => {
                let duration = Date.now() - startTime;
                let status = this.status;
                let statusText = this.statusText;
                // 根据 responseType 判断如何获取响应内容
                let responseContent = this.responseType === 'json' ? JSON.stringify(this.response) : "";
                tracker.send("/jsErrorLog/addition", {
                    title:"监控-网络请求错误",
                    kind: "stability", // 监控指标大类
                    type: "xhr", // 小类型，js 报错
                    errorType: type, // 错误类型
                    pathname: this.logData.url, // 请求路径
                    status: `${status}-${statusText}`, // 状态码
                    duration: duration, // 持续时间
                    response: responseContent, // 响应内容
                    params: body || "" // 请求参数
                });
            };

            this.addEventListener('load', handler('load'), false);
            this.addEventListener('error', handler('error'), false);
            this.addEventListener('abort', handler('abort'), false); // 将 'about' 改为 'abort'
        }
        return oldSend.apply(this, arguments);
    };
}
