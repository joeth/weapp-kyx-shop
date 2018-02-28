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

var w = 750;
var winRtio = _wepy2.default.getSystemInfoSync().windowWidth / w;

var ItemOrderGoods = function (_wepy$component) {
    _inherits(ItemOrderGoods, _wepy$component);

    function ItemOrderGoods() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ItemOrderGoods);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ItemOrderGoods.__proto__ || Object.getPrototypeOf(ItemOrderGoods)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            goods: {
                type: Object,
                default: null,
                coerce: function coerce(val) {
                    console.log('coerce goods', val);
                    return val;
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return ItemOrderGoods;
}(_wepy2.default.component);

exports.default = ItemOrderGoods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RPcmRlckdvb2RzLmpzIl0sIm5hbWVzIjpbInciLCJ3aW5SdGlvIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsIkl0ZW1PcmRlckdvb2RzIiwicHJvcHMiLCJnb29kcyIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwiY29lcmNlIiwidmFsIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQVY7QUFDQSxJQUFNQyxVQUFVLGVBQUtDLGlCQUFMLEdBQXlCQyxXQUF6QixHQUF1Q0gsQ0FBdkQ7O0lBRXFCSSxjOzs7Ozs7Ozs7Ozs7OzswTUFDakJDLEssR0FBUTtBQUNKQyxtQkFBTztBQUNIQyxzQkFBTUMsTUFESDtBQUVIQyx5QkFBUyxJQUZOO0FBR0hDLHNCQUhHLGtCQUdLQyxHQUhMLEVBR1U7QUFDVEMsNEJBQVFDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCRixHQUE1QjtBQUNBLDJCQUFPQSxHQUFQO0FBQ0g7QUFORTtBQURILFM7Ozs7RUFEZ0MsZUFBS0csUzs7a0JBQTVCVixjIiwiZmlsZSI6Imxpc3RPcmRlckdvb2RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG5jb25zdCB3ID0gNzUwXHJcbmNvbnN0IHdpblJ0aW8gPSB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGggLyB3XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtT3JkZXJHb29kcyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICAgIGdvb2RzOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgY29lcmNlICh2YWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb2VyY2UgZ29vZHMnLCB2YWwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==