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
regUtil.android.test('Mozilla/5.0 (Linux; U; Android 4.4.4; zh-cn; HTC_D820u Build/KTU84P) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'); // true
regUtil.ios.test('Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4'); // true
regUtil.wechat.test('Mozilla/5.0 (iPhone; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B176 MicroMessenger/4.3.2')
```

