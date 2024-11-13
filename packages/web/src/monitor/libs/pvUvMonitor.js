
import tracker from "../utils/tracker";
import onload from "../utils/onload";
import { generateUniqueUserId } from "../utils/generateUniqueUserId"
export function userActivityMonitor() {
    // 存储 PV 和 UV 数据
    let pvCount = 0;
    let uvCount = 0;
    let stayDuration = 0; // 页面停留时间，单位为秒
    const userId = localStorage.getItem('userId') || generateUniqueUserId();
    localStorage.setItem('userId', userId);  // 存储用户 ID 用于识别 UV（独立访客）

    // 获取用户的 UV（通过检查用户是否存在于 localStorage）
    if (!localStorage.getItem('hasVisited')) {
        uvCount = 1;  // 新用户
        localStorage.setItem('hasVisited', 'true');
    } else {
        uvCount = 0;  // 已经访问过的用户
    }

    // 获取 PV：每次页面访问时，增加计数
    pvCount = parseInt(localStorage.getItem('pvCount') || '0') + 1;
    localStorage.setItem('pvCount', pvCount);

    // 记录页面停留时间
    const pageStartTime = Date.now();  // 页面加载时的时间戳
    window.addEventListener('beforeunload', () => {
        const pageEndTime = Date.now();  // 页面卸载时的时间戳
        stayDuration = (pageEndTime - pageStartTime) / 1000;  // 页面停留时间（秒）
    });

    onload(function () {
        setTimeout(() => {
            tracker.send("/jsErrorLog/addition", {
                title: "监控-PV-UV",
                kind: "metrics", // 监控指标大类
                type: "userActivity", // 小类型，js 报错
                userId,
                pv: pvCount,
                uv: uvCount,
                stayDuration: stayDuration && "0"
            });
        }, 1000)
    })

}

