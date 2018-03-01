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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderListItem.__proto__ || Object.getPrototypeOf(OrderListItem)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = { "order": { "com": "cp-order-goods", "props": "goods" } }, _this.$props = { "cp-order-goods": { "xmlns:v-bind": { "value": "", "for": "order.goodsList", "item": "goods", "index": "index", "key": "gid" }, "v-bind:goods.once": { "value": "goods", "type": "item", "for": "order.goodsList", "item": "goods", "index": "index", "key": "gid" } } }, _this.$events = {}, _this.components = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWxpc3QuanMiXSwibmFtZXMiOlsidyIsIndpblJ0aW8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwiT3JkZXJMaXN0SXRlbSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInByb3BzIiwiZGF0YWxpc3QiLCJ0eXBlIiwiQXJyYXkiLCJkZWZhdWx0IiwiY29lcmNlIiwidmFsIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInN0YXR1c1RleHQiLCJpdGVtIiwic3RhdHVzIiwiT2JqZWN0IiwiYXNzaWduIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQVY7QUFDQSxJQUFNQyxVQUFVLGVBQUtDLGlCQUFMLEdBQXlCQyxXQUF6QixHQUF1Q0gsQ0FBdkQ7O0lBRXFCSSxhOzs7Ozs7Ozs7Ozs7Ozt3TUFDbEJDLE8sR0FBVSxFQUFDLFNBQVEsRUFBQyxPQUFNLGdCQUFQLEVBQXdCLFNBQVEsT0FBaEMsRUFBVCxFLFFBQ2JDLE0sR0FBUyxFQUFDLGtCQUFpQixFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxpQkFBbEIsRUFBb0MsUUFBTyxPQUEzQyxFQUFtRCxTQUFRLE9BQTNELEVBQW1FLE9BQU0sS0FBekUsRUFBaEIsRUFBZ0cscUJBQW9CLEVBQUMsU0FBUSxPQUFULEVBQWlCLFFBQU8sTUFBeEIsRUFBK0IsT0FBTSxpQkFBckMsRUFBdUQsUUFBTyxPQUE5RCxFQUFzRSxTQUFRLE9BQTlFLEVBQXNGLE9BQU0sS0FBNUYsRUFBcEgsRUFBbEIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDTjtBQURNLFMsUUFJVkMsSyxHQUFRO0FBQ0pDLHNCQUFVO0FBQ05DLHNCQUFNQyxLQURBO0FBRU5DLHlCQUFTLElBRkg7QUFHTkMsc0JBSE0sa0JBR0VDLEdBSEYsRUFHTztBQUNUQyw0QkFBUUMsR0FBUixDQUFZLGlCQUFaLEVBQStCRixHQUEvQjtBQUNBLHdCQUFHQSxHQUFILEVBQVE7QUFDSiwrQkFBT0EsSUFBSUcsR0FBSixDQUFRLGdCQUFRO0FBQ25CLGdDQUFJQyxhQUFhLHVCQUFXQyxLQUFLQyxNQUFoQixFQUF3QixPQUF4QixDQUFqQjtBQUNBLG1DQUFPQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkgsSUFBbEIsRUFBd0IsRUFBQ0Qsc0JBQUQsRUFBeEIsQ0FBUDtBQUNILHlCQUhNLENBQVA7QUFJSDtBQUNKO0FBWEs7QUFETixTOzs7OztpQ0FnQkEsQ0FDUDs7OztFQXpCc0MsZUFBS0ssUzs7a0JBQTNCcEIsYSIsImZpbGUiOiJvcmRlci1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IHN0YXR1czJzdHIgfSBmcm9tICdAL3V0aWxzJ1xyXG5pbXBvcnQgb3JkZXJHb29kcyBmcm9tICdAL2NvbXBvbmVudHMvb3JkZXItZ29vZHMnXHJcblxyXG5jb25zdCB3ID0gNzUwXHJcbmNvbnN0IHdpblJ0aW8gPSB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGggLyB3XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckxpc3RJdGVtIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAkcmVwZWF0ID0ge1wib3JkZXJcIjp7XCJjb21cIjpcImNwLW9yZGVyLWdvb2RzXCIsXCJwcm9wc1wiOlwiZ29vZHNcIn19O1xyXG4kcHJvcHMgPSB7XCJjcC1vcmRlci1nb29kc1wiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwib3JkZXIuZ29vZHNMaXN0XCIsXCJpdGVtXCI6XCJnb29kc1wiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImdpZFwifSxcInYtYmluZDpnb29kcy5vbmNlXCI6e1widmFsdWVcIjpcImdvb2RzXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcIm9yZGVyLmdvb2RzTGlzdFwiLFwiaXRlbVwiOlwiZ29vZHNcIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJnaWRcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICAnY3Atb3JkZXItZ29vZHMnOiBvcmRlckdvb2RzXHJcbiAgICB9XHJcblxyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgICAgZGF0YWxpc3Q6IHtcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIGNvZXJjZSAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29lcmNlIGRhdGFsaXN0JywgdmFsKVxyXG4gICAgICAgICAgICAgICAgaWYodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0dXNUZXh0ID0gc3RhdHVzMnN0cihpdGVtLnN0YXR1cywgJ29yZGVyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtzdGF0dXNUZXh0fSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpe1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=