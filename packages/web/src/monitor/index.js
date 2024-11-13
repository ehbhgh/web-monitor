import { injectJsError } from "./libs/jsError"
import { injectXHR } from "./libs/requestError"
import { blankScreen } from "./libs/blankScreenError"
import { timeMonitor } from "./libs/timeMonitor"
import { performanceMonitor } from "./libs/performanceMonitor"
import { userActivityMonitor } from "./libs/pvUvMonitor"
injectJsError()

injectXHR()

blankScreen()

timeMonitor()

performanceMonitor()

userActivityMonitor()