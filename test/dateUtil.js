var assert = require('assert');
var dateUtil = require('../lib').dateUtil;
describe('dateUtil', () => {
  describe('parseDate', () => {
    describe('parseDate#1', () => {
      it('parse iso date', () => {
        let d = dateUtil.parseDate('2017-07-23T12:34:33.000Z')
        assert.ok(d instanceof Date);
      })
    })
    describe('parseDate#2', () => {
      it('parse only date', () => {
        let d = dateUtil.parseDate('2017-07-23')
        assert.ok(d instanceof Date);
      })
    })
    describe('parseDate#3', () => {
      it('parse only time', () => {
        let d = dateUtil.parseDate('12:34:34')
        assert.ok(d instanceof Date);
      })
    })
  })
  describe('formatDate', () => {
    describe('fromateDate#1', () => {
      it('yyyy-MM-dd', () => {
        let d = dateUtil.parseDate('2017-03-09T23:00:34.000Z');
        assert.ok(dateUtil.formatDate(d, '2017-03-10'));
      })
    })
    describe('fromatDate#2', () => {
      it('yyyy-MM-dd hh-mm-ss', () => {
        let d = dateUtil.parseDate('2017-03-09T23:00:34.000Z');
        assert.ok(dateUtil.formatDate(d, '2017-03-10 07:00:34'));
      })
    })
  })

  describe('getDay', () => {
    describe('getDay#1', () => {
      it('chinese', () => {
        let d = dateUtil.parseDate('2017-07-30T23:00:34.000Z');
        assert.equal(dateUtil.getDay(d), '星期一');
      })
    })
    describe('getDay#2', () => {
      it('english', () => {
        let d = dateUtil.parseDate('2017-07-30T23:00:34.000Z');
        assert.equal(dateUtil.getDay(d, true), 'Monday');
      })
    })

    describe('getDay#3', () => {
      it('customize', () => {
        let d = dateUtil.parseDate('2017-07-30T23:00:34.000Z');
        assert.equal(dateUtil.getDay(d, ['周日', '周一', '周二', '周三', '周四', '周五', '周六']), '周一');
      })
    });
  })
})