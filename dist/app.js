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
            pages: ['pages/mycenter', 'pages/homepage', 'pages/catalog', 'pages/shopcart', 'pages/commodity/list', 'pages/commodity/detail', 'pages/order/list', 'pages/order/detail', 'pages/address/list', 'pages/address/detail', 'pages/question/list', 'pages/question/detail'],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJkZXZpY2UiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwiZGV2aWNlUmFkaW8iLCJ3aW5kb3dXaWR0aCIsImNvbmZpZyIsInBhZ2VzIiwidGFiQmFyIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNiIiwidGhhdCIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsR0FBR0MsaUJBQUgsRUFBZjtBQUNBLElBQU1DLGNBQWNILE9BQU9JLFdBQVAsR0FBcUIsR0FBekM7Ozs7O0FBMERJLHdCQUFjO0FBQUE7O0FBQUE7O0FBQUEsY0F2RGRDLE1BdURjLEdBdkRMO0FBQ0xDLG1CQUFPLENBQ0gsZ0JBREcsRUFFSCxnQkFGRyxFQUdILGVBSEcsRUFJSCxnQkFKRyxFQUtILHNCQUxHLEVBTUgsd0JBTkcsRUFPSCxrQkFQRyxFQVFILG9CQVJHLEVBU0gsb0JBVEcsRUFVSCxzQkFWRyxFQVdILHFCQVhHLEVBWUgsdUJBWkcsQ0FERjtBQWVMQyxvQkFBUTtBQUNKQyx1QkFBTyxTQURIO0FBRUpDLCtCQUFlLFNBRlg7QUFHSkMsaUNBQWlCLFNBSGI7QUFJSkMsc0JBQU0sQ0FBQztBQUNIQyw4QkFBVSxnQkFEUDtBQUVIQyw4QkFBVSxxQkFGUDtBQUdIQyxzQ0FBa0IseUJBSGY7QUFJSEMsMEJBQU07QUFKSCxpQkFBRCxFQUtIO0FBQ0NILDhCQUFVLGVBRFg7QUFFQ0MsOEJBQVUsb0JBRlg7QUFHQ0Msc0NBQWtCLHdCQUhuQjtBQUlDQywwQkFBTTtBQUpQLGlCQUxHLEVBVUg7QUFDQ0gsOEJBQVUsZ0JBRFg7QUFFQ0MsOEJBQVUscUJBRlg7QUFHQ0Msc0NBQWtCLHlCQUhuQjtBQUlDQywwQkFBTTtBQUpQLGlCQVZHLEVBZUg7QUFDQ0gsOEJBQVUsZ0JBRFg7QUFFQ0MsOEJBQVUscUJBRlg7QUFHQ0Msc0NBQWtCLHlCQUhuQjtBQUlDQywwQkFBTTtBQUpQLGlCQWZHO0FBSkYsYUFmSDtBQXlDTEMsb0JBQVE7QUFDSk4saUNBQWlCLFNBRGI7QUFFSk8scUNBQXFCLE9BRmpCO0FBR0pDLDhDQUE4QixTQUgxQjtBQUlKQyx3Q0FBd0IsT0FKcEI7QUFLSkMsd0NBQXdCO0FBTHBCO0FBekNILFNBdURLO0FBQUEsY0FMZEMsVUFLYyxHQUxEO0FBQ1RsQix5QkFBYUEsV0FESjtBQUVUbUIsc0JBQVU7QUFGRCxTQUtDOztBQUVWLGNBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBRlU7QUFHYjs7OzttQ0FFVTtBQUNQO0FBQ0g7Ozs4QkFFS0MsQyxFQUFHO0FBQ0wsbUJBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ0MsMkJBQVcsWUFBTTtBQUNiRiw0QkFBUSxrQkFBUjtBQUNILGlCQUZELEVBRUdGLElBQUksSUFGUDtBQUdILGFBSk0sQ0FBUDtBQUtIOzs7Ozs7Ozs7Ozt1Q0FHc0IsS0FBS0ssS0FBTCxDQUFXLENBQVgsQzs7O0FBQWJDLG9DOztBQUNOQyx3Q0FBUUMsR0FBUixDQUFZRixJQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBR1FHLEUsRUFBSTtBQUNaLGdCQUFNQyxPQUFPLElBQWI7QUFDQSxnQkFBSSxLQUFLYixVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUMxQix1QkFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNIO0FBQ0QsMkJBQUthLFdBQUwsQ0FBaUI7QUFDYkMsdUJBRGEsbUJBQ0xDLEdBREssRUFDQTtBQUNUSCx5QkFBS2IsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJlLElBQUlmLFFBQS9CO0FBQ0FXLDBCQUFNQSxHQUFHSSxJQUFJZixRQUFQLENBQU47QUFDSDtBQUpZLGFBQWpCO0FBTUg7Ozs7RUF6RndCLGVBQUtnQixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuY29uc3QgZGV2aWNlID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKVxuY29uc3QgZGV2aWNlUmFkaW8gPSBkZXZpY2Uud2luZG93V2lkdGggLyA3NTBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gICAgY29uZmlnID0ge1xuICAgICAgICBwYWdlczogW1xuICAgICAgICAgICAgJ3BhZ2VzL215Y2VudGVyJyxcbiAgICAgICAgICAgICdwYWdlcy9ob21lcGFnZScsXG4gICAgICAgICAgICAncGFnZXMvY2F0YWxvZycsXG4gICAgICAgICAgICAncGFnZXMvc2hvcGNhcnQnLFxuICAgICAgICAgICAgJ3BhZ2VzL2NvbW1vZGl0eS9saXN0JyxcbiAgICAgICAgICAgICdwYWdlcy9jb21tb2RpdHkvZGV0YWlsJyxcbiAgICAgICAgICAgICdwYWdlcy9vcmRlci9saXN0JyxcbiAgICAgICAgICAgICdwYWdlcy9vcmRlci9kZXRhaWwnLFxuICAgICAgICAgICAgJ3BhZ2VzL2FkZHJlc3MvbGlzdCcsXG4gICAgICAgICAgICAncGFnZXMvYWRkcmVzcy9kZXRhaWwnLFxuICAgICAgICAgICAgJ3BhZ2VzL3F1ZXN0aW9uL2xpc3QnLFxuICAgICAgICAgICAgJ3BhZ2VzL3F1ZXN0aW9uL2RldGFpbCdcbiAgICAgICAgXSxcbiAgICAgICAgdGFiQmFyOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM0NTI3MTMnLFxuICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcjogJyNhOTFlMTEnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2U5ZTBjYycsXG4gICAgICAgICAgICBsaXN0OiBbe1xuICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaG9tZXBhZ2UnLFxuICAgICAgICAgICAgICAgIGljb25QYXRoOiAnaW1hZ2VzL2hvbWVwYWdlLnBuZycsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2ltYWdlcy9ob21lcGFnZS1jdXIucG5nJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAn6aaW6aG1J1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvY2F0YWxvZycsXG4gICAgICAgICAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvY2F0YWxvZy5wbmcnLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdpbWFnZXMvY2F0YWxvZy1jdXIucG5nJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAn5Lqn5ZOB5YiG57G7J1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvc2hvcGNhcnQnLFxuICAgICAgICAgICAgICAgIGljb25QYXRoOiAnaW1hZ2VzL3Nob3BjYXJ0LnBuZycsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2ltYWdlcy9zaG9wY2FydC1jdXIucG5nJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAn6LSt54mp6L2mJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbXljZW50ZXInLFxuICAgICAgICAgICAgICAgIGljb25QYXRoOiAnaW1hZ2VzL215Y2VudGVyLnBuZycsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2ltYWdlcy9teWNlbnRlci1jdXIucG5nJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAn5Liq5Lq65Lit5b+DJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgICAgd2luZG93OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTllMGNjJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzQ1MjcxMycsXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Y+v5Lul5YW05ZWG5Z+OJyxcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICcjZDZjNWFjJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2xvYmFsRGF0YSA9IHtcbiAgICAgICAgZGV2aWNlUmFkaW86IGRldmljZVJhZGlvLFxuICAgICAgICB1c2VySW5mbzogbnVsbFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICB9XG5cbiAgICBvbkxhdW5jaCgpIHtcbiAgICAgICAgLy8gdGhpcy50ZXN0QXN5bmMoKVxuICAgIH1cblxuICAgIHNsZWVwKHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxuICAgICAgICAgICAgfSwgcyAqIDEwMDApXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgdGVzdEFzeW5jKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH1cblxuICAgIGdldFVzZXJJbmZvKGNiKSB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cbiAgICAgICAgfVxuICAgICAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuIl19