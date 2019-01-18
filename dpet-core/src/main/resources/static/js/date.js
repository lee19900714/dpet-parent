Date.prototype.add = function (field,amount) {
    switch (field) {
        case 'year':
            this.setYear(this.getFullYear() + amount);
            break
        case "month":
            this.setMonth(this.getMonth() + amount);
            break;
        case "week":
            this.setTime(this.getTime() + amount * 24 * 60 * 60 * 1000 * 7);
            break;
        case "day":
            this.setTime(this.getTime() + amount * 24 * 60 * 60 * 1000);
            break;
        case "hour":
            this.setHours(this.getHours() + amount);
            break;
        case "minute":
            this.setMinutes(this.getMinutes()+amount);
            break;
        case "second":
            this.setSeconds(this.getSeconds()+amount);
            break;
    }
    return this;
}

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


//对Date的扩展，将 Date 转化为指定格式的String
//月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
//年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
//例子：
//(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
//(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
//var time1 = new Date().Format("yyyy-MM-dd");var time2 = new Date().Format("yyyy-MM-dd HH:mm:ss");

function dateFromTime(time) {
 return new Date(time.replace(/-/g, "/"));
}

/**
*对日期串进行格式化
* @param {any} time 日期串
* @param {any} format 目标类型
*/
function timeFormat(time, format){
 if (time == null) return '';
 return dateFromTime(time).Format(format);
}

function dateFormat(date, format) {
	if(date==null) return '';
	return date.Format(format);
}