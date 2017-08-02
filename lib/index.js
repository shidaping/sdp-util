'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateUtil = exports.regUtil = undefined;

var _regUtil = require('./regUtil.js');

var _regUtil2 = _interopRequireDefault(_regUtil);

var _dateUtil = require('./dateUtil.js');

var _dateUtil2 = _interopRequireDefault(_dateUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.regUtil = _regUtil2.default;
exports.dateUtil = _dateUtil2.default;
exports.default = {
  regUtil: _regUtil2.default,
  dateUtil: _dateUtil2.default
};