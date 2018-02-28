
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//获取字符串的真实长度（字节长度）
const getlen = str => {
    let len = str.length, truelen = 0;
    for(var x = 0; x < len; x++){
        if(str.charCodeAt(x) > 128){
            truelen += 2;
        }else{
            truelen += 1;
        }
    }
    return Math.ceil(truelen);
}
//按字节长度截取字符串，返回substr截取位置
const cutstr = (str, length) => {
    let len = str.length, tlen = len, nlen = 0;
    for(var x = 0; x < len; x++){
        if(str.charCodeAt(x) > 128){
            if(nlen + 2 < length){
                nlen += 2;
            }else{
                tlen = x;
                break;
            }
        }else{
            if(nlen + 1 < length){
                nlen += 1;
            }else{
                tlen = x;
                break;
            }
        }
    }
    return tlen;
}

const hex2rgba = (hex, opacity=1) => {
    try{

        if(hex.indexOf('rgba(')>-1){
            let rgba = hex.match(new RegExp(/(\w+)/, 'ig'));
            return `rgba(${rgba[1]},${rgba[2]},${rgba[3]},${opacity})`;
        }

        if(hex.indexOf('rgb(')>-1){
            let rgb = hex.match(new RegExp(/(\w+)/, 'ig'));
            return `rgba(${rgb[1]},${rgb[2]},${rgb[3]},${opacity})`;
        }

        if(hex.indexOf('#') < 0 || hex.length < 4 || (hex.length >= 5 && hex.length <= 6)){
            return hex;
        }

        hex = hex.length == 4 ? `${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}` : hex;

        let rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        let r = parseInt(rgb[1], 16);
        let g = parseInt(rgb[2], 16);
        let b = parseInt(rgb[3], 16);

        return rgb ? `rgba(${r},${g},${b},${opacity})`: hex;
    } catch(e){
        return '#ffffff';
    }
}

const status2str = (status, type) => {
    let text = ''
    if(type == 'order'){
        switch(status){
            case 0 : text = '待付款'; break;
            case 1 : text = '待发货'; break;
            case 2 : text = '待收货'; break;
            case 3 : text = '已完成'; break;
            default: text = '已失效';
        }
    }
    return text
}

module.exports = {
    formatTime,
    hex2rgba,
    getlen,
    cutstr,
    status2str
}