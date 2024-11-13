export function getSelector (path) {
    if (path && Array.isArray(path)) {
        return getSelectors(path)
    }
    else{
        let pathList=[]
        if(path){
            pathList.push(path)
            path=path.parentNode
        }
        return getSelectors(pathList)

    }
}
function getSelectors(path) {
    return path.reverse().filter(ele => {
        return ele !== document && ele !== window
    }).map(ele => {
        let selector = ""
        if (ele.id) {
            selector = `${ele.nodeName.toLowerCase()}#${ele.id}`
        }
        else if (ele.className && typeof ele.className === "string") {
            selector = `${ele.nodeName.toLowerCase()}.${ele.className}`

        }
        else {
            selector = ele.nodeName.toLowerCase()
        }
        return selector
    }).join(" ")
}