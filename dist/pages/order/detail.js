'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _orderCommodity = require('./../../components/order-commodity.js');

var _orderCommodity2 = _interopRequireDefault(_orderCommodity);

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJfX09SREVSX0RBVEFfXyIsImlkIiwiY29kZSIsInN0YXR1cyIsInBheVN0YXR1cyIsInByaWNlIiwiZnJlaWdodCIsImlzQ29tbWVudGVkIiwibWVzc2FnZSIsImNyZWF0ZVRpbWUiLCJleHByZXNzTmFtZSIsImV4cHJlc3NDb2RlIiwiZXhwcmVzc1RpbWUiLCJjb25zaWduZWVOYW1lIiwiY29uc2lnbmVlVGVsIiwiY29uc2lnbmVlQXJlYSIsImNvbnNpZ25lZUFkZHJlc3MiLCJjb21tb2RpdHlMaXN0IiwiY292ZXIiLCJ0aXRsZSIsInR5cGUiLCJjb3VudCIsIk9yZGVyRGV0YWlsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJvcmRlciIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQjtBQUNuQkMsUUFBSSxDQURlO0FBRW5CQyxVQUFNLGlCQUZhO0FBR25CQyxZQUFRLENBSFc7QUFJbkJDLGVBQVcsQ0FKUTtBQUtuQkMsV0FBTyxNQUxZO0FBTW5CQyxhQUFTLEtBTlU7QUFPbkJDLGlCQUFhLEtBUE07QUFRbkJDLGFBQVMsVUFSVTtBQVNuQkMsZ0JBQVkscUJBVE87QUFVbkJDLGlCQUFhLE1BVk07QUFXbkJDLGlCQUFhLGtCQVhNO0FBWW5CQyxpQkFBYSxxQkFaTTtBQWFuQkMsbUJBQWUsSUFiSTtBQWNuQkMsa0JBQWMsYUFkSztBQWVuQkMsbUJBQWUsYUFmSTtBQWdCbkJDLHNCQUFrQixvQkFoQkM7QUFpQm5CQyxtQkFBZSxDQUNYO0FBQ0loQixZQUFJLENBRFI7QUFFSWlCLGVBQU8saURBRlg7QUFHSUMsZUFBTyxNQUhYO0FBSUlDLGNBQU0sSUFKVjtBQUtJZixlQUFPLE1BTFg7QUFNSWdCLGVBQU87QUFOWCxLQURXLEVBU1g7QUFDSXBCLFlBQUksQ0FEUjtBQUVJaUIsZUFBTyxpREFGWDtBQUdJQyxlQUFPLE1BSFg7QUFJSUMsY0FBTSxJQUpWO0FBS0lmLGVBQU8sTUFMWDtBQU1JZ0IsZUFBTztBQU5YLEtBVFc7QUFqQkksQ0FBdkI7O0lBcUNxQkMsVzs7Ozs7Ozs7Ozs7Ozs7b01BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLDZCQUFpQjtBQUNiLDBCQUFVLHlDQURHO0FBRWIsNEJBQVksMkNBRkM7QUFHYiwyQkFBVywwQ0FIRTtBQUliLGlDQUFpQiwwQ0FKSjtBQUtiLGlDQUFpQiwwQ0FMSjtBQU1iLDZCQUFhLDRDQU5BO0FBT2IsNkJBQWE7QUFQQTtBQUZaLFMsUUFhVkMsTyxHQUFVLEVBQUMsU0FBUSxFQUFDLE9BQU0sb0JBQVAsRUFBNEIsU0FBUSxXQUFwQyxFQUFULEUsUUFDYkMsTSxHQUFTLEVBQUMsc0JBQXFCLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLHFCQUFsQixFQUF3QyxRQUFPLFdBQS9DLEVBQTJELFNBQVEsT0FBbkUsRUFBMkUsT0FBTSxLQUFqRixFQUFoQixFQUF3Ryx5QkFBd0IsRUFBQyxTQUFRLFdBQVQsRUFBcUIsUUFBTyxNQUE1QixFQUFtQyxPQUFNLHFCQUF6QyxFQUErRCxRQUFPLFdBQXRFLEVBQWtGLFNBQVEsT0FBMUYsRUFBa0csT0FBTSxLQUF4RyxFQUFoSSxFQUF0QixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNOO0FBRE0sUyxRQUlWQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDSEMsbUJBQU9oQztBQURKLFMsUUFJUGlDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOzs7OztpQ0FJQSxDQUVSOzs7O0VBeENvQyxlQUFLQyxJOztrQkFBekJkLFciLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgb3JkZXJDb21tb2RpdHkgZnJvbSAnQC9jb21wb25lbnRzL29yZGVyLWNvbW1vZGl0eSdcclxuXHJcbmNvbnN0IF9fT1JERVJfREFUQV9fID0ge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBjb2RlOiAnRTIwMTgwMTAyMTEyMjAxJyxcclxuICAgIHN0YXR1czogMixcclxuICAgIHBheVN0YXR1czogMSxcclxuICAgIHByaWNlOiAyMDAuMDAsXHJcbiAgICBmcmVpZ2h0OiAxMC4wMCxcclxuICAgIGlzQ29tbWVudGVkOiBmYWxzZSxcclxuICAgIG1lc3NhZ2U6ICfluK7miJHljIXoo4Xlvpflpb3nnIvngrknLFxyXG4gICAgY3JlYXRlVGltZTogJzIwMTUtMTEtMTYgMTI6NDU6MDAnLFxyXG4gICAgZXhwcmVzc05hbWU6ICfpobrkuLDlv6vpgJInLFxyXG4gICAgZXhwcmVzc0NvZGU6ICdTRjIwMTgwOTAxMDIwMDAxJyxcclxuICAgIGV4cHJlc3NUaW1lOiAnMjAxNS0xMS0xNiAxMjo0NTowMCcsXHJcbiAgICBjb25zaWduZWVOYW1lOiAn5byg55SfJyxcclxuICAgIGNvbnNpZ25lZVRlbDogJzE1ODE3NDg5ODk4JyxcclxuICAgIGNvbnNpZ25lZUFyZWE6ICflub/kuJwg5bm/5bee5biCICDlpKnmsrPljLonLFxyXG4gICAgY29uc2lnbmVlQWRkcmVzczogJ+mHkeepl+i3rzHlj7czNDAxKOW5v+S4nOaYn+WkluaYn+WUseeJhyknLFxyXG4gICAgY29tbW9kaXR5TGlzdDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIGNvdmVyOiAnaHR0cHM6Ly90MS5waWNiLmNjL3VwbG9hZHMvMjAxOC8wMi8yMi9LR1FoRy5wbmcnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+S6keS5i+S4g+WRsycsXHJcbiAgICAgICAgICAgIHR5cGU6ICfnhp/ojLYnLFxyXG4gICAgICAgICAgICBwcmljZTogMTAwLjAwLFxyXG4gICAgICAgICAgICBjb3VudDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgY292ZXI6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAyLzIyL0tHUWhHLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5LqR5LmL5LiD5ZGzJyxcclxuICAgICAgICAgICAgdHlwZTogJ+eGn+iMticsXHJcbiAgICAgICAgICAgIHByaWNlOiAxMDAuMDAsXHJcbiAgICAgICAgICAgIGNvdW50OiAxXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckRldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iuouWNleivpuaDhScsXHJcbiAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICd3eGMtY2MnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1jYy9kaXN0L2luZGV4JyxcclxuICAgICAgICAgICAgJ3d4Yy1mbGV4JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZmxleC9kaXN0L2luZGV4JyxcclxuICAgICAgICAgICAgJ3d4Yy10YWInOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgICAgICd3eGMtdGFiLXBhbmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvcGFuZWwnLFxyXG4gICAgICAgICAgICAnd3hjLXRhYi1sYWJlbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2xhYmVsJyxcclxuICAgICAgICAgICAgJ3d4Yy1iYWRnZSc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWJhZGdlL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICAgICAnd3hjLXByaWNlJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtcHJpY2UvZGlzdC9pbmRleCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAkcmVwZWF0ID0ge1wib3JkZXJcIjp7XCJjb21cIjpcImNwLW9yZGVyLWNvbW1vZGl0eVwiLFwicHJvcHNcIjpcImNvbW1vZGl0eVwifX07XHJcbiRwcm9wcyA9IHtcImNwLW9yZGVyLWNvbW1vZGl0eVwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwib3JkZXIuY29tbW9kaXR5TGlzdFwiLFwiaXRlbVwiOlwiY29tbW9kaXR5XCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiY2lkXCJ9LFwidi1iaW5kOmNvbW1vZGl0eS5vbmNlXCI6e1widmFsdWVcIjpcImNvbW1vZGl0eVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJvcmRlci5jb21tb2RpdHlMaXN0XCIsXCJpdGVtXCI6XCJjb21tb2RpdHlcIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJjaWRcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICAnY3Atb3JkZXItY29tbW9kaXR5Jzogb3JkZXJDb21tb2RpdHlcclxuICAgIH1cclxuXHJcbiAgICBtaXhpbnMgPSBbXVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgb3JkZXI6IF9fT1JERVJfREFUQV9fXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=