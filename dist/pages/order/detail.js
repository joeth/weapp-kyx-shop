'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _orderCommodity = require('./../../components/order-commodity.js');

var _orderCommodity2 = _interopRequireDefault(_orderCommodity);

var _icon = require('./../../components/icon.js');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ORDER_DATA__ = {
    id: 2,
    code: 'E20180102112201',
    status: 1,
    payStatus: 1,
    freightAmount: '10.00',
    actualAmount: '200.00',
    isCommented: false,
    message: '帮我包装得好看点',
    createTime: '2015-11-16 12:45:00',
    expressName: '顺丰快递',
    expressCode: 'SF20180901020001',
    expressTime: '2015-11-16 12:45:00',
    consigneeName: '张生',
    consigneeTel: '15817489898',
    consigneeArea: '广东 广州市  天河区',
    consigneeAddress: '金穗路1号3401(广东星外星唱片)',
    commodityList: [{
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

var OrderDetail = function (_wepy$page) {
    _inherits(OrderDetail, _wepy$page);

    function OrderDetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, OrderDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderDetail.__proto__ || Object.getPrototypeOf(OrderDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '订单详情',
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
        }, _this.mixins = [], _this.data = {
            order: __ORDER_DATA__
        }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(OrderDetail, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return OrderDetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(OrderDetail , 'pages/order/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJfX09SREVSX0RBVEFfXyIsImlkIiwiY29kZSIsInN0YXR1cyIsInBheVN0YXR1cyIsImZyZWlnaHRBbW91bnQiLCJhY3R1YWxBbW91bnQiLCJpc0NvbW1lbnRlZCIsIm1lc3NhZ2UiLCJjcmVhdGVUaW1lIiwiZXhwcmVzc05hbWUiLCJleHByZXNzQ29kZSIsImV4cHJlc3NUaW1lIiwiY29uc2lnbmVlTmFtZSIsImNvbnNpZ25lZVRlbCIsImNvbnNpZ25lZUFyZWEiLCJjb25zaWduZWVBZGRyZXNzIiwiY29tbW9kaXR5TGlzdCIsImNvdmVyIiwidGl0bGUiLCJ0eXBlIiwicHJpY2UiLCJjb3VudCIsIk9yZGVyRGV0YWlsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJvcmRlciIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCO0FBQ25CQyxRQUFJLENBRGU7QUFFbkJDLFVBQU0saUJBRmE7QUFHbkJDLFlBQVEsQ0FIVztBQUluQkMsZUFBVyxDQUpRO0FBS25CQyxtQkFBZSxPQUxJO0FBTW5CQyxrQkFBYyxRQU5LO0FBT25CQyxpQkFBYSxLQVBNO0FBUW5CQyxhQUFTLFVBUlU7QUFTbkJDLGdCQUFZLHFCQVRPO0FBVW5CQyxpQkFBYSxNQVZNO0FBV25CQyxpQkFBYSxrQkFYTTtBQVluQkMsaUJBQWEscUJBWk07QUFhbkJDLG1CQUFlLElBYkk7QUFjbkJDLGtCQUFjLGFBZEs7QUFlbkJDLG1CQUFlLGFBZkk7QUFnQm5CQyxzQkFBa0Isb0JBaEJDO0FBaUJuQkMsbUJBQWUsQ0FDWDtBQUNJaEIsWUFBSSxDQURSO0FBRUlpQixlQUFPLGlEQUZYO0FBR0lDLGVBQU8sTUFIWDtBQUlJQyxjQUFNLElBSlY7QUFLSUMsZUFBTyxNQUxYO0FBTUlDLGVBQU87QUFOWCxLQURXLEVBU1g7QUFDSXJCLFlBQUksQ0FEUjtBQUVJaUIsZUFBTyxpREFGWDtBQUdJQyxlQUFPLE1BSFg7QUFJSUMsY0FBTSxJQUpWO0FBS0lDLGVBQU8sTUFMWDtBQU1JQyxlQUFPO0FBTlgsS0FUVztBQWpCSSxDQUF2Qjs7SUFxQ3FCQyxXOzs7Ozs7Ozs7Ozs7OztvTUFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsTUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsMEJBQVUseUNBREc7QUFFYiw0QkFBWSwyQ0FGQztBQUdiLDJCQUFXLDBDQUhFO0FBSWIsaUNBQWlCLDBDQUpKO0FBS2IsaUNBQWlCLDBDQUxKO0FBTWIsNkJBQWEsNENBTkE7QUFPYiw2QkFBYTtBQVBBO0FBRlosUyxRQWFWQyxPLEdBQVUsRUFBQyxTQUFRLEVBQUMsT0FBTSxvQkFBUCxFQUE0QixTQUFRLFdBQXBDLEVBQVQsRSxRQUNiQyxNLEdBQVMsRUFBQyxzQkFBcUIsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0scUJBQWxCLEVBQXdDLFFBQU8sV0FBL0MsRUFBMkQsU0FBUSxPQUFuRSxFQUEyRSxPQUFNLEtBQWpGLEVBQWhCLEVBQXdHLHlCQUF3QixFQUFDLFNBQVEsV0FBVCxFQUFxQixRQUFPLE1BQTVCLEVBQW1DLE9BQU0scUJBQXpDLEVBQStELFFBQU8sV0FBdEUsRUFBa0YsU0FBUSxPQUExRixFQUFrRyxPQUFNLEtBQXhHLEVBQWhJLEVBQXRCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ047QUFETSxTLFFBSVZDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNIQyxtQkFBT2pDO0FBREosUyxRQUlQa0MsUSxHQUFXLEUsUUFHWEMsTyxHQUFVLEUsUUFJVkMsTSxHQUFTLEU7Ozs7O2lDQUlBLENBRVI7Ozs7RUF4Q29DLGVBQUtDLEk7O2tCQUF6QmQsVyIsImZpbGUiOiJkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBvcmRlckNvbW1vZGl0eSBmcm9tICdAL2NvbXBvbmVudHMvb3JkZXItY29tbW9kaXR5J1xuaW1wb3J0IGljb24gZnJvbSAnQC9jb21wb25lbnRzL2ljb24nXG5cbmNvbnN0IF9fT1JERVJfREFUQV9fID0ge1xuICAgIGlkOiAyLFxuICAgIGNvZGU6ICdFMjAxODAxMDIxMTIyMDEnLFxuICAgIHN0YXR1czogMSxcbiAgICBwYXlTdGF0dXM6IDEsXG4gICAgZnJlaWdodEFtb3VudDogJzEwLjAwJyxcbiAgICBhY3R1YWxBbW91bnQ6ICcyMDAuMDAnLFxuICAgIGlzQ29tbWVudGVkOiBmYWxzZSxcbiAgICBtZXNzYWdlOiAn5biu5oiR5YyF6KOF5b6X5aW955yL54K5JyxcbiAgICBjcmVhdGVUaW1lOiAnMjAxNS0xMS0xNiAxMjo0NTowMCcsXG4gICAgZXhwcmVzc05hbWU6ICfpobrkuLDlv6vpgJInLFxuICAgIGV4cHJlc3NDb2RlOiAnU0YyMDE4MDkwMTAyMDAwMScsXG4gICAgZXhwcmVzc1RpbWU6ICcyMDE1LTExLTE2IDEyOjQ1OjAwJyxcbiAgICBjb25zaWduZWVOYW1lOiAn5byg55SfJyxcbiAgICBjb25zaWduZWVUZWw6ICcxNTgxNzQ4OTg5OCcsXG4gICAgY29uc2lnbmVlQXJlYTogJ+W5v+S4nCDlub/lt57luIIgIOWkqeays+WMuicsXG4gICAgY29uc2lnbmVlQWRkcmVzczogJ+mHkeepl+i3rzHlj7czNDAxKOW5v+S4nOaYn+WkluaYn+WUseeJhyknLFxuICAgIGNvbW1vZGl0eUxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBjb3ZlcjogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDIvMjIvS0dRaEcucG5nJyxcbiAgICAgICAgICAgIHRpdGxlOiAn5LqR5LmL5LiD5ZGzJyxcbiAgICAgICAgICAgIHR5cGU6ICfnhp/ojLYnLFxuICAgICAgICAgICAgcHJpY2U6IDEwMC4wMCxcbiAgICAgICAgICAgIGNvdW50OiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgY292ZXI6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAyLzIyL0tHUWhHLnBuZycsXG4gICAgICAgICAgICB0aXRsZTogJ+S6keS5i+S4g+WRsycsXG4gICAgICAgICAgICB0eXBlOiAn54af6Iy2JyxcbiAgICAgICAgICAgIHByaWNlOiAxMDAuMDAsXG4gICAgICAgICAgICBjb3VudDogMVxuICAgICAgICB9XG4gICAgXVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckRldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6i5Y2V6K+m5oOFJyxcbiAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnd3hjLWNjJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtY2MvZGlzdC9pbmRleCcsXG4gICAgICAgICAgICAnd3hjLWZsZXgnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1mbGV4L2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy10YWInOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9pbmRleCcsXG4gICAgICAgICAgICAnd3hjLXRhYi1wYW5lbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L3BhbmVsJyxcbiAgICAgICAgICAgICd3eGMtdGFiLWxhYmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvbGFiZWwnLFxuICAgICAgICAgICAgJ3d4Yy1iYWRnZSc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWJhZGdlL2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy1wcmljZSc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXByaWNlL2Rpc3QvaW5kZXgnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7XCJvcmRlclwiOntcImNvbVwiOlwiY3Atb3JkZXItY29tbW9kaXR5XCIsXCJwcm9wc1wiOlwiY29tbW9kaXR5XCJ9fTtcclxuJHByb3BzID0ge1wiY3Atb3JkZXItY29tbW9kaXR5XCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJvcmRlci5jb21tb2RpdHlMaXN0XCIsXCJpdGVtXCI6XCJjb21tb2RpdHlcIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJjaWRcIn0sXCJ2LWJpbmQ6Y29tbW9kaXR5Lm9uY2VcIjp7XCJ2YWx1ZVwiOlwiY29tbW9kaXR5XCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcIm9yZGVyLmNvbW1vZGl0eUxpc3RcIixcIml0ZW1cIjpcImNvbW1vZGl0eVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImNpZFwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAnY3Atb3JkZXItY29tbW9kaXR5Jzogb3JkZXJDb21tb2RpdHlcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgICAgb3JkZXI6IF9fT1JERVJfREFUQV9fXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcblxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcblxuICAgIH1cbn1cblxuIl19