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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwic2VsZiIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibm9ybWFsVGl0bGUiLCJzZXRUaW1lb3V0VGl0bGUiLCJzZXRUaW1lb3V0IiwiJGFwcGx5IiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwibWl4aW5zIiwiZGF0YSIsIm15bnVtIiwibmlja05hbWUiLCJjb3VudCIsIm5ldHJzdCIsImdyb3VwTGlzdCIsImlkIiwibmFtZSIsImxpc3QiLCJjaGlsZGlkIiwiY2hpbGRuYW1lIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsInBsdXMiLCJ0b2FzdCIsInByb21pc2UiLCIkaW52b2tlIiwidGl0bGUiLCJpbWciLCJ0aGVuIiwiZCIsImNvbnNvbGUiLCJsb2ciLCJ0YXAiLCIkbmFtZSIsImNvbW11bmljYXRlIiwiJGJyb2FkY2FzdCIsInJlcXVlc3QiLCJpIiwibWFwIiwidXJsIiwic3VjY2VzcyIsImNvdW50ZXJFbWl0IiwiJGV2ZW50IiwibGVuZ3RoIiwic291cmNlIiwiZXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FtSFI7QUFDTCxnQkFBSUMsT0FBTyxJQUFYO0FBQ0EsaUJBQUtDLE9BQUwsQ0FBYUMsV0FBYixDQUF5QixVQUFTQyxRQUFULEVBQW1CO0FBQ3hDLG9CQUFJQSxRQUFKLEVBQWM7QUFDVkgseUJBQUtHLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0g7QUFDREgscUJBQUtJLFdBQUwsR0FBbUIsUUFBbkI7O0FBRUFKLHFCQUFLSyxlQUFMLEdBQXVCLFdBQXZCO0FBQ0FDLDJCQUFXLFlBQU07QUFDYk4seUJBQUtLLGVBQUwsR0FBdUIsTUFBdkI7QUFDQUwseUJBQUtPLE1BQUw7QUFDSCxpQkFI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QUFDakJuQyw2QkFBS2lCLE1BQUwsSUFBZWtCLEVBQUV0QixJQUFGLEdBQVMsR0FBeEI7QUFDQWIsNkJBQUtPLE1BQUw7QUFDSDtBQUxRLGlCQUFiO0FBT0g7QUFDSixTQXRDSztBQXVDTndDLG1CQXZDTSx5QkF1Q2U7QUFBQTs7QUFDakIsZ0JBQUlDLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBYixvQkFBUUMsR0FBUixDQUFlLEtBQUtFLEtBQXBCLGlCQUFxQ1MsT0FBTzVCLElBQTVDLGNBQXlENEIsT0FBT0UsTUFBUCxDQUFjWCxLQUF2RTtBQUNIO0FBMUNLLEs7U0E2Q1ZZLE0sR0FBUztBQUNMLHNCQUFjLHFCQUFhO0FBQUE7O0FBQ3ZCLGdCQUFJSCxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQWIsb0JBQVFDLEdBQVIsQ0FBZSxPQUFLRSxLQUFwQixpQkFBcUNTLE9BQU81QixJQUE1QyxjQUF5RDRCLE9BQU9FLE1BQVAsQ0FBY1gsS0FBdkU7QUFDSDtBQUpJLEs7OztrQkE1R1F4QyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcclxuaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAndGVzdCdcclxuICAgIH1cclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIG15bnVtOiAyMCxcclxuICAgICAgICB1c2VySW5mbzoge1xyXG4gICAgICAgICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5vcm1hbFRpdGxlOiAn5Y6f5aeL5qCH6aKYJyxcclxuICAgICAgICBzZXRUaW1lb3V0VGl0bGU6ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknLFxyXG4gICAgICAgIGNvdW50OiAwLFxyXG4gICAgICAgIG5ldHJzdDogJycsXHJcbiAgICAgICAgZ3JvdXBMaXN0OiBbe1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcclxuICAgICAgICAgICAgICAgIGxpc3Q6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRpZDogJzEuMScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjInLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZGlkOiAnMS4zJyxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfngrnlh7vmlLnlj5gnLFxyXG4gICAgICAgICAgICAgICAgbGlzdDogW3tcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4xJyxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRpZDogJzIuMicsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXHJcbiAgICAgICAgICAgICAgICBsaXN0OiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkaWQ6ICczLjEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgICAgbm93KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBwbHVzKCkge1xyXG4gICAgICAgICAgICB0aGlzLm15bnVtKytcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvYXN0KCkge1xyXG4gICAgICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvdycsIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn6Ieq5a6a5LmJ5qCH6aKYJyxcclxuICAgICAgICAgICAgICAgIGltZzogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9raWlubGFtL3dldG9hc3QvbWFzdGVyL2ltYWdlcy9zdGFyLnBuZydcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHByb21pc2UudGhlbigoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvYXN0IGRvbmUnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGFwKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZG8gbm90aW5nIGZyb20gJyArIHRoaXMuJG5hbWUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21tdW5pY2F0ZSgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgdGFwJylcclxuXHJcbiAgICAgICAgICAgIHRoaXMuJGludm9rZSgnY291bnRlcjInLCAnbWludXMnLCA0NSwgNilcclxuICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdjb3VudGVyMScsICdwbHVzJywgNDUsIDYpXHJcblxyXG4gICAgICAgICAgICB0aGlzLiRicm9hZGNhc3QoJ2luZGV4LWJyb2FkY2FzdCcsIDEsIDMsIDQpXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXF1ZXN0KCkge1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgICAgICAgICAgbGV0IGkgPSAxMFxyXG4gICAgICAgICAgICBsZXQgbWFwID0gWydNQT09JywgJ01Rbz0nLCAnTWc9PScsICdNdz09JywgJ05BPT0nLCAnTlE9PScsICdOZz09JywgJ053PT0nLCAnT0E9PScsICdPUT09J11cclxuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgICAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5tYWRjb2Rlci5jbi90ZXN0cy9zbGVlcC5waHA/dGltZT0xJnQ9Y3NzJmM9JyArIG1hcFtpXSArICcmaT0nICsgaSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubmV0cnN0ICs9IGQuZGF0YSArICcuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY291bnRlckVtaXQoLi4uYXJncykge1xyXG4gICAgICAgICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICAgICdpbmRleC1lbWl0JzogKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgICAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24odXNlckluZm8pIHtcclxuICAgICAgICAgICAgaWYgKHVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnVzZXJJbmZvID0gdXNlckluZm9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLm5vcm1hbFRpdGxlID0gJ+agh+mimOW3suiiq+S/ruaUuSdcclxuXHJcbiAgICAgICAgICAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+agh+mimOS4ieenkuWQjuS8muiiq+S/ruaUuSdcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfliLDkuInnp5LkuoYnXHJcbiAgICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICAgICAgICAgIH0sIDMwMDApXHJcblxyXG4gICAgICAgICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuIl19