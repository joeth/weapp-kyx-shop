'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _list = require('./../components/list.js');

var _list2 = _interopRequireDefault(_list);

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // alias example
// alias example


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
    this.$repeat = { "groupList": { "com": "group", "props": "grouplist" } };
    this.$props = { "group": { "v-bind:grouplist.once": { "value": "item", "type": "item", "for": "groupList", "item": "item", "index": "index", "key": "key" }, "v-bind:indexa.once": { "value": "index", "type": "index", "for": "groupList", "item": "item", "index": "index", "key": "key" } }, "counter1": { "xmlns:v-on": "" }, "counter2": { "xmlns:v-bind": "", "v-bind:num.sync": "mynum" } };
    this.$events = { "counter1": { "v-on:index-emit": "counterEmit" } };
    this.components = {
        panel: _panel2.default,
        counter1: _counter2.default,
        counter2: _counter2.default,
        list: _list2.default,
        group: _group2.default,
        toast: _wepyComToast2.default
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwic2VsZiIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibm9ybWFsVGl0bGUiLCJzZXRUaW1lb3V0VGl0bGUiLCJzZXRUaW1lb3V0IiwiJGFwcGx5IiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwYW5lbCIsImNvdW50ZXIxIiwiY291bnRlcjIiLCJsaXN0IiwiZ3JvdXAiLCJ0b2FzdCIsIm1peGlucyIsImRhdGEiLCJteW51bSIsIm5pY2tOYW1lIiwiY291bnQiLCJuZXRyc3QiLCJncm91cExpc3QiLCJpZCIsIm5hbWUiLCJjaGlsZGlkIiwiY2hpbGRuYW1lIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsInBsdXMiLCJwcm9taXNlIiwiJGludm9rZSIsInRpdGxlIiwiaW1nIiwidGhlbiIsImQiLCJjb25zb2xlIiwibG9nIiwidGFwIiwiJG5hbWUiLCJjb21tdW5pY2F0ZSIsIiRicm9hZGNhc3QiLCJyZXF1ZXN0IiwiaSIsIm1hcCIsInVybCIsInN1Y2Nlc3MiLCJjb3VudGVyRW1pdCIsIiRldmVudCIsImxlbmd0aCIsInNvdXJjZSIsImV2ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7K2VBSnVDO0FBQ1Q7OztJQUtUQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQTRIUjtBQUNMLGdCQUFJQyxPQUFPLElBQVg7QUFDQSxpQkFBS0MsT0FBTCxDQUFhQyxXQUFiLENBQXlCLFVBQVNDLFFBQVQsRUFBbUI7QUFDeEMsb0JBQUlBLFFBQUosRUFBYztBQUNWSCx5QkFBS0csUUFBTCxHQUFnQkEsUUFBaEI7QUFDSDtBQUNESCxxQkFBS0ksV0FBTCxHQUFtQixR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QUFjWCxLQUF2RTtBQUNIO0FBMUNLLEs7U0E2Q1ZZLE0sR0FBUztBQUNMLHNCQUFjLHFCQUFhO0FBQUE7O0FBQ3ZCLGdCQUFJSCxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQWIsb0JBQVFDLEdBQVIsQ0FBZSxPQUFLRSxLQUFwQixpQkFBcUNTLE9BQU8xQixJQUE1QyxjQUF5RDBCLE9BQU9FLE1BQVAsQ0FBY1gsS0FBdkU7QUFDSDtBQUpJLEs7OztrQkFySFEvQyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0J1xuaW1wb3J0IFBhbmVsIGZyb20gJ0AvY29tcG9uZW50cy9wYW5lbCcgLy8gYWxpYXMgZXhhbXBsZVxuaW1wb3J0IENvdW50ZXIgZnJvbSAnY291bnRlcicgLy8gYWxpYXMgZXhhbXBsZVxuaW1wb3J0IEdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvZ3JvdXAnXG5pbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG5pbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAndGVzdCdcbiAgICB9XG4gICAkcmVwZWF0ID0ge1wiZ3JvdXBMaXN0XCI6e1wiY29tXCI6XCJncm91cFwiLFwicHJvcHNcIjpcImdyb3VwbGlzdFwifX07XHJcbiRwcm9wcyA9IHtcImdyb3VwXCI6e1widi1iaW5kOmdyb3VwbGlzdC5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwiZ3JvdXBMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9LFwidi1iaW5kOmluZGV4YS5vbmNlXCI6e1widmFsdWVcIjpcImluZGV4XCIsXCJ0eXBlXCI6XCJpbmRleFwiLFwiZm9yXCI6XCJncm91cExpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn19LFwiY291bnRlcjFcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJjb3VudGVyMlwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bnVtLnN5bmNcIjpcIm15bnVtXCJ9fTtcclxuJGV2ZW50cyA9IHtcImNvdW50ZXIxXCI6e1widi1vbjppbmRleC1lbWl0XCI6XCJjb3VudGVyRW1pdFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICBwYW5lbDogUGFuZWwsXG4gICAgICAgIGNvdW50ZXIxOiBDb3VudGVyLFxuICAgICAgICBjb3VudGVyMjogQ291bnRlcixcbiAgICAgICAgbGlzdDogTGlzdCxcbiAgICAgICAgZ3JvdXA6IEdyb3VwLFxuICAgICAgICB0b2FzdDogVG9hc3RcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgICAgbXludW06IDIwLFxuICAgICAgICB1c2VySW5mbzoge1xuICAgICAgICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgICAgIH0sXG4gICAgICAgIG5vcm1hbFRpdGxlOiAn5Y6f5aeL5qCH6aKYJyxcbiAgICAgICAgc2V0VGltZW91dFRpdGxlOiAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5JyxcbiAgICAgICAgY291bnQ6IDAsXG4gICAgICAgIG5ldHJzdDogJycsXG4gICAgICAgIGdyb3VwTGlzdDogW3tcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcbiAgICAgICAgICAgICAgICBsaXN0OiBbe1xuICAgICAgICAgICAgICAgICAgICBjaGlsZGlkOiAnMS4xJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRpZDogJzEuMicsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjMnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgICAgICAgICAgbGlzdDogW3tcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRpZDogJzIuMScsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjInLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4zJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIG5hbWU6ICfngrnlh7vmlLnlj5gnLFxuICAgICAgICAgICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkaWQ6ICczLjEnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgICBub3coKSB7XG4gICAgICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIHBsdXMoKSB7XG4gICAgICAgICAgICB0aGlzLm15bnVtKytcbiAgICAgICAgfSxcbiAgICAgICAgdG9hc3QoKSB7XG4gICAgICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvdycsIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+iHquWumuS5ieagh+mimCcsXG4gICAgICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2tpaW5sYW0vd2V0b2FzdC9tYXN0ZXIvaW1hZ2VzL3N0YXIucG5nJ1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcHJvbWlzZS50aGVuKChkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvYXN0IGRvbmUnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgdGFwKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvIG5vdGluZyBmcm9tICcgKyB0aGlzLiRuYW1lKVxuICAgICAgICB9LFxuICAgICAgICBjb21tdW5pY2F0ZSgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyAnIHRhcCcpXG5cbiAgICAgICAgICAgIHRoaXMuJGludm9rZSgnY291bnRlcjInLCAnbWludXMnLCA0NSwgNilcbiAgICAgICAgICAgIHRoaXMuJGludm9rZSgnY291bnRlcjEnLCAncGx1cycsIDQ1LCA2KVxuXG4gICAgICAgICAgICB0aGlzLiRicm9hZGNhc3QoJ2luZGV4LWJyb2FkY2FzdCcsIDEsIDMsIDQpXG4gICAgICAgIH0sXG4gICAgICAgIHJlcXVlc3QoKSB7XG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgICAgIGxldCBpID0gMTBcbiAgICAgICAgICAgIGxldCBtYXAgPSBbJ01BPT0nLCAnTVFvPScsICdNZz09JywgJ013PT0nLCAnTkE9PScsICdOUT09JywgJ05nPT0nLCAnTnc9PScsICdPQT09JywgJ09RPT0nXVxuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3Lm1hZGNvZGVyLmNuL3Rlc3RzL3NsZWVwLnBocD90aW1lPTEmdD1jc3MmYz0nICsgbWFwW2ldICsgJyZpPScgKyBpLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm5ldHJzdCArPSBkLmRhdGEgKyAnLidcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvdW50ZXJFbWl0KC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgICAgJ2luZGV4LWVtaXQnOiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKGZ1bmN0aW9uKHVzZXJJbmZvKSB7XG4gICAgICAgICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgICAgICAgICBzZWxmLnVzZXJJbmZvID0gdXNlckluZm9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYubm9ybWFsVGl0bGUgPSAn5qCH6aKY5bey6KKr5L+u5pS5J1xuXG4gICAgICAgICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfliLDkuInnp5LkuoYnXG4gICAgICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgICAgfSwgMzAwMClcblxuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuIl19