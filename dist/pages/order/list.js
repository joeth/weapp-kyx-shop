'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _colors = require('./../../mixins/colors.js');

var _colors2 = _interopRequireDefault(_colors);

var _orderList = require('./../../components/order-list.js');

var _orderList2 = _interopRequireDefault(_orderList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ORDER_DATA__ = [{
    id: 1,
    code: 'E20180102112200',
    status: 1,
    payStatus: 1,
    price: 200.00,
    freight: 0.00,
    isCommented: false,
    commodityList: [{
        id: 2,
        cover: 'https://t1.picb.cc/uploads/2018/02/22/KGQhG.png',
        title: '云之七味',
        type: '熟茶',
        price: 100.00,
        count: 1
    }]
}, {
    id: 2,
    code: 'E20180102112201',
    status: 2,
    payStatus: 1,
    price: 200.00,
    freight: 10.00,
    isCommented: false,
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
}];

var OrderList = function (_wepy$page) {
    _inherits(OrderList, _wepy$page);

    function OrderList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, OrderList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderList.__proto__ || Object.getPrototypeOf(OrderList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '订单列表',
            usingComponents: {
                'wxc-cc': '../../packages/@minui/wxc-cc/dist/index',
                'wxc-flex': '../../packages/@minui/wxc-flex/dist/index',
                'wxc-tab': '../../packages/@minui/wxc-tab/dist/index',
                'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/panel',
                'wxc-tab-label': '../../packages/@minui/wxc-tab/dist/label',
                'wxc-badge': '../../packages/@minui/wxc-badge/dist/index',
                'wxc-price': '../../packages/@minui/wxc-price/dist/index'
            }
        }, _this.$repeat = {}, _this.$props = { "cp-order-list": { "xmlns:v-bind": "", "v-bind:datalist.once": "orderList" } }, _this.$events = {}, _this.components = {
            'cp-order-list': _orderList2.default
        }, _this.mixins = [_colors2.default], _this.data = {
            activeKey: 0,
            orderTabs: [{ id: 0, title: '全部', badge: 0, content: '全部' }, { id: 1, title: '待付款', badge: 0, content: '待付款' }, { id: 2, title: '待发货', badge: 0, content: '待发货' }, { id: 3, title: '待收货', badge: 0, content: '待收货' }, { id: 4, title: '已完成', badge: 0, content: '已完成' }],
            orderList: __ORDER_DATA__
        }, _this.computed = {}, _this.methods = {
            onTabClick: function onTabClick(e) {
                var activeKey = this.activeKey;
                var id = e.currentTarget.dataset.id;


                if (id != activeKey) {
                    this.activeKey = id;
                    this.orderList = __ORDER_DATA__;
                    console.log('执行数据更新');
                }
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(OrderList, [{
        key: 'onLoad',
        value: function onLoad(option) {
            try {
                this.activeKey = Number(option.type);
            } catch (e) {}
        }
    }]);

    return OrderList;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(OrderList , 'pages/order/list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiX19PUkRFUl9EQVRBX18iLCJpZCIsImNvZGUiLCJzdGF0dXMiLCJwYXlTdGF0dXMiLCJwcmljZSIsImZyZWlnaHQiLCJpc0NvbW1lbnRlZCIsImNvbW1vZGl0eUxpc3QiLCJjb3ZlciIsInRpdGxlIiwidHlwZSIsImNvdW50IiwiT3JkZXJMaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJhY3RpdmVLZXkiLCJvcmRlclRhYnMiLCJiYWRnZSIsImNvbnRlbnQiLCJvcmRlckxpc3QiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJvblRhYkNsaWNrIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsImV2ZW50cyIsIm9wdGlvbiIsIk51bWJlciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLENBQUM7QUFDcEJDLFFBQUksQ0FEZ0I7QUFFcEJDLFVBQU0saUJBRmM7QUFHcEJDLFlBQVEsQ0FIWTtBQUlwQkMsZUFBVyxDQUpTO0FBS3BCQyxXQUFPLE1BTGE7QUFNcEJDLGFBQVMsSUFOVztBQU9wQkMsaUJBQWEsS0FQTztBQVFwQkMsbUJBQWUsQ0FDWDtBQUNJUCxZQUFJLENBRFI7QUFFSVEsZUFBTyxpREFGWDtBQUdJQyxlQUFPLE1BSFg7QUFJSUMsY0FBTSxJQUpWO0FBS0lOLGVBQU8sTUFMWDtBQU1JTyxlQUFPO0FBTlgsS0FEVztBQVJLLENBQUQsRUFrQnJCO0FBQ0VYLFFBQUksQ0FETjtBQUVFQyxVQUFNLGlCQUZSO0FBR0VDLFlBQVEsQ0FIVjtBQUlFQyxlQUFXLENBSmI7QUFLRUMsV0FBTyxNQUxUO0FBTUVDLGFBQVMsS0FOWDtBQU9FQyxpQkFBYSxLQVBmO0FBUUVDLG1CQUFlLENBQ1g7QUFDSVAsWUFBSSxDQURSO0FBRUlRLGVBQU8saURBRlg7QUFHSUMsZUFBTyxNQUhYO0FBSUlDLGNBQU0sSUFKVjtBQUtJTixlQUFPLE1BTFg7QUFNSU8sZUFBTztBQU5YLEtBRFcsRUFTWDtBQUNJWCxZQUFJLENBRFI7QUFFSVEsZUFBTyxpREFGWDtBQUdJQyxlQUFPLE1BSFg7QUFJSUMsY0FBTSxJQUpWO0FBS0lOLGVBQU8sTUFMWDtBQU1JTyxlQUFPO0FBTlgsS0FUVztBQVJqQixDQWxCcUIsQ0FBdkI7O0lBOENxQkMsUzs7Ozs7Ozs7Ozs7Ozs7Z01BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLDZCQUFpQjtBQUNiLDBCQUFVLHlDQURHO0FBRWIsNEJBQVksMkNBRkM7QUFHYiwyQkFBVywwQ0FIRTtBQUliLGlDQUFpQiwwQ0FKSjtBQUtiLGlDQUFpQiwwQ0FMSjtBQU1iLDZCQUFhLDRDQU5BO0FBT2IsNkJBQWE7QUFQQTtBQUZaLFMsUUFhVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsaUJBQWdCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsd0JBQXVCLFdBQTFDLEVBQWpCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ047QUFETSxTLFFBSVZDLE0sR0FBUyxrQixRQUVUQyxJLEdBQU87QUFDSEMsdUJBQVcsQ0FEUjtBQUVIQyx1QkFBVyxDQUNQLEVBQUV2QixJQUFJLENBQU4sRUFBU1MsT0FBTyxJQUFoQixFQUFzQmUsT0FBTyxDQUE3QixFQUFnQ0MsU0FBUyxJQUF6QyxFQURPLEVBRVAsRUFBRXpCLElBQUksQ0FBTixFQUFTUyxPQUFPLEtBQWhCLEVBQXVCZSxPQUFPLENBQTlCLEVBQWlDQyxTQUFTLEtBQTFDLEVBRk8sRUFHUCxFQUFFekIsSUFBSSxDQUFOLEVBQVNTLE9BQU8sS0FBaEIsRUFBdUJlLE9BQU8sQ0FBOUIsRUFBaUNDLFNBQVMsS0FBMUMsRUFITyxFQUlQLEVBQUV6QixJQUFJLENBQU4sRUFBU1MsT0FBTyxLQUFoQixFQUF1QmUsT0FBTyxDQUE5QixFQUFpQ0MsU0FBUyxLQUExQyxFQUpPLEVBS1AsRUFBRXpCLElBQUksQ0FBTixFQUFTUyxPQUFPLEtBQWhCLEVBQXVCZSxPQUFPLENBQTlCLEVBQWlDQyxTQUFTLEtBQTFDLEVBTE8sQ0FGUjtBQVNIQyx1QkFBVzNCO0FBVFIsUyxRQVlQNEIsUSxHQUFXLEUsUUFHWEMsTyxHQUFVO0FBQ05DLHNCQURNLHNCQUNLQyxDQURMLEVBQ087QUFDVCxvQkFBTVIsWUFBWSxLQUFLQSxTQUF2QjtBQURTLG9CQUVEdEIsRUFGQyxHQUVNOEIsRUFBRUMsYUFBRixDQUFnQkMsT0FGdEIsQ0FFRGhDLEVBRkM7OztBQUlULG9CQUFHQSxNQUFNc0IsU0FBVCxFQUFtQjtBQUNmLHlCQUFLQSxTQUFMLEdBQWlCdEIsRUFBakI7QUFDQSx5QkFBSzBCLFNBQUwsR0FBaUIzQixjQUFqQjtBQUNBa0MsNEJBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0g7QUFDSjtBQVZLLFMsUUFhVkMsTSxHQUFTLEU7Ozs7OytCQUdGQyxNLEVBQVE7QUFDWCxnQkFBRztBQUNDLHFCQUFLZCxTQUFMLEdBQWlCZSxPQUFPRCxPQUFPMUIsSUFBZCxDQUFqQjtBQUNILGFBRkQsQ0FFQyxPQUFNb0IsQ0FBTixFQUFTLENBQUU7QUFDZjs7OztFQTFEa0MsZUFBS1EsSTs7a0JBQXZCMUIsUyIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBjb2xvcnNNaXhpbiBmcm9tICdAL21peGlucy9jb2xvcnMnXHJcbmltcG9ydCBvcmRlckxpc3QgZnJvbSAnQC9jb21wb25lbnRzL29yZGVyLWxpc3QnXHJcblxyXG5jb25zdCBfX09SREVSX0RBVEFfXyA9IFt7XHJcbiAgICBpZDogMSxcclxuICAgIGNvZGU6ICdFMjAxODAxMDIxMTIyMDAnLFxyXG4gICAgc3RhdHVzOiAxLFxyXG4gICAgcGF5U3RhdHVzOiAxLFxyXG4gICAgcHJpY2U6IDIwMC4wMCxcclxuICAgIGZyZWlnaHQ6IDAuMDAsXHJcbiAgICBpc0NvbW1lbnRlZDogZmFsc2UsXHJcbiAgICBjb21tb2RpdHlMaXN0OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgY292ZXI6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAyLzIyL0tHUWhHLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5LqR5LmL5LiD5ZGzJyxcclxuICAgICAgICAgICAgdHlwZTogJ+eGn+iMticsXHJcbiAgICAgICAgICAgIHByaWNlOiAxMDAuMDAsXHJcbiAgICAgICAgICAgIGNvdW50OiAxXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59LHtcclxuICAgIGlkOiAyLFxyXG4gICAgY29kZTogJ0UyMDE4MDEwMjExMjIwMScsXHJcbiAgICBzdGF0dXM6IDIsXHJcbiAgICBwYXlTdGF0dXM6IDEsXHJcbiAgICBwcmljZTogMjAwLjAwLFxyXG4gICAgZnJlaWdodDogMTAuMDAsXHJcbiAgICBpc0NvbW1lbnRlZDogZmFsc2UsXHJcbiAgICBjb21tb2RpdHlMaXN0OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgY292ZXI6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAyLzIyL0tHUWhHLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5LqR5LmL5LiD5ZGzJyxcclxuICAgICAgICAgICAgdHlwZTogJ+eGn+iMticsXHJcbiAgICAgICAgICAgIHByaWNlOiAxMDAuMDAsXHJcbiAgICAgICAgICAgIGNvdW50OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICBjb3ZlcjogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDIvMjIvS0dRaEcucG5nJyxcclxuICAgICAgICAgICAgdGl0bGU6ICfkupHkuYvkuIPlkbMnLFxyXG4gICAgICAgICAgICB0eXBlOiAn54af6Iy2JyxcclxuICAgICAgICAgICAgcHJpY2U6IDEwMC4wMCxcclxuICAgICAgICAgICAgY291bnQ6IDFcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckxpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforqLljZXliJfooagnLFxyXG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAnd3hjLWNjJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtY2MvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgICAgICd3eGMtZmxleCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWZsZXgvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgICAgICd3eGMtdGFiJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICAgICAnd3hjLXRhYi1wYW5lbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L3BhbmVsJyxcclxuICAgICAgICAgICAgJ3d4Yy10YWItbGFiZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9sYWJlbCcsXHJcbiAgICAgICAgICAgICd3eGMtYmFkZ2UnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1iYWRnZS9kaXN0L2luZGV4JyxcclxuICAgICAgICAgICAgJ3d4Yy1wcmljZSc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXByaWNlL2Rpc3QvaW5kZXgnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjcC1vcmRlci1saXN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpkYXRhbGlzdC5vbmNlXCI6XCJvcmRlckxpc3RcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICdjcC1vcmRlci1saXN0Jzogb3JkZXJMaXN0XHJcbiAgICB9XHJcblxyXG4gICAgbWl4aW5zID0gW2NvbG9yc01peGluXVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgYWN0aXZlS2V5OiAwLFxyXG4gICAgICAgIG9yZGVyVGFiczogW1xyXG4gICAgICAgICAgICB7IGlkOiAwLCB0aXRsZTogJ+WFqOmDqCcsIGJhZGdlOiAwLCBjb250ZW50OiAn5YWo6YOoJyB9LFxyXG4gICAgICAgICAgICB7IGlkOiAxLCB0aXRsZTogJ+W+heS7mOasvicsIGJhZGdlOiAwLCBjb250ZW50OiAn5b6F5LuY5qy+JyB9LFxyXG4gICAgICAgICAgICB7IGlkOiAyLCB0aXRsZTogJ+W+heWPkei0pycsIGJhZGdlOiAwLCBjb250ZW50OiAn5b6F5Y+R6LSnJyB9LFxyXG4gICAgICAgICAgICB7IGlkOiAzLCB0aXRsZTogJ+W+heaUtui0pycsIGJhZGdlOiAwLCBjb250ZW50OiAn5b6F5pS26LSnJyB9LFxyXG4gICAgICAgICAgICB7IGlkOiA0LCB0aXRsZTogJ+W3suWujOaIkCcsIGJhZGdlOiAwLCBjb250ZW50OiAn5bey5a6M5oiQJyB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlckxpc3Q6IF9fT1JERVJfREFUQV9fXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBvblRhYkNsaWNrKGUpe1xyXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVLZXkgPSB0aGlzLmFjdGl2ZUtleTtcclxuICAgICAgICAgICAgY29uc3QgeyBpZCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XHJcblxyXG4gICAgICAgICAgICBpZihpZCAhPSBhY3RpdmVLZXkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVLZXkgPSBpZDtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJMaXN0ID0gX19PUkRFUl9EQVRBX187XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5omn6KGM5pWw5o2u5pu05pawJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZChvcHRpb24pIHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlS2V5ID0gTnVtYmVyKG9wdGlvbi50eXBlKTtcclxuICAgICAgICB9Y2F0Y2goZSkge31cclxuICAgIH1cclxufVxyXG5cclxuIl19