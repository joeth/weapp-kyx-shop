"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_orderCommodity=require("./../../components/order-commodity.js"),_orderCommodity2=_interopRequireDefault(_orderCommodity),__DATA__={totalAmount:"1149.00",freightAmount:"0.00",actualAmount:"1149.00",message:"帮我包装得好看点",consignee:{id:1,name:"张生",tel:"15817489898",area:"广东 广州市  天河区",address:"金穗路1号3401(广东星外星唱片)"},commodityList:[{id:1,cover:"https://t1.picb.cc/uploads/2018/02/22/KGQhG.png",title:"云之七味",type:"熟茶",price:100,count:1},{id:2,cover:"https://t1.picb.cc/uploads/2018/02/22/KGQhG.png",title:"云之七味",type:"熟茶",price:100,count:1}]},OrderDetail=function(e){function t(){var e,o,i,r;_classCallCheck(this,t);for(var n=arguments.length,c=Array(n),a=0;a<n;a++)c[a]=arguments[a];return o=i=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.config={navigationBarTitleText:"订单详情",usingComponents:{"wxc-cc":"../../packages/@minui/wxc-cc/dist/index","wxc-flex":"../../packages/@minui/wxc-flex/dist/index","wxc-tab":"../../packages/@minui/wxc-tab/dist/index","wxc-tab-panel":"../../packages/@minui/wxc-tab/dist/panel","wxc-tab-label":"../../packages/@minui/wxc-tab/dist/label","wxc-badge":"../../packages/@minui/wxc-badge/dist/index","wxc-price":"../../packages/@minui/wxc-price/dist/index"}},i.$repeat={order:{com:"cp-order-commodity",props:"commodity"}},i.$props={"cp-order-commodity":{"xmlns:v-bind":{value:"",for:"order.commodityList",item:"commodity",index:"index",key:"cid"},"v-bind:commodity.once":{value:"commodity",type:"item",for:"order.commodityList",item:"commodity",index:"index",key:"cid"},class:{value:"order-confirm-commodity",for:"order.commodityList",item:"commodity",index:"index",key:"cid"}}},i.$events={},i.components={"cp-order-commodity":_orderCommodity2.default},i.mixins=[],i.data={order:__DATA__},i.computed={},i.methods={bindinput:function(e){var t=e.currentTarget.dataset.type,o=e.detail.value&&e.detail.value.replace(/[\s\r\n]+/g," ")||"";this.order[t]=o},tapConsignee:function(e){wx.navigateTo({url:"/pages/address/list?sid="+e+"&type=select"})},formSubmit:function(e){console.log(e.detail.formId)}},i.events={},r=o,_possibleConstructorReturn(i,r)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e){console.log(e)}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(OrderDetail,"pages/order/confirm"));