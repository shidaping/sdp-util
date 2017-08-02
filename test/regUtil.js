var assert = require('assert');
var regUtil = require('../lib').regUtil; 
describe('regUtil', () => {
  describe('mobile', () => {
    describe('mobile#1', () => {
      it('135', () => {
        assert.ok(regUtil.mobile.test('13503423333'));
      })
    })
    describe('mobile#2', () => {
      it('152', () => {
        assert.ok(regUtil.mobile.test('15201344444'));
      })
    })
  })
  describe('email', () => {
    describe('email#1', () => {
      it('abc@163.com', () => {
        assert.ok(regUtil.email.test('abc@163.com'));
      })
    })
    describe('email#2', () => {
      it('d_34@ad244.com.cn', () => {
        assert.ok(regUtil.email.test('d_34@ad244.com.cn'));
      })
    })
  })
  describe('emoji', () => {
    describe('emoji#1', () => {
      it('😀', () => {
        assert.ok(regUtil.emoji.test('😀'));
      })
    })
    describe('emoji#2', () => {
      it('🙌', () => {
        assert.ok(regUtil.emoji.test('🙌'));
      })
    })
  })
})