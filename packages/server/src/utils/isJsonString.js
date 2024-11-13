function isJsonString(str) {
    try {
        // 尝试解析字符串为 JSON
        JSON.parse(str);
        return true;
    } catch (e) {
        // 如果解析失败，抛出错误
        return false;
    }
}
module.exports=isJsonString