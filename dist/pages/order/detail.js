'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ORDER_DATA__ = {
    id: 2,
    code: 'E20180102112201',
    status: 2,
    payStatus: 1,
    price: 200.00,
    freight: 10.00,
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
    goodsList: [{
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
            navigationBarTitleText: '订单详情'
        }, _this.components = {}, _this.mixins = [], _this.data = {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJfX09SREVSX0RBVEFfXyIsImlkIiwiY29kZSIsInN0YXR1cyIsInBheVN0YXR1cyIsInByaWNlIiwiZnJlaWdodCIsImlzQ29tbWVudGVkIiwibWVzc2FnZSIsImNyZWF0ZVRpbWUiLCJleHByZXNzTmFtZSIsImV4cHJlc3NDb2RlIiwiZXhwcmVzc1RpbWUiLCJjb25zaWduZWVOYW1lIiwiY29uc2lnbmVlVGVsIiwiY29uc2lnbmVlQXJlYSIsImNvbnNpZ25lZUFkZHJlc3MiLCJnb29kc0xpc3QiLCJjb3ZlciIsInRpdGxlIiwidHlwZSIsImNvdW50IiwiT3JkZXJEZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJvcmRlciIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUI7QUFDbkJDLFFBQUksQ0FEZTtBQUVuQkMsVUFBTSxpQkFGYTtBQUduQkMsWUFBUSxDQUhXO0FBSW5CQyxlQUFXLENBSlE7QUFLbkJDLFdBQU8sTUFMWTtBQU1uQkMsYUFBUyxLQU5VO0FBT25CQyxpQkFBYSxLQVBNO0FBUW5CQyxhQUFTLFVBUlU7QUFTbkJDLGdCQUFZLHFCQVRPO0FBVW5CQyxpQkFBYSxNQVZNO0FBV25CQyxpQkFBYSxrQkFYTTtBQVluQkMsaUJBQWEscUJBWk07QUFhbkJDLG1CQUFlLElBYkk7QUFjbkJDLGtCQUFjLGFBZEs7QUFlbkJDLG1CQUFlLGFBZkk7QUFnQm5CQyxzQkFBa0Isb0JBaEJDO0FBaUJuQkMsZUFBVyxDQUNQO0FBQ0loQixZQUFJLENBRFI7QUFFSWlCLGVBQU8saURBRlg7QUFHSUMsZUFBTyxNQUhYO0FBSUlDLGNBQU0sSUFKVjtBQUtJZixlQUFPLE1BTFg7QUFNSWdCLGVBQU87QUFOWCxLQURPLEVBU1A7QUFDSXBCLFlBQUksQ0FEUjtBQUVJaUIsZUFBTyxpREFGWDtBQUdJQyxlQUFPLE1BSFg7QUFJSUMsY0FBTSxJQUpWO0FBS0lmLGVBQU8sTUFMWDtBQU1JZ0IsZUFBTztBQU5YLEtBVE87QUFqQlEsQ0FBdkI7O0lBcUNxQkMsVzs7Ozs7Ozs7Ozs7Ozs7b01BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVEMsVSxHQUFhLEUsUUFJYkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0hDLG1CQUFPNUI7QUFESixTLFFBSVA2QixRLEdBQVcsRSxRQUdYQyxPLEdBQVUsRSxRQUlWQyxNLEdBQVMsRTs7Ozs7aUNBSUEsQ0FFUjs7OztFQTVCb0MsZUFBS0MsSTs7a0JBQXpCVixXIiwiZmlsZSI6ImRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5jb25zdCBfX09SREVSX0RBVEFfXyA9IHtcbiAgICBpZDogMixcbiAgICBjb2RlOiAnRTIwMTgwMTAyMTEyMjAxJyxcbiAgICBzdGF0dXM6IDIsXG4gICAgcGF5U3RhdHVzOiAxLFxuICAgIHByaWNlOiAyMDAuMDAsXG4gICAgZnJlaWdodDogMTAuMDAsXG4gICAgaXNDb21tZW50ZWQ6IGZhbHNlLFxuICAgIG1lc3NhZ2U6ICfluK7miJHljIXoo4Xlvpflpb3nnIvngrknLFxuICAgIGNyZWF0ZVRpbWU6ICcyMDE1LTExLTE2IDEyOjQ1OjAwJyxcbiAgICBleHByZXNzTmFtZTogJ+mhuuS4sOW/q+mAkicsXG4gICAgZXhwcmVzc0NvZGU6ICdTRjIwMTgwOTAxMDIwMDAxJyxcbiAgICBleHByZXNzVGltZTogJzIwMTUtMTEtMTYgMTI6NDU6MDAnLFxuICAgIGNvbnNpZ25lZU5hbWU6ICflvKDnlJ8nLFxuICAgIGNvbnNpZ25lZVRlbDogJzE1ODE3NDg5ODk4JyxcbiAgICBjb25zaWduZWVBcmVhOiAn5bm/5LicIOW5v+W3nuW4giAg5aSp5rKz5Yy6JyxcbiAgICBjb25zaWduZWVBZGRyZXNzOiAn6YeR56mX6LevMeWPtzM0MDEo5bm/5Lic5pif5aSW5pif5ZSx54mHKScsXG4gICAgZ29vZHNMaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgY292ZXI6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAyLzIyL0tHUWhHLnBuZycsXG4gICAgICAgICAgICB0aXRsZTogJ+S6keS5i+S4g+WRsycsXG4gICAgICAgICAgICB0eXBlOiAn54af6Iy2JyxcbiAgICAgICAgICAgIHByaWNlOiAxMDAuMDAsXG4gICAgICAgICAgICBjb3VudDogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIGNvdmVyOiAnaHR0cHM6Ly90MS5waWNiLmNjL3VwbG9hZHMvMjAxOC8wMi8yMi9LR1FoRy5wbmcnLFxuICAgICAgICAgICAgdGl0bGU6ICfkupHkuYvkuIPlkbMnLFxuICAgICAgICAgICAgdHlwZTogJ+eGn+iMticsXG4gICAgICAgICAgICBwcmljZTogMTAwLjAwLFxuICAgICAgICAgICAgY291bnQ6IDFcbiAgICAgICAgfVxuICAgIF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJEZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iuouWNleivpuaDhSdcbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50cyA9IHtcblxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgICBvcmRlcjogX19PUkRFUl9EQVRBX19cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuXG4gICAgfVxufVxuXG4iXX0=