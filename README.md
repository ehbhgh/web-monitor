# 1.前端埋点监控
## 1.架构方式
> 采用pnpm+monorepo架构，构建server与web
## 2.构建
### 2.1 装包
> pnpm i
### 2.2 构建
启动服务
> pnpm start:server
启动web服务
> pnpm start:web
打包web服务
> pnpm build:web
## 3.数据上报
> 采用ajax方式也可以采用gif，实际项目采用1*1的gif数据上报

### 3.1 采集类型

1.js执行错误/promise执行错误

2.白屏监测

3.性能监控（包含FP, FMP, LCP, FCP, DCL等）

4.网络请求错误

5.pv、uv、用户访问页面次数等

### 3.2构建数据结构

``` json
    {
      "timestamp": 1731483209208,
      "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
      "title": "监控-白屏错误",
      "kind": "stability",
      "type": "blankScreen",
      "errorType": "blankScreenError",
      "emptyPoints": 18,
      "screen": "1920X1080",
      "viewPoint": "845X1012",
      "selector": "html",
      "id": "1adb150c-731d-404b-96ab-ccb9ca03f92d"
    }
```

## 4.数据存储
> 因为是本地模拟采用数据读写的方式，后面会采用mangodb

存储在server/src/db下
