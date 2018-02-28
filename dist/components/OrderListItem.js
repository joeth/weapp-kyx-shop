'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _itemOrderGoods = require('./item-order-goods.js');

var _itemOrderGoods2 = _interopRequireDefault(_itemOrderGoods);

var _utils = require('./../utils/index.js');

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderListItem.__proto__ || Object.getPrototypeOf(OrderListItem)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = { "order": { "com": "ItemOrderGoods", "props": "goods" } }, _this.$props = { "ItemOrderGoods": { "xmlns:v-bind": { "value": "", "for": "order.goods", "item": "goods", "index": "gindex", "key": "gid" }, "v-bind:goods.once": { "value": "goods", "type": "item", "for": "order.goods", "item": "goods", "index": "gindex", "key": "gid" } } }, _this.$events = {}, _this.components = {
            ItemOrderGoods: _itemOrderGoods2.default
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk9yZGVyTGlzdEl0ZW0uanMiXSwibmFtZXMiOlsidyIsIndpblJ0aW8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwiT3JkZXJMaXN0SXRlbSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkl0ZW1PcmRlckdvb2RzIiwicHJvcHMiLCJkYXRhbGlzdCIsInR5cGUiLCJBcnJheSIsImRlZmF1bHQiLCJjb2VyY2UiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwibWFwIiwic3RhdHVzVGV4dCIsIml0ZW0iLCJzdGF0dXMiLCJPYmplY3QiLCJhc3NpZ24iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBVjtBQUNBLElBQU1DLFVBQVUsZUFBS0MsaUJBQUwsR0FBeUJDLFdBQXpCLEdBQXVDSCxDQUF2RDs7SUFFcUJJLGE7Ozs7Ozs7Ozs7Ozs7O3dNQUNsQkMsTyxHQUFVLEVBQUMsU0FBUSxFQUFDLE9BQU0sZ0JBQVAsRUFBd0IsU0FBUSxPQUFoQyxFQUFULEUsUUFDYkMsTSxHQUFTLEVBQUMsa0JBQWlCLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLGFBQWxCLEVBQWdDLFFBQU8sT0FBdkMsRUFBK0MsU0FBUSxRQUF2RCxFQUFnRSxPQUFNLEtBQXRFLEVBQWhCLEVBQTZGLHFCQUFvQixFQUFDLFNBQVEsT0FBVCxFQUFpQixRQUFPLE1BQXhCLEVBQStCLE9BQU0sYUFBckMsRUFBbUQsUUFBTyxPQUExRCxFQUFrRSxTQUFRLFFBQTFFLEVBQW1GLE9BQU0sS0FBekYsRUFBakgsRUFBbEIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDTkM7QUFETSxTLFFBSVZDLEssR0FBUTtBQUNKQyxzQkFBVTtBQUNOQyxzQkFBTUMsS0FEQTtBQUVOQyx5QkFBUyxJQUZIO0FBR05DLHNCQUhNLGtCQUdFQyxHQUhGLEVBR087QUFDVEMsNEJBQVFDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkYsR0FBL0I7QUFDQSx3QkFBR0EsR0FBSCxFQUFRO0FBQ0osK0JBQU9BLElBQUlHLEdBQUosQ0FBUSxnQkFBUTtBQUNuQixnQ0FBSUMsYUFBYSx1QkFBV0MsS0FBS0MsTUFBaEIsRUFBd0IsT0FBeEIsQ0FBakI7QUFDQSxtQ0FBT0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JILElBQWxCLEVBQXdCLEVBQUNELHNCQUFELEVBQXhCLENBQVA7QUFDSCx5QkFITSxDQUFQO0FBSUg7QUFDSjtBQVhLO0FBRE4sUzs7Ozs7aUNBZ0JBLENBQ1A7Ozs7RUF6QnNDLGVBQUtLLFM7O2tCQUEzQnJCLGEiLCJmaWxlIjoiT3JkZXJMaXN0SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgSXRlbU9yZGVyR29vZHMgZnJvbSAnQC9jb21wb25lbnRzL2l0ZW0tb3JkZXItZ29vZHMnXHJcbmltcG9ydCB7IHN0YXR1czJzdHIgfSBmcm9tICdAL3V0aWxzJ1xyXG5cclxuY29uc3QgdyA9IDc1MFxyXG5jb25zdCB3aW5SdGlvID0gd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoIC8gd1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJMaXN0SXRlbSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgJHJlcGVhdCA9IHtcIm9yZGVyXCI6e1wiY29tXCI6XCJJdGVtT3JkZXJHb29kc1wiLFwicHJvcHNcIjpcImdvb2RzXCJ9fTtcclxuJHByb3BzID0ge1wiSXRlbU9yZGVyR29vZHNcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcIm9yZGVyLmdvb2RzXCIsXCJpdGVtXCI6XCJnb29kc1wiLFwiaW5kZXhcIjpcImdpbmRleFwiLFwia2V5XCI6XCJnaWRcIn0sXCJ2LWJpbmQ6Z29vZHMub25jZVwiOntcInZhbHVlXCI6XCJnb29kc1wiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJvcmRlci5nb29kc1wiLFwiaXRlbVwiOlwiZ29vZHNcIixcImluZGV4XCI6XCJnaW5kZXhcIixcImtleVwiOlwiZ2lkXCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgSXRlbU9yZGVyR29vZHNcclxuICAgIH1cclxuXHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgICBkYXRhbGlzdDoge1xyXG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgY29lcmNlICh2YWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb2VyY2UgZGF0YWxpc3QnLCB2YWwpXHJcbiAgICAgICAgICAgICAgICBpZih2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXR1c1RleHQgPSBzdGF0dXMyc3RyKGl0ZW0uc3RhdHVzLCAnb3JkZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwge3N0YXR1c1RleHR9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==