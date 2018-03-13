"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_orderCommodity=require("./../../components/order-commodity.js"),_orderCommodity2=_interopRequireDefault(_orderCommodity),_addressList=require("./../../components/address-list.js"),_addressList2=_interopRequireDefault(_addressList),__DATA__={totalAmount:"1149.00",freightAmount:"0.00",actualAmount:"1149.00",message:"帮我包装得好看点",consignee:{id:1,name:"张生",tel:"15817489898",area:"广东 广州市  天河区",address:"金穗路1号3401(广东星外星唱片)"},commodityList:[{id:1,cover:"https://t1.picb.cc/uploads/2018/02/22/KGQhG.png",title:"云之七味",type:"熟茶",price:100,count:1},{id:2,cover:"https://t1.picb.cc/uploads/2018/02/22/KGQhG.png",title:"云之七味",type:"熟茶",price:100,count:1}]},OrderDetail=function(e){function t(){var e,i,o,n;_classCallCheck(this,t);for(var a=arguments.length,r=Array(a),c=0;c<a;c++)r[c]=arguments[c];return i=o=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),o.config={navigationBarTitleText:"订单详情",usingComponents:{"wxc-cc":"/packages/@minui/wxc-cc/dist/index","wxc-flex":"/packages/@minui/wxc-flex/dist/index","wxc-avatar":"/packages/@minui/wxc-avatar/dist/index","wxc-badge":"/packages/@minui/wxc-badge/dist/index","wxc-elip":"/packages/@minui/wxc-elip/dist/index","wxc-icon":"/packages/@minui/wxc-icon/dist/index","wxc-label":"/packages/@minui/wxc-label/dist/index","wxc-loadmore":"/packages/@minui/wxc-loadmore/dist/index","wxc-price":"/packages/@minui/wxc-price/dist/index","wxc-abnor":"/packages/@minui/wxc-abnor/dist/index","wxc-countdown":"/packages/@minui/wxc-countdown/dist/index","wxc-counter":"/packages/@minui/wxc-counter/dist/index","wxc-loading":"/packages/@minui/wxc-loading/dist/index","wxc-mask":"/packages/@minui/wxc-mask/dist/index","wxc-steps":"/packages/@minui/wxc-steps/dist/index","wxc-tab":"/packages/@minui/wxc-tab/dist/index","wxc-tab-panel":"/packages/@minui/wxc-tab/dist/panel","wxc-tab-label":"/packages/@minui/wxc-tab/dist/label","wxc-dialog":"/packages/@minui/wxc-dialog/dist/index","wxc-popup":"/packages/@minui/wxc-popup/dist/index","wxc-toast":"/packages/@minui/wxc-toast/dist/index"}},o.$repeat={order:{com:"orderCommodity",props:"commodity"}},o.$props={orderCommodity:{"xmlns:v-bind":{value:"",for:"order.commodityList",item:"commodity",index:"index",key:"cid"},"v-bind:commodity.once":{value:"commodity",type:"item",for:"order.commodityList",item:"commodity",index:"index",key:"cid"},class:{value:"order-confirm-commodity",for:"order.commodityList",item:"commodity",index:"index",key:"cid"}}},o.$events={},o.components={addressList:_addressList2.default,orderCommodity:_orderCommodity2.default},o.mixins=[],o.data={order:__DATA__},o.computed={},o.methods={bindinput:function(e){var t=e.currentTarget.dataset.type,i=e.detail.value&&e.detail.value.replace(/[\s\r\n]+/g," ")||"";this.order[t]=i},tapConsignee:function(e){wx.navigateTo({url:"/pages/address/list?sid="+e+"&type=select"})},formSubmit:function(e){console.log(e.detail.formId)}},o.events={},n=i,_possibleConstructorReturn(o,n)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e){console.log(e)}},{key:"onShow",value:function(e){wx.st}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(OrderDetail,"pages/order/confirm"));