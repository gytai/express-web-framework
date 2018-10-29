/**
 *Author: TaiGuangYin
 *Date: 2017
 *Description:公共基础库
 */
var http=require('http');

/**
 * 获取客户端IP地址
 * @param req
 * @returns {*}
 */
function getClientIp(req) {
    return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
}

/**
 * 根据IP获取定位
 * @param ip
 * @param callback
 */
function getIpLocation(ip,callback) {
    http.get('http://ip.taobao.com/service/getIpInfo.php?ip='+ip,function(req,res){
        var html='';
        req.on('data',function(data){
            html+=data;
        });
        req.on('end',function(){
            console.info(html);
            var json = JSON.parse(html);
            if(json.code == 0){
                return callback(null,json.data.region + json.data.city);
            }else{
                return callback(json.data,null);
            }

        });
    });
}

/**
 * 随机指定长度的字符串
 * @param len
 * @returns {string}
 */
function randomWord(len){
    var str = '',
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A',
            'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z'];

    for(var i=0; i<len; i++){
        var pos = Math.floor(Math.random() * arr.length);
        str += arr[pos];
    }
    return str;
}

/**
 * 时间格式化
 * @param fmt
 * @param date 对象
 * @returns {*}
 */
function dateFormat(date = new Date(),fmt = 'yyyy-MM-dd hh:mm:ss') {
    var o = {
        'M+': date.getMonth() + 1, //月份
        'd+': date.getDate(), //日
        'h+': date.getHours(), //小时
        'm+': date.getMinutes(), //分
        's+': date.getSeconds(), //秒
        'q+': Math.floor((date.getMonth() + 3) / 3), //季度
        'S': date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    return fmt;
}


//格式化日期：yyyy-MM-dd
function formatDate(date) {
    var myyear = date.getFullYear();
    var mymonth = date.getMonth() + 1;
    var myweekday = date.getDate();

    if (mymonth < 10) {
        mymonth = '0' + mymonth;
    }
    if (myweekday < 10) {
        myweekday = '0' + myweekday;
    }
    return (myyear + '-' + mymonth + '-' + myweekday);
}

//获得某月的天数
function getMonthDays(myMonth) {
    var now = new Date();                    //当前日期
    var nowYear = now.getYear();             //当前年
    nowYear += (nowYear < 2000) ? 1900 : 0;  //
    var monthStartDate = new Date(nowYear, myMonth, 1);
    var monthEndDate = new Date(nowYear, myMonth + 1, 1);
    var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
    return days;
}

//获得本季度的开始月份
function getQuarterStartMonth() {
    var now = new Date();                    //当前日期
    var nowMonth = now.getMonth();           //当前月

    var quarterStartMonth = 0;
    if (nowMonth < 3) {
        quarterStartMonth = 0;
    }
    if (2 < nowMonth && nowMonth < 6) {
        quarterStartMonth = 3;
    }
    if (5 < nowMonth && nowMonth < 9) {
        quarterStartMonth = 6;
    }
    if (nowMonth > 8) {
        quarterStartMonth = 9;
    }
    return quarterStartMonth;
}

//获得本周的开始日期
function getWeekStartDate() {
    var now = new Date();                    //当前日期
    var nowDayOfWeek = now.getDay();         //今天本周的第几天
    var nowDay = now.getDate();              //当前日
    var nowMonth = now.getMonth();           //当前月
    var nowYear = now.getYear();             //当前年
    nowYear += (nowYear < 2000) ? 1900 : 0;  //
    var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
    return formatDate(weekStartDate);
}

//获得本周的结束日期
function getWeekEndDate() {
    var now = new Date();                    //当前日期
    var nowDayOfWeek = now.getDay();         //今天本周的第几天
    var nowDay = now.getDate();              //当前日
    var nowMonth = now.getMonth();           //当前月
    var nowYear = now.getYear();             //当前年
    nowYear += (nowYear < 2000) ? 1900 : 0;  //
    var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));
    return formatDate(weekEndDate);
}

//获得本月的开始日期
function getMonthStartDate() {
    var now = new Date();                    //当前日期
    var nowMonth = now.getMonth();           //当前月
    var nowYear = now.getYear();             //当前年
    nowYear += (nowYear < 2000) ? 1900 : 0;  //
    var monthStartDate = new Date(nowYear, nowMonth, 1);
    return formatDate(monthStartDate);
}

//获得本月的结束日期
function getMonthEndDate() {
    var now = new Date();                    //当前日期
    var nowMonth = now.getMonth();           //当前月
    var nowYear = now.getYear();             //当前年
    nowYear += (nowYear < 2000) ? 1900 : 0;  //
    var monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth));
    return formatDate(monthEndDate);
}

//获得本季度的开始日期
function getQuarterStartDate() {
    var now = new Date();                    //当前日期
    var nowYear = now.getYear();             //当前年
    nowYear += (nowYear < 2000) ? 1900 : 0;  //
    var quarterStartDate = new Date(nowYear, getQuarterStartMonth(), 1);
    return formatDate(quarterStartDate);
}

//或的本季度的结束日期
function getQuarterEndDate() {
    var now = new Date();                    //当前日期
    var nowYear = now.getYear();             //当前年
    nowYear += (nowYear < 2000) ? 1900 : 0;  //
    var quarterEndMonth = getQuarterStartMonth() + 2;
    var quarterStartDate = new Date(nowYear, quarterEndMonth, getMonthDays(quarterEndMonth));
    return formatDate(quarterStartDate);
}

//获得本年的开始日期
function getYearStartDate() {
    var now = new Date();                    //当前日期
    //获得当前年份4位年
    var currentYear=now.getFullYear();
    //本年第一天
    var currentYearFirstDate=new Date(currentYear,0,1);
    return formatDate(currentYearFirstDate);
}

//获得本年的结束日期
function getYearEndDate() {
    var now = new Date();                    //当前日期

    //获得当前年份4位年
    var currentYear=now.getFullYear();
    //本年最后
    var currentYearLastDate=new Date(currentYear,11,31);
    return formatDate(currentYearLastDate);
}

//获取三个月前的日期
function getThreeMonth() {
    var dd = new Date();
    dd.setMonth(-3);
    return formatDate(dd);
}

/**
 * 验证邮箱
 * @param str
 * @return {boolean}
 */
function checkEmail(str){
    var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
    if(re.test(str)){
        return true;
    }else{
        return false;
    }
}

/**
 * 验证国外手机号
 * @param str
 * @return {boolean}
 */
function checkPhone(str) {
    let reg = /^[8,9][0-9]{7}$/;
    if (!reg.test(str)) {
        return false;
    } else {
        return true;
    }
}

exports.getClientIp = getClientIp;
exports.getIpLocation = getIpLocation;
exports.randomWord = randomWord;
exports.dateFormat = dateFormat;
exports.getWeekStartDate = getWeekStartDate;
exports.getWeekEndDate = getWeekEndDate;
exports.getMonthStartDate = getMonthStartDate;
exports.getMonthEndDate = getMonthEndDate;
exports.getQuarterStartDate = getQuarterStartDate;
exports.getQuarterEndDate = getQuarterEndDate;
exports.getYearStartDate = getYearStartDate;
exports.getYearEndDate = getYearEndDate;
exports.getThreeMonth = getThreeMonth;
exports.checkEmail = checkEmail;
exports.checkPhone = checkPhone;
