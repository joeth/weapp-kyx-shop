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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15Y2VudGVyLmpzIl0sIm5hbWVzIjpbIk15Q2VudGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwidXNlckluZm8iLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsInRhYnMiLCJ0aXRsZSIsImJhZGdlIiwiYWN0aXZlS2V5IiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsIm9uVGFiQ2hhbmdlIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsImtleSIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzhMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQyw2QkFBaUI7QUFDYiwwQkFBVSxzQ0FERztBQUViLDRCQUFZLHdDQUZDO0FBR2IsMkJBQVcsdUNBSEU7QUFJYixpQ0FBaUIsdUNBSko7QUFLYixpQ0FBaUIsdUNBTEo7QUFNYiw2QkFBYTtBQU5BO0FBRlosUyxRQVlUQyxVLEdBQWEsRSxRQUViQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDSEMsc0JBQVU7QUFDTkMsMkJBQVcsaURBREw7QUFFTkMsMEJBQVU7QUFGSixhQURQO0FBS0hDLGtCQUFNLENBQ0YsRUFBRUMsT0FBTyxJQUFULEVBQWVDLE9BQU8sQ0FBdEIsRUFERSxFQUVGLEVBQUVELE9BQU8sS0FBVCxFQUFnQkMsT0FBTyxDQUF2QixFQUZFLEVBR0YsRUFBRUQsT0FBTyxLQUFULEVBQWdCQyxPQUFPLENBQXZCLEVBSEUsRUFJRixFQUFFRCxPQUFPLEtBQVQsRUFBZ0JDLE9BQU8sQ0FBdkIsRUFKRSxFQUtGLEVBQUVELE9BQU8sS0FBVCxFQUFnQkMsT0FBTyxDQUF2QixFQUxFLENBTEg7QUFZSEMsdUJBQVc7QUFaUixTLFFBZVBDLFEsR0FBVztBQUNQQyxlQURPLGlCQUNEO0FBQ0YsdUJBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDSDtBQUhNLFMsUUFNWEMsTyxHQUFVO0FBQ05DLHVCQURNLHVCQUNNQyxHQUROLEVBQ1c7QUFDYkMsd0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLHFCQUFLTixTQUFMLEdBQWlCTSxJQUFJRyxNQUFKLENBQVdDLEdBQTVCO0FBQ0g7QUFKSyxTLFFBT1ZDLE0sR0FBUyxFOzs7OztpQ0FJQSxDQUVSOzs7O0VBbkRpQyxlQUFLQyxJOztrQkFBdEJ6QixRIiwiZmlsZSI6Im15Y2VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUNlbnRlciBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Liq5Lq65Lit5b+DJyxcbiAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnd3hjLWNjJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtY2MvZGlzdC9pbmRleCcsXG4gICAgICAgICAgICAnd3hjLWZsZXgnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1mbGV4L2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy10YWInOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9pbmRleCcsXG4gICAgICAgICAgICAnd3hjLXRhYi1wYW5lbCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L3BhbmVsJyxcbiAgICAgICAgICAgICd3eGMtdGFiLWxhYmVsJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvbGFiZWwnLFxuICAgICAgICAgICAgJ3d4Yy1iYWRnZSc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWJhZGdlL2Rpc3QvaW5kZXgnLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50cyA9IHt9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgICAgdXNlckluZm86IHtcbiAgICAgICAgICAgIGF2YXRhclVybDogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDIvMjIvS0doYjguanBnJyxcbiAgICAgICAgICAgIG5pY2tOYW1lOiAn5paH5Lmm55SfJ1xuICAgICAgICB9LFxuICAgICAgICB0YWJzOiBbXG4gICAgICAgICAgICB7IHRpdGxlOiAn5YWo6YOoJywgYmFkZ2U6IDAgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6ICflvoXku5jmrL4nLCBiYWRnZTogMSB9LFxuICAgICAgICAgICAgeyB0aXRsZTogJ+W+heWPkei0pycsIGJhZGdlOiAwIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiAn5b6F5pS26LSnJywgYmFkZ2U6IDAgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6ICflt7LlrozmiJAnLCBiYWRnZTogMCB9XG4gICAgICAgIF0sXG4gICAgICAgIGFjdGl2ZUtleTogMFxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgICBub3coKSB7XG4gICAgICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIG9uVGFiQ2hhbmdlKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgdGhpcy5hY3RpdmVLZXkgPSByZXMuZGV0YWlsLmtleVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuXG4gICAgfVxufVxuXG4iXX0=