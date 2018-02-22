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
            tabs: [{ title: '全部', badge: 0 }, { title: '待付款', badge: 1 }, { title: '待发货', badge: 0 }, { title: '待收货', badge: 0 }, { title: '已完成', badge: 0 }],
            activeKey: 0
        }, _this.computed = {
            now: function now() {
                return +new Date();
            }
        }, _this.methods = {
            onTabChange: function onTabChange(res) {
                console.log(res);
                this.activeKey = res.detail.key;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15Y2VudGVyLmpzIl0sIm5hbWVzIjpbIk15Q2VudGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwidXNlckluZm8iLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsInRhYnMiLCJ0aXRsZSIsImJhZGdlIiwiYWN0aXZlS2V5IiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsIm9uVGFiQ2hhbmdlIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsImtleSIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzhMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQyw2QkFBaUI7QUFDYiwwQkFBVSxzQ0FERztBQUViLDRCQUFZLHdDQUZDO0FBR2IsMkJBQVcsdUNBSEU7QUFJYixpQ0FBaUIsdUNBSko7QUFLYixpQ0FBaUIsdUNBTEo7QUFNYiw2QkFBYTtBQU5BO0FBRlosUyxRQVlUQyxVLEdBQWEsRSxRQUViQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDSEMsc0JBQVU7QUFDTkMsMkJBQVcsaURBREw7QUFFTkMsMEJBQVU7QUFGSixhQURQO0FBS0hDLGtCQUFNLENBQ0YsRUFBRUMsT0FBTyxJQUFULEVBQWVDLE9BQU8sQ0FBdEIsRUFERSxFQUVGLEVBQUVELE9BQU8sS0FBVCxFQUFnQkMsT0FBTyxDQUF2QixFQUZFLEVBR0YsRUFBRUQsT0FBTyxLQUFULEVBQWdCQyxPQUFPLENBQXZCLEVBSEUsRUFJRixFQUFFRCxPQUFPLEtBQVQsRUFBZ0JDLE9BQU8sQ0FBdkIsRUFKRSxFQUtGLEVBQUVELE9BQU8sS0FBVCxFQUFnQkMsT0FBTyxDQUF2QixFQUxFLENBTEg7QUFZSEMsdUJBQVc7QUFaUixTLFFBZVBDLFEsR0FBVztBQUNQQyxlQURPLGlCQUNEO0FBQ0YsdUJBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDSDtBQUhNLFMsUUFNWEMsTyxHQUFVO0FBQ05DLHVCQURNLHVCQUNNQyxHQUROLEVBQ1c7QUFDYkMsd0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLHFCQUFLTixTQUFMLEdBQWlCTSxJQUFJRyxNQUFKLENBQVdDLEdBQTVCO0FBQ0g7QUFKSyxTLFFBT1ZDLE0sR0FBUyxFOzs7OztpQ0FJQSxDQUVSOzs7O0VBbkRpQyxlQUFLQyxJOztrQkFBdEJ6QixRIiwiZmlsZSI6Im15Y2VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUNlbnRlciBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4quS6uuS4reW/gycsXHJcbiAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICd3eGMtY2MnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1jYy9kaXN0L2luZGV4JyxcclxuICAgICAgICAgICAgJ3d4Yy1mbGV4JzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZmxleC9kaXN0L2luZGV4JyxcclxuICAgICAgICAgICAgJ3d4Yy10YWInOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgICAgICd3eGMtdGFiLXBhbmVsJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvcGFuZWwnLFxyXG4gICAgICAgICAgICAnd3hjLXRhYi1sYWJlbCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2xhYmVsJyxcclxuICAgICAgICAgICAgJ3d4Yy1iYWRnZSc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWJhZGdlL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRzID0ge31cclxuXHJcbiAgICBtaXhpbnMgPSBbXVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgdXNlckluZm86IHtcclxuICAgICAgICAgICAgYXZhdGFyVXJsOiAnaHR0cHM6Ly90MS5waWNiLmNjL3VwbG9hZHMvMjAxOC8wMi8yMi9LR2hiOC5qcGcnLFxyXG4gICAgICAgICAgICBuaWNrTmFtZTogJ+aWh+S5pueUnydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRhYnM6IFtcclxuICAgICAgICAgICAgeyB0aXRsZTogJ+WFqOmDqCcsIGJhZGdlOiAwIH0sXHJcbiAgICAgICAgICAgIHsgdGl0bGU6ICflvoXku5jmrL4nLCBiYWRnZTogMSB9LFxyXG4gICAgICAgICAgICB7IHRpdGxlOiAn5b6F5Y+R6LSnJywgYmFkZ2U6IDAgfSxcclxuICAgICAgICAgICAgeyB0aXRsZTogJ+W+heaUtui0pycsIGJhZGdlOiAwIH0sXHJcbiAgICAgICAgICAgIHsgdGl0bGU6ICflt7LlrozmiJAnLCBiYWRnZTogMCB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBhY3RpdmVLZXk6IDBcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgICBub3coKSB7XHJcbiAgICAgICAgICAgIHJldHVybiArbmV3IERhdGUoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIG9uVGFiQ2hhbmdlKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlS2V5ID0gcmVzLmRldGFpbC5rZXlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=