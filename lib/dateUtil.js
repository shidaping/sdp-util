"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var parseDate = function parseDate(source) {
  var d = void 0;
  if (source instanceof Date) {
    d = source;
  } else {
    d = new Date(source);
  }
  d = d.getFullYear() > 0 ? d : new Date(Date.parse(source.replace(/-/g, "/")));
  return d;
};
var formatDate = function formatDate(date, format) {
  var d = void 0;
  var o = void 0;
  var k = void 0;
  var fmt = format;
  d = parseDate(date);
  o = {
    "M+": d.getMonth() + 1, // 月份
    "d+": d.getDate(), // 日
    "h+": d.getHours(), // 小时
    "m+": d.getMinutes(), // 分
    "s+": d.getSeconds(), // 秒
    "q+": Math.floor((d.getMonth() + 3) / 3), // 季度
    "S": d.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return fmt;
};

var getDay = function getDay(date, options) {
  var d = parseDate(date);
  var list = void 0;
  if (!options) {
    list = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  } else if (options instanceof Array) {
    list = options;
  } else {
    list = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  }
  return list[d.getDay()];
};
exports.default = {
  parseDate: parseDate,
  formatDate: formatDate,
  getDay: getDay
};