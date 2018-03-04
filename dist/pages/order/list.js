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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiX19PUkRFUl9EQVRBX18iLCJpZCIsImNvZGUiLCJzdGF0dXMiLCJwYXlTdGF0dXMiLCJwcmljZSIsImZyZWlnaHQiLCJpc0NvbW1lbnRlZCIsImNvbW1vZGl0eUxpc3QiLCJjb3ZlciIsInRpdGxlIiwidHlwZSIsImNvdW50IiwiT3JkZXJMaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJhY3RpdmVLZXkiLCJvcmRlclRhYnMiLCJiYWRnZSIsImNvbnRlbnQiLCJvcmRlckxpc3QiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJvblRhYkNsaWNrIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsImV2ZW50cyIsIm9wdGlvbiIsIk51bWJlciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLENBQUM7QUFDcEJDLFFBQUksQ0FEZ0I7QUFFcEJDLFVBQU0saUJBRmM7QUFHcEJDLFlBQVEsQ0FIWTtBQUlwQkMsZUFBVyxDQUpTO0FBS3BCQyxXQUFPLE1BTGE7QUFNcEJDLGFBQVMsSUFOVztBQU9wQkMsaUJBQWEsS0FQTztBQVFwQkMsbUJBQWUsQ0FDWDtBQUNJUCxZQUFJLENBRFI7QUFFSVEsZUFBTyxpREFGWDtBQUdJQyxlQUFPLE1BSFg7QUFJSUMsY0FBTSxJQUpWO0FBS0lOLGVBQU8sTUFMWDtBQU1JTyxlQUFPO0FBTlgsS0FEVztBQVJLLENBQUQsRUFrQnJCO0FBQ0VYLFFBQUksQ0FETjtBQUVFQyxVQUFNLGlCQUZSO0FBR0VDLFlBQVEsQ0FIVjtBQUlFQyxlQUFXLENBSmI7QUFLRUMsV0FBTyxNQUxUO0FBTUVDLGFBQVMsS0FOWDtBQU9FQyxpQkFBYSxLQVBmO0FBUUVDLG1CQUFlLENBQ1g7QUFDSVAsWUFBSSxDQURSO0FBRUlRLGVBQU8saURBRlg7QUFHSUMsZUFBTyxNQUhYO0FBSUlDLGNBQU0sSUFKVjtBQUtJTixlQUFPLE1BTFg7QUFNSU8sZUFBTztBQU5YLEtBRFcsRUFTWDtBQUNJWCxZQUFJLENBRFI7QUFFSVEsZUFBTyxpREFGWDtBQUdJQyxlQUFPLE1BSFg7QUFJSUMsY0FBTSxJQUpWO0FBS0lOLGVBQU8sTUFMWDtBQU1JTyxlQUFPO0FBTlgsS0FUVztBQVJqQixDQWxCcUIsQ0FBdkI7O0lBOENxQkMsUzs7Ozs7Ozs7Ozs7Ozs7Z01BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLDZCQUFpQjtBQUNiLDBCQUFVLHlDQURHO0FBRWIsNEJBQVksMkNBRkM7QUFHYiwyQkFBVywwQ0FIRTtBQUliLGlDQUFpQiwwQ0FKSjtBQUtiLGlDQUFpQiwwQ0FMSjtBQU1iLDZCQUFhLDRDQU5BO0FBT2IsNkJBQWE7QUFQQTtBQUZaLFMsUUFhVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsaUJBQWdCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsd0JBQXVCLFdBQTFDLEVBQWpCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ047QUFETSxTLFFBSVZDLE0sR0FBUyxrQixRQUVUQyxJLEdBQU87QUFDSEMsdUJBQVcsQ0FEUjtBQUVIQyx1QkFBVyxDQUNQLEVBQUV2QixJQUFJLENBQU4sRUFBU1MsT0FBTyxJQUFoQixFQUFzQmUsT0FBTyxDQUE3QixFQUFnQ0MsU0FBUyxJQUF6QyxFQURPLEVBRVAsRUFBRXpCLElBQUksQ0FBTixFQUFTUyxPQUFPLEtBQWhCLEVBQXVCZSxPQUFPLENBQTlCLEVBQWlDQyxTQUFTLEtBQTFDLEVBRk8sRUFHUCxFQUFFekIsSUFBSSxDQUFOLEVBQVNTLE9BQU8sS0FBaEIsRUFBdUJlLE9BQU8sQ0FBOUIsRUFBaUNDLFNBQVMsS0FBMUMsRUFITyxFQUlQLEVBQUV6QixJQUFJLENBQU4sRUFBU1MsT0FBTyxLQUFoQixFQUF1QmUsT0FBTyxDQUE5QixFQUFpQ0MsU0FBUyxLQUExQyxFQUpPLEVBS1AsRUFBRXpCLElBQUksQ0FBTixFQUFTUyxPQUFPLEtBQWhCLEVBQXVCZSxPQUFPLENBQTlCLEVBQWlDQyxTQUFTLEtBQTFDLEVBTE8sQ0FGUjtBQVNIQyx1QkFBVzNCO0FBVFIsUyxRQVlQNEIsUSxHQUFXLEUsUUFHWEMsTyxHQUFVO0FBQ05DLHNCQURNLHNCQUNLQyxDQURMLEVBQ087QUFDVCxvQkFBTVIsWUFBWSxLQUFLQSxTQUF2QjtBQURTLG9CQUVEdEIsRUFGQyxHQUVNOEIsRUFBRUMsYUFBRixDQUFnQkMsT0FGdEIsQ0FFRGhDLEVBRkM7OztBQUlULG9CQUFHQSxNQUFNc0IsU0FBVCxFQUFtQjtBQUNmLHlCQUFLQSxTQUFMLEdBQWlCdEIsRUFBakI7QUFDQSx5QkFBSzBCLFNBQUwsR0FBaUIzQixjQUFqQjtBQUNBa0MsNEJBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0g7QUFDSjtBQVZLLFMsUUFhVkMsTSxHQUFTLEU7Ozs7OytCQUdGQyxNLEVBQVE7QUFDWCxnQkFBRztBQUNDLHFCQUFLZCxTQUFMLEdBQWlCZSxPQUFPRCxPQUFPMUIsSUFBZCxDQUFqQjtBQUNILGFBRkQsQ0FFQyxPQUFNb0IsQ0FBTixFQUFTLENBQUU7QUFDZjs7OztFQTFEa0MsZUFBS1EsSTs7a0JBQXZCMUIsUyIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGNvbG9yc01peGluIGZyb20gJ0AvbWl4aW5zL2NvbG9ycydcbmltcG9ydCBvcmRlckxpc3QgZnJvbSAnQC9jb21wb25lbnRzL29yZGVyLWxpc3QnXG5cbmNvbnN0IF9fT1JERVJfREFUQV9fID0gW3tcbiAgICBpZDogMSxcbiAgICBjb2RlOiAnRTIwMTgwMTAyMTEyMjAwJyxcbiAgICBzdGF0dXM6IDEsXG4gICAgcGF5U3RhdHVzOiAxLFxuICAgIHByaWNlOiAyMDAuMDAsXG4gICAgZnJlaWdodDogMC4wMCxcbiAgICBpc0NvbW1lbnRlZDogZmFsc2UsXG4gICAgY29tbW9kaXR5TGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIGNvdmVyOiAnaHR0cHM6Ly90MS5waWNiLmNjL3VwbG9hZHMvMjAxOC8wMi8yMi9LR1FoRy5wbmcnLFxuICAgICAgICAgICAgdGl0bGU6ICfkupHkuYvkuIPlkbMnLFxuICAgICAgICAgICAgdHlwZTogJ+eGn+iMticsXG4gICAgICAgICAgICBwcmljZTogMTAwLjAwLFxuICAgICAgICAgICAgY291bnQ6IDFcbiAgICAgICAgfVxuICAgIF1cbn0se1xuICAgIGlkOiAyLFxuICAgIGNvZGU6ICdFMjAxODAxMDIxMTIyMDEnLFxuICAgIHN0YXR1czogMixcbiAgICBwYXlTdGF0dXM6IDEsXG4gICAgcHJpY2U6IDIwMC4wMCxcbiAgICBmcmVpZ2h0OiAxMC4wMCxcbiAgICBpc0NvbW1lbnRlZDogZmFsc2UsXG4gICAgY29tbW9kaXR5TGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIGNvdmVyOiAnaHR0cHM6Ly90MS5waWNiLmNjL3VwbG9hZHMvMjAxOC8wMi8yMi9LR1FoRy5wbmcnLFxuICAgICAgICAgICAgdGl0bGU6ICfkupHkuYvkuIPlkbMnLFxuICAgICAgICAgICAgdHlwZTogJ+eGn+iMticsXG4gICAgICAgICAgICBwcmljZTogMTAwLjAwLFxuICAgICAgICAgICAgY291bnQ6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBjb3ZlcjogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDIvMjIvS0dRaEcucG5nJyxcbiAgICAgICAgICAgIHRpdGxlOiAn5LqR5LmL5LiD5ZGzJyxcbiAgICAgICAgICAgIHR5cGU6ICfnhp/ojLYnLFxuICAgICAgICAgICAgcHJpY2U6IDEwMC4wMCxcbiAgICAgICAgICAgIGNvdW50OiAxXG4gICAgICAgIH1cbiAgICBdXG59XVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckxpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iuouWNleWIl+ihqCcsXG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3d4Yy1jYyc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWNjL2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy1mbGV4JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZmxleC9kaXN0L2luZGV4JyxcbiAgICAgICAgICAgICd3eGMtdGFiJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy10YWItcGFuZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9wYW5lbCcsXG4gICAgICAgICAgICAnd3hjLXRhYi1sYWJlbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2xhYmVsJyxcbiAgICAgICAgICAgICd3eGMtYmFkZ2UnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1iYWRnZS9kaXN0L2luZGV4JyxcbiAgICAgICAgICAgICd3eGMtcHJpY2UnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1wcmljZS9kaXN0L2luZGV4JyxcbiAgICAgICAgfVxuICAgIH1cblxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjcC1vcmRlci1saXN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpkYXRhbGlzdC5vbmNlXCI6XCJvcmRlckxpc3RcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAnY3Atb3JkZXItbGlzdCc6IG9yZGVyTGlzdFxuICAgIH1cblxuICAgIG1peGlucyA9IFtjb2xvcnNNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICAgIGFjdGl2ZUtleTogMCxcbiAgICAgICAgb3JkZXJUYWJzOiBbXG4gICAgICAgICAgICB7IGlkOiAwLCB0aXRsZTogJ+WFqOmDqCcsIGJhZGdlOiAwLCBjb250ZW50OiAn5YWo6YOoJyB9LFxuICAgICAgICAgICAgeyBpZDogMSwgdGl0bGU6ICflvoXku5jmrL4nLCBiYWRnZTogMCwgY29udGVudDogJ+W+heS7mOasvicgfSxcbiAgICAgICAgICAgIHsgaWQ6IDIsIHRpdGxlOiAn5b6F5Y+R6LSnJywgYmFkZ2U6IDAsIGNvbnRlbnQ6ICflvoXlj5HotKcnIH0sXG4gICAgICAgICAgICB7IGlkOiAzLCB0aXRsZTogJ+W+heaUtui0pycsIGJhZGdlOiAwLCBjb250ZW50OiAn5b6F5pS26LSnJyB9LFxuICAgICAgICAgICAgeyBpZDogNCwgdGl0bGU6ICflt7LlrozmiJAnLCBiYWRnZTogMCwgY29udGVudDogJ+W3suWujOaIkCcgfVxuICAgICAgICBdLFxuICAgICAgICBvcmRlckxpc3Q6IF9fT1JERVJfREFUQV9fXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgb25UYWJDbGljayhlKXtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUtleSA9IHRoaXMuYWN0aXZlS2V5O1xuICAgICAgICAgICAgY29uc3QgeyBpZCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG5cbiAgICAgICAgICAgIGlmKGlkICE9IGFjdGl2ZUtleSl7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVLZXkgPSBpZDtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyTGlzdCA9IF9fT1JERVJfREFUQV9fO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiafooYzmlbDmja7mm7TmlrAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9uKSB7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlS2V5ID0gTnVtYmVyKG9wdGlvbi50eXBlKTtcbiAgICAgICAgfWNhdGNoKGUpIHt9XG4gICAgfVxufVxuXG4iXX0=