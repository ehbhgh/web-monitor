// 直接使用浏览器内置的 navigator.userAgent
function getExtraData() {
    return {
        url: location.url,  // location.url 应改为 location.href
        timestamp: Date.now(),
        userAgent: navigator.userAgent  // 直接使用浏览器自带的 userAgent
    };
}

class SendTracker {
    constructor() {
        this.url = 'http://localhost:3200';
    }

    // 使用 async/await 优化 send 方法
    async send(path, data) {
        try {
            const extraData = getExtraData();
            const log = { ...extraData, ...data };
            const body = JSON.stringify(log);

            // 使用 fetch 代替 XMLHttpRequest
            const response = await fetch(this.url + path, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-log-apiversion': '0.6.0',
                    'x-log-bodyrawsize': body.length,
                },
                body: body
            });

            // 可以根据响应的状态进行处理
            if (response.ok) {
                console.log('Request successful:', await response.json());
            } else {
                console.error('Request failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error during request:', error);
        }
    }
}

export default new SendTracker();
