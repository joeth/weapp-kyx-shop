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
            inputFocused: false,
            inputKeyword: ''
        }, _this.events = {}, _this.watch = {}, _this.methods = {
            inputTyping: function inputTyping(e) {
                this.inputKeyword = e.detail.value;
            },
            formSubmit: function formSubmit() {
                console.log('formSubmit');
            },

            formReset: function formReset() {
                console.log('formReset');
                this.inputKeyword = '';
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ListClassify, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return ListClassify;
}(_wepy2.default.component);

exports.default = ListClassify;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaGJhci5qcyJdLCJuYW1lcyI6WyJ3Iiwid2luUnRpbyIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJMaXN0Q2xhc3NpZnkiLCJwcm9wcyIsInNraW4iLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsInN0eWxlIiwicm91dGUiLCJyZWRpZWN0IiwiQm9vbGVhbiIsIndpZHRoIiwiTnVtYmVyIiwiaGVpZ2h0IiwibWFyZ2luIiwicGFkZGluZyIsImtleXdvcmQiLCJkYXRhIiwiaW5wdXRGb2N1c2VkIiwiaW5wdXRLZXl3b3JkIiwiZXZlbnRzIiwid2F0Y2giLCJtZXRob2RzIiwiaW5wdXRUeXBpbmciLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJmb3JtU3VibWl0IiwiY29uc29sZSIsImxvZyIsImZvcm1SZXNldCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBVjtBQUNBLElBQU1DLFVBQVUsZUFBS0MsaUJBQUwsR0FBeUJDLFdBQXpCLEdBQXVDSCxDQUF2RDs7SUFFcUJJLFk7Ozs7Ozs7Ozs7Ozs7O3NNQUNqQkMsSyxHQUFRO0FBQ0pDLGtCQUFNO0FBQ0ZDLHNCQUFNQyxNQURKO0FBRUZDLHlCQUFTO0FBRlAsYUFERjtBQUtKQyxtQkFBTztBQUNISCxzQkFBTUMsTUFESDtBQUVIQyx5QkFBUztBQUZOLGFBTEg7QUFTSkUsbUJBQU87QUFDSEosc0JBQU1DLE1BREg7QUFFSEMseUJBQVM7QUFGTixhQVRIO0FBYUpHLHFCQUFTO0FBQ0xMLHNCQUFNTSxPQUREO0FBRUxKLHlCQUFTO0FBRkosYUFiTDtBQWlCSkssbUJBQU87QUFDSFAsc0JBQU0sQ0FBQ0MsTUFBRCxFQUFTTyxNQUFULENBREg7QUFFSE4seUJBQVM7QUFGTixhQWpCSDtBQXFCSk8sb0JBQVE7QUFDSlQsc0JBQU0sQ0FBQ0MsTUFBRCxFQUFTTyxNQUFULENBREY7QUFFSk4seUJBQVM7QUFGTCxhQXJCSjtBQXlCSjtBQUNBUSxvQkFBUTtBQUNKVixzQkFBTSxDQUFDQyxNQUFELEVBQVNPLE1BQVQsQ0FERjtBQUVKTix5QkFBUztBQUZMLGFBMUJKO0FBOEJKO0FBQ0FTLHFCQUFTO0FBQ0xYLHNCQUFNLENBQUNDLE1BQUQsRUFBU08sTUFBVCxDQUREO0FBRUxOLHlCQUFTO0FBRkosYUEvQkw7QUFtQ0pVLHFCQUFTO0FBQ0xaLHNCQUFNQyxNQUREO0FBRUxDLHlCQUFTO0FBRko7QUFuQ0wsUyxRQXlDUlcsSSxHQUFPO0FBQ0hDLDBCQUFjLEtBRFg7QUFFSEMsMEJBQWM7QUFGWCxTLFFBS1BDLE0sR0FBUyxFLFFBR1RDLEssR0FBUSxFLFFBR1JDLE8sR0FBVTtBQUNOQyx1QkFETSx1QkFDTUMsQ0FETixFQUNRO0FBQ1YscUJBQUtMLFlBQUwsR0FBb0JLLEVBQUVDLE1BQUYsQ0FBU0MsS0FBN0I7QUFDSCxhQUhLO0FBSU5DLHNCQUpNLHdCQUlNO0FBQ1JDLHdCQUFRQyxHQUFSLENBQVksWUFBWjtBQUNILGFBTks7O0FBT05DLHVCQUFXLHFCQUFXO0FBQ2xCRix3QkFBUUMsR0FBUixDQUFZLFdBQVo7QUFDQSxxQkFBS1YsWUFBTCxHQUFvQixFQUFwQjtBQUNIO0FBVkssUzs7Ozs7aUNBYUEsQ0FDVDs7OztFQW5FcUMsZUFBS1ksUzs7a0JBQTFCOUIsWSIsImZpbGUiOiJzZWFyY2hiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmNvbnN0IHcgPSA3NTBcclxuY29uc3Qgd2luUnRpbyA9IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCAvIHdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RDbGFzc2lmeSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICAgIHNraW46IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm91dGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVkaWVjdDoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lkdGg6IHtcclxuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuICAgICAgICAgICAgZGVmYXVsdDogNzUwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWlnaHQ6IHtcclxuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuICAgICAgICAgICAgZGVmYXVsdDogNjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v5aSW6KGl55m9XHJcbiAgICAgICAgbWFyZ2luOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v5YaF6KGl55m9XHJcbiAgICAgICAgcGFkZGluZzoge1xyXG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAyMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAga2V5d29yZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgaW5wdXRGb2N1c2VkOiBmYWxzZSxcclxuICAgICAgICBpbnB1dEtleXdvcmQ6ICcnXHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoID0ge1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgaW5wdXRUeXBpbmcoZSl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRLZXl3b3JkID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvcm1TdWJtaXQoKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Zvcm1TdWJtaXQnKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9ybVJlc2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Zvcm1SZXNldCcpXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRLZXl3b3JkID0gJydcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgIH1cclxufVxyXG5cclxuIl19