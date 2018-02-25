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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiT3JkZXJMaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwiYWN0aXZlS2V5Iiwib3JkZXJUYWJzIiwiaWQiLCJ0aXRsZSIsImJhZGdlIiwiY29udGVudCIsImNvbXB1dGVkIiwibWV0aG9kcyIsIm9uVGFiQ2xpY2siLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRzIiwib3B0aW9uIiwiTnVtYmVyIiwidHlwZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7O2dNQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQyw2QkFBaUI7QUFDYiwwQkFBVSx5Q0FERztBQUViLDRCQUFZLDJDQUZDO0FBR2IsMkJBQVcsMENBSEU7QUFJYixpQ0FBaUIsMENBSko7QUFLYixpQ0FBaUIsMENBTEo7QUFNYiw2QkFBYTtBQU5BO0FBRlosUyxRQVlUQyxVLEdBQWEsRSxRQUliQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDSEMsdUJBQVcsQ0FEUjtBQUVIQyx1QkFBVyxDQUNQLEVBQUVDLElBQUksQ0FBTixFQUFTQyxPQUFPLElBQWhCLEVBQXNCQyxPQUFPLENBQTdCLEVBQWdDQyxTQUFTLElBQXpDLEVBRE8sRUFFUCxFQUFFSCxJQUFJLENBQU4sRUFBU0MsT0FBTyxLQUFoQixFQUF1QkMsT0FBTyxDQUE5QixFQUFpQ0MsU0FBUyxLQUExQyxFQUZPLEVBR1AsRUFBRUgsSUFBSSxDQUFOLEVBQVNDLE9BQU8sS0FBaEIsRUFBdUJDLE9BQU8sQ0FBOUIsRUFBaUNDLFNBQVMsS0FBMUMsRUFITyxFQUlQLEVBQUVILElBQUksQ0FBTixFQUFTQyxPQUFPLEtBQWhCLEVBQXVCQyxPQUFPLENBQTlCLEVBQWlDQyxTQUFTLEtBQTFDLEVBSk8sRUFLUCxFQUFFSCxJQUFJLENBQU4sRUFBU0MsT0FBTyxLQUFoQixFQUF1QkMsT0FBTyxDQUE5QixFQUFpQ0MsU0FBUyxLQUExQyxFQUxPO0FBRlIsUyxRQVdQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDTkMsc0JBRE0sc0JBQ0tDLENBREwsRUFDTztBQUNULG9CQUFNVCxZQUFZLEtBQUtBLFNBQXZCO0FBRFMsb0JBRURFLEVBRkMsR0FFTU8sRUFBRUMsYUFBRixDQUFnQkMsT0FGdEIsQ0FFRFQsRUFGQzs7O0FBSVQsb0JBQUdBLE1BQU1GLFNBQVQsRUFBbUI7QUFDZix5QkFBS0EsU0FBTCxHQUFpQkUsRUFBakI7QUFDQVUsNEJBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0g7QUFDSjtBQVRLLFMsUUFZVkMsTSxHQUFTLEU7Ozs7OytCQUdGQyxNLEVBQVE7QUFDWCxnQkFBRztBQUNDLHFCQUFLZixTQUFMLEdBQWlCZ0IsT0FBT0QsT0FBT0UsSUFBZCxDQUFqQjtBQUNILGFBRkQsQ0FFQyxPQUFNUixDQUFOLEVBQVMsQ0FBRTtBQUNmOzs7O0VBcERrQyxlQUFLUyxJOztrQkFBdkJ6QixTIiwiZmlsZSI6Imxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyTGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6i5Y2V5YiX6KGoJyxcbiAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnd3hjLWNjJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtY2MvZGlzdC9pbmRleCcsXG4gICAgICAgICAgICAnd3hjLWZsZXgnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1mbGV4L2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy10YWInOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9pbmRleCcsXG4gICAgICAgICAgICAnd3hjLXRhYi1wYW5lbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L3BhbmVsJyxcbiAgICAgICAgICAgICd3eGMtdGFiLWxhYmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvbGFiZWwnLFxuICAgICAgICAgICAgJ3d4Yy1iYWRnZSc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWJhZGdlL2Rpc3QvaW5kZXgnLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50cyA9IHtcblxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgICBhY3RpdmVLZXk6IDAsXG4gICAgICAgIG9yZGVyVGFiczogW1xuICAgICAgICAgICAgeyBpZDogMCwgdGl0bGU6ICflhajpg6gnLCBiYWRnZTogMCwgY29udGVudDogJ+WFqOmDqCcgfSxcbiAgICAgICAgICAgIHsgaWQ6IDEsIHRpdGxlOiAn5b6F5LuY5qy+JywgYmFkZ2U6IDAsIGNvbnRlbnQ6ICflvoXku5jmrL4nIH0sXG4gICAgICAgICAgICB7IGlkOiAyLCB0aXRsZTogJ+W+heWPkei0pycsIGJhZGdlOiAwLCBjb250ZW50OiAn5b6F5Y+R6LSnJyB9LFxuICAgICAgICAgICAgeyBpZDogMywgdGl0bGU6ICflvoXmlLbotKcnLCBiYWRnZTogMCwgY29udGVudDogJ+W+heaUtui0pycgfSxcbiAgICAgICAgICAgIHsgaWQ6IDQsIHRpdGxlOiAn5bey5a6M5oiQJywgYmFkZ2U6IDAsIGNvbnRlbnQ6ICflt7LlrozmiJAnIH1cbiAgICAgICAgXSxcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgICBvblRhYkNsaWNrKGUpe1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlS2V5ID0gdGhpcy5hY3RpdmVLZXk7XG4gICAgICAgICAgICBjb25zdCB7IGlkIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcblxuICAgICAgICAgICAgaWYoaWQgIT0gYWN0aXZlS2V5KXtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUtleSA9IGlkO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiafooYzmlbDmja7mm7TmlrAnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZChvcHRpb24pIHtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVLZXkgPSBOdW1iZXIob3B0aW9uLnR5cGUpO1xuICAgICAgICB9Y2F0Y2goZSkge31cbiAgICB9XG59XG5cbiJdfQ==