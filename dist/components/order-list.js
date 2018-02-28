'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../utils/index.js');

var _orderGoods = require('./order-goods.js');

var _orderGoods2 = _interopRequireDefault(_orderGoods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var w = 750;
var winRtio = _wepy2.default.getSystemInfoSync().windowWidth / w;

var OrderListItem = function (_wepy$component) {
    _inherits(OrderListItem, _wepy$component);

    function OrderListItem() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, OrderListItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderListItem.__proto__ || Object.getPrototypeOf(OrderListItem)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = { "order": { "com": "cp-order-goods", "props": "goods" } }, _this.$props = { "cp-order-goods": { "xmlns:v-bind": { "value": "", "for": "order.goods", "item": "goods", "index": "gindex", "key": "gid" }, "v-bind:goods.once": { "value": "goods", "type": "item", "for": "order.goods", "item": "goods", "index": "gindex", "key": "gid" } } }, _this.$events = {}, _this.components = {
            'cp-order-goods': _orderGoods2.default
        }, _this.props = {
            datalist: {
                type: Array,
                default: null,
                coerce: function coerce(val) {
                    console.log('coerce datalist', val);
                    if (val) {
                        return val.map(function (item) {
                            var statusText = (0, _utils.status2str)(item.status, 'order');
                            return Object.assign({}, item, { statusText: statusText });
                        });
                    }
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(OrderListItem, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return OrderListItem;
}(_wepy2.default.component);

exports.default = OrderListItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWxpc3QuanMiXSwibmFtZXMiOlsidyIsIndpblJ0aW8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwiT3JkZXJMaXN0SXRlbSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInByb3BzIiwiZGF0YWxpc3QiLCJ0eXBlIiwiQXJyYXkiLCJkZWZhdWx0IiwiY29lcmNlIiwidmFsIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInN0YXR1c1RleHQiLCJpdGVtIiwic3RhdHVzIiwiT2JqZWN0IiwiYXNzaWduIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQVY7QUFDQSxJQUFNQyxVQUFVLGVBQUtDLGlCQUFMLEdBQXlCQyxXQUF6QixHQUF1Q0gsQ0FBdkQ7O0lBRXFCSSxhOzs7Ozs7Ozs7Ozs7Ozt3TUFDbEJDLE8sR0FBVSxFQUFDLFNBQVEsRUFBQyxPQUFNLGdCQUFQLEVBQXdCLFNBQVEsT0FBaEMsRUFBVCxFLFFBQ2JDLE0sR0FBUyxFQUFDLGtCQUFpQixFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxhQUFsQixFQUFnQyxRQUFPLE9BQXZDLEVBQStDLFNBQVEsUUFBdkQsRUFBZ0UsT0FBTSxLQUF0RSxFQUFoQixFQUE2RixxQkFBb0IsRUFBQyxTQUFRLE9BQVQsRUFBaUIsUUFBTyxNQUF4QixFQUErQixPQUFNLGFBQXJDLEVBQW1ELFFBQU8sT0FBMUQsRUFBa0UsU0FBUSxRQUExRSxFQUFtRixPQUFNLEtBQXpGLEVBQWpILEVBQWxCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ047QUFETSxTLFFBSVZDLEssR0FBUTtBQUNKQyxzQkFBVTtBQUNOQyxzQkFBTUMsS0FEQTtBQUVOQyx5QkFBUyxJQUZIO0FBR05DLHNCQUhNLGtCQUdFQyxHQUhGLEVBR087QUFDVEMsNEJBQVFDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkYsR0FBL0I7QUFDQSx3QkFBR0EsR0FBSCxFQUFRO0FBQ0osK0JBQU9BLElBQUlHLEdBQUosQ0FBUSxnQkFBUTtBQUNuQixnQ0FBSUMsYUFBYSx1QkFBV0MsS0FBS0MsTUFBaEIsRUFBd0IsT0FBeEIsQ0FBakI7QUFDQSxtQ0FBT0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JILElBQWxCLEVBQXdCLEVBQUNELHNCQUFELEVBQXhCLENBQVA7QUFDSCx5QkFITSxDQUFQO0FBSUg7QUFDSjtBQVhLO0FBRE4sUzs7Ozs7aUNBZ0JBLENBQ1A7Ozs7RUF6QnNDLGVBQUtLLFM7O2tCQUEzQnBCLGEiLCJmaWxlIjoib3JkZXItbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgeyBzdGF0dXMyc3RyIH0gZnJvbSAnQC91dGlscydcclxuaW1wb3J0IG9yZGVyR29vZHMgZnJvbSAnQC9jb21wb25lbnRzL29yZGVyLWdvb2RzJ1xyXG5cclxuY29uc3QgdyA9IDc1MFxyXG5jb25zdCB3aW5SdGlvID0gd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoIC8gd1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJMaXN0SXRlbSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgJHJlcGVhdCA9IHtcIm9yZGVyXCI6e1wiY29tXCI6XCJjcC1vcmRlci1nb29kc1wiLFwicHJvcHNcIjpcImdvb2RzXCJ9fTtcclxuJHByb3BzID0ge1wiY3Atb3JkZXItZ29vZHNcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcIm9yZGVyLmdvb2RzXCIsXCJpdGVtXCI6XCJnb29kc1wiLFwiaW5kZXhcIjpcImdpbmRleFwiLFwia2V5XCI6XCJnaWRcIn0sXCJ2LWJpbmQ6Z29vZHMub25jZVwiOntcInZhbHVlXCI6XCJnb29kc1wiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJvcmRlci5nb29kc1wiLFwiaXRlbVwiOlwiZ29vZHNcIixcImluZGV4XCI6XCJnaW5kZXhcIixcImtleVwiOlwiZ2lkXCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgJ2NwLW9yZGVyLWdvb2RzJzogb3JkZXJHb29kc1xyXG4gICAgfVxyXG5cclxuICAgIHByb3BzID0ge1xyXG4gICAgICAgIGRhdGFsaXN0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICBjb2VyY2UgKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvZXJjZSBkYXRhbGlzdCcsIHZhbClcclxuICAgICAgICAgICAgICAgIGlmKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhdHVzVGV4dCA9IHN0YXR1czJzdHIoaXRlbS5zdGF0dXMsICdvcmRlcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7c3RhdHVzVGV4dH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgIH1cclxufVxyXG5cclxuIl19