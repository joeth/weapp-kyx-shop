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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tb3JkZXItZ29vZHMuanMiXSwibmFtZXMiOlsidyIsIndpblJ0aW8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwiSXRlbU9yZGVyR29vZHMiLCJwcm9wcyIsImdvb2RzIiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJjb2VyY2UiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBVjtBQUNBLElBQU1DLFVBQVUsZUFBS0MsaUJBQUwsR0FBeUJDLFdBQXpCLEdBQXVDSCxDQUF2RDs7SUFFcUJJLGM7Ozs7Ozs7Ozs7Ozs7OzBNQUNqQkMsSyxHQUFRO0FBQ0pDLG1CQUFPO0FBQ0hDLHNCQUFNQyxNQURIO0FBRUhDLHlCQUFTLElBRk47QUFHSEMsc0JBSEcsa0JBR0tDLEdBSEwsRUFHVTtBQUNUQyw0QkFBUUMsR0FBUixDQUFZLGNBQVosRUFBNEJGLEdBQTVCO0FBQ0EsMkJBQU9BLEdBQVA7QUFDSDtBQU5FO0FBREgsUzs7OztFQURnQyxlQUFLRyxTOztrQkFBNUJWLGMiLCJmaWxlIjoiaXRlbS1vcmRlci1nb29kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuY29uc3QgdyA9IDc1MFxuY29uc3Qgd2luUnRpbyA9IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCAvIHdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbU9yZGVyR29vZHMgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICAgIGdvb2RzOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgY29lcmNlICh2YWwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29lcmNlIGdvb2RzJywgdmFsKVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19