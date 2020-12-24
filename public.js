
var URL = ""; 

function getOS(){
    console.log(navigator)
    var android = navigator.userAgent.toLowerCase().match(/android/i) == 'android';
    var ios = navigator.userAgent.toLowerCase().match(/mac os/i) == 'mac os';
    if(android) return 'android'
    if(ios) return 'ios'
}
function getEnv(){
    if (/MicroMessenger/.test(window.navigator.userAgent)) {
        return 'wechat'
    } else if (/AlipayClient/.test(window.navigator.userAgent)) {
        return 'alipay'
    }else if (!!navigator.userAgent.toLowerCase().match(/ qq\//i)) {
        return 'qq'
    } else {
        return 'unknown'
    }
}
function getParams(){
    var url = location.href
    var theRequest = {}
    var i = url.indexOf('?')
    if (i !== -1) url = url.substr(++i)
    else return null

    if (url.indexOf('&') !== -1) {
        var strs = url.split('&')
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
        }
    } else {
        theRequest[url.split('=')[0]] = unescape(url.split('=')[1])
    }
    return theRequest
}
function checkPhone(str) {
    if (!str || str === '') {
        return false
    } else {
        var reg = /^1[3456789]\d{9}$/
        if (!reg.test(str)) {
            return false
        }
        return true
    }
}
