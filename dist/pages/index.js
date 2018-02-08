'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {
            var self = this;
            this.$parent.getUserInfo(function (userInfo) {
                if (userInfo) {
                    self.userInfo = userInfo;
                }
                self.normalTitle = '标题已被修改';

                self.setTimeoutTitle = '标题三秒后会被修改';
                setTimeout(function () {
                    self.setTimeoutTitle = '到三秒了';
                    self.$apply();
                }, 3000);

                self.$apply();
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.config = {
        navigationBarTitleText: 'test'
    };
    this.components = {};
    this.mixins = [_test2.default];
    this.data = {
        mynum: 20,
        userInfo: {
            nickName: '加载中...'
        },
        normalTitle: '原始标题',
        setTimeoutTitle: '标题三秒后会被修改',
        count: 0,
        netrst: '',
        groupList: [{
            id: 1,
            name: '点击改变',
            list: [{
                childid: '1.1',
                childname: '子项，点我改变'
            }, {
                childid: '1.2',
                childname: '子项，点我改变'
            }, {
                childid: '1.3',
                childname: '子项，点我改变'
            }]
        }, {
            id: 2,
            name: '点击改变',
            list: [{
                childid: '2.1',
                childname: '子项，点我改变'
            }, {
                childid: '2.2',
                childname: '子项，点我改变'
            }, {
                childid: '2.3',
                childname: '子项，点我改变'
            }]
        }, {
            id: 3,
            name: '点击改变',
            list: [{
                childid: '3.1',
                childname: '子项，点我改变'
            }]
        }]
    };
    this.computed = {
        now: function now() {
            return +new Date();
        }
    };
    this.methods = {
        plus: function plus() {
            this.mynum++;
        },
        toast: function toast() {
            var promise = this.$invoke('toast', 'show', {
                title: '自定义标题',
                img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
            });

            promise.then(function (d) {
                console.log('toast done');
            });
        },
        tap: function tap() {
            console.log('do noting from ' + this.$name);
        },
        communicate: function communicate() {
            console.log(this.$name + ' tap');

            this.$invoke('counter2', 'minus', 45, 6);
            this.$invoke('counter1', 'plus', 45, 6);

            this.$broadcast('index-broadcast', 1, 3, 4);
        },
        request: function request() {
            var self = this;
            var i = 10;
            var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];
            while (i--) {
                _wepy2.default.request({
                    url: 'https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i,
                    success: function success(d) {
                        self.netrst += d.data + '.';
                        self.$apply();
                    }
                });
            }
        },
        counterEmit: function counterEmit() {
            var _ref2;

            var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
            console.log(this.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
        }
    };
    this.events = {
        'index-emit': function indexEmit() {
            var _ref3;

            var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
            console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
        }
    };
};

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwic2VsZiIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibm9ybWFsVGl0bGUiLCJzZXRUaW1lb3V0VGl0bGUiLCJzZXRUaW1lb3V0IiwiJGFwcGx5IiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwibWl4aW5zIiwiZGF0YSIsIm15bnVtIiwibmlja05hbWUiLCJjb3VudCIsIm5ldHJzdCIsImdyb3VwTGlzdCIsImlkIiwibmFtZSIsImxpc3QiLCJjaGlsZGlkIiwiY2hpbGRuYW1lIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsInBsdXMiLCJ0b2FzdCIsInByb21pc2UiLCIkaW52b2tlIiwidGl0bGUiLCJpbWciLCJ0aGVuIiwiZCIsImNvbnNvbGUiLCJsb2ciLCJ0YXAiLCIkbmFtZSIsImNvbW11bmljYXRlIiwiJGJyb2FkY2FzdCIsInJlcXVlc3QiLCJpIiwibWFwIiwidXJsIiwic3VjY2VzcyIsImNvdW50ZXJFbWl0IiwiJGV2ZW50IiwibGVuZ3RoIiwic291cmNlIiwiZXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FtSFI7QUFDTCxnQkFBSUMsT0FBTyxJQUFYO0FBQ0EsaUJBQUtDLE9BQUwsQ0FBYUMsV0FBYixDQUF5QixVQUFTQyxRQUFULEVBQW1CO0FBQ3hDLG9CQUFJQSxRQUFKLEVBQWM7QUFDVkgseUJBQUtHLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0g7QUFDREgscUJBQUtJLFdBQUwsR0FBbUIsUUFBbkI7O0FBRUFKLHFCQUFLSyxlQUFMLEdBQXVCLFdBQXZCO0FBQ0FDLDJCQUFXLFlBQU07QUFDYk4seUJBQUtLLGVBQUwsR0FBdUIsTUFBdkI7QUFDQUwseUJBQUtPLE1BQUw7QUFDSCxpQkFI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QUFDakJuQyw2QkFBS2lCLE1BQUwsSUFBZWtCLEVBQUV0QixJQUFGLEdBQVMsR0FBeEI7QUFDQWIsNkJBQUtPLE1BQUw7QUFDSDtBQUxRLGlCQUFiO0FBT0g7QUFDSixTQXRDSztBQXVDTndDLG1CQXZDTSx5QkF1Q2U7QUFBQTs7QUFDakIsZ0JBQUlDLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBYixvQkFBUUMsR0FBUixDQUFlLEtBQUtFLEtBQXBCLGlCQUFxQ1MsT0FBTzVCLElBQTVDLGNBQXlENEIsT0FBT0UsTUFBUCxDQUFjWCxLQUF2RTtBQUNIO0FBMUNLLEs7U0E2Q1ZZLE0sR0FBUztBQUNMLHNCQUFjLHFCQUFhO0FBQUE7O0FBQ3ZCLGdCQUFJSCxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQWIsb0JBQVFDLEdBQVIsQ0FBZSxPQUFLRSxLQUFwQixpQkFBcUNTLE9BQU81QixJQUE1QyxjQUF5RDRCLE9BQU9FLE1BQVAsQ0FBY1gsS0FBdkU7QUFDSDtBQUpJLEs7OztrQkE1R1F4QyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3Rlc3QnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICAgIG15bnVtOiAyMCxcbiAgICAgICAgdXNlckluZm86IHtcbiAgICAgICAgICAgIG5pY2tOYW1lOiAn5Yqg6L295LitLi4uJ1xuICAgICAgICB9LFxuICAgICAgICBub3JtYWxUaXRsZTogJ+WOn+Wni+agh+mimCcsXG4gICAgICAgIHNldFRpbWVvdXRUaXRsZTogJ+agh+mimOS4ieenkuWQjuS8muiiq+S/ruaUuScsXG4gICAgICAgIGNvdW50OiAwLFxuICAgICAgICBuZXRyc3Q6ICcnLFxuICAgICAgICBncm91cExpc3Q6IFt7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgICAgICAgICAgbGlzdDogW3tcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRpZDogJzEuMScsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjInLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZGlkOiAnMS4zJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIG5hbWU6ICfngrnlh7vmlLnlj5gnLFxuICAgICAgICAgICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjEnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4yJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRpZDogJzIuMycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcbiAgICAgICAgICAgICAgICBsaXN0OiBbe1xuICAgICAgICAgICAgICAgICAgICBjaGlsZGlkOiAnMy4xJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgbm93KCkge1xuICAgICAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgICBwbHVzKCkge1xuICAgICAgICAgICAgdGhpcy5teW51bSsrXG4gICAgICAgIH0sXG4gICAgICAgIHRvYXN0KCkge1xuICAgICAgICAgICAgbGV0IHByb21pc2UgPSB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3cnLCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfoh6rlrprkuYnmoIfpopgnLFxuICAgICAgICAgICAgICAgIGltZzogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9raWlubGFtL3dldG9hc3QvbWFzdGVyL2ltYWdlcy9zdGFyLnBuZydcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHByb21pc2UudGhlbigoZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2FzdCBkb25lJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHRhcCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkbyBub3RpbmcgZnJvbSAnICsgdGhpcy4kbmFtZSlcbiAgICAgICAgfSxcbiAgICAgICAgY29tbXVuaWNhdGUoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyB0YXAnKVxuXG4gICAgICAgICAgICB0aGlzLiRpbnZva2UoJ2NvdW50ZXIyJywgJ21pbnVzJywgNDUsIDYpXG4gICAgICAgICAgICB0aGlzLiRpbnZva2UoJ2NvdW50ZXIxJywgJ3BsdXMnLCA0NSwgNilcblxuICAgICAgICAgICAgdGhpcy4kYnJvYWRjYXN0KCdpbmRleC1icm9hZGNhc3QnLCAxLCAzLCA0KVxuICAgICAgICB9LFxuICAgICAgICByZXF1ZXN0KCkge1xuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgICAgICBsZXQgaSA9IDEwXG4gICAgICAgICAgICBsZXQgbWFwID0gWydNQT09JywgJ01Rbz0nLCAnTWc9PScsICdNdz09JywgJ05BPT0nLCAnTlE9PScsICdOZz09JywgJ053PT0nLCAnT0E9PScsICdPUT09J11cbiAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5tYWRjb2Rlci5jbi90ZXN0cy9zbGVlcC5waHA/dGltZT0xJnQ9Y3NzJmM9JyArIG1hcFtpXSArICcmaT0nICsgaSxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5uZXRyc3QgKz0gZC5kYXRhICsgJy4nXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb3VudGVyRW1pdCguLi5hcmdzKSB7XG4gICAgICAgICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICAgICdpbmRleC1lbWl0JzogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhmdW5jdGlvbih1c2VySW5mbykge1xuICAgICAgICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgICAgICAgICAgc2VsZi51c2VySW5mbyA9IHVzZXJJbmZvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLm5vcm1hbFRpdGxlID0gJ+agh+mimOW3suiiq+S/ruaUuSdcblxuICAgICAgICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5J1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5Yiw5LiJ56eS5LqGJ1xuICAgICAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICAgIH0sIDMwMDApXG5cbiAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbiJdfQ==