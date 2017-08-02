# sdp-util
## Descritpion
some useful util function
## How to Use
`npm install sdp-util`
## Example
### dateUtil
``` jsx
import dateUtil from 'sdp-util';
dateUtil.parse('2017-07-23T12:34:33.000Z');  // parse date
dateUtil.formatDate('2017-03-09T23:00:34.000Z', 'yyyy-MM-dd hh-mm-ss'); // 2017-03-10 07:00:34
dateUtil.getDay('2017-03-09T23:00:34.000Z'); // 星期五
dateUtil.getDay('2017-03-09T23:00:34.000Z', true); //Friday
dateUtil.getDay('2017-03-09T23:00:34.000Z', ['周日', '周一', '周二', '周三', '周四', '周五', '周六']); //周五
```
### regUtil
``` jsx
import regUtil from 'reg-util';
regUtil.mobile.test('13533334444'); // true
regUtil.email.test('test@vvvv.com.cn'); // true
regUtil.emoji.test('😀'); // true
```

