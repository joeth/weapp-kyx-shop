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
            pages: ['pages/mycenter', 'pages/catalog', 'pages/homepage', 'pages/shopcart', 'pages/product/list', 'pages/product/detail', 'pages/order/list', 'pages/order/detail', 'pages/address/list', 'pages/address/detail', 'pages/question/list', 'pages/question/detail'],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJkZXZpY2UiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwiZGV2aWNlUmFkaW8iLCJ3aW5kb3dXaWR0aCIsImNvbmZpZyIsInBhZ2VzIiwidGFiQmFyIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNiIiwidGhhdCIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsR0FBR0MsaUJBQUgsRUFBZjtBQUNBLElBQU1DLGNBQWNILE9BQU9JLFdBQVAsR0FBcUIsR0FBekM7Ozs7O0FBMERJLHdCQUFjO0FBQUE7O0FBQUE7O0FBQUEsY0F2RGRDLE1BdURjLEdBdkRMO0FBQ0xDLG1CQUFPLENBQ0gsZ0JBREcsRUFFSCxlQUZHLEVBR0gsZ0JBSEcsRUFJSCxnQkFKRyxFQUtILG9CQUxHLEVBTUgsc0JBTkcsRUFPSCxrQkFQRyxFQVFILG9CQVJHLEVBU0gsb0JBVEcsRUFVSCxzQkFWRyxFQVdILHFCQVhHLEVBWUgsdUJBWkcsQ0FERjtBQWVMQyxvQkFBUTtBQUNKQyx1QkFBTyxTQURIO0FBRUpDLCtCQUFlLFNBRlg7QUFHSkMsaUNBQWlCLFNBSGI7QUFJSkMsc0JBQU0sQ0FBQztBQUNIQyw4QkFBVSxnQkFEUDtBQUVIQyw4QkFBVSxxQkFGUDtBQUdIQyxzQ0FBa0IseUJBSGY7QUFJSEMsMEJBQU07QUFKSCxpQkFBRCxFQUtIO0FBQ0NILDhCQUFVLGVBRFg7QUFFQ0MsOEJBQVUsb0JBRlg7QUFHQ0Msc0NBQWtCLHdCQUhuQjtBQUlDQywwQkFBTTtBQUpQLGlCQUxHLEVBVUg7QUFDQ0gsOEJBQVUsZ0JBRFg7QUFFQ0MsOEJBQVUscUJBRlg7QUFHQ0Msc0NBQWtCLHlCQUhuQjtBQUlDQywwQkFBTTtBQUpQLGlCQVZHLEVBZUg7QUFDQ0gsOEJBQVUsZ0JBRFg7QUFFQ0MsOEJBQVUscUJBRlg7QUFHQ0Msc0NBQWtCLHlCQUhuQjtBQUlDQywwQkFBTTtBQUpQLGlCQWZHO0FBSkYsYUFmSDtBQXlDTEMsb0JBQVE7QUFDSk4saUNBQWlCLFNBRGI7QUFFSk8scUNBQXFCLE9BRmpCO0FBR0pDLDhDQUE4QixTQUgxQjtBQUlKQyx3Q0FBd0IsT0FKcEI7QUFLSkMsd0NBQXdCO0FBTHBCO0FBekNILFNBdURLO0FBQUEsY0FMZEMsVUFLYyxHQUxEO0FBQ1RsQix5QkFBYUEsV0FESjtBQUVUbUIsc0JBQVU7QUFGRCxTQUtDOztBQUVWLGNBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBRlU7QUFHYjs7OzttQ0FFVTtBQUNQO0FBQ0g7Ozs4QkFFS0MsQyxFQUFHO0FBQ0wsbUJBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ0MsMkJBQVcsWUFBTTtBQUNiRiw0QkFBUSxrQkFBUjtBQUNILGlCQUZELEVBRUdGLElBQUksSUFGUDtBQUdILGFBSk0sQ0FBUDtBQUtIOzs7Ozs7Ozs7Ozt1Q0FHc0IsS0FBS0ssS0FBTCxDQUFXLENBQVgsQzs7O0FBQWJDLG9DOztBQUNOQyx3Q0FBUUMsR0FBUixDQUFZRixJQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBR1FHLEUsRUFBSTtBQUNaLGdCQUFNQyxPQUFPLElBQWI7QUFDQSxnQkFBSSxLQUFLYixVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUMxQix1QkFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNIO0FBQ0QsMkJBQUthLFdBQUwsQ0FBaUI7QUFDYkMsdUJBRGEsbUJBQ0xDLEdBREssRUFDQTtBQUNUSCx5QkFBS2IsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJlLElBQUlmLFFBQS9CO0FBQ0FXLDBCQUFNQSxHQUFHSSxJQUFJZixRQUFQLENBQU47QUFDSDtBQUpZLGFBQWpCO0FBTUg7Ozs7RUF6RndCLGVBQUtnQixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcblxyXG5jb25zdCBkZXZpY2UgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpXHJcbmNvbnN0IGRldmljZVJhZGlvID0gZGV2aWNlLndpbmRvd1dpZHRoIC8gNzUwXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgICBwYWdlczogW1xyXG4gICAgICAgICAgICAncGFnZXMvbXljZW50ZXInLFxyXG4gICAgICAgICAgICAncGFnZXMvY2F0YWxvZycsXHJcbiAgICAgICAgICAgICdwYWdlcy9ob21lcGFnZScsXHJcbiAgICAgICAgICAgICdwYWdlcy9zaG9wY2FydCcsXHJcbiAgICAgICAgICAgICdwYWdlcy9wcm9kdWN0L2xpc3QnLFxyXG4gICAgICAgICAgICAncGFnZXMvcHJvZHVjdC9kZXRhaWwnLFxyXG4gICAgICAgICAgICAncGFnZXMvb3JkZXIvbGlzdCcsXHJcbiAgICAgICAgICAgICdwYWdlcy9vcmRlci9kZXRhaWwnLFxyXG4gICAgICAgICAgICAncGFnZXMvYWRkcmVzcy9saXN0JyxcclxuICAgICAgICAgICAgJ3BhZ2VzL2FkZHJlc3MvZGV0YWlsJyxcclxuICAgICAgICAgICAgJ3BhZ2VzL3F1ZXN0aW9uL2xpc3QnLFxyXG4gICAgICAgICAgICAncGFnZXMvcXVlc3Rpb24vZGV0YWlsJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGFiQmFyOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzQ1MjcxMycsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I6ICcjYTkxZTExJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2U5ZTBjYycsXHJcbiAgICAgICAgICAgIGxpc3Q6IFt7XHJcbiAgICAgICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2hvbWVwYWdlJyxcclxuICAgICAgICAgICAgICAgIGljb25QYXRoOiAnaW1hZ2VzL2hvbWVwYWdlLnBuZycsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL2hvbWVwYWdlLWN1ci5wbmcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ+mmlumhtSdcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9jYXRhbG9nJyxcclxuICAgICAgICAgICAgICAgIGljb25QYXRoOiAnaW1hZ2VzL2NhdGFsb2cucG5nJyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdpbWFnZXMvY2F0YWxvZy1jdXIucG5nJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICfkuqflk4HliIbnsbsnXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvc2hvcGNhcnQnLFxyXG4gICAgICAgICAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvc2hvcGNhcnQucG5nJyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdpbWFnZXMvc2hvcGNhcnQtY3VyLnBuZycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAn6LSt54mp6L2mJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL215Y2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGljb25QYXRoOiAnaW1hZ2VzL215Y2VudGVyLnBuZycsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL215Y2VudGVyLWN1ci5wbmcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ+S4quS6uuS4reW/gydcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbmRvdzoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTllMGNjJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyM0NTI3MTMnLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Y+v5Lul5YW05ZWG5Z+OJyxcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJyNkNmM1YWMnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdsb2JhbERhdGEgPSB7XHJcbiAgICAgICAgZGV2aWNlUmFkaW86IGRldmljZVJhZGlvLFxyXG4gICAgICAgIHVzZXJJbmZvOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICAgIH1cclxuXHJcbiAgICBvbkxhdW5jaCgpIHtcclxuICAgICAgICAvLyB0aGlzLnRlc3RBc3luYygpXHJcbiAgICB9XHJcblxyXG4gICAgc2xlZXAocykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXHJcbiAgICAgICAgICAgIH0sIHMgKiAxMDAwKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdGVzdEFzeW5jKCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VySW5mbyhjYikge1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXHJcbiAgICAgICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=