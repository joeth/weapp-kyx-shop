"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),_wepy=require("./npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy);require("./npm/wepy-async-function/index.js");var device=wx.getSystemInfoSync(),deviceRadio=device.windowWidth/750,_default=function(e){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.config={pages:["pages/shopcart","pages/mycenter","pages/homepage","pages/catalog","pages/commodity/list","pages/commodity/detail","pages/order/list","pages/order/detail","pages/order/confirm","pages/consignee/list","pages/consignee/edit","pages/question/list","pages/question/detail"],tabBar:{color:"#452713",selectedColor:"#a91e11",backgroundColor:"#e9e0cc",list:[{pagePath:"pages/homepage",iconPath:"images/homepage.png",selectedIconPath:"images/homepage-cur.png",text:"首页"},{pagePath:"pages/catalog",iconPath:"images/catalog.png",selectedIconPath:"images/catalog-cur.png",text:"产品分类"},{pagePath:"pages/shopcart",iconPath:"images/shopcart.png",selectedIconPath:"images/shopcart-cur.png",text:"购物车"},{pagePath:"pages/mycenter",iconPath:"images/mycenter.png",selectedIconPath:"images/mycenter-cur.png",text:"个人中心"}]},window:{backgroundColor:"#e9e0cc",backgroundTextStyle:"light",navigationBarBackgroundColor:"#452713",navigationBarTitleText:"可以兴商城",navigationBarTextStyle:"#d6c5ac"}},e.globalData={deviceRadio:deviceRadio,userInfo:null},e.use("requestfix"),e.intercept("request",{config:function(e){return e.timestamp=+new Date,console.log("config request: ",e),e},success:function(e){return console.log("request success: ",e),e},fail:function(e){return console.log("request fail: ",e),e},complete:function(e){console.log("request complete: ",e)}}),e}return _inherits(t,e),_createClass(t,[{key:"onLaunch",value:function(){}},{key:"sleep",value:function(e){return new Promise(function(t,o){setTimeout(function(){t("promise resolved")},1e3*e)})}},{key:"getUserInfo",value:function(e){var t=this;if(this.globalData.userInfo)return this.globalData.userInfo;_wepy2.default.getUserInfo({success:function(o){t.globalData.userInfo=o.userInfo,e&&e(o.userInfo)}})}}]),t}(_wepy2.default.app);App(require("./npm/wepy/lib/wepy.js").default.$createApp(_default,{noPromiseAPI:["createSelectorQuery"]}));