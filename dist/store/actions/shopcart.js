"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getShopBuyList=exports.checkAllShopCart=exports.checkOneShopCart=exports.setShopCart=exports.delShopCart=exports.addShopCart=exports.getShopCart=void 0;var _wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_reduxActions=require("./../../npm/redux-actions/lib/index.js"),_shopcart=require("./../types/shopcart.js"),getShopCart=exports.getShopCart=(0,_reduxActions.createAction)(_shopcart.GET_SHOP_CART,function(e){return new Promise(function(t,r){t(e)})}),addShopCart=exports.addShopCart=(0,_reduxActions.createAction)(_shopcart.ADD_SHOP_CART,function(e){return new Promise(function(t,r){t(e)})}),delShopCart=exports.delShopCart=(0,_reduxActions.createAction)(_shopcart.DEL_SHOP_CART,function(e){return new Promise(function(t,r){t(e)})}),setShopCart=exports.setShopCart=(0,_reduxActions.createAction)(_shopcart.SET_SHOP_CART,function(e){return new Promise(function(t,r){t(e)})}),checkOneShopCart=exports.checkOneShopCart=(0,_reduxActions.createAction)(_shopcart.CHECK_ONE_SHOP_CART,function(e){return new Promise(function(t,r){t(e)})}),checkAllShopCart=exports.checkAllShopCart=(0,_reduxActions.createAction)(_shopcart.CHECK_ALL_SHOP_CART,function(e){return new Promise(function(t,r){t(e)})}),getShopBuyList=exports.getShopBuyList=(0,_reduxActions.createAction)(_shopcart.GET_BUY_LIST,function(e){return new Promise(function(t,r){t(e)})});