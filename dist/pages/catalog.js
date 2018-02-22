'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _listCatalog = require('./../components/list-catalog.js');

var _listCatalog2 = _interopRequireDefault(_listCatalog);

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
        }, _this.$repeat = {}, _this.$props = { "ListCatalog": { "xmlns:v-bind": "", "v-bind:datalist.once": "catalogList", "width": "550" } }, _this.$events = {}, _this.components = {
            Searchbar: _searchbar2.default,
            ListCatalog: _listCatalog2.default
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuanMiXSwibmFtZXMiOlsiQ2F0YWxvZyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJTZWFyY2hiYXIiLCJMaXN0Q2F0YWxvZyIsIm1peGlucyIsImRhdGEiLCJjYXRhbG9nTGlzdCIsImlkIiwibmFtZSIsImltYWdlIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozs0TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxlQUFjLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsd0JBQXVCLGFBQTFDLEVBQXdELFNBQVEsS0FBaEUsRUFBZixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNOQywwQ0FETTtBQUVOQztBQUZNLFMsUUFLVkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0hDLHlCQUFhLENBQ1QsRUFBQ0MsSUFBSSxDQUFMLEVBQVFDLE1BQU0sSUFBZCxFQUFvQkMsT0FBTyxpREFBM0IsRUFEUyxFQUVULEVBQUNGLElBQUksQ0FBTCxFQUFRQyxNQUFNLElBQWQsRUFBb0JDLE9BQU8saURBQTNCLEVBRlMsRUFHVCxFQUFDRixJQUFJLENBQUwsRUFBUUMsTUFBTSxLQUFkLEVBQXFCQyxPQUFPLGlEQUE1QixFQUhTLEVBSVQsRUFBQ0YsSUFBSSxDQUFMLEVBQVFDLE1BQU0sSUFBZCxFQUFvQkMsT0FBTyxpREFBM0IsRUFKUyxFQUtULEVBQUNGLElBQUksQ0FBTCxFQUFRQyxNQUFNLElBQWQsRUFBb0JDLE9BQU8saURBQTNCLEVBTFMsRUFNVCxFQUFDRixJQUFJLENBQUwsRUFBUUMsTUFBTSxLQUFkLEVBQXFCQyxPQUFPLGlEQUE1QixFQU5TO0FBRFYsUyxRQVdQQyxRLEdBQVc7QUFDUEMsZUFETyxpQkFDRDtBQUNGLHVCQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0g7QUFITSxTLFFBTVhDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOzs7OztpQ0FJQSxDQUVSOzs7O0VBMUNnQyxlQUFLQyxJOztrQkFBckJwQixPIiwiZmlsZSI6ImNhdGFsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IExpc3RDYXRhbG9nIGZyb20gJ0AvY29tcG9uZW50cy9saXN0LWNhdGFsb2cnXHJcbmltcG9ydCBTZWFyY2hiYXIgZnJvbSAnQC9jb21wb25lbnRzL3NlYXJjaGJhcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGFsb2cgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuqflk4HliIbnsbsnXHJcbiAgICB9XHJcblxyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIkxpc3RDYXRhbG9nXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpkYXRhbGlzdC5vbmNlXCI6XCJjYXRhbG9nTGlzdFwiLFwid2lkdGhcIjpcIjU1MFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgU2VhcmNoYmFyLFxyXG4gICAgICAgIExpc3RDYXRhbG9nLFxyXG4gICAgfVxyXG5cclxuICAgIG1peGlucyA9IFtdXHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBjYXRhbG9nTGlzdDogW1xyXG4gICAgICAgICAgICB7aWQ6IDEsIG5hbWU6ICfppbzojLYnLCBpbWFnZTogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDEvMzEvVXBuWFgucG5nJ30sXHJcbiAgICAgICAgICAgIHtpZDogMiwgbmFtZTogJ+egluiMticsIGltYWdlOiAnaHR0cHM6Ly90MS5waWNiLmNjL3VwbG9hZHMvMjAxOC8wMi8yMi9LR1FoRy5wbmcnfSxcclxuICAgICAgICAgICAge2lkOiAzLCBuYW1lOiAn5ZWG5Yqh6Iy2JywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAyLzIyL0tHWEpOLnBuZyd9LFxyXG4gICAgICAgICAgICB7aWQ6IDQsIG5hbWU6ICfmsrHojLYnLCBpbWFnZTogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDIvMjIvS0cwQksucG5nJ30sXHJcbiAgICAgICAgICAgIHtpZDogNSwgbmFtZTogJ+aVo+iMticsIGltYWdlOiAnaHR0cHM6Ly90MS5waWNiLmNjL3VwbG9hZHMvMjAxOC8wMi8yMi9LR2FMeS5wbmcnfSxcclxuICAgICAgICAgICAge2lkOiA2LCBuYW1lOiAn56S85ZOB6Iy2JywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAyLzIyL0tHTmVYLnBuZyd9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGVkID0ge1xyXG4gICAgICAgIG5vdygpIHtcclxuICAgICAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuIl19