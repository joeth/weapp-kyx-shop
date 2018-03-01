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
    goodsList: [{
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiX19PUkRFUl9EQVRBX18iLCJpZCIsImNvZGUiLCJzdGF0dXMiLCJwYXlTdGF0dXMiLCJwcmljZSIsImZyZWlnaHQiLCJpc0NvbW1lbnRlZCIsImdvb2RzTGlzdCIsImNvdmVyIiwidGl0bGUiLCJ0eXBlIiwiY291bnQiLCJPcmRlckxpc3QiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibWl4aW5zIiwiZGF0YSIsImFjdGl2ZUtleSIsIm9yZGVyVGFicyIsImJhZGdlIiwiY29udGVudCIsIm9yZGVyTGlzdCIsImNvbXB1dGVkIiwibWV0aG9kcyIsIm9uVGFiQ2xpY2siLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRzIiwib3B0aW9uIiwiTnVtYmVyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsQ0FBQztBQUNwQkMsUUFBSSxDQURnQjtBQUVwQkMsVUFBTSxpQkFGYztBQUdwQkMsWUFBUSxDQUhZO0FBSXBCQyxlQUFXLENBSlM7QUFLcEJDLFdBQU8sTUFMYTtBQU1wQkMsYUFBUyxJQU5XO0FBT3BCQyxpQkFBYSxLQVBPO0FBUXBCQyxlQUFXLENBQ1A7QUFDSVAsWUFBSSxDQURSO0FBRUlRLGVBQU8saURBRlg7QUFHSUMsZUFBTyxNQUhYO0FBSUlDLGNBQU0sSUFKVjtBQUtJTixlQUFPLE1BTFg7QUFNSU8sZUFBTztBQU5YLEtBRE87QUFSUyxDQUFELEVBa0JyQjtBQUNFWCxRQUFJLENBRE47QUFFRUMsVUFBTSxpQkFGUjtBQUdFQyxZQUFRLENBSFY7QUFJRUMsZUFBVyxDQUpiO0FBS0VDLFdBQU8sTUFMVDtBQU1FQyxhQUFTLEtBTlg7QUFPRUMsaUJBQWEsS0FQZjtBQVFFQyxlQUFXLENBQ1A7QUFDSVAsWUFBSSxDQURSO0FBRUlRLGVBQU8saURBRlg7QUFHSUMsZUFBTyxNQUhYO0FBSUlDLGNBQU0sSUFKVjtBQUtJTixlQUFPLE1BTFg7QUFNSU8sZUFBTztBQU5YLEtBRE8sRUFTUDtBQUNJWCxZQUFJLENBRFI7QUFFSVEsZUFBTyxpREFGWDtBQUdJQyxlQUFPLE1BSFg7QUFJSUMsY0FBTSxJQUpWO0FBS0lOLGVBQU8sTUFMWDtBQU1JTyxlQUFPO0FBTlgsS0FUTztBQVJiLENBbEJxQixDQUF2Qjs7SUE4Q3FCQyxTOzs7Ozs7Ozs7Ozs7OztnTUFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsTUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsMEJBQVUseUNBREc7QUFFYiw0QkFBWSwyQ0FGQztBQUdiLDJCQUFXLDBDQUhFO0FBSWIsaUNBQWlCLDBDQUpKO0FBS2IsaUNBQWlCLDBDQUxKO0FBTWIsNkJBQWEsNENBTkE7QUFPYiw2QkFBYTtBQVBBO0FBRlosUyxRQWFWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxpQkFBZ0IsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix3QkFBdUIsV0FBMUMsRUFBakIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDTjtBQURNLFMsUUFJVkMsTSxHQUFTLGtCLFFBRVRDLEksR0FBTztBQUNIQyx1QkFBVyxDQURSO0FBRUhDLHVCQUFXLENBQ1AsRUFBRXZCLElBQUksQ0FBTixFQUFTUyxPQUFPLElBQWhCLEVBQXNCZSxPQUFPLENBQTdCLEVBQWdDQyxTQUFTLElBQXpDLEVBRE8sRUFFUCxFQUFFekIsSUFBSSxDQUFOLEVBQVNTLE9BQU8sS0FBaEIsRUFBdUJlLE9BQU8sQ0FBOUIsRUFBaUNDLFNBQVMsS0FBMUMsRUFGTyxFQUdQLEVBQUV6QixJQUFJLENBQU4sRUFBU1MsT0FBTyxLQUFoQixFQUF1QmUsT0FBTyxDQUE5QixFQUFpQ0MsU0FBUyxLQUExQyxFQUhPLEVBSVAsRUFBRXpCLElBQUksQ0FBTixFQUFTUyxPQUFPLEtBQWhCLEVBQXVCZSxPQUFPLENBQTlCLEVBQWlDQyxTQUFTLEtBQTFDLEVBSk8sRUFLUCxFQUFFekIsSUFBSSxDQUFOLEVBQVNTLE9BQU8sS0FBaEIsRUFBdUJlLE9BQU8sQ0FBOUIsRUFBaUNDLFNBQVMsS0FBMUMsRUFMTyxDQUZSO0FBU0hDLHVCQUFXM0I7QUFUUixTLFFBWVA0QixRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDTkMsc0JBRE0sc0JBQ0tDLENBREwsRUFDTztBQUNULG9CQUFNUixZQUFZLEtBQUtBLFNBQXZCO0FBRFMsb0JBRUR0QixFQUZDLEdBRU04QixFQUFFQyxhQUFGLENBQWdCQyxPQUZ0QixDQUVEaEMsRUFGQzs7O0FBSVQsb0JBQUdBLE1BQU1zQixTQUFULEVBQW1CO0FBQ2YseUJBQUtBLFNBQUwsR0FBaUJ0QixFQUFqQjtBQUNBLHlCQUFLMEIsU0FBTCxHQUFpQjNCLGNBQWpCO0FBQ0FrQyw0QkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDSDtBQUNKO0FBVkssUyxRQWFWQyxNLEdBQVMsRTs7Ozs7K0JBR0ZDLE0sRUFBUTtBQUNYLGdCQUFHO0FBQ0MscUJBQUtkLFNBQUwsR0FBaUJlLE9BQU9ELE9BQU8xQixJQUFkLENBQWpCO0FBQ0gsYUFGRCxDQUVDLE9BQU1vQixDQUFOLEVBQVMsQ0FBRTtBQUNmOzs7O0VBMURrQyxlQUFLUSxJOztrQkFBdkIxQixTIiwiZmlsZSI6Imxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgY29sb3JzTWl4aW4gZnJvbSAnQC9taXhpbnMvY29sb3JzJ1xuaW1wb3J0IG9yZGVyTGlzdCBmcm9tICdAL2NvbXBvbmVudHMvb3JkZXItbGlzdCdcblxuY29uc3QgX19PUkRFUl9EQVRBX18gPSBbe1xuICAgIGlkOiAxLFxuICAgIGNvZGU6ICdFMjAxODAxMDIxMTIyMDAnLFxuICAgIHN0YXR1czogMSxcbiAgICBwYXlTdGF0dXM6IDEsXG4gICAgcHJpY2U6IDIwMC4wMCxcbiAgICBmcmVpZ2h0OiAwLjAwLFxuICAgIGlzQ29tbWVudGVkOiBmYWxzZSxcbiAgICBnb29kc0xpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBjb3ZlcjogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDIvMjIvS0dRaEcucG5nJyxcbiAgICAgICAgICAgIHRpdGxlOiAn5LqR5LmL5LiD5ZGzJyxcbiAgICAgICAgICAgIHR5cGU6ICfnhp/ojLYnLFxuICAgICAgICAgICAgcHJpY2U6IDEwMC4wMCxcbiAgICAgICAgICAgIGNvdW50OiAxXG4gICAgICAgIH1cbiAgICBdXG59LHtcbiAgICBpZDogMixcbiAgICBjb2RlOiAnRTIwMTgwMTAyMTEyMjAxJyxcbiAgICBzdGF0dXM6IDIsXG4gICAgcGF5U3RhdHVzOiAxLFxuICAgIHByaWNlOiAyMDAuMDAsXG4gICAgZnJlaWdodDogMTAuMDAsXG4gICAgaXNDb21tZW50ZWQ6IGZhbHNlLFxuICAgIGdvb2RzTGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIGNvdmVyOiAnaHR0cHM6Ly90MS5waWNiLmNjL3VwbG9hZHMvMjAxOC8wMi8yMi9LR1FoRy5wbmcnLFxuICAgICAgICAgICAgdGl0bGU6ICfkupHkuYvkuIPlkbMnLFxuICAgICAgICAgICAgdHlwZTogJ+eGn+iMticsXG4gICAgICAgICAgICBwcmljZTogMTAwLjAwLFxuICAgICAgICAgICAgY291bnQ6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBjb3ZlcjogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDIvMjIvS0dRaEcucG5nJyxcbiAgICAgICAgICAgIHRpdGxlOiAn5LqR5LmL5LiD5ZGzJyxcbiAgICAgICAgICAgIHR5cGU6ICfnhp/ojLYnLFxuICAgICAgICAgICAgcHJpY2U6IDEwMC4wMCxcbiAgICAgICAgICAgIGNvdW50OiAxXG4gICAgICAgIH1cbiAgICBdXG59XVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckxpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iuouWNleWIl+ihqCcsXG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3d4Yy1jYyc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWNjL2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy1mbGV4JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZmxleC9kaXN0L2luZGV4JyxcbiAgICAgICAgICAgICd3eGMtdGFiJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy10YWItcGFuZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9wYW5lbCcsXG4gICAgICAgICAgICAnd3hjLXRhYi1sYWJlbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2xhYmVsJyxcbiAgICAgICAgICAgICd3eGMtYmFkZ2UnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1iYWRnZS9kaXN0L2luZGV4JyxcbiAgICAgICAgICAgICd3eGMtcHJpY2UnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1wcmljZS9kaXN0L2luZGV4JyxcbiAgICAgICAgfVxuICAgIH1cblxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjcC1vcmRlci1saXN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpkYXRhbGlzdC5vbmNlXCI6XCJvcmRlckxpc3RcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAnY3Atb3JkZXItbGlzdCc6IG9yZGVyTGlzdFxuICAgIH1cblxuICAgIG1peGlucyA9IFtjb2xvcnNNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICAgIGFjdGl2ZUtleTogMCxcbiAgICAgICAgb3JkZXJUYWJzOiBbXG4gICAgICAgICAgICB7IGlkOiAwLCB0aXRsZTogJ+WFqOmDqCcsIGJhZGdlOiAwLCBjb250ZW50OiAn5YWo6YOoJyB9LFxuICAgICAgICAgICAgeyBpZDogMSwgdGl0bGU6ICflvoXku5jmrL4nLCBiYWRnZTogMCwgY29udGVudDogJ+W+heS7mOasvicgfSxcbiAgICAgICAgICAgIHsgaWQ6IDIsIHRpdGxlOiAn5b6F5Y+R6LSnJywgYmFkZ2U6IDAsIGNvbnRlbnQ6ICflvoXlj5HotKcnIH0sXG4gICAgICAgICAgICB7IGlkOiAzLCB0aXRsZTogJ+W+heaUtui0pycsIGJhZGdlOiAwLCBjb250ZW50OiAn5b6F5pS26LSnJyB9LFxuICAgICAgICAgICAgeyBpZDogNCwgdGl0bGU6ICflt7LlrozmiJAnLCBiYWRnZTogMCwgY29udGVudDogJ+W3suWujOaIkCcgfVxuICAgICAgICBdLFxuICAgICAgICBvcmRlckxpc3Q6IF9fT1JERVJfREFUQV9fXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgb25UYWJDbGljayhlKXtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUtleSA9IHRoaXMuYWN0aXZlS2V5O1xuICAgICAgICAgICAgY29uc3QgeyBpZCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG5cbiAgICAgICAgICAgIGlmKGlkICE9IGFjdGl2ZUtleSl7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVLZXkgPSBpZDtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyTGlzdCA9IF9fT1JERVJfREFUQV9fO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiafooYzmlbDmja7mm7TmlrAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9uKSB7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlS2V5ID0gTnVtYmVyKG9wdGlvbi50eXBlKTtcbiAgICAgICAgfWNhdGNoKGUpIHt9XG4gICAgfVxufVxuXG4iXX0=