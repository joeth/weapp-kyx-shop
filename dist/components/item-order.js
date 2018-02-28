'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _itemOrderGoods = require('./item-order-goods.js');

var _itemOrderGoods2 = _interopRequireDefault(_itemOrderGoods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var w = 750;
var winRtio = _wepy2.default.getSystemInfoSync().windowWidth / w;

var ItemOrder = function (_wepy$component) {
    _inherits(ItemOrder, _wepy$component);

    function ItemOrder() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ItemOrder);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ItemOrder.__proto__ || Object.getPrototypeOf(ItemOrder)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = { "order": { "com": "ItemOrderGoods", "props": "goods" } }, _this.$props = { "ItemOrderGoods": { "xmlns:v-bind": { "value": "", "for": "order.goods", "item": "goods", "index": "gindex", "key": "gid" }, "v-bind:goods.once": { "value": "goods", "type": "item", "for": "order.goods", "item": "goods", "index": "gindex", "key": "gid" } } }, _this.$events = {}, _this.components = {
            ItemOrderGoods: _itemOrderGoods2.default
        }, _this.props = {
            order: {
                type: Object,
                default: null,
                coerce: function coerce(val) {
                    console.log('coerce order', val);
                    var statusText = '';
                    if (val) {
                        switch (val.status) {
                            case 0:
                                statusText = '待付款0';break;
                            case 1:
                                statusText = '待付款1';break;
                            case 2:
                                statusText = '待付款2';break;
                            case 3:
                                statusText = '待付款3';break;
                            case 4:
                                statusText = '待付款4';break;
                            case 5:
                                statusText = '待付款5';break;
                            default:
                                statusText = '已失效';
                        }
                    }
                    return Object.assign({}, val, { statusText: statusText });
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return ItemOrder;
}(_wepy2.default.component);

exports.default = ItemOrder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tb3JkZXIuanMiXSwibmFtZXMiOlsidyIsIndpblJ0aW8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwiSXRlbU9yZGVyIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiSXRlbU9yZGVyR29vZHMiLCJwcm9wcyIsIm9yZGVyIiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJjb2VyY2UiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzVGV4dCIsInN0YXR1cyIsImFzc2lnbiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBVjtBQUNBLElBQU1DLFVBQVUsZUFBS0MsaUJBQUwsR0FBeUJDLFdBQXpCLEdBQXVDSCxDQUF2RDs7SUFFcUJJLFM7Ozs7Ozs7Ozs7Ozs7O2dNQUNsQkMsTyxHQUFVLEVBQUMsU0FBUSxFQUFDLE9BQU0sZ0JBQVAsRUFBd0IsU0FBUSxPQUFoQyxFQUFULEUsUUFDYkMsTSxHQUFTLEVBQUMsa0JBQWlCLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLGFBQWxCLEVBQWdDLFFBQU8sT0FBdkMsRUFBK0MsU0FBUSxRQUF2RCxFQUFnRSxPQUFNLEtBQXRFLEVBQWhCLEVBQTZGLHFCQUFvQixFQUFDLFNBQVEsT0FBVCxFQUFpQixRQUFPLE1BQXhCLEVBQStCLE9BQU0sYUFBckMsRUFBbUQsUUFBTyxPQUExRCxFQUFrRSxTQUFRLFFBQTFFLEVBQW1GLE9BQU0sS0FBekYsRUFBakgsRUFBbEIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDTkM7QUFETSxTLFFBSVZDLEssR0FBUTtBQUNKQyxtQkFBTztBQUNIQyxzQkFBTUMsTUFESDtBQUVIQyx5QkFBUyxJQUZOO0FBR0hDLHNCQUhHLGtCQUdLQyxHQUhMLEVBR1U7QUFDVEMsNEJBQVFDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCRixHQUE1QjtBQUNBLHdCQUFJRyxhQUFhLEVBQWpCO0FBQ0Esd0JBQUdILEdBQUgsRUFBUTtBQUNKLGdDQUFPQSxJQUFJSSxNQUFYO0FBQ0ksaUNBQUssQ0FBTDtBQUFTRCw2Q0FBYSxNQUFiLENBQXFCO0FBQzlCLGlDQUFLLENBQUw7QUFBU0EsNkNBQWEsTUFBYixDQUFxQjtBQUM5QixpQ0FBSyxDQUFMO0FBQVNBLDZDQUFhLE1BQWIsQ0FBcUI7QUFDOUIsaUNBQUssQ0FBTDtBQUFTQSw2Q0FBYSxNQUFiLENBQXFCO0FBQzlCLGlDQUFLLENBQUw7QUFBU0EsNkNBQWEsTUFBYixDQUFxQjtBQUM5QixpQ0FBSyxDQUFMO0FBQVNBLDZDQUFhLE1BQWIsQ0FBcUI7QUFDOUI7QUFBU0EsNkNBQWEsS0FBYjtBQVBiO0FBU0g7QUFDRCwyQkFBT04sT0FBT1EsTUFBUCxDQUFjLEVBQWQsRUFBa0JMLEdBQWxCLEVBQXVCLEVBQUNHLHNCQUFELEVBQXZCLENBQVA7QUFDSDtBQWxCRTtBQURILFM7Ozs7RUFSMkIsZUFBS0csUzs7a0JBQXZCbEIsUyIsImZpbGUiOiJpdGVtLW9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IEl0ZW1PcmRlckdvb2RzIGZyb20gJ0AvY29tcG9uZW50cy9pdGVtLW9yZGVyLWdvb2RzJ1xuXG5jb25zdCB3ID0gNzUwXG5jb25zdCB3aW5SdGlvID0gd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoIC8gd1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtT3JkZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAkcmVwZWF0ID0ge1wib3JkZXJcIjp7XCJjb21cIjpcIkl0ZW1PcmRlckdvb2RzXCIsXCJwcm9wc1wiOlwiZ29vZHNcIn19O1xyXG4kcHJvcHMgPSB7XCJJdGVtT3JkZXJHb29kc1wiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwib3JkZXIuZ29vZHNcIixcIml0ZW1cIjpcImdvb2RzXCIsXCJpbmRleFwiOlwiZ2luZGV4XCIsXCJrZXlcIjpcImdpZFwifSxcInYtYmluZDpnb29kcy5vbmNlXCI6e1widmFsdWVcIjpcImdvb2RzXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcIm9yZGVyLmdvb2RzXCIsXCJpdGVtXCI6XCJnb29kc1wiLFwiaW5kZXhcIjpcImdpbmRleFwiLFwia2V5XCI6XCJnaWRcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgSXRlbU9yZGVyR29vZHNcbiAgICB9XG5cbiAgICBwcm9wcyA9IHtcbiAgICAgICAgb3JkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICBjb2VyY2UgKHZhbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb2VyY2Ugb3JkZXInLCB2YWwpXG4gICAgICAgICAgICAgICAgbGV0IHN0YXR1c1RleHQgPSAnJ1xuICAgICAgICAgICAgICAgIGlmKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2godmFsLnN0YXR1cyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDAgOiBzdGF0dXNUZXh0ID0gJ+W+heS7mOasvjAnOyBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMSA6IHN0YXR1c1RleHQgPSAn5b6F5LuY5qy+MSc7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyIDogc3RhdHVzVGV4dCA9ICflvoXku5jmrL4yJzsgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDMgOiBzdGF0dXNUZXh0ID0gJ+W+heS7mOasvjMnOyBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNCA6IHN0YXR1c1RleHQgPSAn5b6F5LuY5qy+NCc7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1IDogc3RhdHVzVGV4dCA9ICflvoXku5jmrL41JzsgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBzdGF0dXNUZXh0ID0gJ+W3suWkseaViCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHZhbCwge3N0YXR1c1RleHR9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0=