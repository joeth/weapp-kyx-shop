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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaGJhci5qcyJdLCJuYW1lcyI6WyJ3Iiwid2luUnRpbyIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJMaXN0Q2xhc3NpZnkiLCJwcm9wcyIsInNraW4iLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsInN0eWxlIiwicm91dGUiLCJyZWRpZWN0IiwiQm9vbGVhbiIsIndpZHRoIiwiTnVtYmVyIiwiaGVpZ2h0IiwibWFyZ2luIiwicGFkZGluZyIsImtleXdvcmQiLCJkYXRhIiwiaW5wdXRGb2N1c2VkIiwiaW5wdXRLZXl3b3JkIiwiZXZlbnRzIiwid2F0Y2giLCJtZXRob2RzIiwiaW5wdXRUeXBpbmciLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJmb3JtU3VibWl0IiwiY29uc29sZSIsImxvZyIsImZvcm1SZXNldCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBVjtBQUNBLElBQU1DLFVBQVUsZUFBS0MsaUJBQUwsR0FBeUJDLFdBQXpCLEdBQXVDSCxDQUF2RDs7SUFFcUJJLFk7Ozs7Ozs7Ozs7Ozs7O3NNQUNqQkMsSyxHQUFRO0FBQ0pDLGtCQUFNO0FBQ0ZDLHNCQUFNQyxNQURKO0FBRUZDLHlCQUFTO0FBRlAsYUFERjtBQUtKQyxtQkFBTztBQUNISCxzQkFBTUMsTUFESDtBQUVIQyx5QkFBUztBQUZOLGFBTEg7QUFTSkUsbUJBQU87QUFDSEosc0JBQU1DLE1BREg7QUFFSEMseUJBQVM7QUFGTixhQVRIO0FBYUpHLHFCQUFTO0FBQ0xMLHNCQUFNTSxPQUREO0FBRUxKLHlCQUFTO0FBRkosYUFiTDtBQWlCSkssbUJBQU87QUFDSFAsc0JBQU0sQ0FBQ0MsTUFBRCxFQUFTTyxNQUFULENBREg7QUFFSE4seUJBQVM7QUFGTixhQWpCSDtBQXFCSk8sb0JBQVE7QUFDSlQsc0JBQU0sQ0FBQ0MsTUFBRCxFQUFTTyxNQUFULENBREY7QUFFSk4seUJBQVM7QUFGTCxhQXJCSjtBQXlCSjtBQUNBUSxvQkFBUTtBQUNKVixzQkFBTSxDQUFDQyxNQUFELEVBQVNPLE1BQVQsQ0FERjtBQUVKTix5QkFBUztBQUZMLGFBMUJKO0FBOEJKO0FBQ0FTLHFCQUFTO0FBQ0xYLHNCQUFNLENBQUNDLE1BQUQsRUFBU08sTUFBVCxDQUREO0FBRUxOLHlCQUFTO0FBRkosYUEvQkw7QUFtQ0pVLHFCQUFTO0FBQ0xaLHNCQUFNQyxNQUREO0FBRUxDLHlCQUFTO0FBRko7QUFuQ0wsUyxRQXlDUlcsSSxHQUFPO0FBQ0hDLDBCQUFjLEtBRFg7QUFFSEMsMEJBQWM7QUFGWCxTLFFBS1BDLE0sR0FBUyxFLFFBR1RDLEssR0FBUSxFLFFBR1JDLE8sR0FBVTtBQUNOQyx1QkFETSx1QkFDTUMsQ0FETixFQUNRO0FBQ1YscUJBQUtMLFlBQUwsR0FBb0JLLEVBQUVDLE1BQUYsQ0FBU0MsS0FBN0I7QUFDSCxhQUhLO0FBSU5DLHNCQUpNLHdCQUlNO0FBQ1JDLHdCQUFRQyxHQUFSLENBQVksWUFBWjtBQUNILGFBTks7O0FBT05DLHVCQUFXLHFCQUFXO0FBQ2xCRix3QkFBUUMsR0FBUixDQUFZLFdBQVo7QUFDQSxxQkFBS1YsWUFBTCxHQUFvQixFQUFwQjtBQUNIO0FBVkssUzs7Ozs7aUNBYUEsQ0FDVDs7OztFQW5FcUMsZUFBS1ksUzs7a0JBQTFCOUIsWSIsImZpbGUiOiJzZWFyY2hiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmNvbnN0IHcgPSA3NTBcbmNvbnN0IHdpblJ0aW8gPSB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGggLyB3XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RDbGFzc2lmeSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgICAgc2tpbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHJvdXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICByZWRpZWN0OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgd2lkdGg6IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgICAgICBkZWZhdWx0OiA3NTBcbiAgICAgICAgfSxcbiAgICAgICAgaGVpZ2h0OiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgZGVmYXVsdDogNjRcbiAgICAgICAgfSxcbiAgICAgICAgLy/lpJbooaXnmb1cbiAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICB9LFxuICAgICAgICAvL+WGheihpeeZvVxuICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgZGVmYXVsdDogMjBcbiAgICAgICAgfSxcbiAgICAgICAga2V5d29yZDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICAgIGlucHV0Rm9jdXNlZDogZmFsc2UsXG4gICAgICAgIGlucHV0S2V5d29yZDogJydcbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgd2F0Y2ggPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgaW5wdXRUeXBpbmcoZSl7XG4gICAgICAgICAgICB0aGlzLmlucHV0S2V5d29yZCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1TdWJtaXQoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmb3JtU3VibWl0JylcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybVJlc2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmb3JtUmVzZXQnKVxuICAgICAgICAgICAgdGhpcy5pbnB1dEtleXdvcmQgPSAnJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkICgpIHtcbiAgICB9XG59XG5cbiJdfQ==