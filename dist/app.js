"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,o){try{var i=t[a](o),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_wepy=require("./npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy);require("./npm/wepy-async-function/index.js");var device=wx.getSystemInfoSync(),deviceRadio=device.windowWidth/750,_default=function(e){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.config={pages:["pages/mycenter","pages/homepage","pages/catalog","pages/shopcart","pages/commodity/list","pages/commodity/detail","pages/order/list","pages/order/detail","pages/order/confirm","pages/address/list","pages/address/detail","pages/question/list","pages/question/detail"],tabBar:{color:"#452713",selectedColor:"#a91e11",backgroundColor:"#e9e0cc",list:[{pagePath:"pages/homepage",iconPath:"images/homepage.png",selectedIconPath:"images/homepage-cur.png",text:"首页"},{pagePath:"pages/catalog",iconPath:"images/catalog.png",selectedIconPath:"images/catalog-cur.png",text:"产品分类"},{pagePath:"pages/shopcart",iconPath:"images/shopcart.png",selectedIconPath:"images/shopcart-cur.png",text:"购物车"},{pagePath:"pages/mycenter",iconPath:"images/mycenter.png",selectedIconPath:"images/mycenter-cur.png",text:"个人中心"}]},window:{backgroundColor:"#e9e0cc",backgroundTextStyle:"light",navigationBarBackgroundColor:"#452713",navigationBarTitleText:"可以兴商城",navigationBarTextStyle:"#d6c5ac"}},e.globalData={deviceRadio:deviceRadio,userInfo:null},e.use("requestfix"),e}return _inherits(t,e),_createClass(t,[{key:"onLaunch",value:function(){}},{key:"sleep",value:function(e){return new Promise(function(t,n){setTimeout(function(){t("promise resolved")},1e3*e)})}},{key:"testAsync",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.sleep(3);case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"getUserInfo",value:function(e){var t=this;if(this.globalData.userInfo)return this.globalData.userInfo;_wepy2.default.getUserInfo({success:function(n){t.globalData.userInfo=n.userInfo,e&&e(n.userInfo)}})}}]),t}(_wepy2.default.app);App(require("./npm/wepy/lib/wepy.js").default.$createApp(_default,{noPromiseAPI:["createSelectorQuery"]}));