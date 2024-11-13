import tracker from "../utils/tracker";
import onload from "../utils/onload";

export function timeMonitor() {
    onload(function () {
      
        setTimeout(() => {
            const [navigationEntry] = performance.getEntriesByType('navigation');
            if (navigationEntry) {
                const {
                    fetchStart,
                    connectStart,
                    connectEnd,
                    requestStart,
                    responseStart,
                    responseEnd,
                    domInteractive,
                    domContentLoadedEventStart,
                    domContentLoadedEventEnd,
                    loadEventStart,
                } = navigationEntry;
                // 发送保留两位小数的性能数据
                tracker.send("/jsErrorLog/addition", {
                    title:"监控-性能指标",
                    kind: "experience", // 监控指标大类
                    type: "timing", // 统计每个阶段时间
                    // 连接时间
                    connectTime: (connectEnd - connectStart).toFixed(2),
                    // 首字节到达时间
                    ttfb: (responseEnd - requestStart).toFixed(2),
                    // 响应读取时间
                    responseTime: (responseEnd - responseStart).toFixed(2),
                    // DOM 解析时间
                    parseDOMTime: (domInteractive - responseEnd).toFixed(2),
                    // DOMContentLoaded 事件时间
                    domContentLoadedTime: (domContentLoadedEventEnd - domContentLoadedEventStart).toFixed(2),
                    // 首次可交互时间
                    timeTodomInteractiveTime: (domInteractive - fetchStart).toFixed(2),
                    // 完整的加载时间
                    loadTime: (loadEventStart - fetchStart).toFixed(2),
                });
            } else {
                console.warn('PerformanceNavigationTiming 不支持');

            }
        }, 3000);
    });
}
