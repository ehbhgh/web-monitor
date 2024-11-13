
import tracker from "../utils/tracker"
import onload from "../utils/onload"
export function blankScreen() {
    const wrapperElements = ["html", "body", "#container", ".content"]
    let emptyPoints = 0
    function getSelector(ele) {
        if (ele.id) {
            return `#${ele.id}`
        }
        else if (ele.className) {
            const className = ele.className.split(" ").filter(item => !!item).join(".")
            return `.${className}`
        }
        else {
            return ele.nodeName.toLowerCase()
        }
    }
    function isWrapper(element) {
      
        
        let selector = getSelector(element)
        if (wrapperElements.indexOf(selector) !== -1) {
            emptyPoints++
        }
    }
    onload(function(){
        for (let i = 1; i <= 9; i++) {
            let xElements = document.elementFromPoint(window.innerWidth * i / 10, innerHeight / 2)
            let yElements = document.elementFromPoint(window.innerWidth / 2, innerHeight * i / 10)
      
            isWrapper(xElements)
            isWrapper(yElements)
        }
        
        if (emptyPoints >=18) {
            let centerElem = document.elementFromPoint(
                window.innerWidth / 2, window.innerHeight / 2
            )
            tracker.send("/jsErrorLog/addition", {
                title:"监控-白屏错误",
                kind: "stability",         // 监控指标大类
                type: "blankScreen",             // 小类型，js错误
                errorType: "blankScreenError",      //白屏错误
                emptyPoints,
                screen: window.screen.width + "X" + window.screen.height,
                viewPoint: window.innerWidth +"X" + window.innerHeight,
                selector: getSelector(centerElem)
            })
        }
    })

}