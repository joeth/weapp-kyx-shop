"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _redux=require("./../../npm/redux/lib/index.js"),_shopcart=require("./shopcart.js"),_shopcart2=_interopRequireDefault(_shopcart);exports.default=(0,_redux.combineReducers)({shopcart:_shopcart2.default});