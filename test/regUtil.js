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
  describe('android', () => {
    it('android', () => {
      assert.ok(regUtil.android.test('Mozilla/5.0 (Linux; U; Android 4.4.4; zh-cn; HTC_D820u Build/KTU84P) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30')); 
    })
  })
  describe('ios', () => {
    it('ios', () => {
      assert.ok(regUtil.ios.test('Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4'));
    })
  })
  describe('wechat', () => {
    it('wechat', () => {
      assert.ok(regUtil.wechat.test('Mozilla/5.0 (iPhone; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B176 MicroMessenger/4.3.2'));
    })
  })
})