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
                'wxc-badge': '../../packages/@minui/wxc-badge/dist/index'
            }
        }, _this.components = {}, _this.mixins = [], _this.data = {
            activeKey: 0,
            orderTabs: [{ id: 0, title: '全部', badge: 0, content: '全部' }, { id: 1, title: '待付款', badge: 0, content: '待付款' }, { id: 2, title: '待发货', badge: 0, content: '待发货' }, { id: 3, title: '待收货', badge: 0, content: '待收货' }, { id: 4, title: '已完成', badge: 0, content: '已完成' }]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiT3JkZXJMaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwiYWN0aXZlS2V5Iiwib3JkZXJUYWJzIiwiaWQiLCJ0aXRsZSIsImJhZGdlIiwiY29udGVudCIsImNvbXB1dGVkIiwibWV0aG9kcyIsIm9uVGFiQ2xpY2siLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRzIiwib3B0aW9uIiwiTnVtYmVyIiwidHlwZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7O2dNQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQyw2QkFBaUI7QUFDYiwwQkFBVSx5Q0FERztBQUViLDRCQUFZLDJDQUZDO0FBR2IsMkJBQVcsMENBSEU7QUFJYixpQ0FBaUIsMENBSko7QUFLYixpQ0FBaUIsMENBTEo7QUFNYiw2QkFBYTtBQU5BO0FBRlosUyxRQVlUQyxVLEdBQWEsRSxRQUliQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDSEMsdUJBQVcsQ0FEUjtBQUVIQyx1QkFBVyxDQUNQLEVBQUVDLElBQUksQ0FBTixFQUFTQyxPQUFPLElBQWhCLEVBQXNCQyxPQUFPLENBQTdCLEVBQWdDQyxTQUFTLElBQXpDLEVBRE8sRUFFUCxFQUFFSCxJQUFJLENBQU4sRUFBU0MsT0FBTyxLQUFoQixFQUF1QkMsT0FBTyxDQUE5QixFQUFpQ0MsU0FBUyxLQUExQyxFQUZPLEVBR1AsRUFBRUgsSUFBSSxDQUFOLEVBQVNDLE9BQU8sS0FBaEIsRUFBdUJDLE9BQU8sQ0FBOUIsRUFBaUNDLFNBQVMsS0FBMUMsRUFITyxFQUlQLEVBQUVILElBQUksQ0FBTixFQUFTQyxPQUFPLEtBQWhCLEVBQXVCQyxPQUFPLENBQTlCLEVBQWlDQyxTQUFTLEtBQTFDLEVBSk8sRUFLUCxFQUFFSCxJQUFJLENBQU4sRUFBU0MsT0FBTyxLQUFoQixFQUF1QkMsT0FBTyxDQUE5QixFQUFpQ0MsU0FBUyxLQUExQyxFQUxPO0FBRlIsUyxRQVdQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDTkMsc0JBRE0sc0JBQ0tDLENBREwsRUFDTztBQUNULG9CQUFNVCxZQUFZLEtBQUtBLFNBQXZCO0FBRFMsb0JBRURFLEVBRkMsR0FFTU8sRUFBRUMsYUFBRixDQUFnQkMsT0FGdEIsQ0FFRFQsRUFGQzs7O0FBSVQsb0JBQUdBLE1BQU1GLFNBQVQsRUFBbUI7QUFDZix5QkFBS0EsU0FBTCxHQUFpQkUsRUFBakI7QUFDQVUsNEJBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0g7QUFDSjtBQVRLLFMsUUFZVkMsTSxHQUFTLEU7Ozs7OytCQUdGQyxNLEVBQVE7QUFDWCxnQkFBRztBQUNDLHFCQUFLZixTQUFMLEdBQWlCZ0IsT0FBT0QsT0FBT0UsSUFBZCxDQUFqQjtBQUNILGFBRkQsQ0FFQyxPQUFNUixDQUFOLEVBQVMsQ0FBRTtBQUNmOzs7O0VBcERrQyxlQUFLUyxJOztrQkFBdkJ6QixTIiwiZmlsZSI6Imxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyTGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iuouWNleWIl+ihqCcsXHJcbiAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICd3eGMtY2MnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1jYy9kaXN0L2luZGV4JyxcclxuICAgICAgICAgICAgJ3d4Yy1mbGV4JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZmxleC9kaXN0L2luZGV4JyxcclxuICAgICAgICAgICAgJ3d4Yy10YWInOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgICAgICd3eGMtdGFiLXBhbmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvcGFuZWwnLFxyXG4gICAgICAgICAgICAnd3hjLXRhYi1sYWJlbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2xhYmVsJyxcclxuICAgICAgICAgICAgJ3d4Yy1iYWRnZSc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWJhZGdlL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRzID0ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtaXhpbnMgPSBbXVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgYWN0aXZlS2V5OiAwLFxyXG4gICAgICAgIG9yZGVyVGFiczogW1xyXG4gICAgICAgICAgICB7IGlkOiAwLCB0aXRsZTogJ+WFqOmDqCcsIGJhZGdlOiAwLCBjb250ZW50OiAn5YWo6YOoJyB9LFxyXG4gICAgICAgICAgICB7IGlkOiAxLCB0aXRsZTogJ+W+heS7mOasvicsIGJhZGdlOiAwLCBjb250ZW50OiAn5b6F5LuY5qy+JyB9LFxyXG4gICAgICAgICAgICB7IGlkOiAyLCB0aXRsZTogJ+W+heWPkei0pycsIGJhZGdlOiAwLCBjb250ZW50OiAn5b6F5Y+R6LSnJyB9LFxyXG4gICAgICAgICAgICB7IGlkOiAzLCB0aXRsZTogJ+W+heaUtui0pycsIGJhZGdlOiAwLCBjb250ZW50OiAn5b6F5pS26LSnJyB9LFxyXG4gICAgICAgICAgICB7IGlkOiA0LCB0aXRsZTogJ+W3suWujOaIkCcsIGJhZGdlOiAwLCBjb250ZW50OiAn5bey5a6M5oiQJyB9XHJcbiAgICAgICAgXSxcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIG9uVGFiQ2xpY2soZSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUtleSA9IHRoaXMuYWN0aXZlS2V5O1xyXG4gICAgICAgICAgICBjb25zdCB7IGlkIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcclxuXHJcbiAgICAgICAgICAgIGlmKGlkICE9IGFjdGl2ZUtleSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUtleSA9IGlkO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJp+ihjOaVsOaNruabtOaWsCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZChvcHRpb24pIHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlS2V5ID0gTnVtYmVyKG9wdGlvbi50eXBlKTtcclxuICAgICAgICB9Y2F0Y2goZSkge31cclxuICAgIH1cclxufVxyXG5cclxuIl19