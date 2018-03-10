'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _citys = require('./../utils/citys.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CityPicker = function (_wepy$component) {
    _inherits(CityPicker, _wepy$component);

    function CityPicker() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, CityPicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CityPicker.__proto__ || Object.getPrototypeOf(CityPicker)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            citys: {
                type: String,
                default: ''
            }
        }, _this.data = {}, _this.events = {}, _this.watch = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CityPicker, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return CityPicker;
}(_wepy2.default.component);

exports.default = CityPicker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2tlci1jaXR5cy5qcyJdLCJuYW1lcyI6WyJDaXR5UGlja2VyIiwicHJvcHMiLCJjaXR5cyIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwiZGF0YSIsImV2ZW50cyIsIndhdGNoIiwibWV0aG9kcyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7a01BQ2pCQyxLLEdBQVE7QUFDSkMsbUJBQU87QUFDSEMsc0JBQU1DLE1BREg7QUFFSEMseUJBQVM7QUFGTjtBQURILFMsUUFPUkMsSSxHQUFPLEUsUUFHUEMsTSxHQUFTLEUsUUFHVEMsSyxHQUFRLEUsUUFHUkMsTyxHQUFVLEU7Ozs7O2lDQUdBLENBQ1Q7Ozs7RUFyQm1DLGVBQUtDLFM7O2tCQUF4QlYsVSIsImZpbGUiOiJwaWNrZXItY2l0eXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBjaXR5SW5pdCB9IGZyb20gJ0AvdXRpbHMvY2l0eXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpdHlQaWNrZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICAgIGNpdHlzOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgd2F0Y2ggPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgIH1cbn1cblxuIl19