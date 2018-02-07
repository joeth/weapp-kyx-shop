'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var w = 750;
var winRtio = _wepy2.default.getSystemInfoSync().windowWidth / w;

var ListClassify = function (_wepy$component) {
    _inherits(ListClassify, _wepy$component);

    function ListClassify() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ListClassify);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListClassify.__proto__ || Object.getPrototypeOf(ListClassify)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            skin: {
                type: String,
                default: ''
            },
            style: {
                type: String,
                default: ''
            },
            route: {
                type: String,
                default: ''
            },
            rediect: {
                type: Boolean,
                default: false
            },
            width: {
                type: [String, Number],
                default: 750
            },
            height: {
                type: [String, Number],
                default: 64
            },
            //外补白
            margin: {
                type: [String, Number],
                default: 0
            },
            //内补白
            padding: {
                type: [String, Number],
                default: 20
            },
            keyword: {
                type: String,
                default: ''
            }
        }, _this.data = {
            inputShowed: false,
            inputKeyword: ''
        }, _this.events = {}, _this.watch = {}, _this.methods = {
            showInput: function showInput() {
                this.inputShowed = true;
            },
            hideInput: function hideInput() {
                this.inputKeyword = '';
                this.inputShowed = false;
            },
            clearInput: function clearInput() {
                this.inputKeyword = '';
            },
            inputTyping: function inputTyping(e) {
                this.inputKeyword = e.detail.value;
            },
            formSubmit: function formSubmit() {}
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ListClassify, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return ListClassify;
}(_wepy2.default.component);

exports.default = ListClassify;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1iYXIuanMiXSwibmFtZXMiOlsidyIsIndpblJ0aW8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwiTGlzdENsYXNzaWZ5IiwicHJvcHMiLCJza2luIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJzdHlsZSIsInJvdXRlIiwicmVkaWVjdCIsIkJvb2xlYW4iLCJ3aWR0aCIsIk51bWJlciIsImhlaWdodCIsIm1hcmdpbiIsInBhZGRpbmciLCJrZXl3b3JkIiwiZGF0YSIsImlucHV0U2hvd2VkIiwiaW5wdXRLZXl3b3JkIiwiZXZlbnRzIiwid2F0Y2giLCJtZXRob2RzIiwic2hvd0lucHV0IiwiaGlkZUlucHV0IiwiY2xlYXJJbnB1dCIsImlucHV0VHlwaW5nIiwiZSIsImRldGFpbCIsInZhbHVlIiwiZm9ybVN1Ym1pdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBVjtBQUNBLElBQU1DLFVBQVUsZUFBS0MsaUJBQUwsR0FBeUJDLFdBQXpCLEdBQXVDSCxDQUF2RDs7SUFFcUJJLFk7Ozs7Ozs7Ozs7Ozs7O3NNQUNqQkMsSyxHQUFRO0FBQ0pDLGtCQUFNO0FBQ0ZDLHNCQUFNQyxNQURKO0FBRUZDLHlCQUFTO0FBRlAsYUFERjtBQUtKQyxtQkFBTztBQUNISCxzQkFBTUMsTUFESDtBQUVIQyx5QkFBUztBQUZOLGFBTEg7QUFTSkUsbUJBQU87QUFDSEosc0JBQU1DLE1BREg7QUFFSEMseUJBQVM7QUFGTixhQVRIO0FBYUpHLHFCQUFTO0FBQ0xMLHNCQUFNTSxPQUREO0FBRUxKLHlCQUFTO0FBRkosYUFiTDtBQWlCSkssbUJBQU87QUFDSFAsc0JBQU0sQ0FBQ0MsTUFBRCxFQUFTTyxNQUFULENBREg7QUFFSE4seUJBQVM7QUFGTixhQWpCSDtBQXFCSk8sb0JBQVE7QUFDSlQsc0JBQU0sQ0FBQ0MsTUFBRCxFQUFTTyxNQUFULENBREY7QUFFSk4seUJBQVM7QUFGTCxhQXJCSjtBQXlCSjtBQUNBUSxvQkFBUTtBQUNKVixzQkFBTSxDQUFDQyxNQUFELEVBQVNPLE1BQVQsQ0FERjtBQUVKTix5QkFBUztBQUZMLGFBMUJKO0FBOEJKO0FBQ0FTLHFCQUFTO0FBQ0xYLHNCQUFNLENBQUNDLE1BQUQsRUFBU08sTUFBVCxDQUREO0FBRUxOLHlCQUFTO0FBRkosYUEvQkw7QUFtQ0pVLHFCQUFTO0FBQ0xaLHNCQUFNQyxNQUREO0FBRUxDLHlCQUFTO0FBRko7QUFuQ0wsUyxRQXlDUlcsSSxHQUFPO0FBQ0hDLHlCQUFhLEtBRFY7QUFFSEMsMEJBQWM7QUFGWCxTLFFBS1BDLE0sR0FBUyxFLFFBR1RDLEssR0FBUSxFLFFBR1JDLE8sR0FBVTtBQUNOQyxxQkFETSx1QkFDTztBQUNULHFCQUFLTCxXQUFMLEdBQW1CLElBQW5CO0FBQ0gsYUFISztBQUlOTSxxQkFKTSx1QkFJTztBQUNULHFCQUFLTCxZQUFMLEdBQW9CLEVBQXBCO0FBQ0EscUJBQUtELFdBQUwsR0FBbUIsS0FBbkI7QUFDSCxhQVBLO0FBUU5PLHNCQVJNLHdCQVFRO0FBQ1YscUJBQUtOLFlBQUwsR0FBb0IsRUFBcEI7QUFDSCxhQVZLO0FBV05PLHVCQVhNLHVCQVdPQyxDQVhQLEVBV1U7QUFDWixxQkFBS1IsWUFBTCxHQUFvQlEsRUFBRUMsTUFBRixDQUFTQyxLQUE3QjtBQUNILGFBYks7QUFjTkMsc0JBZE0sd0JBY00sQ0FFWDtBQWhCSyxTOzs7OztpQ0FtQkEsQ0FDVDs7OztFQXpFcUMsZUFBS0MsUzs7a0JBQTFCOUIsWSIsImZpbGUiOiJzZWFyY2gtYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG5jb25zdCB3ID0gNzUwXHJcbmNvbnN0IHdpblJ0aW8gPSB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGggLyB3XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0Q2xhc3NpZnkgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgICBza2luOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvdXRlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZGllY3Q6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpZHRoOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDc1MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVpZ2h0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDY0XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL+WkluihpeeZvVxyXG4gICAgICAgIG1hcmdpbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL+WGheihpeeZvVxyXG4gICAgICAgIHBhZGRpbmc6IHtcclxuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuICAgICAgICAgICAgZGVmYXVsdDogMjBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleXdvcmQ6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGlucHV0U2hvd2VkOiBmYWxzZSxcclxuICAgICAgICBpbnB1dEtleXdvcmQ6ICcnXHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoID0ge1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgc2hvd0lucHV0ICgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFNob3dlZCA9IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhpZGVJbnB1dCAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRLZXl3b3JkID0gJydcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFNob3dlZCA9IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGVhcklucHV0ICgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dEtleXdvcmQgPSAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5wdXRUeXBpbmcgKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dEtleXdvcmQgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9ybVN1Ym1pdCgpe1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgIH1cclxufVxyXG5cclxuIl19