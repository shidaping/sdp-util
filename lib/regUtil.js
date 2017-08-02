"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var emoji = /(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f])|(\ud83d[\ude80-\udeff])/;
var mobile = /^1[3|4|5|8|7|9]\d{9}$/;
var email = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/;
exports.default = {
  emoji: emoji,
  mobile: mobile,
  email: email
};