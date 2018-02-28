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
    goods: [{
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiX19PUkRFUl9EQVRBX18iLCJpZCIsImNvZGUiLCJzdGF0dXMiLCJwYXlTdGF0dXMiLCJwcmljZSIsImZyZWlnaHQiLCJnb29kcyIsImNvdmVyIiwidGl0bGUiLCJ0eXBlIiwiY291bnQiLCJPcmRlckxpc3QiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibWl4aW5zIiwiZGF0YSIsImFjdGl2ZUtleSIsIm9yZGVyVGFicyIsImJhZGdlIiwiY29udGVudCIsIm9yZGVyTGlzdCIsImNvbXB1dGVkIiwibWV0aG9kcyIsIm9uVGFiQ2xpY2siLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRzIiwib3B0aW9uIiwiTnVtYmVyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsQ0FBQztBQUNwQkMsUUFBSSxDQURnQjtBQUVwQkMsVUFBTSxpQkFGYztBQUdwQkMsWUFBUSxDQUhZO0FBSXBCQyxlQUFXLENBSlM7QUFLcEJDLFdBQU8sTUFMYTtBQU1wQkMsYUFBUyxJQU5XO0FBT3BCQyxXQUFPLENBQ0g7QUFDSU4sWUFBSSxDQURSO0FBRUlPLGVBQU8saURBRlg7QUFHSUMsZUFBTyxNQUhYO0FBSUlDLGNBQU0sSUFKVjtBQUtJTCxlQUFPLE1BTFg7QUFNSU0sZUFBTztBQU5YLEtBREc7QUFQYSxDQUFELEVBaUJyQjtBQUNFVixRQUFJLENBRE47QUFFRUMsVUFBTSxpQkFGUjtBQUdFQyxZQUFRLENBSFY7QUFJRUMsZUFBVyxDQUpiO0FBS0VDLFdBQU8sTUFMVDtBQU1FQyxhQUFTLEtBTlg7QUFPRUMsV0FBTyxDQUNIO0FBQ0lOLFlBQUksQ0FEUjtBQUVJTyxlQUFPLGlEQUZYO0FBR0lDLGVBQU8sTUFIWDtBQUlJQyxjQUFNLElBSlY7QUFLSUwsZUFBTyxNQUxYO0FBTUlNLGVBQU87QUFOWCxLQURHLEVBU0g7QUFDSVYsWUFBSSxDQURSO0FBRUlPLGVBQU8saURBRlg7QUFHSUMsZUFBTyxNQUhYO0FBSUlDLGNBQU0sSUFKVjtBQUtJTCxlQUFPLE1BTFg7QUFNSU0sZUFBTztBQU5YLEtBVEc7QUFQVCxDQWpCcUIsQ0FBdkI7O0lBNENxQkMsUzs7Ozs7Ozs7Ozs7Ozs7Z01BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLDZCQUFpQjtBQUNiLDBCQUFVLHlDQURHO0FBRWIsNEJBQVksMkNBRkM7QUFHYiwyQkFBVywwQ0FIRTtBQUliLGlDQUFpQiwwQ0FKSjtBQUtiLGlDQUFpQiwwQ0FMSjtBQU1iLDZCQUFhLDRDQU5BO0FBT2IsNkJBQWE7QUFQQTtBQUZaLFMsUUFhVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsaUJBQWdCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsd0JBQXVCLFdBQTFDLEVBQWpCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ047QUFETSxTLFFBSVZDLE0sR0FBUyxrQixRQUVUQyxJLEdBQU87QUFDSEMsdUJBQVcsQ0FEUjtBQUVIQyx1QkFBVyxDQUNQLEVBQUV0QixJQUFJLENBQU4sRUFBU1EsT0FBTyxJQUFoQixFQUFzQmUsT0FBTyxDQUE3QixFQUFnQ0MsU0FBUyxJQUF6QyxFQURPLEVBRVAsRUFBRXhCLElBQUksQ0FBTixFQUFTUSxPQUFPLEtBQWhCLEVBQXVCZSxPQUFPLENBQTlCLEVBQWlDQyxTQUFTLEtBQTFDLEVBRk8sRUFHUCxFQUFFeEIsSUFBSSxDQUFOLEVBQVNRLE9BQU8sS0FBaEIsRUFBdUJlLE9BQU8sQ0FBOUIsRUFBaUNDLFNBQVMsS0FBMUMsRUFITyxFQUlQLEVBQUV4QixJQUFJLENBQU4sRUFBU1EsT0FBTyxLQUFoQixFQUF1QmUsT0FBTyxDQUE5QixFQUFpQ0MsU0FBUyxLQUExQyxFQUpPLEVBS1AsRUFBRXhCLElBQUksQ0FBTixFQUFTUSxPQUFPLEtBQWhCLEVBQXVCZSxPQUFPLENBQTlCLEVBQWlDQyxTQUFTLEtBQTFDLEVBTE8sQ0FGUjtBQVNIQyx1QkFBVzFCO0FBVFIsUyxRQVlQMkIsUSxHQUFXLEUsUUFHWEMsTyxHQUFVO0FBQ05DLHNCQURNLHNCQUNLQyxDQURMLEVBQ087QUFDVCxvQkFBTVIsWUFBWSxLQUFLQSxTQUF2QjtBQURTLG9CQUVEckIsRUFGQyxHQUVNNkIsRUFBRUMsYUFBRixDQUFnQkMsT0FGdEIsQ0FFRC9CLEVBRkM7OztBQUlULG9CQUFHQSxNQUFNcUIsU0FBVCxFQUFtQjtBQUNmLHlCQUFLQSxTQUFMLEdBQWlCckIsRUFBakI7QUFDQWdDLDRCQUFRQyxHQUFSLENBQVksUUFBWjtBQUNIO0FBQ0o7QUFUSyxTLFFBWVZDLE0sR0FBUyxFOzs7OzsrQkFHRkMsTSxFQUFRO0FBQ1gsZ0JBQUc7QUFDQyxxQkFBS2QsU0FBTCxHQUFpQmUsT0FBT0QsT0FBTzFCLElBQWQsQ0FBakI7QUFDSCxhQUZELENBRUMsT0FBTW9CLENBQU4sRUFBUyxDQUFFO0FBQ2Y7Ozs7RUF6RGtDLGVBQUtRLEk7O2tCQUF2QjFCLFMiLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBjb2xvcnNNaXhpbiBmcm9tICdAL21peGlucy9jb2xvcnMnXG5pbXBvcnQgb3JkZXJMaXN0IGZyb20gJ0AvY29tcG9uZW50cy9vcmRlci1saXN0J1xuXG5jb25zdCBfX09SREVSX0RBVEFfXyA9IFt7XG4gICAgaWQ6IDEsXG4gICAgY29kZTogJ0UyMDE4MDEwMjExMjIwMCcsXG4gICAgc3RhdHVzOiAxLFxuICAgIHBheVN0YXR1czogMSxcbiAgICBwcmljZTogMjAwLjAwLFxuICAgIGZyZWlnaHQ6IDAuMDAsXG4gICAgZ29vZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBjb3ZlcjogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDIvMjIvS0dRaEcucG5nJyxcbiAgICAgICAgICAgIHRpdGxlOiAn5LqR5LmL5LiD5ZGzJyxcbiAgICAgICAgICAgIHR5cGU6ICfnhp/ojLYnLFxuICAgICAgICAgICAgcHJpY2U6IDEwMC4wMCxcbiAgICAgICAgICAgIGNvdW50OiAxXG4gICAgICAgIH1cbiAgICBdXG59LHtcbiAgICBpZDogMixcbiAgICBjb2RlOiAnRTIwMTgwMTAyMTEyMjAxJyxcbiAgICBzdGF0dXM6IDIsXG4gICAgcGF5U3RhdHVzOiAxLFxuICAgIHByaWNlOiAyMDAuMDAsXG4gICAgZnJlaWdodDogMTAuMDAsXG4gICAgZ29vZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBjb3ZlcjogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDIvMjIvS0dRaEcucG5nJyxcbiAgICAgICAgICAgIHRpdGxlOiAn5LqR5LmL5LiD5ZGzJyxcbiAgICAgICAgICAgIHR5cGU6ICfnhp/ojLYnLFxuICAgICAgICAgICAgcHJpY2U6IDEwMC4wMCxcbiAgICAgICAgICAgIGNvdW50OiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgY292ZXI6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAyLzIyL0tHUWhHLnBuZycsXG4gICAgICAgICAgICB0aXRsZTogJ+S6keS5i+S4g+WRsycsXG4gICAgICAgICAgICB0eXBlOiAn54af6Iy2JyxcbiAgICAgICAgICAgIHByaWNlOiAxMDAuMDAsXG4gICAgICAgICAgICBjb3VudDogMVxuICAgICAgICB9XG4gICAgXVxufV1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJMaXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforqLljZXliJfooagnLFxuICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICd3eGMtY2MnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1jYy9kaXN0L2luZGV4JyxcbiAgICAgICAgICAgICd3eGMtZmxleCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWZsZXgvZGlzdC9pbmRleCcsXG4gICAgICAgICAgICAnd3hjLXRhYic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2luZGV4JyxcbiAgICAgICAgICAgICd3eGMtdGFiLXBhbmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvcGFuZWwnLFxuICAgICAgICAgICAgJ3d4Yy10YWItbGFiZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9sYWJlbCcsXG4gICAgICAgICAgICAnd3hjLWJhZGdlJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYmFkZ2UvZGlzdC9pbmRleCcsXG4gICAgICAgICAgICAnd3hjLXByaWNlJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtcHJpY2UvZGlzdC9pbmRleCcsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiY3Atb3JkZXItbGlzdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6ZGF0YWxpc3Qub25jZVwiOlwib3JkZXJMaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgJ2NwLW9yZGVyLWxpc3QnOiBvcmRlckxpc3RcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbY29sb3JzTWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgICBhY3RpdmVLZXk6IDAsXG4gICAgICAgIG9yZGVyVGFiczogW1xuICAgICAgICAgICAgeyBpZDogMCwgdGl0bGU6ICflhajpg6gnLCBiYWRnZTogMCwgY29udGVudDogJ+WFqOmDqCcgfSxcbiAgICAgICAgICAgIHsgaWQ6IDEsIHRpdGxlOiAn5b6F5LuY5qy+JywgYmFkZ2U6IDAsIGNvbnRlbnQ6ICflvoXku5jmrL4nIH0sXG4gICAgICAgICAgICB7IGlkOiAyLCB0aXRsZTogJ+W+heWPkei0pycsIGJhZGdlOiAwLCBjb250ZW50OiAn5b6F5Y+R6LSnJyB9LFxuICAgICAgICAgICAgeyBpZDogMywgdGl0bGU6ICflvoXmlLbotKcnLCBiYWRnZTogMCwgY29udGVudDogJ+W+heaUtui0pycgfSxcbiAgICAgICAgICAgIHsgaWQ6IDQsIHRpdGxlOiAn5bey5a6M5oiQJywgYmFkZ2U6IDAsIGNvbnRlbnQ6ICflt7LlrozmiJAnIH1cbiAgICAgICAgXSxcbiAgICAgICAgb3JkZXJMaXN0OiBfX09SREVSX0RBVEFfX1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIG9uVGFiQ2xpY2soZSl7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVLZXkgPSB0aGlzLmFjdGl2ZUtleTtcbiAgICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuXG4gICAgICAgICAgICBpZihpZCAhPSBhY3RpdmVLZXkpe1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlS2V5ID0gaWQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJp+ihjOaVsOaNruabtOaWsCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZChvcHRpb24pIHtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVLZXkgPSBOdW1iZXIob3B0aW9uLnR5cGUpO1xuICAgICAgICB9Y2F0Y2goZSkge31cbiAgICB9XG59XG5cbiJdfQ==