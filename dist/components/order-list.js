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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderListItem.__proto__ || Object.getPrototypeOf(OrderListItem)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = { "order": { "com": "cp-order-commodity", "props": "commodity" } }, _this.$props = { "cp-order-commodity": { "xmlns:v-bind": { "value": "", "for": "order.commodityList", "item": "commodity", "index": "index", "key": "cid" }, "v-bind:commodity.once": { "value": "commodity", "type": "item", "for": "order.commodityList", "item": "commodity", "index": "index", "key": "cid" } } }, _this.$events = {}, _this.components = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWxpc3QuanMiXSwibmFtZXMiOlsidyIsIndpblJ0aW8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwiT3JkZXJMaXN0SXRlbSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInByb3BzIiwiZGF0YWxpc3QiLCJ0eXBlIiwiQXJyYXkiLCJkZWZhdWx0IiwiY29lcmNlIiwidmFsIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInN0YXR1c1RleHQiLCJpdGVtIiwic3RhdHVzIiwiT2JqZWN0IiwiYXNzaWduIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQVY7QUFDQSxJQUFNQyxVQUFVLGVBQUtDLGlCQUFMLEdBQXlCQyxXQUF6QixHQUF1Q0gsQ0FBdkQ7O0lBRXFCSSxhOzs7Ozs7Ozs7Ozs7Ozt3TUFFbEJDLE8sR0FBVSxFQUFDLFNBQVEsRUFBQyxPQUFNLG9CQUFQLEVBQTRCLFNBQVEsV0FBcEMsRUFBVCxFLFFBQ2JDLE0sR0FBUyxFQUFDLHNCQUFxQixFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxxQkFBbEIsRUFBd0MsUUFBTyxXQUEvQyxFQUEyRCxTQUFRLE9BQW5FLEVBQTJFLE9BQU0sS0FBakYsRUFBaEIsRUFBd0cseUJBQXdCLEVBQUMsU0FBUSxXQUFULEVBQXFCLFFBQU8sTUFBNUIsRUFBbUMsT0FBTSxxQkFBekMsRUFBK0QsUUFBTyxXQUF0RSxFQUFrRixTQUFRLE9BQTFGLEVBQWtHLE9BQU0sS0FBeEcsRUFBaEksRUFBdEIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDTjtBQURNLFMsUUFJVkMsSyxHQUFRO0FBQ0pDLHNCQUFVO0FBQ05DLHNCQUFNQyxLQURBO0FBRU5DLHlCQUFTLElBRkg7QUFHTkMsc0JBSE0sa0JBR0VDLEdBSEYsRUFHTztBQUNUQyw0QkFBUUMsR0FBUixDQUFZLGlCQUFaLEVBQStCRixHQUEvQjtBQUNBLHdCQUFHQSxHQUFILEVBQVE7QUFDSiwrQkFBT0EsSUFBSUcsR0FBSixDQUFRLGdCQUFRO0FBQ25CLGdDQUFJQyxhQUFhLHVCQUFXQyxLQUFLQyxNQUFoQixFQUF3QixPQUF4QixDQUFqQjtBQUNBLG1DQUFPQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkgsSUFBbEIsRUFBd0IsRUFBQ0Qsc0JBQUQsRUFBeEIsQ0FBUDtBQUNILHlCQUhNLENBQVA7QUFJSDtBQUNKO0FBWEs7QUFETixTOzs7OztpQ0FnQkEsQ0FDUDs7OztFQTFCc0MsZUFBS0ssUzs7a0JBQTNCcEIsYSIsImZpbGUiOiJvcmRlci1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IHN0YXR1czJzdHIgfSBmcm9tICdAL3V0aWxzJ1xyXG5pbXBvcnQgb3JkZXJDb21tb2RpdHkgZnJvbSAnQC9jb21wb25lbnRzL29yZGVyLWNvbW1vZGl0eSdcclxuXHJcbmNvbnN0IHcgPSA3NTBcclxuY29uc3Qgd2luUnRpbyA9IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCAvIHdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyTGlzdEl0ZW0gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcblxyXG4gICAkcmVwZWF0ID0ge1wib3JkZXJcIjp7XCJjb21cIjpcImNwLW9yZGVyLWNvbW1vZGl0eVwiLFwicHJvcHNcIjpcImNvbW1vZGl0eVwifX07XHJcbiRwcm9wcyA9IHtcImNwLW9yZGVyLWNvbW1vZGl0eVwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwib3JkZXIuY29tbW9kaXR5TGlzdFwiLFwiaXRlbVwiOlwiY29tbW9kaXR5XCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiY2lkXCJ9LFwidi1iaW5kOmNvbW1vZGl0eS5vbmNlXCI6e1widmFsdWVcIjpcImNvbW1vZGl0eVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJvcmRlci5jb21tb2RpdHlMaXN0XCIsXCJpdGVtXCI6XCJjb21tb2RpdHlcIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJjaWRcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICAnY3Atb3JkZXItY29tbW9kaXR5Jzogb3JkZXJDb21tb2RpdHlcclxuICAgIH1cclxuXHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgICBkYXRhbGlzdDoge1xyXG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgY29lcmNlICh2YWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb2VyY2UgZGF0YWxpc3QnLCB2YWwpXHJcbiAgICAgICAgICAgICAgICBpZih2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXR1c1RleHQgPSBzdGF0dXMyc3RyKGl0ZW0uc3RhdHVzLCAnb3JkZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwge3N0YXR1c1RleHR9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==