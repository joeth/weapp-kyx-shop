'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _catalogList = require('./../components/catalog-list.js');

var _catalogList2 = _interopRequireDefault(_catalogList);

var _searchbar = require('./../components/searchbar.js');

var _searchbar2 = _interopRequireDefault(_searchbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Catalog = function (_wepy$page) {
    _inherits(Catalog, _wepy$page);

    function Catalog() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Catalog);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Catalog.__proto__ || Object.getPrototypeOf(Catalog)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '产品分类'
        }, _this.$repeat = {}, _this.$props = { "cp-catalog-list": { "xmlns:v-bind": "", "v-bind:datalist.once": "catalogList", "width": "550" } }, _this.$events = {}, _this.components = {
            searchbar: _searchbar2.default,
            'cp-catalog-list': _catalogList2.default
        }, _this.mixins = [], _this.data = {
            catalogList: [{ id: 1, name: '饼茶', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png' }, { id: 2, name: '砖茶', image: 'https://t1.picb.cc/uploads/2018/02/22/KGQhG.png' }, { id: 3, name: '商务茶', image: 'https://t1.picb.cc/uploads/2018/02/22/KGXJN.png' }, { id: 4, name: '沱茶', image: 'https://t1.picb.cc/uploads/2018/02/22/KG0BK.png' }, { id: 5, name: '散茶', image: 'https://t1.picb.cc/uploads/2018/02/22/KGaLy.png' }, { id: 6, name: '礼品茶', image: 'https://t1.picb.cc/uploads/2018/02/22/KGNeX.png' }]
        }, _this.computed = {
            now: function now() {
                return +new Date();
            }
        }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Catalog, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return Catalog;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Catalog , 'pages/catalog'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuanMiXSwibmFtZXMiOlsiQ2F0YWxvZyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJzZWFyY2hiYXIiLCJtaXhpbnMiLCJkYXRhIiwiY2F0YWxvZ0xpc3QiLCJpZCIsIm5hbWUiLCJpbWFnZSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7NExBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsbUJBQWtCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsd0JBQXVCLGFBQTFDLEVBQXdELFNBQVEsS0FBaEUsRUFBbkIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDTkMsMENBRE07QUFFTjtBQUZNLFMsUUFLVkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0hDLHlCQUFhLENBQ1QsRUFBQ0MsSUFBSSxDQUFMLEVBQVFDLE1BQU0sSUFBZCxFQUFvQkMsT0FBTyxpREFBM0IsRUFEUyxFQUVULEVBQUNGLElBQUksQ0FBTCxFQUFRQyxNQUFNLElBQWQsRUFBb0JDLE9BQU8saURBQTNCLEVBRlMsRUFHVCxFQUFDRixJQUFJLENBQUwsRUFBUUMsTUFBTSxLQUFkLEVBQXFCQyxPQUFPLGlEQUE1QixFQUhTLEVBSVQsRUFBQ0YsSUFBSSxDQUFMLEVBQVFDLE1BQU0sSUFBZCxFQUFvQkMsT0FBTyxpREFBM0IsRUFKUyxFQUtULEVBQUNGLElBQUksQ0FBTCxFQUFRQyxNQUFNLElBQWQsRUFBb0JDLE9BQU8saURBQTNCLEVBTFMsRUFNVCxFQUFDRixJQUFJLENBQUwsRUFBUUMsTUFBTSxLQUFkLEVBQXFCQyxPQUFPLGlEQUE1QixFQU5TO0FBRFYsUyxRQVdQQyxRLEdBQVc7QUFDUEMsZUFETyxpQkFDRDtBQUNGLHVCQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0g7QUFITSxTLFFBTVhDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOzs7OztpQ0FJQSxDQUVSOzs7O0VBMUNnQyxlQUFLQyxJOztrQkFBckJuQixPIiwiZmlsZSI6ImNhdGFsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgY2F0YWxvZ0xpc3QgZnJvbSAnQC9jb21wb25lbnRzL2NhdGFsb2ctbGlzdCdcbmltcG9ydCBzZWFyY2hiYXIgZnJvbSAnQC9jb21wb25lbnRzL3NlYXJjaGJhcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Lqn5ZOB5YiG57G7J1xuICAgIH1cblxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjcC1jYXRhbG9nLWxpc3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmRhdGFsaXN0Lm9uY2VcIjpcImNhdGFsb2dMaXN0XCIsXCJ3aWR0aFwiOlwiNTUwXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgc2VhcmNoYmFyLFxuICAgICAgICAnY3AtY2F0YWxvZy1saXN0JzogY2F0YWxvZ0xpc3QsXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICAgIGNhdGFsb2dMaXN0OiBbXG4gICAgICAgICAgICB7aWQ6IDEsIG5hbWU6ICfppbzojLYnLCBpbWFnZTogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDEvMzEvVXBuWFgucG5nJ30sXG4gICAgICAgICAgICB7aWQ6IDIsIG5hbWU6ICfnoJbojLYnLCBpbWFnZTogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDIvMjIvS0dRaEcucG5nJ30sXG4gICAgICAgICAgICB7aWQ6IDMsIG5hbWU6ICfllYbliqHojLYnLCBpbWFnZTogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDIvMjIvS0dYSk4ucG5nJ30sXG4gICAgICAgICAgICB7aWQ6IDQsIG5hbWU6ICfmsrHojLYnLCBpbWFnZTogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDIvMjIvS0cwQksucG5nJ30sXG4gICAgICAgICAgICB7aWQ6IDUsIG5hbWU6ICfmlaPojLYnLCBpbWFnZTogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDIvMjIvS0dhTHkucG5nJ30sXG4gICAgICAgICAgICB7aWQ6IDYsIG5hbWU6ICfnpLzlk4HojLYnLCBpbWFnZTogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDIvMjIvS0dOZVgucG5nJ31cbiAgICAgICAgXVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgICBub3coKSB7XG4gICAgICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG5cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG5cbiAgICB9XG59XG5cbiJdfQ==