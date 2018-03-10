"use strict";var formatTime=function(e){var r=e.getFullYear(),t=e.getMonth()+1,a=e.getDate(),n=e.getHours(),f=e.getMinutes(),u=e.getSeconds();return[r,t,a].map(formatNumber).join("/")+" "+[n,f,u].map(formatNumber).join(":")},formatNumber=function(e){return e=e.toString(),e[1]?e:"0"+e},getlen=function(e){for(var r=e.length,t=0,a=0;a<r;a++)e.charCodeAt(a)>128?t+=2:t+=1;return Math.ceil(t)},cutstr=function(e,r){for(var t=e.length,a=t,n=0,f=0;f<t;f++)if(e.charCodeAt(f)>128){if(!(n+2<r)){a=f;break}n+=2}else{if(!(n+1<r)){a=f;break}n+=1}return a},hex2rgba=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;try{if(e.indexOf("rgba(")>-1){var t=e.match(new RegExp(/(\w+)/,"ig"));return"rgba("+t[1]+","+t[2]+","+t[3]+","+r+")"}if(e.indexOf("rgb(")>-1){var a=e.match(new RegExp(/(\w+)/,"ig"));return"rgba("+a[1]+","+a[2]+","+a[3]+","+r+")"}if(e.indexOf("#")<0||e.length<4||e.length>=5&&e.length<=6)return e;e=4==e.length?""+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]:e;var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e),f=parseInt(n[1],16),u=parseInt(n[2],16),i=parseInt(n[3],16);return n?"rgba("+f+","+u+","+i+","+r+")":e}catch(e){return"#ffffff"}},status2str=function(e,r){var t="";if("order"==r)switch(e){case 0:t="待付款";break;case 1:t="待发货";break;case 2:t="待收货";break;case 3:t="待评价";break;case 4:t="已完成";break;default:t="已失效"}return t};module.exports={formatTime:formatTime,hex2rgba:hex2rgba,getlen:getlen,cutstr:cutstr,status2str:status2str};