"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(exports,"__esModule",{value:!0});var _handleActions,_handleActions2,_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_reduxActions=require("./../../npm/redux-actions/lib/index.js"),_shopcart=require("./../types/shopcart.js"),initState=[{uid:1,commodityList:[]}],todo=(0,_reduxActions.handleActions)((_handleActions={},_defineProperty(_handleActions,_shopcart.GET_SHOP_CART,function(t,e){var n=e.payload;return{uid:n.uid,commodity:n.commodity||null}}),_defineProperty(_handleActions,_shopcart.ADD_SHOP_CART,function(t,e){var n=e.payload,o=n.uid,r=n.commodity;return t.uid!==o?{uid:o,commodityList:[r]}:{uid:o,commodityList:[].concat(_toConsumableArray(t.commodityList),[r])}}),_defineProperty(_handleActions,_shopcart.DEL_SHOP_CART,function(t,e){var n=e.payload,o=n.uid;n.commodity;if(t.uid===o)try{var r=t.commodityList.concat([]),i=r.findIndex(function(t){return t.id==id});return r.splice(i,1),{uid:o,commodityList:r}}catch(t){}}),_handleActions),{}),todos=(0,_reduxActions.handleActions)((_handleActions2={},_defineProperty(_handleActions2,_shopcart.GET_SHOP_CART,function(t,e){return console.log("getShopart reducers",t),t}),_defineProperty(_handleActions2,_shopcart.SET_SHOP_CART,function(t,e){}),_defineProperty(_handleActions2,_shopcart.ADD_SHOP_CART,function(t,e){return t.find(function(t){return t.uid===e.payload.uid})?t.map(function(t){return todo(t,e)}):[].concat(_toConsumableArray(t),[e.payload])}),_defineProperty(_handleActions2,_shopcart.DEL_SHOP_CART,function(t,e){return t.map(function(t){return todo(t,e)})}),_handleActions2),initState);exports.default=todos;