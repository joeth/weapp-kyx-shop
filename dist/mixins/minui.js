'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var colorsMixin = function (_wepy$mixin) {
    _inherits(colorsMixin, _wepy$mixin);

    function colorsMixin() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, colorsMixin);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = colorsMixin.__proto__ || Object.getPrototypeOf(colorsMixin)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            usingComponents: {
                'wxc-cc': '/packages/@minui/wxc-cc/dist/index',
                'wxc-flex': '/packages/@minui/wxc-flex/dist/index',
                'wxc-tab': '/packages/@minui/wxc-tab/dist/index',
                'wxc-tab-panel': '/packages/@minui/wxc-tab/dist/panel',
                'wxc-tab-label': '/packages/@minui/wxc-tab/dist/label',
                'wxc-badge': '/packages/@minui/wxc-badge/dist/index',
                'wxc-price': '/packages/@minui/wxc-price/dist/index',
                'wxc-popup': '../packages/@minui/wxc-popup/dist/index'
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return colorsMixin;
}(_wepy2.default.mixin);

exports.default = colorsMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbnVpLmpzIl0sIm5hbWVzIjpbImNvbG9yc01peGluIiwiY29uZmlnIiwidXNpbmdDb21wb25lbnRzIiwibWl4aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OztvTUFDakJDLE0sR0FBUztBQUNMQyw2QkFBaUI7QUFDYiwwQkFBVSxvQ0FERztBQUViLDRCQUFZLHNDQUZDO0FBR2IsMkJBQVcscUNBSEU7QUFJYixpQ0FBaUIscUNBSko7QUFLYixpQ0FBaUIscUNBTEo7QUFNYiw2QkFBYSx1Q0FOQTtBQU9iLDZCQUFhLHVDQVBBO0FBUWIsNkJBQWE7QUFSQTtBQURaLFM7Ozs7RUFENEIsZUFBS0MsSzs7a0JBQXpCSCxXIiwiZmlsZSI6Im1pbnVpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY29sb3JzTWl4aW4gZXh0ZW5kcyB3ZXB5Lm1peGluIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3d4Yy1jYyc6ICcvcGFja2FnZXMvQG1pbnVpL3d4Yy1jYy9kaXN0L2luZGV4JyxcbiAgICAgICAgICAgICd3eGMtZmxleCc6ICcvcGFja2FnZXMvQG1pbnVpL3d4Yy1mbGV4L2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy10YWInOiAnL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy10YWItcGFuZWwnOiAnL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvcGFuZWwnLFxuICAgICAgICAgICAgJ3d4Yy10YWItbGFiZWwnOiAnL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvbGFiZWwnLFxuICAgICAgICAgICAgJ3d4Yy1iYWRnZSc6ICcvcGFja2FnZXMvQG1pbnVpL3d4Yy1iYWRnZS9kaXN0L2luZGV4JyxcbiAgICAgICAgICAgICd3eGMtcHJpY2UnOiAnL3BhY2thZ2VzL0BtaW51aS93eGMtcHJpY2UvZGlzdC9pbmRleCcsXG4gICAgICAgICAgICAnd3hjLXBvcHVwJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtcG9wdXAvZGlzdC9pbmRleCcsXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=