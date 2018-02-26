'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _colors = require('./../../mixins/colors.js');

var _colors2 = _interopRequireDefault(_colors);

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
                'wxc-badge': '../../packages/@minui/wxc-badge/dist/index',
                'wxc-price': '../../packages/@minui/wxc-price/dist/index'
            }
        }, _this.components = {}, _this.mixins = [_colors2.default], _this.data = {
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
            console.log(this);
            try {
                this.activeKey = Number(option.type);
            } catch (e) {}
        }
    }]);

    return OrderList;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(OrderList , 'pages/order/list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiT3JkZXJMaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwiYWN0aXZlS2V5Iiwib3JkZXJUYWJzIiwiaWQiLCJ0aXRsZSIsImJhZGdlIiwiY29udGVudCIsImNvbXB1dGVkIiwibWV0aG9kcyIsIm9uVGFiQ2xpY2siLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRzIiwib3B0aW9uIiwiTnVtYmVyIiwidHlwZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7Z01BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLDZCQUFpQjtBQUNiLDBCQUFVLHlDQURHO0FBRWIsNEJBQVksMkNBRkM7QUFHYiwyQkFBVywwQ0FIRTtBQUliLGlDQUFpQiwwQ0FKSjtBQUtiLGlDQUFpQiwwQ0FMSjtBQU1iLDZCQUFhLDRDQU5BO0FBT2IsNkJBQWE7QUFQQTtBQUZaLFMsUUFhVEMsVSxHQUFhLEUsUUFJYkMsTSxHQUFTLGtCLFFBRVRDLEksR0FBTztBQUNIQyx1QkFBVyxDQURSO0FBRUhDLHVCQUFXLENBQ1AsRUFBRUMsSUFBSSxDQUFOLEVBQVNDLE9BQU8sSUFBaEIsRUFBc0JDLE9BQU8sQ0FBN0IsRUFBZ0NDLFNBQVMsSUFBekMsRUFETyxFQUVQLEVBQUVILElBQUksQ0FBTixFQUFTQyxPQUFPLEtBQWhCLEVBQXVCQyxPQUFPLENBQTlCLEVBQWlDQyxTQUFTLEtBQTFDLEVBRk8sRUFHUCxFQUFFSCxJQUFJLENBQU4sRUFBU0MsT0FBTyxLQUFoQixFQUF1QkMsT0FBTyxDQUE5QixFQUFpQ0MsU0FBUyxLQUExQyxFQUhPLEVBSVAsRUFBRUgsSUFBSSxDQUFOLEVBQVNDLE9BQU8sS0FBaEIsRUFBdUJDLE9BQU8sQ0FBOUIsRUFBaUNDLFNBQVMsS0FBMUMsRUFKTyxFQUtQLEVBQUVILElBQUksQ0FBTixFQUFTQyxPQUFPLEtBQWhCLEVBQXVCQyxPQUFPLENBQTlCLEVBQWlDQyxTQUFTLEtBQTFDLEVBTE87QUFGUixTLFFBV1BDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNOQyxzQkFETSxzQkFDS0MsQ0FETCxFQUNPO0FBQ1Qsb0JBQU1ULFlBQVksS0FBS0EsU0FBdkI7QUFEUyxvQkFFREUsRUFGQyxHQUVNTyxFQUFFQyxhQUFGLENBQWdCQyxPQUZ0QixDQUVEVCxFQUZDOzs7QUFJVCxvQkFBR0EsTUFBTUYsU0FBVCxFQUFtQjtBQUNmLHlCQUFLQSxTQUFMLEdBQWlCRSxFQUFqQjtBQUNBVSw0QkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDSDtBQUNKO0FBVEssUyxRQVlWQyxNLEdBQVMsRTs7Ozs7K0JBR0ZDLE0sRUFBUTtBQUNYSCxvQkFBUUMsR0FBUixDQUFZLElBQVo7QUFDQSxnQkFBRztBQUNDLHFCQUFLYixTQUFMLEdBQWlCZ0IsT0FBT0QsT0FBT0UsSUFBZCxDQUFqQjtBQUNILGFBRkQsQ0FFQyxPQUFNUixDQUFOLEVBQVMsQ0FBRTtBQUNmOzs7O0VBdERrQyxlQUFLUyxJOztrQkFBdkJ6QixTIiwiZmlsZSI6Imxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgY29sb3JzTWl4aW4gZnJvbSAnQC9taXhpbnMvY29sb3JzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckxpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iuouWNleWIl+ihqCcsXG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3d4Yy1jYyc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWNjL2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy1mbGV4JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZmxleC9kaXN0L2luZGV4JyxcbiAgICAgICAgICAgICd3eGMtdGFiJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy10YWItcGFuZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9wYW5lbCcsXG4gICAgICAgICAgICAnd3hjLXRhYi1sYWJlbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2xhYmVsJyxcbiAgICAgICAgICAgICd3eGMtYmFkZ2UnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1iYWRnZS9kaXN0L2luZGV4JyxcbiAgICAgICAgICAgICd3eGMtcHJpY2UnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1wcmljZS9kaXN0L2luZGV4JyxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbY29sb3JzTWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgICBhY3RpdmVLZXk6IDAsXG4gICAgICAgIG9yZGVyVGFiczogW1xuICAgICAgICAgICAgeyBpZDogMCwgdGl0bGU6ICflhajpg6gnLCBiYWRnZTogMCwgY29udGVudDogJ+WFqOmDqCcgfSxcbiAgICAgICAgICAgIHsgaWQ6IDEsIHRpdGxlOiAn5b6F5LuY5qy+JywgYmFkZ2U6IDAsIGNvbnRlbnQ6ICflvoXku5jmrL4nIH0sXG4gICAgICAgICAgICB7IGlkOiAyLCB0aXRsZTogJ+W+heWPkei0pycsIGJhZGdlOiAwLCBjb250ZW50OiAn5b6F5Y+R6LSnJyB9LFxuICAgICAgICAgICAgeyBpZDogMywgdGl0bGU6ICflvoXmlLbotKcnLCBiYWRnZTogMCwgY29udGVudDogJ+W+heaUtui0pycgfSxcbiAgICAgICAgICAgIHsgaWQ6IDQsIHRpdGxlOiAn5bey5a6M5oiQJywgYmFkZ2U6IDAsIGNvbnRlbnQ6ICflt7LlrozmiJAnIH1cbiAgICAgICAgXVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIG9uVGFiQ2xpY2soZSl7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVLZXkgPSB0aGlzLmFjdGl2ZUtleTtcbiAgICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuXG4gICAgICAgICAgICBpZihpZCAhPSBhY3RpdmVLZXkpe1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlS2V5ID0gaWQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJp+ihjOaVsOaNruabtOaWsCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZChvcHRpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcylcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVLZXkgPSBOdW1iZXIob3B0aW9uLnR5cGUpO1xuICAgICAgICB9Y2F0Y2goZSkge31cbiAgICB9XG59XG5cbiJdfQ==