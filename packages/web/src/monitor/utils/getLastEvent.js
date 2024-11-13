let lastEvent;
["click","touchstart","mousedown","keydown","mouseover"].forEach(eventType=>{
    document.addEventListener(eventType,(event)=>{
        lastEvent=event
    },{
        //捕获阶段执行
        capture:true,
        //默认不阻止默认事件
        passive:true
    })

})

export default function (){
    if (!lastEvent) return null;
    // 优先使用 composedPath 方法获取路径
    let path = lastEvent.composedPath ? lastEvent.composedPath() : lastEvent.path;
    if (path.length === 0) {
        let element = lastEvent.target;
        path = [];
        while (element) {
            path.push(element);
            element = element.parentElement;
        }
    }
   
    return path || [];
}