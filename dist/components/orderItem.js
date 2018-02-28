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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk9yZGVySXRlbS5qcyJdLCJuYW1lcyI6WyJ3Iiwid2luUnRpbyIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJPcmRlckxpc3RJdGVtIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiSXRlbU9yZGVyR29vZHMiLCJwcm9wcyIsImRhdGFsaXN0IiwidHlwZSIsIkFycmF5IiwiZGVmYXVsdCIsImNvZXJjZSIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJzdGF0dXNUZXh0IiwiaXRlbSIsInN0YXR1cyIsIk9iamVjdCIsImFzc2lnbiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFWO0FBQ0EsSUFBTUMsVUFBVSxlQUFLQyxpQkFBTCxHQUF5QkMsV0FBekIsR0FBdUNILENBQXZEOztJQUVxQkksYTs7Ozs7Ozs7Ozs7Ozs7d01BQ2xCQyxPLEdBQVUsRUFBQyxTQUFRLEVBQUMsT0FBTSxnQkFBUCxFQUF3QixTQUFRLE9BQWhDLEVBQVQsRSxRQUNiQyxNLEdBQVMsRUFBQyxrQkFBaUIsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sYUFBbEIsRUFBZ0MsUUFBTyxPQUF2QyxFQUErQyxTQUFRLFFBQXZELEVBQWdFLE9BQU0sS0FBdEUsRUFBaEIsRUFBNkYscUJBQW9CLEVBQUMsU0FBUSxPQUFULEVBQWlCLFFBQU8sTUFBeEIsRUFBK0IsT0FBTSxhQUFyQyxFQUFtRCxRQUFPLE9BQTFELEVBQWtFLFNBQVEsUUFBMUUsRUFBbUYsT0FBTSxLQUF6RixFQUFqSCxFQUFsQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNOQztBQURNLFMsUUFJVkMsSyxHQUFRO0FBQ0pDLHNCQUFVO0FBQ05DLHNCQUFNQyxLQURBO0FBRU5DLHlCQUFTLElBRkg7QUFHTkMsc0JBSE0sa0JBR0VDLEdBSEYsRUFHTztBQUNUQyw0QkFBUUMsR0FBUixDQUFZLGlCQUFaLEVBQStCRixHQUEvQjtBQUNBLHdCQUFHQSxHQUFILEVBQVE7QUFDSiwrQkFBT0EsSUFBSUcsR0FBSixDQUFRLGdCQUFRO0FBQ25CLGdDQUFJQyxhQUFhLHVCQUFXQyxLQUFLQyxNQUFoQixFQUF3QixPQUF4QixDQUFqQjtBQUNBLG1DQUFPQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkgsSUFBbEIsRUFBd0IsRUFBQ0Qsc0JBQUQsRUFBeEIsQ0FBUDtBQUNILHlCQUhNLENBQVA7QUFJSDtBQUNKO0FBWEs7QUFETixTOzs7OztpQ0FnQkEsQ0FDUDs7OztFQXpCc0MsZUFBS0ssUzs7a0JBQTNCckIsYSIsImZpbGUiOiJPcmRlckl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IEl0ZW1PcmRlckdvb2RzIGZyb20gJ0AvY29tcG9uZW50cy9pdGVtLW9yZGVyLWdvb2RzJ1xyXG5pbXBvcnQgeyBzdGF0dXMyc3RyIH0gZnJvbSAnQC91dGlscydcclxuXHJcbmNvbnN0IHcgPSA3NTBcclxuY29uc3Qgd2luUnRpbyA9IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCAvIHdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyTGlzdEl0ZW0gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICRyZXBlYXQgPSB7XCJvcmRlclwiOntcImNvbVwiOlwiSXRlbU9yZGVyR29vZHNcIixcInByb3BzXCI6XCJnb29kc1wifX07XHJcbiRwcm9wcyA9IHtcIkl0ZW1PcmRlckdvb2RzXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJvcmRlci5nb29kc1wiLFwiaXRlbVwiOlwiZ29vZHNcIixcImluZGV4XCI6XCJnaW5kZXhcIixcImtleVwiOlwiZ2lkXCJ9LFwidi1iaW5kOmdvb2RzLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiZ29vZHNcIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwib3JkZXIuZ29vZHNcIixcIml0ZW1cIjpcImdvb2RzXCIsXCJpbmRleFwiOlwiZ2luZGV4XCIsXCJrZXlcIjpcImdpZFwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgIEl0ZW1PcmRlckdvb2RzXHJcbiAgICB9XHJcblxyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgICAgZGF0YWxpc3Q6IHtcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIGNvZXJjZSAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29lcmNlIGRhdGFsaXN0JywgdmFsKVxyXG4gICAgICAgICAgICAgICAgaWYodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0dXNUZXh0ID0gc3RhdHVzMnN0cihpdGVtLnN0YXR1cywgJ29yZGVyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtzdGF0dXNUZXh0fSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpe1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=