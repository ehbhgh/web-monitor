/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _monitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitor */ \"./src/monitor/index.js\");\n\r\n\n\n//# sourceURL=webpack://web/./src/index.js?");

/***/ }),

/***/ "./src/monitor/index.js":
/*!******************************!*\
  !*** ./src/monitor/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs_jsError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/jsError */ \"./src/monitor/libs/jsError.js\");\n/* harmony import */ var _libs_requestError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/requestError */ \"./src/monitor/libs/requestError.js\");\n/* harmony import */ var _libs_blankScreenError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/blankScreenError */ \"./src/monitor/libs/blankScreenError.js\");\n/* harmony import */ var _libs_timeMonitor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/timeMonitor */ \"./src/monitor/libs/timeMonitor.js\");\n/* harmony import */ var _libs_performanceMonitor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/performanceMonitor */ \"./src/monitor/libs/performanceMonitor.js\");\n/* harmony import */ var _libs_pvUvMonitor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./libs/pvUvMonitor */ \"./src/monitor/libs/pvUvMonitor.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_libs_jsError__WEBPACK_IMPORTED_MODULE_0__.injectJsError)()\r\n\r\n;(0,_libs_requestError__WEBPACK_IMPORTED_MODULE_1__.injectXHR)()\r\n\r\n;(0,_libs_blankScreenError__WEBPACK_IMPORTED_MODULE_2__.blankScreen)()\r\n\r\n;(0,_libs_timeMonitor__WEBPACK_IMPORTED_MODULE_3__.timeMonitor)()\r\n\r\n;(0,_libs_performanceMonitor__WEBPACK_IMPORTED_MODULE_4__.performanceMonitor)()\r\n\r\n;(0,_libs_pvUvMonitor__WEBPACK_IMPORTED_MODULE_5__.userActivityMonitor)()\n\n//# sourceURL=webpack://web/./src/monitor/index.js?");

/***/ }),

/***/ "./src/monitor/libs/blankScreenError.js":
/*!**********************************************!*\
  !*** ./src/monitor/libs/blankScreenError.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   blankScreen: () => (/* binding */ blankScreen)\n/* harmony export */ });\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n/* harmony import */ var _utils_onload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/onload */ \"./src/monitor/utils/onload.js\");\n\r\n\r\n\r\nfunction blankScreen() {\r\n    const wrapperElements = [\"html\", \"body\", \"#container\", \".content\"]\r\n    let emptyPoints = 0\r\n    function getSelector(ele) {\r\n        if (ele.id) {\r\n            return `#${ele.id}`\r\n        }\r\n        else if (ele.className) {\r\n            const className = ele.className.split(\" \").filter(item => !!item).join(\".\")\r\n            return `.${className}`\r\n        }\r\n        else {\r\n            return ele.nodeName.toLowerCase()\r\n        }\r\n    }\r\n    function isWrapper(element) {\r\n      \r\n        \r\n        let selector = getSelector(element)\r\n        if (wrapperElements.indexOf(selector) !== -1) {\r\n            emptyPoints++\r\n        }\r\n    }\r\n    (0,_utils_onload__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(){\r\n        for (let i = 1; i <= 9; i++) {\r\n            let xElements = document.elementFromPoint(window.innerWidth * i / 10, innerHeight / 2)\r\n            let yElements = document.elementFromPoint(window.innerWidth / 2, innerHeight * i / 10)\r\n      \r\n            isWrapper(xElements)\r\n            isWrapper(yElements)\r\n        }\r\n        \r\n        if (emptyPoints >=18) {\r\n            let centerElem = document.elementFromPoint(\r\n                window.innerWidth / 2, window.innerHeight / 2\r\n            )\r\n            _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send(\"/jsErrorLog/addition\", {\r\n                title:\"监控-白屏错误\",\r\n                kind: \"stability\",         // 监控指标大类\r\n                type: \"blankScreen\",             // 小类型，js错误\r\n                errorType: \"blankScreenError\",      //白屏错误\r\n                emptyPoints,\r\n                screen: window.screen.width + \"X\" + window.screen.height,\r\n                viewPoint: window.innerWidth +\"X\" + window.innerHeight,\r\n                selector: getSelector(centerElem)\r\n            })\r\n        }\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack://web/./src/monitor/libs/blankScreenError.js?");

/***/ }),

/***/ "./src/monitor/libs/jsError.js":
/*!*************************************!*\
  !*** ./src/monitor/libs/jsError.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   injectJsError: () => (/* binding */ injectJsError)\n/* harmony export */ });\n/* harmony import */ var _utils_getLastEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getLastEvent */ \"./src/monitor/utils/getLastEvent.js\");\n/* harmony import */ var _utils_getSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getSelector */ \"./src/monitor/utils/getSelector.js\");\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n\r\n\r\n\r\n\r\nfunction injectJsError() {\r\n    //监听全局未捕获的错误\r\n    window.addEventListener(\"error\", (event) => {\r\n        const lastEvent = (0,_utils_getLastEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n        // 判断是否是资源加载错误\r\n        if (event.target && (event.target instanceof HTMLScriptElement ||\r\n                             event.target instanceof HTMLLinkElement ||\r\n                             event.target instanceof HTMLImageElement)) {\r\n            _utils_tracker__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send(\"/jsErrorLog/addition\", {\r\n                title:\"监控-资源加载错误\",\r\n                kind: \"stability\",         // 监控指标大类\r\n                type: \"error\",             // 小类型，资源加载错误\r\n                errorType: \"resourceError\",// 资源加载错误\r\n                message: `${event.target.tagName} resource load error`, // 错误信息\r\n                filename: event.target.src || event.target.href,        // 出错的资源文件\r\n                position: \"0:0\",           // 资源加载错误无行列号\r\n                stack: \"\",                 // 无堆栈信息\r\n                selector: (0,_utils_getSelector__WEBPACK_IMPORTED_MODULE_1__.getSelector)(event.target)\r\n            })\r\n        } else {\r\n            // JS 执行错误\r\n            _utils_tracker__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send(\"/jsErrorLog/addition\", {\r\n                title:\"监控-js执行错误\",\r\n                kind: \"stability\",         // 监控指标大类\r\n                type: \"error\",             // 小类型，js错误\r\n                errorType: \"jsError\",      // JS 执行错误\r\n                message: event.message,    // 错误信息\r\n                filename: event.filename,  // 报错文件\r\n                position: `${event.lineno}:${event.colno}`, // 报错位置\r\n                stack: getLines(event?.error?.stack),       // 堆栈信息\r\n                selector: lastEvent ? (0,_utils_getSelector__WEBPACK_IMPORTED_MODULE_1__.getSelector)(lastEvent) : \"\"      // 最后一个操作的元素\r\n            })\r\n        }\r\n    }, true)\r\n\r\n\r\n    window.addEventListener(\"unhandledrejection\", (event) => {\r\n        //获取最后一个交互事件\r\n        const lastEvent = (0,_utils_getLastEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n        let message\r\n        let reason = event.reason\r\n        let filename\r\n        let line = 0\r\n        let column = 0\r\n        let stack = \"\"\r\n        if (typeof reason == \"string\") {\r\n            message = reason\r\n        }\r\n        //说明是一个错误对象\r\n        else if (typeof reason == \"object\") {\r\n            if (reason.stack) {\r\n                let matchResult = reason.stack.match(/at\\s+(.+):(\\d+):(\\d+)/)\r\n                filename = matchResult[1]\r\n                line = matchResult[2]\r\n                column = matchResult[3]\r\n            }\r\n            stack = getLines(reason.stack)\r\n            message = reason.stack.message\r\n        }\r\n        _utils_tracker__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send(\"/jsErrorLog/addition\", {\r\n            title:\"监控-promise错误\",\r\n            kind: \"stability\",//监控指标大类\r\n            type: \"error\",//小类型,js报错\r\n            errorType: \"promiseError\",//promise执行错误\r\n            //报错信息\r\n            message,\r\n            //哪个文件报错\r\n            filename,\r\n            //报错位置\r\n            position: `${line}:${column}`,\r\n            //堆栈信息\r\n            stack,\r\n            //最后一个操作的元素\r\n            selector: lastEvent ? (0,_utils_getSelector__WEBPACK_IMPORTED_MODULE_1__.getSelector)(lastEvent) : \"\"\r\n        })\r\n    })\r\n    function getLines(stack) {\r\n        return stack.split(\"\\n\").slice(1).map(item => item.replace(/^\\s+at\\s+/g, \" \")).join(\"^\")\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://web/./src/monitor/libs/jsError.js?");

/***/ }),

/***/ "./src/monitor/libs/performanceMonitor.js":
/*!************************************************!*\
  !*** ./src/monitor/libs/performanceMonitor.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   performanceMonitor: () => (/* binding */ performanceMonitor)\n/* harmony export */ });\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n/* harmony import */ var _utils_onload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/onload */ \"./src/monitor/utils/onload.js\");\n\r\n\r\n\r\nfunction performanceMonitor() {\r\n    (0,_utils_onload__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\r\n        let FP, FMP, LCP, FCP, DCL;\r\n        const data = {};  // 用来存储各个性能指标的时间\r\n        FP = performance.getEntriesByType('paint').filter(entry => entry.name == 'first-paint')[0].startTime;\r\n        FCP = performance.getEntriesByType('paint').filter(entry => entry.name == 'first-contentful-paint')[0].startTime;\r\n\r\n        // 获取 DCL 时间\r\n        const dclEntry = performance.getEntriesByType('navigation')[0];\r\n        DCL = dclEntry.domContentLoadedEventEnd - dclEntry.startTime;\r\n\r\n        // 创建 PerformanceObserver 观察所有绘制类型\r\n        if ('PerformanceObserver' in window) {\r\n            const observer = new PerformanceObserver((list) => {\r\n                const entries = list.getEntries();\r\n                entries.forEach(entry => {\r\n                    if (entry.entryType === 'largest-contentful-paint' && !data.LCP) {\r\n                        LCP = entry.startTime;\r\n                        data.LCP = LCP;  // 设置标志，防止再次记录\r\n                    }\r\n                    if (entry.name === 'first-contentful-paint' && !data.FMP) {\r\n                        FMP = entry.startTime;\r\n                        data.FMP = FMP;  // 设置标志，防止再次记录\r\n                    }\r\n                });\r\n            });\r\n\r\n            // 观察所有绘制类型\r\n            observer.observe({ type: 'paint', buffered: true });\r\n            observer.observe({ type: 'largest-contentful-paint', buffered: true });\r\n\r\n            // 发送性能数据\r\n            setTimeout(() => {\r\n                _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send(\"/jsErrorLog/addition\", {\r\n                    title:\"监控-性能指标LCP-FP--\",\r\n                    kind: \"experience\",\r\n                    type: \"paint\",\r\n                    FMP:FMP.toFixed(2),  // 首次有意义绘制时间\r\n                    LCP:LCP.toFixed(2),  // 最大内容绘制时间\r\n                    FP:FP.toFixed(2),   // 首次绘制时间\r\n                    FCP:FCP.toFixed(2),  // 首次内容绘制时间\r\n                    DCL:DCL.toFixed(2)   // DOMContentLoaded 时间\r\n                });\r\n            }, 2000);\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://web/./src/monitor/libs/performanceMonitor.js?");

/***/ }),

/***/ "./src/monitor/libs/pvUvMonitor.js":
/*!*****************************************!*\
  !*** ./src/monitor/libs/pvUvMonitor.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   userActivityMonitor: () => (/* binding */ userActivityMonitor)\n/* harmony export */ });\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n/* harmony import */ var _utils_onload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/onload */ \"./src/monitor/utils/onload.js\");\n/* harmony import */ var _utils_generateUniqueUserId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/generateUniqueUserId */ \"./src/monitor/utils/generateUniqueUserId.js\");\n\r\n\r\n\r\n\r\nfunction userActivityMonitor() {\r\n    // 存储 PV 和 UV 数据\r\n    let pvCount = 0;\r\n    let uvCount = 0;\r\n    let stayDuration = 0; // 页面停留时间，单位为秒\r\n    const userId = localStorage.getItem('userId') || (0,_utils_generateUniqueUserId__WEBPACK_IMPORTED_MODULE_2__.generateUniqueUserId)();\r\n    localStorage.setItem('userId', userId);  // 存储用户 ID 用于识别 UV（独立访客）\r\n\r\n    // 获取用户的 UV（通过检查用户是否存在于 localStorage）\r\n    if (!localStorage.getItem('hasVisited')) {\r\n        uvCount = 1;  // 新用户\r\n        localStorage.setItem('hasVisited', 'true');\r\n    } else {\r\n        uvCount = 0;  // 已经访问过的用户\r\n    }\r\n\r\n    // 获取 PV：每次页面访问时，增加计数\r\n    pvCount = parseInt(localStorage.getItem('pvCount') || '0') + 1;\r\n    localStorage.setItem('pvCount', pvCount);\r\n\r\n    // 记录页面停留时间\r\n    const pageStartTime = Date.now();  // 页面加载时的时间戳\r\n    window.addEventListener('beforeunload', () => {\r\n        const pageEndTime = Date.now();  // 页面卸载时的时间戳\r\n        stayDuration = (pageEndTime - pageStartTime) / 1000;  // 页面停留时间（秒）\r\n    });\r\n\r\n    (0,_utils_onload__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\r\n        setTimeout(() => {\r\n            _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send(\"/jsErrorLog/addition\", {\r\n                title: \"监控-PV-UV\",\r\n                kind: \"metrics\", // 监控指标大类\r\n                type: \"userActivity\", // 小类型，js 报错\r\n                userId,\r\n                pv: pvCount,\r\n                uv: uvCount,\r\n                stayDuration: stayDuration && \"0\"\r\n            });\r\n        }, 1000)\r\n    })\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://web/./src/monitor/libs/pvUvMonitor.js?");

/***/ }),

/***/ "./src/monitor/libs/requestError.js":
/*!******************************************!*\
  !*** ./src/monitor/libs/requestError.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   injectXHR: () => (/* binding */ injectXHR)\n/* harmony export */ });\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n\r\n\r\nfunction injectXHR() {\r\n    let XMLHttpRequest = window.XMLHttpRequest;\r\n    let oldOpen = XMLHttpRequest.prototype.open;\r\n    let oldSend = XMLHttpRequest.prototype.send;\r\n\r\n    XMLHttpRequest.prototype.open = function (method, url, async) {\r\n        if (!url.match(/logstores/) && !url.match(/sockjs/)) {\r\n            this.logData = {\r\n                method, url, async\r\n            };\r\n        }\r\n        return oldOpen.apply(this, arguments);\r\n    };\r\n\r\n    XMLHttpRequest.prototype.send = function (body) {\r\n        if (this.logData) {\r\n            let startTime = Date.now();\r\n            let handler = (type) => (event) => {\r\n                let duration = Date.now() - startTime;\r\n                let status = this.status;\r\n                let statusText = this.statusText;\r\n                // 根据 responseType 判断如何获取响应内容\r\n                let responseContent = this.responseType === 'json' ? JSON.stringify(this.response) : \"\";\r\n                _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send(\"/jsErrorLog/addition\", {\r\n                    title:\"监控-网络请求错误\",\r\n                    kind: \"stability\", // 监控指标大类\r\n                    type: \"xhr\", // 小类型，js 报错\r\n                    errorType: type, // 错误类型\r\n                    pathname: this.logData.url, // 请求路径\r\n                    status: `${status}-${statusText}`, // 状态码\r\n                    duration: duration, // 持续时间\r\n                    response: responseContent, // 响应内容\r\n                    params: body || \"\" // 请求参数\r\n                });\r\n            };\r\n\r\n            this.addEventListener('load', handler('load'), false);\r\n            this.addEventListener('error', handler('error'), false);\r\n            this.addEventListener('abort', handler('abort'), false); // 将 'about' 改为 'abort'\r\n        }\r\n        return oldSend.apply(this, arguments);\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack://web/./src/monitor/libs/requestError.js?");

/***/ }),

/***/ "./src/monitor/libs/timeMonitor.js":
/*!*****************************************!*\
  !*** ./src/monitor/libs/timeMonitor.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   timeMonitor: () => (/* binding */ timeMonitor)\n/* harmony export */ });\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n/* harmony import */ var _utils_onload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/onload */ \"./src/monitor/utils/onload.js\");\n\r\n\r\n\r\nfunction timeMonitor() {\r\n    (0,_utils_onload__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\r\n      \r\n        setTimeout(() => {\r\n            const [navigationEntry] = performance.getEntriesByType('navigation');\r\n            if (navigationEntry) {\r\n                const {\r\n                    fetchStart,\r\n                    connectStart,\r\n                    connectEnd,\r\n                    requestStart,\r\n                    responseStart,\r\n                    responseEnd,\r\n                    domInteractive,\r\n                    domContentLoadedEventStart,\r\n                    domContentLoadedEventEnd,\r\n                    loadEventStart,\r\n                } = navigationEntry;\r\n                // 发送保留两位小数的性能数据\r\n                _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send(\"/jsErrorLog/addition\", {\r\n                    title:\"监控-性能指标\",\r\n                    kind: \"experience\", // 监控指标大类\r\n                    type: \"timing\", // 统计每个阶段时间\r\n                    // 连接时间\r\n                    connectTime: (connectEnd - connectStart).toFixed(2),\r\n                    // 首字节到达时间\r\n                    ttfb: (responseEnd - requestStart).toFixed(2),\r\n                    // 响应读取时间\r\n                    responseTime: (responseEnd - responseStart).toFixed(2),\r\n                    // DOM 解析时间\r\n                    parseDOMTime: (domInteractive - responseEnd).toFixed(2),\r\n                    // DOMContentLoaded 事件时间\r\n                    domContentLoadedTime: (domContentLoadedEventEnd - domContentLoadedEventStart).toFixed(2),\r\n                    // 首次可交互时间\r\n                    timeTodomInteractiveTime: (domInteractive - fetchStart).toFixed(2),\r\n                    // 完整的加载时间\r\n                    loadTime: (loadEventStart - fetchStart).toFixed(2),\r\n                });\r\n            } else {\r\n                console.warn('PerformanceNavigationTiming 不支持');\r\n\r\n            }\r\n        }, 3000);\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://web/./src/monitor/libs/timeMonitor.js?");

/***/ }),

/***/ "./src/monitor/utils/generateUniqueUserId.js":
/*!***************************************************!*\
  !*** ./src/monitor/utils/generateUniqueUserId.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateUniqueUserId: () => (/* binding */ generateUniqueUserId)\n/* harmony export */ });\nfunction generateUniqueUserId(){\r\n    return 'user-' + Math.random().toString(36).substr(2, 9);  // 简单的随机 ID\r\n}\n\n//# sourceURL=webpack://web/./src/monitor/utils/generateUniqueUserId.js?");

/***/ }),

/***/ "./src/monitor/utils/getLastEvent.js":
/*!*******************************************!*\
  !*** ./src/monitor/utils/getLastEvent.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet lastEvent;\r\n[\"click\",\"touchstart\",\"mousedown\",\"keydown\",\"mouseover\"].forEach(eventType=>{\r\n    document.addEventListener(eventType,(event)=>{\r\n        lastEvent=event\r\n    },{\r\n        //捕获阶段执行\r\n        capture:true,\r\n        //默认不阻止默认事件\r\n        passive:true\r\n    })\r\n\r\n})\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n    if (!lastEvent) return null;\r\n    // 优先使用 composedPath 方法获取路径\r\n    let path = lastEvent.composedPath ? lastEvent.composedPath() : lastEvent.path;\r\n    if (path.length === 0) {\r\n        let element = lastEvent.target;\r\n        path = [];\r\n        while (element) {\r\n            path.push(element);\r\n            element = element.parentElement;\r\n        }\r\n    }\r\n   \r\n    return path || [];\r\n}\n\n//# sourceURL=webpack://web/./src/monitor/utils/getLastEvent.js?");

/***/ }),

/***/ "./src/monitor/utils/getSelector.js":
/*!******************************************!*\
  !*** ./src/monitor/utils/getSelector.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSelector: () => (/* binding */ getSelector)\n/* harmony export */ });\nfunction getSelector (path) {\r\n    if (path && Array.isArray(path)) {\r\n        return getSelectors(path)\r\n    }\r\n    else{\r\n        let pathList=[]\r\n        if(path){\r\n            pathList.push(path)\r\n            path=path.parentNode\r\n        }\r\n        return getSelectors(pathList)\r\n\r\n    }\r\n}\r\nfunction getSelectors(path) {\r\n    return path.reverse().filter(ele => {\r\n        return ele !== document && ele !== window\r\n    }).map(ele => {\r\n        let selector = \"\"\r\n        if (ele.id) {\r\n            selector = `${ele.nodeName.toLowerCase()}#${ele.id}`\r\n        }\r\n        else if (ele.className && typeof ele.className === \"string\") {\r\n            selector = `${ele.nodeName.toLowerCase()}.${ele.className}`\r\n\r\n        }\r\n        else {\r\n            selector = ele.nodeName.toLowerCase()\r\n        }\r\n        return selector\r\n    }).join(\" \")\r\n}\n\n//# sourceURL=webpack://web/./src/monitor/utils/getSelector.js?");

/***/ }),

/***/ "./src/monitor/utils/onload.js":
/*!*************************************!*\
  !*** ./src/monitor/utils/onload.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((callback) => {\r\n    if (document.readyState === \"complete\") {\r\n        callback && callback()\r\n    }\r\n    else {\r\n        window.addEventListener(\"load\", callback)\r\n    }\r\n});\n\n//# sourceURL=webpack://web/./src/monitor/utils/onload.js?");

/***/ }),

/***/ "./src/monitor/utils/tracker.js":
/*!**************************************!*\
  !*** ./src/monitor/utils/tracker.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// 直接使用浏览器内置的 navigator.userAgent\r\nfunction getExtraData() {\r\n    return {\r\n        url: location.url,  // location.url 应改为 location.href\r\n        timestamp: Date.now(),\r\n        userAgent: navigator.userAgent  // 直接使用浏览器自带的 userAgent\r\n    };\r\n}\r\n\r\nclass SendTracker {\r\n    constructor() {\r\n        this.url = 'http://localhost:3200';\r\n    }\r\n\r\n    // 使用 async/await 优化 send 方法\r\n    async send(path, data) {\r\n        try {\r\n            const extraData = getExtraData();\r\n            const log = { ...extraData, ...data };\r\n            const body = JSON.stringify(log);\r\n\r\n            // 使用 fetch 代替 XMLHttpRequest\r\n            const response = await fetch(this.url + path, {\r\n                method: 'POST',\r\n                headers: {\r\n                    'Content-Type': 'application/json',\r\n                    'x-log-apiversion': '0.6.0',\r\n                    'x-log-bodyrawsize': body.length,\r\n                },\r\n                body: body\r\n            });\r\n\r\n            // 可以根据响应的状态进行处理\r\n            if (response.ok) {\r\n                console.log('Request successful:', await response.json());\r\n            } else {\r\n                console.error('Request failed:', response.statusText);\r\n            }\r\n        } catch (error) {\r\n            console.error('Error during request:', error);\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new SendTracker());\r\n\n\n//# sourceURL=webpack://web/./src/monitor/utils/tracker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;