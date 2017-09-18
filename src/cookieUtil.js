const cookieUtil = {
  getCookie: (name) => {
    if(typeof window !== 'undefined' ) {
      let splitArray = document.cookie.split(`${name}=`);
      if(splitArray.length === 2) {
        return splitArray[1];
      }
    }
    return null;
  },
  setCookie: (name, value, expires) => {
    const now = new Date();
    const expireDate = new Date(now.getTime() + expires);
    document.cookie = `name=${escape(value)}${expires ? ";expires=" + expireDate.toGMTString() : null}`
  }
}

module.exports = cookieUtil;