import tracker from "../utils/tracker";
import onload from "../utils/onload";

export function performanceMonitor() {
    onload(function () {
        let FP, FMP, LCP, FCP, DCL;
        const data = {};  // 用来存储各个性能指标的时间
        FP = performance.getEntriesByType('paint').filter(entry => entry.name == 'first-paint')[0].startTime;
        FCP = performance.getEntriesByType('paint').filter(entry => entry.name == 'first-contentful-paint')[0].startTime;

        // 获取 DCL 时间
        const dclEntry = performance.getEntriesByType('navigation')[0];
        DCL = dclEntry.domContentLoadedEventEnd - dclEntry.startTime;

        // 创建 PerformanceObserver 观察所有绘制类型
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    if (entry.entryType === 'largest-contentful-paint' && !data.LCP) {
                        LCP = entry.startTime;
                        data.LCP = LCP;  // 设置标志，防止再次记录
                    }
                    if (entry.name === 'first-contentful-paint' && !data.FMP) {
                        FMP = entry.startTime;
                        data.FMP = FMP;  // 设置标志，防止再次记录
                    }
                });
            });

            // 观察所有绘制类型
            observer.observe({ type: 'paint', buffered: true });
            observer.observe({ type: 'largest-contentful-paint', buffered: true });

            // 发送性能数据
            setTimeout(() => {
                tracker.send("/jsErrorLog/addition", {
                    title:"监控-性能指标LCP-FP--",
                    kind: "experience",
                    type: "paint",
                    FMP:FMP.toFixed(2),  // 首次有意义绘制时间
                    LCP:LCP.toFixed(2),  // 最大内容绘制时间
                    FP:FP.toFixed(2),   // 首次绘制时间
                    FCP:FCP.toFixed(2),  // 首次内容绘制时间
                    DCL:DCL.toFixed(2)   // DOMContentLoaded 时间
                });
            }, 2000);
        }
    });
}
