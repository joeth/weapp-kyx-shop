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

var GroupItem = function (_wepy$component) {
    _inherits(GroupItem, _wepy$component);

    function GroupItem() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GroupItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GroupItem.__proto__ || Object.getPrototypeOf(GroupItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            gitem: {}
        }, _this.data = {}, _this.methods = {
            tap: function tap() {
                this.gitem.childname = 'Child Random(' + Math.random() + ')';
                console.log('Clicked Group ' + this.$parent.$index + '. Item ' + this.$index + ', ID is ' + this.gitem.childid);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return GroupItem;
}(_wepy2.default.component);

exports.default = GroupItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwaXRlbS5qcyJdLCJuYW1lcyI6WyJHcm91cEl0ZW0iLCJwcm9wcyIsImdpdGVtIiwiZGF0YSIsIm1ldGhvZHMiLCJ0YXAiLCJjaGlsZG5hbWUiLCJNYXRoIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsIiRwYXJlbnQiLCIkaW5kZXgiLCJjaGlsZGlkIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7Z01BQ2pCQyxLLEdBQVE7QUFDSkMsbUJBQU87QUFESCxTLFFBR1JDLEksR0FBTyxFLFFBQ1BDLE8sR0FBVTtBQUNOQyxlQURNLGlCQUNBO0FBQ0YscUJBQUtILEtBQUwsQ0FBV0ksU0FBWCxxQkFBdUNDLEtBQUtDLE1BQUwsRUFBdkM7QUFDQUMsd0JBQVFDLEdBQVIsb0JBQTZCLEtBQUtDLE9BQUwsQ0FBYUMsTUFBMUMsZUFBMEQsS0FBS0EsTUFBL0QsZ0JBQWdGLEtBQUtWLEtBQUwsQ0FBV1csT0FBM0Y7QUFDSDtBQUpLLFM7Ozs7RUFMeUIsZUFBS0MsUzs7a0JBQXZCZCxTIiwiZmlsZSI6Imdyb3VwaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdXBJdGVtIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgICAgZ2l0ZW06IHt9XHJcbiAgICB9XHJcbiAgICBkYXRhID0ge31cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgdGFwKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdpdGVtLmNoaWxkbmFtZSA9IGBDaGlsZCBSYW5kb20oJHtNYXRoLnJhbmRvbSgpfSlgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDbGlja2VkIEdyb3VwICR7dGhpcy4kcGFyZW50LiRpbmRleH0uIEl0ZW0gJHt0aGlzLiRpbmRleH0sIElEIGlzICR7dGhpcy5naXRlbS5jaGlsZGlkfWApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=