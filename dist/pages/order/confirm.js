"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),_dec,_class,_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_input=require("./../../mixins/input.js"),_input2=_interopRequireDefault(_input),_product=require("./../../components/order/product.js"),_product2=_interopRequireDefault(_product),_wepyRedux=require("./../../npm/wepy-redux/lib/index.js"),_actions=require("./../../store/actions/index.js"),store=(0,_wepyRedux.getStore)(),OrderDetail=(_dec=(0,_wepyRedux.connect)({shopBuyList:function(e){return e.shopcart.shopBuyList},totalAmount:function(e){return e.shopcart.totalAmount}}))(_class=function(e){function t(){var e,i,n,o;_classCallCheck(this,t);for(var r=arguments.length,c=Array(r),a=0;a<r;a++)c[a]=arguments[a];return i=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n.config={navigationBarTitleText:"订单详情",usingComponents:{"wxc-cc":"/packages/@minui/wxc-cc/dist/index","wxc-flex":"/packages/@minui/wxc-flex/dist/index","wxc-avatar":"/packages/@minui/wxc-avatar/dist/index","wxc-badge":"/packages/@minui/wxc-badge/dist/index","wxc-elip":"/packages/@minui/wxc-elip/dist/index","wxc-icon":"/packages/@minui/wxc-icon/dist/index","wxc-label":"/packages/@minui/wxc-label/dist/index","wxc-loadmore":"/packages/@minui/wxc-loadmore/dist/index","wxc-abnor":"/packages/@minui/wxc-abnor/dist/index","wxc-countdown":"/packages/@minui/wxc-countdown/dist/index","wxc-counter":"/packages/@minui/wxc-counter/dist/index","wxc-loading":"/packages/@minui/wxc-loading/dist/index","wxc-mask":"/packages/@minui/wxc-mask/dist/index","wxc-steps":"/packages/@minui/wxc-steps/dist/index","wxc-tab":"/packages/@minui/wxc-tab/dist/index","wxc-tab-panel":"/packages/@minui/wxc-tab/dist/panel","wxc-tab-label":"/packages/@minui/wxc-tab/dist/label","wxc-dialog":"/packages/@minui/wxc-dialog/dist/index","wxc-popup":"/packages/@minui/wxc-popup/dist/index","wxc-toast":"/packages/@minui/wxc-toast/dist/index"}},n.$repeat={shopBuyList:{com:"cp-order-product",props:"product"}},n.$props={"cp-order-product":{class:{value:"order-confirm-product",for:"shopBuyList",item:"product",index:"index",key:"product"},"xmlns:v-bind":{value:"",for:"shopBuyList",item:"product",index:"index",key:"product"},"v-bind:product.once":{value:"product",type:"item",for:"shopBuyList",item:"product",index:"index",key:"product"}}},n.$events={},n.components={"cp-order-product":_product2.default},n.mixins=[_input2.default],n.data={message:"",consignee:{},freightAmount:"10.00"},n.methods={tapConsignee:function(){this.consignee&&this.consignee.id?wx.navigateTo({url:"/pages/consignee/list?sid="+this.consignee.id+"&from=order"}):wx.navigateTo({url:"/pages/consignee/edit?from=order"})},formSubmit:function(e){console.log(e.detail.formId),console.log("提交订单"),wx.redirectTo({url:"/pages/order/detail?id=1",success:function(e){var t={uid:1};store.dispatch((0,_actions.removeShopBuyList)(t))}})}},n.computed={actualAmount:function(){var e=NaN!=Number(this.freightAmount)?Number(this.freightAmount):0;return((NaN!=Number(this.totalAmount)?Number(this.totalAmount):0)+e).toFixed(2)}},o=i,_possibleConstructorReturn(n,o)}return _inherits(t,e),_createClass(t,[{key:"getStorageConsignee",value:function(){this.consignee=wx.getStorageSync("__SELECTED_CONSIGNEE__")||this.consignee}},{key:"delStorageConsignee",value:function(){wx.removeStorageSync("__SELECTED_CONSIGNEE__")}},{key:"onLoad",value:function(e){console.log(e);var t={uid:1};store.dispatch((0,_actions.getShopBuyList)(t))}},{key:"onUnload",value:function(){}},{key:"onShow",value:function(e){this.getStorageConsignee()}}]),t}(_wepy2.default.page))||_class;Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(OrderDetail,"pages/order/confirm"));