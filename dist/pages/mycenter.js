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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15Y2VudGVyLmpzIl0sIm5hbWVzIjpbIk15Q2VudGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwidXNlckluZm8iLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsIm9yZGVyVGFicyIsImlkIiwidGl0bGUiLCJiYWRnZSIsImFjdGl2ZUtleSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7Ozs4TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsTUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsMEJBQVUsc0NBREc7QUFFYiw0QkFBWSx3Q0FGQztBQUdiLDJCQUFXLHVDQUhFO0FBSWIsaUNBQWlCLHVDQUpKO0FBS2IsaUNBQWlCLHVDQUxKO0FBTWIsNkJBQWE7QUFOQTtBQUZaLFMsUUFZVEMsVSxHQUFhLEUsUUFFYkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0hDLHNCQUFVO0FBQ05DLDJCQUFXLGlEQURMO0FBRU5DLDBCQUFVO0FBRkosYUFEUDtBQUtIQyx1QkFBVyxDQUNQLEVBQUVDLElBQUksQ0FBTixFQUFTQyxPQUFPLElBQWhCLEVBQXNCQyxPQUFPLENBQTdCLEVBRE8sRUFFUCxFQUFFRixJQUFJLENBQU4sRUFBU0MsT0FBTyxLQUFoQixFQUF1QkMsT0FBTyxDQUE5QixFQUZPLEVBR1AsRUFBRUYsSUFBSSxDQUFOLEVBQVNDLE9BQU8sS0FBaEIsRUFBdUJDLE9BQU8sQ0FBOUIsRUFITyxFQUlQLEVBQUVGLElBQUksQ0FBTixFQUFTQyxPQUFPLEtBQWhCLEVBQXVCQyxPQUFPLENBQTlCLEVBSk8sRUFLUCxFQUFFRixJQUFJLENBQU4sRUFBU0MsT0FBTyxLQUFoQixFQUF1QkMsT0FBTyxDQUE5QixFQUxPLENBTFI7QUFZSEMsdUJBQVc7QUFaUixTLFFBZVBDLFEsR0FBVztBQUNQQyxlQURPLGlCQUNEO0FBQ0YsdUJBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDSDtBQUhNLFMsUUFNWEMsTyxHQUFVLEUsUUFHVkMsTSxHQUFTLEU7Ozs7O2lDQUlBLENBRVI7Ozs7RUEvQ2lDLGVBQUtDLEk7O2tCQUF0QnBCLFEiLCJmaWxlIjoibXljZW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15Q2VudGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Liq5Lq65Lit5b+DJyxcclxuICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgJ3d4Yy1jYyc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWNjL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICAgICAnd3hjLWZsZXgnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1mbGV4L2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICAgICAnd3hjLXRhYic6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2luZGV4JyxcclxuICAgICAgICAgICAgJ3d4Yy10YWItcGFuZWwnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9wYW5lbCcsXHJcbiAgICAgICAgICAgICd3eGMtdGFiLWxhYmVsJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvbGFiZWwnLFxyXG4gICAgICAgICAgICAnd3hjLWJhZGdlJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYmFkZ2UvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudHMgPSB7fVxyXG5cclxuICAgIG1peGlucyA9IFtdXHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICB1c2VySW5mbzoge1xyXG4gICAgICAgICAgICBhdmF0YXJVcmw6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAyLzIyL0tHaGI4LmpwZycsXHJcbiAgICAgICAgICAgIG5pY2tOYW1lOiAn5paH5Lmm55SfJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3JkZXJUYWJzOiBbXHJcbiAgICAgICAgICAgIHsgaWQ6IDAsIHRpdGxlOiAn5YWo6YOoJywgYmFkZ2U6IDAgfSxcclxuICAgICAgICAgICAgeyBpZDogMSwgdGl0bGU6ICflvoXku5jmrL4nLCBiYWRnZTogMSB9LFxyXG4gICAgICAgICAgICB7IGlkOiAyLCB0aXRsZTogJ+W+heWPkei0pycsIGJhZGdlOiAwIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDMsIHRpdGxlOiAn5b6F5pS26LSnJywgYmFkZ2U6IDAgfSxcclxuICAgICAgICAgICAgeyBpZDogNCwgdGl0bGU6ICflt7LlrozmiJAnLCBiYWRnZTogMCB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBhY3RpdmVLZXk6IDBcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgICBub3coKSB7XHJcbiAgICAgICAgICAgIHJldHVybiArbmV3IERhdGUoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuIl19