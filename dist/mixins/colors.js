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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = colorsMixin.__proto__ || Object.getPrototypeOf(colorsMixin)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            colors: {
                backcolor: '#ddd4c1',
                forecolor: '#f6f1dd',
                maincolor: '#e9e0cc',
                border: '#b9ae8b',
                base: '#452713',
                primary: '#a91e11',
                success: '#e75607',
                warn: '#6b5021',
                invert: '#d6c5ac',
                gray: '#8c8174'
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return colorsMixin;
}(_wepy2.default.mixin);

exports.default = colorsMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9ycy5qcyJdLCJuYW1lcyI6WyJjb2xvcnNNaXhpbiIsImRhdGEiLCJjb2xvcnMiLCJiYWNrY29sb3IiLCJmb3JlY29sb3IiLCJtYWluY29sb3IiLCJib3JkZXIiLCJiYXNlIiwicHJpbWFyeSIsInN1Y2Nlc3MiLCJ3YXJuIiwiaW52ZXJ0IiwiZ3JheSIsIm1peGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7b01BQ2pCQyxJLEdBQU87QUFDSEMsb0JBQVE7QUFDSkMsMkJBQVcsU0FEUDtBQUVKQywyQkFBVyxTQUZQO0FBR0pDLDJCQUFXLFNBSFA7QUFJSkMsd0JBQVEsU0FKSjtBQUtKQyxzQkFBTSxTQUxGO0FBTUpDLHlCQUFTLFNBTkw7QUFPSkMseUJBQVMsU0FQTDtBQVFKQyxzQkFBTSxTQVJGO0FBU0pDLHdCQUFRLFNBVEo7QUFVSkMsc0JBQU07QUFWRjtBQURMLFM7Ozs7RUFEOEIsZUFBS0MsSzs7a0JBQXpCYixXIiwiZmlsZSI6ImNvbG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNvbG9yc01peGluIGV4dGVuZHMgd2VweS5taXhpbiB7XG4gICAgZGF0YSA9IHtcbiAgICAgICAgY29sb3JzOiB7XG4gICAgICAgICAgICBiYWNrY29sb3I6ICcjZGRkNGMxJyxcbiAgICAgICAgICAgIGZvcmVjb2xvcjogJyNmNmYxZGQnLFxuICAgICAgICAgICAgbWFpbmNvbG9yOiAnI2U5ZTBjYycsXG4gICAgICAgICAgICBib3JkZXI6ICcjYjlhZThiJyxcbiAgICAgICAgICAgIGJhc2U6ICcjNDUyNzEzJyxcbiAgICAgICAgICAgIHByaW1hcnk6ICcjYTkxZTExJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICcjZTc1NjA3JyxcbiAgICAgICAgICAgIHdhcm46ICcjNmI1MDIxJyxcbiAgICAgICAgICAgIGludmVydDogJyNkNmM1YWMnLFxuICAgICAgICAgICAgZ3JheTogJyM4YzgxNzQnXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=