"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),dzinput=function(e){function t(){var e,r,n,o;_classCallCheck(this,t);for(var i=arguments.length,s=Array(i),a=0;a<i;a++)s[a]=arguments[a];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.methods={dzinput:function(e){var t=e.currentTarget.dataset,r=t.store,n=t.trim,o=e.detail.value||"";o=o.replace(/(^\s*)|(\s*$)/g,""),n&&n.indexOf("line")>-1&&(o=o.replace(/<\/?.+?>/g,""),o=o.replace(/[\r\n]+/g,"")),n&&n.indexOf("all")>-1&&(o=o.replace(/[\s\r\n]+/g,""));try{var i=r.split(".");switch(i.length){case 1:this[i[0]]=o;break;case 2:this[i[0]][i[1]]=o;break;case 3:this[i[0]][i[1]][i[2]]=o;break;case 4:this[i[0]][i[1]][i[2]][i[3]]=o;break;case 5:this[i[0]][i[1]][i[2]][i[3]][i[4]]=o}}catch(e){}}},o=r,_possibleConstructorReturn(n,o)}return _inherits(t,e),t}(_wepy2.default.mixin);exports.default=dzinput;