'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __DATA__ = [{
    id: 1,
    isDefault: true,
    name: '张生',
    tel: '15817489898',
    area: '广东 广州市  天河区',
    address: '金穗路1号3401(广东星外星唱片)'
}, {
    id: 2,
    isDefault: false,
    name: '张生',
    tel: '15817489898',
    area: '广东 广州市  天河区',
    address: '金穗路1号3401(广东星外星唱片)'
}];

var AddressList = function (_wepy$page) {
    _inherits(AddressList, _wepy$page);

    function AddressList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AddressList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddressList.__proto__ || Object.getPrototypeOf(AddressList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '收货地址',
            usingComponents: {
                'wxc-cc': '../../packages/@minui/wxc-cc/dist/index',
                'wxc-flex': '../../packages/@minui/wxc-flex/dist/index',
                'wxc-badge': '../../packages/@minui/wxc-badge/dist/index',
                'wxc-price': '../../packages/@minui/wxc-price/dist/index'
            }
        }, _this.components = {}, _this.mixins = [], _this.data = {
            consigneeList: __DATA__
        }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AddressList, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return AddressList;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(AddressList , 'pages/address/list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiX19EQVRBX18iLCJpZCIsImlzRGVmYXVsdCIsIm5hbWUiLCJ0ZWwiLCJhcmVhIiwiYWRkcmVzcyIsIkFkZHJlc3NMaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwiY29uc2lnbmVlTGlzdCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLENBQ2I7QUFDSUMsUUFBSSxDQURSO0FBRUlDLGVBQVcsSUFGZjtBQUdJQyxVQUFNLElBSFY7QUFJSUMsU0FBSyxhQUpUO0FBS0lDLFVBQU0sYUFMVjtBQU1JQyxhQUFTO0FBTmIsQ0FEYSxFQVNiO0FBQ0lMLFFBQUksQ0FEUjtBQUVJQyxlQUFXLEtBRmY7QUFHSUMsVUFBTSxJQUhWO0FBSUlDLFNBQUssYUFKVDtBQUtJQyxVQUFNLGFBTFY7QUFNSUMsYUFBUztBQU5iLENBVGEsQ0FBakI7O0lBbUJxQkMsVzs7Ozs7Ozs7Ozs7Ozs7b01BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLDZCQUFpQjtBQUNiLDBCQUFVLHlDQURHO0FBRWIsNEJBQVksMkNBRkM7QUFHYiw2QkFBYSw0Q0FIQTtBQUliLDZCQUFhO0FBSkE7QUFGWixTLFFBVVRDLFUsR0FBYSxFLFFBSWJDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNIQywyQkFBZWQ7QUFEWixTLFFBSVBlLFEsR0FBVyxFLFFBR1hDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOzs7OztpQ0FJQSxDQUVSOzs7O0VBbENvQyxlQUFLQyxJOztrQkFBekJYLFciLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuY29uc3QgX19EQVRBX18gPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgaXNEZWZhdWx0OiB0cnVlLFxuICAgICAgICBuYW1lOiAn5byg55SfJyxcbiAgICAgICAgdGVsOiAnMTU4MTc0ODk4OTgnLFxuICAgICAgICBhcmVhOiAn5bm/5LicIOW5v+W3nuW4giAg5aSp5rKz5Yy6JyxcbiAgICAgICAgYWRkcmVzczogJ+mHkeepl+i3rzHlj7czNDAxKOW5v+S4nOaYn+WkluaYn+WUseeJhyknXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBpc0RlZmF1bHQ6IGZhbHNlLFxuICAgICAgICBuYW1lOiAn5byg55SfJyxcbiAgICAgICAgdGVsOiAnMTU4MTc0ODk4OTgnLFxuICAgICAgICBhcmVhOiAn5bm/5LicIOW5v+W3nuW4giAg5aSp5rKz5Yy6JyxcbiAgICAgICAgYWRkcmVzczogJ+mHkeepl+i3rzHlj7czNDAxKOW5v+S4nOaYn+WkluaYn+WUseeJhyknXG4gICAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRyZXNzTGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pS26LSn5Zyw5Z2AJyxcbiAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnd3hjLWNjJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtY2MvZGlzdC9pbmRleCcsXG4gICAgICAgICAgICAnd3hjLWZsZXgnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1mbGV4L2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy1iYWRnZSc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWJhZGdlL2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy1wcmljZSc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXByaWNlL2Rpc3QvaW5kZXgnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRzID0ge1xuXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICAgIGNvbnNpZ25lZUxpc3Q6IF9fREFUQV9fXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcblxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcblxuICAgIH1cbn1cblxuIl19