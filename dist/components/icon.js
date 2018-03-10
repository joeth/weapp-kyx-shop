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

var OrderListItem = function (_wepy$component) {
    _inherits(OrderListItem, _wepy$component);

    function OrderListItem() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, OrderListItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderListItem.__proto__ || Object.getPrototypeOf(OrderListItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            type: {
                type: String,
                default: ''
            },
            size: {
                type: String,
                default: ''
            },
            color: {
                type: String,
                default: ''
            },
            unit: {
                type: String,
                default: 'rpx'
            }
        }, _this.computed = {
            classes: function classes() {
                console.log(this.type);
                return 'icon icon-' + this.type;
            },
            styles: function styles() {
                var style = '';
                if (this.size) {
                    style += 'font-size:' + this.size + this.unit;
                }
                if (this.color) {
                    style += 'color:' + this.color;
                }
                return style;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(OrderListItem, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return OrderListItem;
}(_wepy2.default.component);

exports.default = OrderListItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb24uanMiXSwibmFtZXMiOlsiT3JkZXJMaXN0SXRlbSIsInByb3BzIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJzaXplIiwiY29sb3IiLCJ1bml0IiwiY29tcHV0ZWQiLCJjbGFzc2VzIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsInN0eWxlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs7Ozt3TUFFakJDLEssR0FBUTtBQUNKQyxrQkFBTTtBQUNGQSxzQkFBTUMsTUFESjtBQUVGQyx5QkFBUztBQUZQLGFBREY7QUFLSkMsa0JBQU07QUFDRkgsc0JBQU1DLE1BREo7QUFFRkMseUJBQVM7QUFGUCxhQUxGO0FBU0pFLG1CQUFPO0FBQ0hKLHNCQUFNQyxNQURIO0FBRUhDLHlCQUFTO0FBRk4sYUFUSDtBQWFKRyxrQkFBTTtBQUNGTCxzQkFBTUMsTUFESjtBQUVGQyx5QkFBUztBQUZQO0FBYkYsUyxRQW1CUkksUSxHQUFXO0FBQ1BDLG1CQURPLHFCQUNFO0FBQ0xDLHdCQUFRQyxHQUFSLENBQVksS0FBS1QsSUFBakI7QUFDQSxzQ0FBb0IsS0FBS0EsSUFBekI7QUFDSCxhQUpNO0FBS1BVLGtCQUxPLG9CQUtFO0FBQ0wsb0JBQUlDLFFBQVEsRUFBWjtBQUNBLG9CQUFHLEtBQUtSLElBQVIsRUFBYTtBQUNUUSw0Q0FBc0IsS0FBS1IsSUFBM0IsR0FBa0MsS0FBS0UsSUFBdkM7QUFDSDtBQUNELG9CQUFHLEtBQUtELEtBQVIsRUFBYztBQUNWTyx3Q0FBa0IsS0FBS1AsS0FBdkI7QUFDSDtBQUNELHVCQUFPTyxLQUFQO0FBQ0g7QUFkTSxTOzs7OztpQ0FpQkgsQ0FDUDs7OztFQXZDc0MsZUFBS0MsUzs7a0JBQTNCZCxhIiwiZmlsZSI6Imljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyTGlzdEl0ZW0gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG5cbiAgICBwcm9wcyA9IHtcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfSxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHVuaXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdycHgnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgY2xhc3Nlcygpe1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy50eXBlKVxuICAgICAgICAgICAgcmV0dXJuIGBpY29uIGljb24tJHt0aGlzLnR5cGV9YFxuICAgICAgICB9LFxuICAgICAgICBzdHlsZXMoKSB7XG4gICAgICAgICAgICBsZXQgc3R5bGUgPSAnJ1xuICAgICAgICAgICAgaWYodGhpcy5zaXplKXtcbiAgICAgICAgICAgICAgICBzdHlsZSArPSBgZm9udC1zaXplOiR7dGhpcy5zaXplfSR7dGhpcy51bml0fWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMuY29sb3Ipe1xuICAgICAgICAgICAgICAgIHN0eWxlICs9IGBjb2xvcjoke3RoaXMuY29sb3J9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKXtcbiAgICB9XG59XG5cbiJdfQ==