'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../utils/index.js');

var _orderCommodity = require('./order-commodity.js');

var _orderCommodity2 = _interopRequireDefault(_orderCommodity);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderListItem.__proto__ || Object.getPrototypeOf(OrderListItem)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            usingComponents: {
                'wxc-cc': '../../packages/@minui/wxc-cc/dist/index',
                'wxc-flex': '../../packages/@minui/wxc-flex/dist/index',
                'wxc-tab': '../../packages/@minui/wxc-tab/dist/index',
                'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/panel',
                'wxc-tab-label': '../../packages/@minui/wxc-tab/dist/label',
                'wxc-badge': '../../packages/@minui/wxc-badge/dist/index',
                'wxc-price': '../../packages/@minui/wxc-price/dist/index'
            }
        }, _this.$repeat = { "order": { "com": "cp-order-commodity", "props": "commodity" } }, _this.$props = { "cp-order-commodity": { "xmlns:v-bind": { "value": "", "for": "order.commodityList", "item": "commodity", "index": "index", "key": "cid" }, "v-bind:commodity.once": { "value": "commodity", "type": "item", "for": "order.commodityList", "item": "commodity", "index": "index", "key": "cid" } } }, _this.$events = {}, _this.components = {
            'cp-order-commodity': _orderCommodity2.default
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWxpc3QuanMiXSwibmFtZXMiOlsidyIsIndpblJ0aW8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwiT3JkZXJMaXN0SXRlbSIsImNvbmZpZyIsInVzaW5nQ29tcG9uZW50cyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInByb3BzIiwiZGF0YWxpc3QiLCJ0eXBlIiwiQXJyYXkiLCJkZWZhdWx0IiwiY29lcmNlIiwidmFsIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInN0YXR1c1RleHQiLCJpdGVtIiwic3RhdHVzIiwiT2JqZWN0IiwiYXNzaWduIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQVY7QUFDQSxJQUFNQyxVQUFVLGVBQUtDLGlCQUFMLEdBQXlCQyxXQUF6QixHQUF1Q0gsQ0FBdkQ7O0lBRXFCSSxhOzs7Ozs7Ozs7Ozs7Ozt3TUFDakJDLE0sR0FBUztBQUNMQyw2QkFBaUI7QUFDYiwwQkFBVSx5Q0FERztBQUViLDRCQUFZLDJDQUZDO0FBR2IsMkJBQVcsMENBSEU7QUFJYixpQ0FBaUIsMENBSko7QUFLYixpQ0FBaUIsMENBTEo7QUFNYiw2QkFBYSw0Q0FOQTtBQU9iLDZCQUFhO0FBUEE7QUFEWixTLFFBWVZDLE8sR0FBVSxFQUFDLFNBQVEsRUFBQyxPQUFNLG9CQUFQLEVBQTRCLFNBQVEsV0FBcEMsRUFBVCxFLFFBQ2JDLE0sR0FBUyxFQUFDLHNCQUFxQixFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxxQkFBbEIsRUFBd0MsUUFBTyxXQUEvQyxFQUEyRCxTQUFRLE9BQW5FLEVBQTJFLE9BQU0sS0FBakYsRUFBaEIsRUFBd0cseUJBQXdCLEVBQUMsU0FBUSxXQUFULEVBQXFCLFFBQU8sTUFBNUIsRUFBbUMsT0FBTSxxQkFBekMsRUFBK0QsUUFBTyxXQUF0RSxFQUFrRixTQUFRLE9BQTFGLEVBQWtHLE9BQU0sS0FBeEcsRUFBaEksRUFBdEIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDTjtBQURNLFMsUUFJVkMsSyxHQUFRO0FBQ0pDLHNCQUFVO0FBQ05DLHNCQUFNQyxLQURBO0FBRU5DLHlCQUFTLElBRkg7QUFHTkMsc0JBSE0sa0JBR0VDLEdBSEYsRUFHTztBQUNUQyw0QkFBUUMsR0FBUixDQUFZLGlCQUFaLEVBQStCRixHQUEvQjtBQUNBLHdCQUFHQSxHQUFILEVBQVE7QUFDSiwrQkFBT0EsSUFBSUcsR0FBSixDQUFRLGdCQUFRO0FBQ25CLGdDQUFJQyxhQUFhLHVCQUFXQyxLQUFLQyxNQUFoQixFQUF3QixPQUF4QixDQUFqQjtBQUNBLG1DQUFPQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkgsSUFBbEIsRUFBd0IsRUFBQ0Qsc0JBQUQsRUFBeEIsQ0FBUDtBQUNILHlCQUhNLENBQVA7QUFJSDtBQUNKO0FBWEs7QUFETixTOzs7OztpQ0FnQkEsQ0FDUDs7OztFQXJDc0MsZUFBS0ssUzs7a0JBQTNCdEIsYSIsImZpbGUiOiJvcmRlci1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgc3RhdHVzMnN0ciB9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQgb3JkZXJDb21tb2RpdHkgZnJvbSAnQC9jb21wb25lbnRzL29yZGVyLWNvbW1vZGl0eSdcblxuY29uc3QgdyA9IDc1MFxuY29uc3Qgd2luUnRpbyA9IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCAvIHdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJMaXN0SXRlbSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBjb25maWcgPSB7XG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3d4Yy1jYyc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWNjL2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy1mbGV4JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZmxleC9kaXN0L2luZGV4JyxcbiAgICAgICAgICAgICd3eGMtdGFiJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy10YWItcGFuZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9wYW5lbCcsXG4gICAgICAgICAgICAnd3hjLXRhYi1sYWJlbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2xhYmVsJyxcbiAgICAgICAgICAgICd3eGMtYmFkZ2UnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1iYWRnZS9kaXN0L2luZGV4JyxcbiAgICAgICAgICAgICd3eGMtcHJpY2UnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1wcmljZS9kaXN0L2luZGV4JyxcbiAgICAgICAgfVxuICAgIH1cblxuICAgJHJlcGVhdCA9IHtcIm9yZGVyXCI6e1wiY29tXCI6XCJjcC1vcmRlci1jb21tb2RpdHlcIixcInByb3BzXCI6XCJjb21tb2RpdHlcIn19O1xyXG4kcHJvcHMgPSB7XCJjcC1vcmRlci1jb21tb2RpdHlcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcIm9yZGVyLmNvbW1vZGl0eUxpc3RcIixcIml0ZW1cIjpcImNvbW1vZGl0eVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImNpZFwifSxcInYtYmluZDpjb21tb2RpdHkub25jZVwiOntcInZhbHVlXCI6XCJjb21tb2RpdHlcIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwib3JkZXIuY29tbW9kaXR5TGlzdFwiLFwiaXRlbVwiOlwiY29tbW9kaXR5XCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiY2lkXCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICdjcC1vcmRlci1jb21tb2RpdHknOiBvcmRlckNvbW1vZGl0eVxuICAgIH1cblxuICAgIHByb3BzID0ge1xuICAgICAgICBkYXRhbGlzdDoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgY29lcmNlICh2YWwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29lcmNlIGRhdGFsaXN0JywgdmFsKVxuICAgICAgICAgICAgICAgIGlmKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0dXNUZXh0ID0gc3RhdHVzMnN0cihpdGVtLnN0YXR1cywgJ29yZGVyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7c3RhdHVzVGV4dH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKCl7XG4gICAgfVxufVxuXG4iXX0=