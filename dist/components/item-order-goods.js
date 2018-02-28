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

var GOODS = {
    id: 1,
    cover: 'https://t1.picb.cc/uploads/2018/02/22/KGQhG.png',
    title: '云之七味',
    type: '熟茶',
    price: 100.00,
    count: 1
};

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
                default: {},
                coerce: function coerce(val) {
                    console.log(val);
                }
            }
        }, _this.data = {}, _this.events = {}, _this.watch = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ItemOrderGoods, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return ItemOrderGoods;
}(_wepy2.default.component);

exports.default = ItemOrderGoods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tb3JkZXItZ29vZHMuanMiXSwibmFtZXMiOlsidyIsIndpblJ0aW8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwiR09PRFMiLCJpZCIsImNvdmVyIiwidGl0bGUiLCJ0eXBlIiwicHJpY2UiLCJjb3VudCIsIkl0ZW1PcmRlckdvb2RzIiwicHJvcHMiLCJnb29kcyIsIk9iamVjdCIsImRlZmF1bHQiLCJjb2VyY2UiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImV2ZW50cyIsIndhdGNoIiwibWV0aG9kcyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBVjtBQUNBLElBQU1DLFVBQVUsZUFBS0MsaUJBQUwsR0FBeUJDLFdBQXpCLEdBQXVDSCxDQUF2RDs7QUFFQSxJQUFNSSxRQUFRO0FBQ1ZDLFFBQUksQ0FETTtBQUVWQyxXQUFPLGlEQUZHO0FBR1ZDLFdBQU8sTUFIRztBQUlWQyxVQUFNLElBSkk7QUFLVkMsV0FBTyxNQUxHO0FBTVZDLFdBQU87QUFORyxDQUFkOztJQVNxQkMsYzs7Ozs7Ozs7Ozs7Ozs7ME1BQ2pCQyxLLEdBQVE7QUFDSkMsbUJBQU87QUFDSEwsc0JBQU1NLE1BREg7QUFFSEMseUJBQVMsRUFGTjtBQUdIQyxzQkFIRyxrQkFHS0MsR0FITCxFQUdVO0FBQ1RDLDRCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDSDtBQUxFO0FBREgsUyxRQVVSRyxJLEdBQU8sRSxRQUdQQyxNLEdBQVMsRSxRQUdUQyxLLEdBQVEsRSxRQUdSQyxPLEdBQVUsRTs7Ozs7aUNBR0EsQ0FDVDs7OztFQXhCdUMsZUFBS0MsUzs7a0JBQTVCYixjIiwiZmlsZSI6Iml0ZW0tb3JkZXItZ29vZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmNvbnN0IHcgPSA3NTBcbmNvbnN0IHdpblJ0aW8gPSB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGggLyB3XG5cbmNvbnN0IEdPT0RTID0ge1xuICAgIGlkOiAxLFxuICAgIGNvdmVyOiAnaHR0cHM6Ly90MS5waWNiLmNjL3VwbG9hZHMvMjAxOC8wMi8yMi9LR1FoRy5wbmcnLFxuICAgIHRpdGxlOiAn5LqR5LmL5LiD5ZGzJyxcbiAgICB0eXBlOiAn54af6Iy2JyxcbiAgICBwcmljZTogMTAwLjAwLFxuICAgIGNvdW50OiAxXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1PcmRlckdvb2RzIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgICBnb29kczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDoge30sXG4gICAgICAgICAgICBjb2VyY2UgKHZhbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIHdhdGNoID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkICgpIHtcbiAgICB9XG59XG5cbiJdfQ==