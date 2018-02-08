'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var device = wx.getSystemInfoSync();
var deviceRadio = device.windowWidth / 750;

var _default = function (_wepy$app) {
    _inherits(_default, _wepy$app);

    function _default() {
        _classCallCheck(this, _default);

        var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

        _this.config = {
            pages: ['pages/classify', 'pages/homepage', 'pages/shopcart', 'pages/mycenter'],
            tabBar: {
                color: '#452713',
                backgroundColor: '#e9e0cc',
                list: [{
                    pagePath: 'pages/homepage',
                    iconPath: 'images/homepage.png',
                    selectedIconPath: 'images/homepage.png',
                    text: '首页'
                }, {
                    pagePath: 'pages/classify',
                    iconPath: 'images/classify.png',
                    selectedIconPath: 'images/classify.png',
                    text: '产品分类'
                }, {
                    pagePath: 'pages/shopcart',
                    iconPath: 'images/shopcart.png',
                    selectedIconPath: 'images/shopcart.png',
                    text: '购物车'
                }, {
                    pagePath: 'pages/mycenter',
                    iconPath: 'images/mycenter.png',
                    selectedIconPath: 'images/mycenter.png',
                    text: '个人中心'
                }]
            },
            window: {
                backgroundColor: '#e9e0cc',
                backgroundTextStyle: 'light',
                navigationBarBackgroundColor: '#452713',
                navigationBarTitleText: '可以兴商城',
                navigationBarTextStyle: '#d6c5ac'
            }
        };
        _this.globalData = {
            deviceRadio: deviceRadio,
            userInfo: null
        };

        _this.use('requestfix');
        return _this;
    }

    _createClass(_default, [{
        key: 'onLaunch',
        value: function onLaunch() {
            // this.testAsync()
        }
    }, {
        key: 'sleep',
        value: function sleep(s) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('promise resolved');
                }, s * 1000);
            });
        }
    }, {
        key: 'testAsync',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.sleep(3);

                            case 2:
                                data = _context.sent;

                                console.log(data);

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function testAsync() {
                return _ref.apply(this, arguments);
            }

            return testAsync;
        }()
    }, {
        key: 'getUserInfo',
        value: function getUserInfo(cb) {
            var that = this;
            if (this.globalData.userInfo) {
                return this.globalData.userInfo;
            }
            _wepy2.default.getUserInfo({
                success: function success(res) {
                    that.globalData.userInfo = res.userInfo;
                    cb && cb(res.userInfo);
                }
            });
        }
    }]);

    return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJkZXZpY2UiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwiZGV2aWNlUmFkaW8iLCJ3aW5kb3dXaWR0aCIsImNvbmZpZyIsInBhZ2VzIiwidGFiQmFyIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaXN0IiwicGFnZVBhdGgiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJ0ZXh0Iiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2IiLCJ0aGF0IiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxHQUFHQyxpQkFBSCxFQUFmO0FBQ0EsSUFBTUMsY0FBY0gsT0FBT0ksV0FBUCxHQUFxQixHQUF6Qzs7Ozs7QUFpREksd0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxjQTlDZEMsTUE4Q2MsR0E5Q0w7QUFDTEMsbUJBQU8sQ0FDSCxnQkFERyxFQUVILGdCQUZHLEVBR0gsZ0JBSEcsRUFJSCxnQkFKRyxDQURGO0FBT0xDLG9CQUFRO0FBQ0pDLHVCQUFPLFNBREg7QUFFSkMsaUNBQWlCLFNBRmI7QUFHSkMsc0JBQU0sQ0FBQztBQUNIQyw4QkFBVSxnQkFEUDtBQUVIQyw4QkFBVSxxQkFGUDtBQUdIQyxzQ0FBa0IscUJBSGY7QUFJSEMsMEJBQU07QUFKSCxpQkFBRCxFQUtIO0FBQ0NILDhCQUFVLGdCQURYO0FBRUNDLDhCQUFVLHFCQUZYO0FBR0NDLHNDQUFrQixxQkFIbkI7QUFJQ0MsMEJBQU07QUFKUCxpQkFMRyxFQVVIO0FBQ0NILDhCQUFVLGdCQURYO0FBRUNDLDhCQUFVLHFCQUZYO0FBR0NDLHNDQUFrQixxQkFIbkI7QUFJQ0MsMEJBQU07QUFKUCxpQkFWRyxFQWVIO0FBQ0NILDhCQUFVLGdCQURYO0FBRUNDLDhCQUFVLHFCQUZYO0FBR0NDLHNDQUFrQixxQkFIbkI7QUFJQ0MsMEJBQU07QUFKUCxpQkFmRztBQUhGLGFBUEg7QUFnQ0xDLG9CQUFRO0FBQ0pOLGlDQUFpQixTQURiO0FBRUpPLHFDQUFxQixPQUZqQjtBQUdKQyw4Q0FBOEIsU0FIMUI7QUFJSkMsd0NBQXdCLE9BSnBCO0FBS0pDLHdDQUF3QjtBQUxwQjtBQWhDSCxTQThDSztBQUFBLGNBTGRDLFVBS2MsR0FMRDtBQUNUakIseUJBQWFBLFdBREo7QUFFVGtCLHNCQUFVO0FBRkQsU0FLQzs7QUFFVixjQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZVO0FBR2I7Ozs7bUNBRVU7QUFDUDtBQUNIOzs7OEJBRUtDLEMsRUFBRztBQUNMLG1CQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENDLDJCQUFXLFlBQU07QUFDYkYsNEJBQVEsa0JBQVI7QUFDSCxpQkFGRCxFQUVHRixJQUFJLElBRlA7QUFHSCxhQUpNLENBQVA7QUFLSDs7Ozs7Ozs7Ozs7dUNBR3NCLEtBQUtLLEtBQUwsQ0FBVyxDQUFYLEM7OztBQUFiQyxvQzs7QUFDTkMsd0NBQVFDLEdBQVIsQ0FBWUYsSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQUdRRyxFLEVBQUk7QUFDWixnQkFBTUMsT0FBTyxJQUFiO0FBQ0EsZ0JBQUksS0FBS2IsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDMUIsdUJBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDSDtBQUNELDJCQUFLYSxXQUFMLENBQWlCO0FBQ2JDLHVCQURhLG1CQUNMQyxHQURLLEVBQ0E7QUFDVEgseUJBQUtiLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCZSxJQUFJZixRQUEvQjtBQUNBVywwQkFBTUEsR0FBR0ksSUFBSWYsUUFBUCxDQUFOO0FBQ0g7QUFKWSxhQUFqQjtBQU1IOzs7O0VBaEZ3QixlQUFLZ0IsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbmNvbnN0IGRldmljZSA9IHd4LmdldFN5c3RlbUluZm9TeW5jKClcbmNvbnN0IGRldmljZVJhZGlvID0gZGV2aWNlLndpbmRvd1dpZHRoIC8gNzUwXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgcGFnZXM6IFtcbiAgICAgICAgICAgICdwYWdlcy9jbGFzc2lmeScsXG4gICAgICAgICAgICAncGFnZXMvaG9tZXBhZ2UnLFxuICAgICAgICAgICAgJ3BhZ2VzL3Nob3BjYXJ0JyxcbiAgICAgICAgICAgICdwYWdlcy9teWNlbnRlcicsXG4gICAgICAgIF0sXG4gICAgICAgIHRhYkJhcjoge1xuICAgICAgICAgICAgY29sb3I6ICcjNDUyNzEzJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlOWUwY2MnLFxuICAgICAgICAgICAgbGlzdDogW3tcbiAgICAgICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2hvbWVwYWdlJyxcbiAgICAgICAgICAgICAgICBpY29uUGF0aDogJ2ltYWdlcy9ob21lcGFnZS5wbmcnLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdpbWFnZXMvaG9tZXBhZ2UucG5nJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAn6aaW6aG1J1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvY2xhc3NpZnknLFxuICAgICAgICAgICAgICAgIGljb25QYXRoOiAnaW1hZ2VzL2NsYXNzaWZ5LnBuZycsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2ltYWdlcy9jbGFzc2lmeS5wbmcnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICfkuqflk4HliIbnsbsnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9zaG9wY2FydCcsXG4gICAgICAgICAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvc2hvcGNhcnQucG5nJyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL3Nob3BjYXJ0LnBuZycsXG4gICAgICAgICAgICAgICAgdGV4dDogJ+i0reeJqei9pidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL215Y2VudGVyJyxcbiAgICAgICAgICAgICAgICBpY29uUGF0aDogJ2ltYWdlcy9teWNlbnRlci5wbmcnLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdpbWFnZXMvbXljZW50ZXIucG5nJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAn5Liq5Lq65Lit5b+DJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgICAgd2luZG93OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTllMGNjJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzQ1MjcxMycsXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Y+v5Lul5YW05ZWG5Z+OJyxcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICcjZDZjNWFjJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2xvYmFsRGF0YSA9IHtcbiAgICAgICAgZGV2aWNlUmFkaW86IGRldmljZVJhZGlvLFxuICAgICAgICB1c2VySW5mbzogbnVsbFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICB9XG5cbiAgICBvbkxhdW5jaCgpIHtcbiAgICAgICAgLy8gdGhpcy50ZXN0QXN5bmMoKVxuICAgIH1cblxuICAgIHNsZWVwKHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxuICAgICAgICAgICAgfSwgcyAqIDEwMDApXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgdGVzdEFzeW5jKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH1cblxuICAgIGdldFVzZXJJbmZvKGNiKSB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cbiAgICAgICAgfVxuICAgICAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuIl19