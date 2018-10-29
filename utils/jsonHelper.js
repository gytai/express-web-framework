/**
 *Author: TaiGuangYin
 *Date: 2018
 *Description: return json helper
 */

function returnJson(code,msg,data) {
    return {code:code,msg:msg,data:data};
}

function returnUnloginJson() {
    return {code:505,msg:'please login first'};
}

exports.returnJson = returnJson;
exports.returnUnloginJson = returnUnloginJson;
