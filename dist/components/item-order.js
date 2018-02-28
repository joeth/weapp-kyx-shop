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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var w = 750;
var winRtio = _wepy2.default.getSystemInfoSync().windowWidth / w;

var __ORDER__ = {
    id: 1,
    code: 'E20180102112200',
    status: 1,
    payStatus: 1,
    pirce: 200.00,
    freight: 0.00,
    goods: [{
        id: 1,
        cover: 'https://t1.picb.cc/uploads/2018/02/22/KGQhG.png',
        title: '云之七味',
        type: '熟茶',
        price: 100.00,
        count: 1
    }, {
        id: 2,
        cover: 'https://t1.picb.cc/uploads/2018/02/22/KGQhG.png',
        title: '云之七味',
        type: '熟茶',
        price: 100.00,
        count: 1
    }]
};

var ItemOrder = function (_wepy$component) {
    _inherits(ItemOrder, _wepy$component);

    function ItemOrder() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ItemOrder);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ItemOrder.__proto__ || Object.getPrototypeOf(ItemOrder)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = { "2": { "com": "ItemOrderGoods", "props": "" } }, _this.$props = { "ItemOrderGoods": { "xmlns:v-bind": { "value": "", "for": "2", "item": "goods", "index": "gindex", "key": "gid" }, "v-bind:goods.once": { "value": "order.goods", "for": "2", "item": "goods", "index": "gindex", "key": "gid" } } }, _this.$events = {}, _this.components = {
            ItemOrderGoods: _itemOrderGoods2.default
        }, _this.props = {
            order: {
                type: Object,
                default: {},
                coerce: function coerce(val) {
                    console.log(val);
                }
            }
        }, _this.data = {}, _this.events = {}, _this.watch = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ItemOrder, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return ItemOrder;
}(_wepy2.default.component);

exports.default = ItemOrder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tb3JkZXIuanMiXSwibmFtZXMiOlsidyIsIndpblJ0aW8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwiX19PUkRFUl9fIiwiaWQiLCJjb2RlIiwic3RhdHVzIiwicGF5U3RhdHVzIiwicGlyY2UiLCJmcmVpZ2h0IiwiZ29vZHMiLCJjb3ZlciIsInRpdGxlIiwidHlwZSIsInByaWNlIiwiY291bnQiLCJJdGVtT3JkZXIiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJJdGVtT3JkZXJHb29kcyIsInByb3BzIiwib3JkZXIiLCJPYmplY3QiLCJkZWZhdWx0IiwiY29lcmNlIiwidmFsIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJldmVudHMiLCJ3YXRjaCIsIm1ldGhvZHMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBVjtBQUNBLElBQU1DLFVBQVUsZUFBS0MsaUJBQUwsR0FBeUJDLFdBQXpCLEdBQXVDSCxDQUF2RDs7QUFFQSxJQUFNSSxZQUFZO0FBQ2RDLFFBQUksQ0FEVTtBQUVkQyxVQUFNLGlCQUZRO0FBR2RDLFlBQVEsQ0FITTtBQUlkQyxlQUFXLENBSkc7QUFLZEMsV0FBTyxNQUxPO0FBTWRDLGFBQVMsSUFOSztBQU9kQyxXQUFPLENBQ0g7QUFDSU4sWUFBSSxDQURSO0FBRUlPLGVBQU8saURBRlg7QUFHSUMsZUFBTyxNQUhYO0FBSUlDLGNBQU0sSUFKVjtBQUtJQyxlQUFPLE1BTFg7QUFNSUMsZUFBTztBQU5YLEtBREcsRUFTSDtBQUNJWCxZQUFJLENBRFI7QUFFSU8sZUFBTyxpREFGWDtBQUdJQyxlQUFPLE1BSFg7QUFJSUMsY0FBTSxJQUpWO0FBS0lDLGVBQU8sTUFMWDtBQU1JQyxlQUFPO0FBTlgsS0FURztBQVBPLENBQWxCOztJQTJCcUJDLFM7Ozs7Ozs7Ozs7Ozs7O2dNQUNsQkMsTyxHQUFVLEVBQUMsS0FBSSxFQUFDLE9BQU0sZ0JBQVAsRUFBd0IsU0FBUSxFQUFoQyxFQUFMLEUsUUFDYkMsTSxHQUFTLEVBQUMsa0JBQWlCLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLEdBQWxCLEVBQXNCLFFBQU8sT0FBN0IsRUFBcUMsU0FBUSxRQUE3QyxFQUFzRCxPQUFNLEtBQTVELEVBQWhCLEVBQW1GLHFCQUFvQixFQUFDLFNBQVEsYUFBVCxFQUF1QixPQUFNLEdBQTdCLEVBQWlDLFFBQU8sT0FBeEMsRUFBZ0QsU0FBUSxRQUF4RCxFQUFpRSxPQUFNLEtBQXZFLEVBQXZHLEVBQWxCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ05DO0FBRE0sUyxRQUlWQyxLLEdBQVE7QUFDSkMsbUJBQU87QUFDSFYsc0JBQU1XLE1BREg7QUFFSEMseUJBQVMsRUFGTjtBQUdIQyxzQkFIRyxrQkFHS0MsR0FITCxFQUdVO0FBQ1RDLDRCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDSDtBQUxFO0FBREgsUyxRQVVSRyxJLEdBQU8sRSxRQUdQQyxNLEdBQVMsRSxRQUdUQyxLLEdBQVEsRSxRQUdSQyxPLEdBQVUsRTs7Ozs7aUNBR0EsQ0FDVDs7OztFQS9Ca0MsZUFBS0MsUzs7a0JBQXZCbEIsUyIsImZpbGUiOiJpdGVtLW9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IEl0ZW1PcmRlckdvb2RzIGZyb20gJ0AvY29tcG9uZW50cy9pdGVtLW9yZGVyLWdvb2RzJ1xuXG5jb25zdCB3ID0gNzUwXG5jb25zdCB3aW5SdGlvID0gd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoIC8gd1xuXG5jb25zdCBfX09SREVSX18gPSB7XG4gICAgaWQ6IDEsXG4gICAgY29kZTogJ0UyMDE4MDEwMjExMjIwMCcsXG4gICAgc3RhdHVzOiAxLFxuICAgIHBheVN0YXR1czogMSxcbiAgICBwaXJjZTogMjAwLjAwLFxuICAgIGZyZWlnaHQ6IDAuMDAsXG4gICAgZ29vZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBjb3ZlcjogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDIvMjIvS0dRaEcucG5nJyxcbiAgICAgICAgICAgIHRpdGxlOiAn5LqR5LmL5LiD5ZGzJyxcbiAgICAgICAgICAgIHR5cGU6ICfnhp/ojLYnLFxuICAgICAgICAgICAgcHJpY2U6IDEwMC4wMCxcbiAgICAgICAgICAgIGNvdW50OiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgY292ZXI6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAyLzIyL0tHUWhHLnBuZycsXG4gICAgICAgICAgICB0aXRsZTogJ+S6keS5i+S4g+WRsycsXG4gICAgICAgICAgICB0eXBlOiAn54af6Iy2JyxcbiAgICAgICAgICAgIHByaWNlOiAxMDAuMDAsXG4gICAgICAgICAgICBjb3VudDogMVxuICAgICAgICB9XG4gICAgXVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtT3JkZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAkcmVwZWF0ID0ge1wiMlwiOntcImNvbVwiOlwiSXRlbU9yZGVyR29vZHNcIixcInByb3BzXCI6XCJcIn19O1xyXG4kcHJvcHMgPSB7XCJJdGVtT3JkZXJHb29kc1wiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwiMlwiLFwiaXRlbVwiOlwiZ29vZHNcIixcImluZGV4XCI6XCJnaW5kZXhcIixcImtleVwiOlwiZ2lkXCJ9LFwidi1iaW5kOmdvb2RzLm9uY2VcIjp7XCJ2YWx1ZVwiOlwib3JkZXIuZ29vZHNcIixcImZvclwiOlwiMlwiLFwiaXRlbVwiOlwiZ29vZHNcIixcImluZGV4XCI6XCJnaW5kZXhcIixcImtleVwiOlwiZ2lkXCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgIEl0ZW1PcmRlckdvb2RzXG4gICAgfVxuXG4gICAgcHJvcHMgPSB7XG4gICAgICAgIG9yZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0OiB7fSxcbiAgICAgICAgICAgIGNvZXJjZSAodmFsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgd2F0Y2ggPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgIH1cbn1cblxuIl19