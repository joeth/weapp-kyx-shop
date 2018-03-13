"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_colors=require("./../../mixins/colors.js"),_colors2=_interopRequireDefault(_colors),_orderList=require("./../../components/order-list.js"),_orderList2=_interopRequireDefault(_orderList),__ORDER_DATA__=[{id:1,code:"E20180102112200",status:1,payStatus:1,freightAmount:"0.00",actualAmount:"200.00",isCommented:!1,commodityList:[{id:2,cover:"https://t1.picb.cc/uploads/2018/02/22/KGQhG.png",title:"云之七味",type:"熟茶",price:"100.00",count:1}]},{id:2,code:"E20180102112201",status:2,payStatus:1,freightAmount:"0.00",actualAmount:"200.00",isCommented:!1,commodityList:[{id:1,cover:"https://t1.picb.cc/uploads/2018/02/22/KGQhG.png",title:"云之七味",type:"熟茶",price:"100.00",count:1},{id:2,cover:"https://t1.picb.cc/uploads/2018/02/22/KGQhG.png",title:"云之七味",type:"熟茶",price:"100.00",count:1}]}],OrderList=function(e){function t(){var e,i,n,c;_classCallCheck(this,t);for(var a=arguments.length,o=Array(a),r=0;r<a;r++)o[r]=arguments[r];return i=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.config={navigationBarTitleText:"订单列表",usingComponents:{"wxc-cc":"/packages/@minui/wxc-cc/dist/index","wxc-flex":"/packages/@minui/wxc-flex/dist/index","wxc-avatar":"/packages/@minui/wxc-avatar/dist/index","wxc-badge":"/packages/@minui/wxc-badge/dist/index","wxc-elip":"/packages/@minui/wxc-elip/dist/index","wxc-icon":"/packages/@minui/wxc-icon/dist/index","wxc-label":"/packages/@minui/wxc-label/dist/index","wxc-loadmore":"/packages/@minui/wxc-loadmore/dist/index","wxc-price":"/packages/@minui/wxc-price/dist/index","wxc-abnor":"/packages/@minui/wxc-abnor/dist/index","wxc-countdown":"/packages/@minui/wxc-countdown/dist/index","wxc-counter":"/packages/@minui/wxc-counter/dist/index","wxc-loading":"/packages/@minui/wxc-loading/dist/index","wxc-mask":"/packages/@minui/wxc-mask/dist/index","wxc-steps":"/packages/@minui/wxc-steps/dist/index","wxc-tab":"/packages/@minui/wxc-tab/dist/index","wxc-tab-panel":"/packages/@minui/wxc-tab/dist/panel","wxc-tab-label":"/packages/@minui/wxc-tab/dist/label","wxc-dialog":"/packages/@minui/wxc-dialog/dist/index","wxc-popup":"/packages/@minui/wxc-popup/dist/index","wxc-toast":"/packages/@minui/wxc-toast/dist/index"}},n.$repeat={},n.$props={"cp-order-list":{"xmlns:v-bind":"","v-bind:datalist.once":"orderList"}},n.$events={},n.components={"cp-order-list":_orderList2.default},n.mixins=[_colors2.default],n.data={activeKey:0,orderTabs:[{id:0,title:"全部",badge:0,content:"全部"},{id:1,title:"待付款",badge:0,content:"待付款"},{id:2,title:"待发货",badge:0,content:"待发货"},{id:3,title:"待收货",badge:0,content:"待收货"},{id:4,title:"已完成",badge:0,content:"已完成"}],orderList:__ORDER_DATA__},n.computed={},n.methods={onTabClick:function(e){var t=this.activeKey,i=e.currentTarget.dataset.id;i!=t&&(this.activeKey=i,this.orderList=__ORDER_DATA__,console.log("执行数据更新"))}},n.events={},c=i,_possibleConstructorReturn(n,c)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e){try{this.activeKey=Number(e.type)}catch(e){}}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(OrderList,"pages/order/list"));