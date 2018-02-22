'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _listCatalog = require('./../../components/list-catalog.js');

var _listCatalog2 = _interopRequireDefault(_listCatalog);

var _searchbar = require('./../../components/searchbar.js');

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
        }, _this.$repeat = {}, _this.$props = { "ListCatalog": { "xmlns:v-bind": "", "v-bind:datalist.once": "catalogList", "width": "550" } }, _this.$events = {}, _this.components = {
            Searchbar: _searchbar2.default,
            ListCatalog: _listCatalog2.default
        }, _this.mixins = [], _this.data = {
            offsettop: 0,
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

exports.default = Catalog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNhdGFsb2ciLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU2VhcmNoYmFyIiwiTGlzdENhdGFsb2ciLCJtaXhpbnMiLCJkYXRhIiwib2Zmc2V0dG9wIiwiY2F0YWxvZ0xpc3QiLCJpZCIsIm5hbWUiLCJpbWFnZSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7NExBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsZUFBYyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHdCQUF1QixhQUExQyxFQUF3RCxTQUFRLEtBQWhFLEVBQWYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDTkMsMENBRE07QUFFTkM7QUFGTSxTLFFBS1ZDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNIQyx1QkFBVyxDQURSO0FBRUhDLHlCQUFhLENBQ1QsRUFBQ0MsSUFBSSxDQUFMLEVBQVFDLE1BQU0sSUFBZCxFQUFvQkMsT0FBTyxpREFBM0IsRUFEUyxFQUVULEVBQUNGLElBQUksQ0FBTCxFQUFRQyxNQUFNLElBQWQsRUFBb0JDLE9BQU8saURBQTNCLEVBRlMsRUFHVCxFQUFDRixJQUFJLENBQUwsRUFBUUMsTUFBTSxLQUFkLEVBQXFCQyxPQUFPLGlEQUE1QixFQUhTLEVBSVQsRUFBQ0YsSUFBSSxDQUFMLEVBQVFDLE1BQU0sSUFBZCxFQUFvQkMsT0FBTyxpREFBM0IsRUFKUyxFQUtULEVBQUNGLElBQUksQ0FBTCxFQUFRQyxNQUFNLElBQWQsRUFBb0JDLE9BQU8saURBQTNCLEVBTFMsRUFNVCxFQUFDRixJQUFJLENBQUwsRUFBUUMsTUFBTSxLQUFkLEVBQXFCQyxPQUFPLGlEQUE1QixFQU5TO0FBRlYsUyxRQVlQQyxRLEdBQVc7QUFDUEMsZUFETyxpQkFDRDtBQUNGLHVCQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0g7QUFITSxTLFFBTVhDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOzs7OztpQ0FJQSxDQUVSOzs7O0VBM0NnQyxlQUFLQyxJOztrQkFBckJyQixPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBMaXN0Q2F0YWxvZyBmcm9tICdAL2NvbXBvbmVudHMvbGlzdC1jYXRhbG9nJ1xyXG5pbXBvcnQgU2VhcmNoYmFyIGZyb20gJ0AvY29tcG9uZW50cy9zZWFyY2hiYXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRhbG9nIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Lqn5ZOB5YiG57G7J1xyXG4gICAgfVxyXG5cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJMaXN0Q2F0YWxvZ1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6ZGF0YWxpc3Qub25jZVwiOlwiY2F0YWxvZ0xpc3RcIixcIndpZHRoXCI6XCI1NTBcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgIFNlYXJjaGJhcixcclxuICAgICAgICBMaXN0Q2F0YWxvZyxcclxuICAgIH1cclxuXHJcbiAgICBtaXhpbnMgPSBbXVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgb2Zmc2V0dG9wOiAwLFxyXG4gICAgICAgIGNhdGFsb2dMaXN0OiBbXHJcbiAgICAgICAgICAgIHtpZDogMSwgbmFtZTogJ+mlvOiMticsIGltYWdlOiAnaHR0cHM6Ly90MS5waWNiLmNjL3VwbG9hZHMvMjAxOC8wMS8zMS9VcG5YWC5wbmcnfSxcclxuICAgICAgICAgICAge2lkOiAyLCBuYW1lOiAn56CW6Iy2JywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAyLzIyL0tHUWhHLnBuZyd9LFxyXG4gICAgICAgICAgICB7aWQ6IDMsIG5hbWU6ICfllYbliqHojLYnLCBpbWFnZTogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDIvMjIvS0dYSk4ucG5nJ30sXHJcbiAgICAgICAgICAgIHtpZDogNCwgbmFtZTogJ+ayseiMticsIGltYWdlOiAnaHR0cHM6Ly90MS5waWNiLmNjL3VwbG9hZHMvMjAxOC8wMi8yMi9LRzBCSy5wbmcnfSxcclxuICAgICAgICAgICAge2lkOiA1LCBuYW1lOiAn5pWj6Iy2JywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAyLzIyL0tHYUx5LnBuZyd9LFxyXG4gICAgICAgICAgICB7aWQ6IDYsIG5hbWU6ICfnpLzlk4HojLYnLCBpbWFnZTogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDIvMjIvS0dOZVgucG5nJ31cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgICAgbm93KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=