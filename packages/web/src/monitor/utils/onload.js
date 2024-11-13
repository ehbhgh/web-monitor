export default (callback) => {
    if (document.readyState === "complete") {
        callback && callback()
    }
    else {
        window.addEventListener("load", callback)
    }
}