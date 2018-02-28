'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

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

exports.default = MyCenter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk15Q2VudGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwidXNlckluZm8iLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsInRhYnMiLCJ0aXRsZSIsImFjdGl2ZUtleSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJvblRhYkNoYW5nZSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7Ozs4TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsTUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsMkJBQVcsdUNBREU7QUFFYixpQ0FBaUIsdUNBRko7QUFHYixpQ0FBaUIsdUNBSEo7QUFJYiw2QkFBYTtBQUpBO0FBRlosUyxRQVVUQyxVLEdBQWEsRSxRQUViQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDSEMsc0JBQVU7QUFDTkMsMkJBQVcsaURBREw7QUFFTkMsMEJBQVU7QUFGSixhQURQO0FBS0hDLGtCQUFNLENBQ0YsRUFBRUMsT0FBTyxJQUFULEVBREUsRUFFRixFQUFFQSxPQUFPLEtBQVQsRUFGRSxFQUdGLEVBQUVBLE9BQU8sS0FBVCxFQUhFLEVBSUYsRUFBRUEsT0FBTyxLQUFULEVBSkUsRUFLRixFQUFFQSxPQUFPLEtBQVQsRUFMRSxDQUxIO0FBWUhDLHVCQUFXO0FBWlIsUyxRQWVQQyxRLEdBQVc7QUFDUEMsZUFETyxpQkFDRDtBQUNGLHVCQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0g7QUFITSxTLFFBTVhDLE8sR0FBVTtBQUNOQyx1QkFETSx1QkFDTUMsR0FETixFQUNXO0FBQ2JDLHdCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDSDtBQUhLLFMsUUFNVkcsTSxHQUFTLEU7Ozs7O2lDQUlBLENBRVI7Ozs7RUFoRGlDLGVBQUtDLEk7O2tCQUF0QnRCLFEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15Q2VudGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Liq5Lq65Lit5b+DJyxcclxuICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgJ3d4Yy10YWInOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgICAgICd3eGMtdGFiLXBhbmVsJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvcGFuZWwnLFxyXG4gICAgICAgICAgICAnd3hjLXRhYi1sYWJlbCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2xhYmVsJyxcclxuICAgICAgICAgICAgJ3d4Yy1iYWRnZSc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWJhZGdlL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRzID0ge31cclxuXHJcbiAgICBtaXhpbnMgPSBbXVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgdXNlckluZm86IHtcclxuICAgICAgICAgICAgYXZhdGFyVXJsOiAnaHR0cHM6Ly90MS5waWNiLmNjL3VwbG9hZHMvMjAxOC8wMS8zMS9VcG5YWC5wbmcnLFxyXG4gICAgICAgICAgICBuaWNrTmFtZTogJ+aWh+S5pueUnydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRhYnM6IFtcclxuICAgICAgICAgICAgeyB0aXRsZTogJ+WFqOmDqCcgfSxcclxuICAgICAgICAgICAgeyB0aXRsZTogJ+W+heS7mOasvicgfSxcclxuICAgICAgICAgICAgeyB0aXRsZTogJ+W+heWPkei0pycgfSxcclxuICAgICAgICAgICAgeyB0aXRsZTogJ+W+heaUtui0pycgfSxcclxuICAgICAgICAgICAgeyB0aXRsZTogJ+W3suWujOaIkCcgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYWN0aXZlS2V5OiAwXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgICAgbm93KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBvblRhYkNoYW5nZShyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==