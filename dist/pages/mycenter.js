'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyCenter = function (_wepy$page) {
    _inherits(MyCenter, _wepy$page);

    function MyCenter() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MyCenter);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyCenter.__proto__ || Object.getPrototypeOf(MyCenter)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '个人中心',
            usingComponents: {
                'wxc-cc': '../packages/@minui/wxc-cc/dist/index',
                'wxc-flex': '../packages/@minui/wxc-flex/dist/index',
                'wxc-tab': '../packages/@minui/wxc-tab/dist/index',
                'wxc-tab-panel': '../packages/@minui/wxc-tab/dist/panel',
                'wxc-tab-label': '../packages/@minui/wxc-tab/dist/label',
                'wxc-badge': '../packages/@minui/wxc-badge/dist/index'
            }
        }, _this.components = {}, _this.mixins = [], _this.data = {
            userInfo: {
                avatarUrl: 'https://t1.picb.cc/uploads/2018/02/22/KGhb8.jpg',
                nickName: '文书生'
            },
            orderTabs: [{ id: 0, title: '全部', badge: 0 }, { id: 1, title: '待付款', badge: 1 }, { id: 2, title: '待发货', badge: 0 }, { id: 3, title: '待收货', badge: 0 }, { id: 4, title: '已完成', badge: 0 }],
            activeKey: 0
        }, _this.computed = {
            now: function now() {
                return +new Date();
            }
        }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MyCenter, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return MyCenter;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(MyCenter , 'pages/mycenter'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15Y2VudGVyLmpzIl0sIm5hbWVzIjpbIk15Q2VudGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwidXNlckluZm8iLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsIm9yZGVyVGFicyIsImlkIiwidGl0bGUiLCJiYWRnZSIsImFjdGl2ZUtleSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7Ozs4TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsTUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsMEJBQVUsc0NBREc7QUFFYiw0QkFBWSx3Q0FGQztBQUdiLDJCQUFXLHVDQUhFO0FBSWIsaUNBQWlCLHVDQUpKO0FBS2IsaUNBQWlCLHVDQUxKO0FBTWIsNkJBQWE7QUFOQTtBQUZaLFMsUUFZVEMsVSxHQUFhLEUsUUFFYkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0hDLHNCQUFVO0FBQ05DLDJCQUFXLGlEQURMO0FBRU5DLDBCQUFVO0FBRkosYUFEUDtBQUtIQyx1QkFBVyxDQUNQLEVBQUVDLElBQUksQ0FBTixFQUFTQyxPQUFPLElBQWhCLEVBQXNCQyxPQUFPLENBQTdCLEVBRE8sRUFFUCxFQUFFRixJQUFJLENBQU4sRUFBU0MsT0FBTyxLQUFoQixFQUF1QkMsT0FBTyxDQUE5QixFQUZPLEVBR1AsRUFBRUYsSUFBSSxDQUFOLEVBQVNDLE9BQU8sS0FBaEIsRUFBdUJDLE9BQU8sQ0FBOUIsRUFITyxFQUlQLEVBQUVGLElBQUksQ0FBTixFQUFTQyxPQUFPLEtBQWhCLEVBQXVCQyxPQUFPLENBQTlCLEVBSk8sRUFLUCxFQUFFRixJQUFJLENBQU4sRUFBU0MsT0FBTyxLQUFoQixFQUF1QkMsT0FBTyxDQUE5QixFQUxPLENBTFI7QUFZSEMsdUJBQVc7QUFaUixTLFFBZVBDLFEsR0FBVztBQUNQQyxlQURPLGlCQUNEO0FBQ0YsdUJBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDSDtBQUhNLFMsUUFNWEMsTyxHQUFVLEUsUUFHVkMsTSxHQUFTLEU7Ozs7O2lDQUlBLENBRVI7Ozs7RUEvQ2lDLGVBQUtDLEk7O2tCQUF0QnBCLFEiLCJmaWxlIjoibXljZW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15Q2VudGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuKrkurrkuK3lv4MnLFxuICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICd3eGMtY2MnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1jYy9kaXN0L2luZGV4JyxcbiAgICAgICAgICAgICd3eGMtZmxleCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWZsZXgvZGlzdC9pbmRleCcsXG4gICAgICAgICAgICAnd3hjLXRhYic6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2luZGV4JyxcbiAgICAgICAgICAgICd3eGMtdGFiLXBhbmVsJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvcGFuZWwnLFxuICAgICAgICAgICAgJ3d4Yy10YWItbGFiZWwnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9sYWJlbCcsXG4gICAgICAgICAgICAnd3hjLWJhZGdlJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYmFkZ2UvZGlzdC9pbmRleCcsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRzID0ge31cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgICB1c2VySW5mbzoge1xuICAgICAgICAgICAgYXZhdGFyVXJsOiAnaHR0cHM6Ly90MS5waWNiLmNjL3VwbG9hZHMvMjAxOC8wMi8yMi9LR2hiOC5qcGcnLFxuICAgICAgICAgICAgbmlja05hbWU6ICfmlofkuabnlJ8nXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGVyVGFiczogW1xuICAgICAgICAgICAgeyBpZDogMCwgdGl0bGU6ICflhajpg6gnLCBiYWRnZTogMCB9LFxuICAgICAgICAgICAgeyBpZDogMSwgdGl0bGU6ICflvoXku5jmrL4nLCBiYWRnZTogMSB9LFxuICAgICAgICAgICAgeyBpZDogMiwgdGl0bGU6ICflvoXlj5HotKcnLCBiYWRnZTogMCB9LFxuICAgICAgICAgICAgeyBpZDogMywgdGl0bGU6ICflvoXmlLbotKcnLCBiYWRnZTogMCB9LFxuICAgICAgICAgICAgeyBpZDogNCwgdGl0bGU6ICflt7LlrozmiJAnLCBiYWRnZTogMCB9XG4gICAgICAgIF0sXG4gICAgICAgIGFjdGl2ZUtleTogMFxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgICBub3coKSB7XG4gICAgICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuXG4gICAgfVxufVxuXG4iXX0=