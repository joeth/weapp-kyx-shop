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
            pages: ['pages/mycenter', 'pages/homepage', 'pages/catalog', 'pages/shopcart', 'pages/commodity/list', 'pages/commodity/detail', 'pages/order/list', 'pages/order/detail', 'pages/order/confirm', 'pages/address/list', 'pages/address/detail', 'pages/question/list', 'pages/question/detail'],
            tabBar: {
                color: '#452713',
                selectedColor: '#a91e11',
                backgroundColor: '#e9e0cc',
                list: [{
                    pagePath: 'pages/homepage',
                    iconPath: 'images/homepage.png',
                    selectedIconPath: 'images/homepage-cur.png',
                    text: '首页'
                }, {
                    pagePath: 'pages/catalog',
                    iconPath: 'images/catalog.png',
                    selectedIconPath: 'images/catalog-cur.png',
                    text: '产品分类'
                }, {
                    pagePath: 'pages/shopcart',
                    iconPath: 'images/shopcart.png',
                    selectedIconPath: 'images/shopcart-cur.png',
                    text: '购物车'
                }, {
                    pagePath: 'pages/mycenter',
                    iconPath: 'images/mycenter.png',
                    selectedIconPath: 'images/mycenter-cur.png',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJkZXZpY2UiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwiZGV2aWNlUmFkaW8iLCJ3aW5kb3dXaWR0aCIsImNvbmZpZyIsInBhZ2VzIiwidGFiQmFyIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNiIiwidGhhdCIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsR0FBR0MsaUJBQUgsRUFBZjtBQUNBLElBQU1DLGNBQWNILE9BQU9JLFdBQVAsR0FBcUIsR0FBekM7Ozs7O0FBNkRJLHdCQUFjO0FBQUE7O0FBQUE7O0FBQUEsY0ExRGRDLE1BMERjLEdBMURMO0FBQ0xDLG1CQUFPLENBRUgsZ0JBRkcsRUFHSCxnQkFIRyxFQUlILGVBSkcsRUFLSCxnQkFMRyxFQU1ILHNCQU5HLEVBT0gsd0JBUEcsRUFRSCxrQkFSRyxFQVNILG9CQVRHLEVBVUgscUJBVkcsRUFZSCxvQkFaRyxFQWFILHNCQWJHLEVBY0gscUJBZEcsRUFlSCx1QkFmRyxDQURGO0FBa0JMQyxvQkFBUTtBQUNKQyx1QkFBTyxTQURIO0FBRUpDLCtCQUFlLFNBRlg7QUFHSkMsaUNBQWlCLFNBSGI7QUFJSkMsc0JBQU0sQ0FBQztBQUNIQyw4QkFBVSxnQkFEUDtBQUVIQyw4QkFBVSxxQkFGUDtBQUdIQyxzQ0FBa0IseUJBSGY7QUFJSEMsMEJBQU07QUFKSCxpQkFBRCxFQUtIO0FBQ0NILDhCQUFVLGVBRFg7QUFFQ0MsOEJBQVUsb0JBRlg7QUFHQ0Msc0NBQWtCLHdCQUhuQjtBQUlDQywwQkFBTTtBQUpQLGlCQUxHLEVBVUg7QUFDQ0gsOEJBQVUsZ0JBRFg7QUFFQ0MsOEJBQVUscUJBRlg7QUFHQ0Msc0NBQWtCLHlCQUhuQjtBQUlDQywwQkFBTTtBQUpQLGlCQVZHLEVBZUg7QUFDQ0gsOEJBQVUsZ0JBRFg7QUFFQ0MsOEJBQVUscUJBRlg7QUFHQ0Msc0NBQWtCLHlCQUhuQjtBQUlDQywwQkFBTTtBQUpQLGlCQWZHO0FBSkYsYUFsQkg7QUE0Q0xDLG9CQUFRO0FBQ0pOLGlDQUFpQixTQURiO0FBRUpPLHFDQUFxQixPQUZqQjtBQUdKQyw4Q0FBOEIsU0FIMUI7QUFJSkMsd0NBQXdCLE9BSnBCO0FBS0pDLHdDQUF3QjtBQUxwQjtBQTVDSCxTQTBESztBQUFBLGNBTGRDLFVBS2MsR0FMRDtBQUNUbEIseUJBQWFBLFdBREo7QUFFVG1CLHNCQUFVO0FBRkQsU0FLQzs7QUFFVixjQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZVO0FBR2I7Ozs7bUNBRVU7QUFDUDtBQUNIOzs7OEJBRUtDLEMsRUFBRztBQUNMLG1CQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENDLDJCQUFXLFlBQU07QUFDYkYsNEJBQVEsa0JBQVI7QUFDSCxpQkFGRCxFQUVHRixJQUFJLElBRlA7QUFHSCxhQUpNLENBQVA7QUFLSDs7Ozs7Ozs7Ozs7dUNBR3NCLEtBQUtLLEtBQUwsQ0FBVyxDQUFYLEM7OztBQUFiQyxvQzs7QUFDTkMsd0NBQVFDLEdBQVIsQ0FBWUYsSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQUdRRyxFLEVBQUk7QUFDWixnQkFBTUMsT0FBTyxJQUFiO0FBQ0EsZ0JBQUksS0FBS2IsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDMUIsdUJBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDSDtBQUNELDJCQUFLYSxXQUFMLENBQWlCO0FBQ2JDLHVCQURhLG1CQUNMQyxHQURLLEVBQ0E7QUFDVEgseUJBQUtiLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCZSxJQUFJZixRQUEvQjtBQUNBVywwQkFBTUEsR0FBR0ksSUFBSWYsUUFBUCxDQUFOO0FBQ0g7QUFKWSxhQUFqQjtBQU1IOzs7O0VBNUZ3QixlQUFLZ0IsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbmNvbnN0IGRldmljZSA9IHd4LmdldFN5c3RlbUluZm9TeW5jKClcbmNvbnN0IGRldmljZVJhZGlvID0gZGV2aWNlLndpbmRvd1dpZHRoIC8gNzUwXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgcGFnZXM6IFtcblxuICAgICAgICAgICAgJ3BhZ2VzL215Y2VudGVyJyxcbiAgICAgICAgICAgICdwYWdlcy9ob21lcGFnZScsXG4gICAgICAgICAgICAncGFnZXMvY2F0YWxvZycsXG4gICAgICAgICAgICAncGFnZXMvc2hvcGNhcnQnLFxuICAgICAgICAgICAgJ3BhZ2VzL2NvbW1vZGl0eS9saXN0JyxcbiAgICAgICAgICAgICdwYWdlcy9jb21tb2RpdHkvZGV0YWlsJyxcbiAgICAgICAgICAgICdwYWdlcy9vcmRlci9saXN0JyxcbiAgICAgICAgICAgICdwYWdlcy9vcmRlci9kZXRhaWwnLFxuICAgICAgICAgICAgJ3BhZ2VzL29yZGVyL2NvbmZpcm0nLFxuXG4gICAgICAgICAgICAncGFnZXMvYWRkcmVzcy9saXN0JyxcbiAgICAgICAgICAgICdwYWdlcy9hZGRyZXNzL2RldGFpbCcsXG4gICAgICAgICAgICAncGFnZXMvcXVlc3Rpb24vbGlzdCcsXG4gICAgICAgICAgICAncGFnZXMvcXVlc3Rpb24vZGV0YWlsJ1xuICAgICAgICBdLFxuICAgICAgICB0YWJCYXI6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzQ1MjcxMycsXG4gICAgICAgICAgICBzZWxlY3RlZENvbG9yOiAnI2E5MWUxMScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTllMGNjJyxcbiAgICAgICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9ob21lcGFnZScsXG4gICAgICAgICAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvaG9tZXBhZ2UucG5nJyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL2hvbWVwYWdlLWN1ci5wbmcnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICfpppbpobUnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9jYXRhbG9nJyxcbiAgICAgICAgICAgICAgICBpY29uUGF0aDogJ2ltYWdlcy9jYXRhbG9nLnBuZycsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2ltYWdlcy9jYXRhbG9nLWN1ci5wbmcnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICfkuqflk4HliIbnsbsnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9zaG9wY2FydCcsXG4gICAgICAgICAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvc2hvcGNhcnQucG5nJyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL3Nob3BjYXJ0LWN1ci5wbmcnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICfotK3nianovaYnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9teWNlbnRlcicsXG4gICAgICAgICAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvbXljZW50ZXIucG5nJyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL215Y2VudGVyLWN1ci5wbmcnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICfkuKrkurrkuK3lv4MnXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICB3aW5kb3c6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlOWUwY2MnLFxuICAgICAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjNDUyNzEzJyxcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflj6/ku6XlhbTllYbln44nLFxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJyNkNmM1YWMnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnbG9iYWxEYXRhID0ge1xuICAgICAgICBkZXZpY2VSYWRpbzogZGV2aWNlUmFkaW8sXG4gICAgICAgIHVzZXJJbmZvOiBudWxsXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgIH1cblxuICAgIG9uTGF1bmNoKCkge1xuICAgICAgICAvLyB0aGlzLnRlc3RBc3luYygpXG4gICAgfVxuXG4gICAgc2xlZXAocykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXG4gICAgICAgICAgICB9LCBzICogMTAwMClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyB0ZXN0QXN5bmMoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfVxuXG4gICAgZ2V0VXNlckluZm8oY2IpIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICAgICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xuICAgICAgICB9XG4gICAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG4iXX0=