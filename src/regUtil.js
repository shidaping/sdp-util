const emoji = /(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f])|(\ud83d[\ude80-\udeff])/;
const mobile = /^1[3|4|5|8|7|9]\d{9}$/;
const email = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/;
const ios = /iphone/i;
const android = /android/i;
const wechat = /micromessenger/i
export default {
  emoji,
  mobile,
  email,
  ios,
  android,
  wechat,
}
 