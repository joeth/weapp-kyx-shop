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
                'wxc-tab': '../packages/@minui/wxc-tab/dist/index',
                'wxc-tab-panel': '../packages/@minui/wxc-tab/dist/panel',
                'wxc-tab-label': '../packages/@minui/wxc-tab/dist/label',
                'wxc-badge': '../packages/@minui/wxc-badge/dist/index'
            }
        }, _this.components = {}, _this.mixins = [], _this.data = {
            userInfo: {
                avatarUrl: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png',
                nickName: '文书生'
            },
            tabs: [{ title: '全部' }, { title: '待付款' }, { title: '待发货' }, { title: '待收货' }, { title: '已完成' }],
            activeKey: 0
        }, _this.computed = {
            now: function now() {
                return +new Date();
            }
        }, _this.methods = {
            onTabChange: function onTabChange(res) {
                console.log(res);
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MyCenter, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return MyCenter;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(MyCenter , 'pages/mycenter'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15Y2VudGVyLmpzIl0sIm5hbWVzIjpbIk15Q2VudGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwidXNlckluZm8iLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsInRhYnMiLCJ0aXRsZSIsImFjdGl2ZUtleSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJvblRhYkNoYW5nZSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7Ozs4TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsTUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsMkJBQVcsdUNBREU7QUFFYixpQ0FBaUIsdUNBRko7QUFHYixpQ0FBaUIsdUNBSEo7QUFJYiw2QkFBYTtBQUpBO0FBRlosUyxRQVVUQyxVLEdBQWEsRSxRQUViQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDSEMsc0JBQVU7QUFDTkMsMkJBQVcsaURBREw7QUFFTkMsMEJBQVU7QUFGSixhQURQO0FBS0hDLGtCQUFNLENBQ0YsRUFBRUMsT0FBTyxJQUFULEVBREUsRUFFRixFQUFFQSxPQUFPLEtBQVQsRUFGRSxFQUdGLEVBQUVBLE9BQU8sS0FBVCxFQUhFLEVBSUYsRUFBRUEsT0FBTyxLQUFULEVBSkUsRUFLRixFQUFFQSxPQUFPLEtBQVQsRUFMRSxDQUxIO0FBWUhDLHVCQUFXO0FBWlIsUyxRQWVQQyxRLEdBQVc7QUFDUEMsZUFETyxpQkFDRDtBQUNGLHVCQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0g7QUFITSxTLFFBTVhDLE8sR0FBVTtBQUNOQyx1QkFETSx1QkFDTUMsR0FETixFQUNXO0FBQ2JDLHdCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDSDtBQUhLLFMsUUFNVkcsTSxHQUFTLEU7Ozs7O2lDQUlBLENBRVI7Ozs7RUFoRGlDLGVBQUtDLEk7O2tCQUF0QnRCLFEiLCJmaWxlIjoibXljZW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15Q2VudGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuKrkurrkuK3lv4MnLFxuICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICd3eGMtdGFiJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy10YWItcGFuZWwnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9wYW5lbCcsXG4gICAgICAgICAgICAnd3hjLXRhYi1sYWJlbCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2xhYmVsJyxcbiAgICAgICAgICAgICd3eGMtYmFkZ2UnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1iYWRnZS9kaXN0L2luZGV4JyxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudHMgPSB7fVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgICAgICBhdmF0YXJVcmw6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAxLzMxL1VwblhYLnBuZycsXG4gICAgICAgICAgICBuaWNrTmFtZTogJ+aWh+S5pueUnydcbiAgICAgICAgfSxcbiAgICAgICAgdGFiczogW1xuICAgICAgICAgICAgeyB0aXRsZTogJ+WFqOmDqCcgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6ICflvoXku5jmrL4nIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiAn5b6F5Y+R6LSnJyB9LFxuICAgICAgICAgICAgeyB0aXRsZTogJ+W+heaUtui0pycgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6ICflt7LlrozmiJAnIH1cbiAgICAgICAgXSxcbiAgICAgICAgYWN0aXZlS2V5OiAwXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICAgIG5vdygpIHtcbiAgICAgICAgICAgIHJldHVybiArbmV3IERhdGUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgb25UYWJDaGFuZ2UocmVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG5cbiAgICB9XG59XG5cbiJdfQ==