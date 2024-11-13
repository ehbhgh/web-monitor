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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _monitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitor */ \"./src/monitor/index.js\");\n\r\n\n\n//# sourceURL=webpack://monitor/./src/index.js?");

/***/ }),

/***/ "./src/monitor/index.js":
/*!******************************!*\
  !*** ./src/monitor/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs_jsError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/jsError */ \"./src/monitor/libs/jsError.js\");\n\r\n(0,_libs_jsError__WEBPACK_IMPORTED_MODULE_0__.injectJsError)()\n\n//# sourceURL=webpack://monitor/./src/monitor/index.js?");

/***/ }),

/***/ "./src/monitor/libs/jsError.js":
/*!*************************************!*\
  !*** ./src/monitor/libs/jsError.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   injectJsError: () => (/* binding */ injectJsError)\n/* harmony export */ });\n/* harmony import */ var _utils_getLastEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getLastEvent */ \"./src/monitor/utils/getLastEvent.js\");\n/* harmony import */ var _utils_getSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getSelector */ \"./src/monitor/utils/getSelector.js\");\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n\r\n\r\n\r\n\r\nfunction injectJsError() {\r\n    //监听全局未捕获的错误\r\n    window.addEventListener(\"error\", (event) => {\r\n        //获取最后一个交互事件\r\n        const lastEvent = (0,_utils_getLastEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n        //拿到错误事件对象\r\n        const log = {\r\n            kind: \"stability\",//监控指标大类\r\n            type: \"error\",//小类型,js报错\r\n            errorType: \"jsError\",//JS执行错误\r\n            //错误对应的地址，访问哪个路径报错\r\n            url: \"\",\r\n            //报错信息\r\n            message: event.message,\r\n            //哪个文件报错\r\n            filename: event.filename,\r\n            //报错位置\r\n            position: `${event.lineno}:${event.colno}`,\r\n            //堆栈信息\r\n            stack: getLines(event?.error?.stack),\r\n            //最后一个操作的元素\r\n            selector: lastEvent ? (0,_utils_getSelector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lastEvent) : \"\"\r\n        }\r\n\r\n        \r\n        //上报数据\r\n        _utils_tracker__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send(\"/jsErrorLog/addition\", log)\r\n    })\r\n\r\n    function getLines(stack) {\r\n\r\n        return stack.split(\"\\n\").slice(1).map(item => item.replace(/^\\s+at\\s+/g, \" \")).join(\"^\")\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://monitor/./src/monitor/libs/jsError.js?");

/***/ }),

/***/ "./src/monitor/utils/getLastEvent.js":
/*!*******************************************!*\
  !*** ./src/monitor/utils/getLastEvent.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet lastEvent;\r\n[\"click\",\"touchstart\",\"mousedown\",\"keydown\",\"mouseover\"].forEach(eventType=>{\r\n    document.addEventListener(eventType,(event)=>{\r\n        lastEvent=event\r\n    },{\r\n        //捕获阶段执行\r\n        capture:true,\r\n        //默认不阻止默认事件\r\n        passive:true\r\n    })\r\n\r\n})\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n    if (!lastEvent) return null;\r\n    // 优先使用 composedPath 方法获取路径\r\n    const path = lastEvent.composedPath ? lastEvent.composedPath() : lastEvent.path;\r\n    return path || [];\r\n}\n\n//# sourceURL=webpack://monitor/./src/monitor/utils/getLastEvent.js?");

/***/ }),

/***/ "./src/monitor/utils/getSelector.js":
/*!******************************************!*\
  !*** ./src/monitor/utils/getSelector.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(path) {\r\n    if (path && Array.isArray(path)) {\r\n        return getSelectors(path)\r\n    }\r\n}\r\nfunction getSelectors(path) {\r\n    return path.reverse().filter(ele => {\r\n        return ele !== document && ele !== window\r\n    }).map(ele => {\r\n        let selector = \"\"\r\n        if (ele.id) {\r\n            selector = `${ele.nodeName.toLowerCase()}#${ele.id}`\r\n        }\r\n        else if (ele.className && typeof ele.className === \"string\") {\r\n            selector = `${ele.nodeName.toLowerCase()}.${ele.className}`\r\n\r\n        }\r\n        else {\r\n            selector = ele.nodeName.toLowerCase()\r\n        }\r\n        return selector\r\n    }).join(\" \")\r\n}\n\n//# sourceURL=webpack://monitor/./src/monitor/utils/getSelector.js?");

/***/ }),

/***/ "./src/monitor/utils/tracker.js":
/*!**************************************!*\
  !*** ./src/monitor/utils/tracker.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// 直接使用浏览器内置的 navigator.userAgent\r\nfunction getExtraData() {\r\n    return {\r\n        title: document.title,\r\n        url: location.href,  // location.url 应改为 location.href\r\n        timestamp: Date.now(),\r\n        userAgent: navigator.userAgent  // 直接使用浏览器自带的 userAgent\r\n    };\r\n}\r\n\r\nclass SendTracker {\r\n    constructor() {\r\n        this.url = 'http://192.168.88.211:3200';\r\n    }\r\n\r\n    // 使用 async/await 优化 send 方法\r\n    async send(path, data) {\r\n        try {\r\n            const extraData = getExtraData();\r\n            const log = { ...extraData, ...data };\r\n            const body = JSON.stringify(log);\r\n\r\n            // 使用 fetch 代替 XMLHttpRequest\r\n            const response = await fetch(this.url + path, {\r\n                method: 'POST',\r\n                headers: {\r\n                    'Content-Type': 'application/json',\r\n                    'x-log-apiversion': '0.6.0',\r\n                    'x-log-bodyrawsize': body.length,\r\n                },\r\n                body: body\r\n            });\r\n\r\n            // 可以根据响应的状态进行处理\r\n            if (response.ok) {\r\n                console.log('Request successful:', await response.json());\r\n            } else {\r\n                console.error('Request failed:', response.statusText);\r\n            }\r\n        } catch (error) {\r\n            console.error('Error during request:', error);\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new SendTracker());\r\n\n\n//# sourceURL=webpack://monitor/./src/monitor/utils/tracker.js?");

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