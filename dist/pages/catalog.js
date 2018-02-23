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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuanMiXSwibmFtZXMiOlsiQ2F0YWxvZyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJTZWFyY2hiYXIiLCJMaXN0Q2F0YWxvZyIsIm1peGlucyIsImRhdGEiLCJjYXRhbG9nTGlzdCIsImlkIiwibmFtZSIsImltYWdlIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozs0TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxlQUFjLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsd0JBQXVCLGFBQTFDLEVBQXdELFNBQVEsS0FBaEUsRUFBZixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNOQywwQ0FETTtBQUVOQztBQUZNLFMsUUFLVkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0hDLHlCQUFhLENBQ1QsRUFBQ0MsSUFBSSxDQUFMLEVBQVFDLE1BQU0sSUFBZCxFQUFvQkMsT0FBTyxpREFBM0IsRUFEUyxFQUVULEVBQUNGLElBQUksQ0FBTCxFQUFRQyxNQUFNLElBQWQsRUFBb0JDLE9BQU8saURBQTNCLEVBRlMsRUFHVCxFQUFDRixJQUFJLENBQUwsRUFBUUMsTUFBTSxLQUFkLEVBQXFCQyxPQUFPLGlEQUE1QixFQUhTLEVBSVQsRUFBQ0YsSUFBSSxDQUFMLEVBQVFDLE1BQU0sSUFBZCxFQUFvQkMsT0FBTyxpREFBM0IsRUFKUyxFQUtULEVBQUNGLElBQUksQ0FBTCxFQUFRQyxNQUFNLElBQWQsRUFBb0JDLE9BQU8saURBQTNCLEVBTFMsRUFNVCxFQUFDRixJQUFJLENBQUwsRUFBUUMsTUFBTSxLQUFkLEVBQXFCQyxPQUFPLGlEQUE1QixFQU5TO0FBRFYsUyxRQVdQQyxRLEdBQVc7QUFDUEMsZUFETyxpQkFDRDtBQUNGLHVCQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0g7QUFITSxTLFFBTVhDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOzs7OztpQ0FJQSxDQUVSOzs7O0VBMUNnQyxlQUFLQyxJOztrQkFBckJwQixPIiwiZmlsZSI6ImNhdGFsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgTGlzdENhdGFsb2cgZnJvbSAnQC9jb21wb25lbnRzL2xpc3QtY2F0YWxvZydcbmltcG9ydCBTZWFyY2hiYXIgZnJvbSAnQC9jb21wb25lbnRzL3NlYXJjaGJhcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Lqn5ZOB5YiG57G7J1xuICAgIH1cblxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJMaXN0Q2F0YWxvZ1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6ZGF0YWxpc3Qub25jZVwiOlwiY2F0YWxvZ0xpc3RcIixcIndpZHRoXCI6XCI1NTBcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICBTZWFyY2hiYXIsXG4gICAgICAgIExpc3RDYXRhbG9nLFxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgICBjYXRhbG9nTGlzdDogW1xuICAgICAgICAgICAge2lkOiAxLCBuYW1lOiAn6aW86Iy2JywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAxLzMxL1VwblhYLnBuZyd9LFxuICAgICAgICAgICAge2lkOiAyLCBuYW1lOiAn56CW6Iy2JywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAyLzIyL0tHUWhHLnBuZyd9LFxuICAgICAgICAgICAge2lkOiAzLCBuYW1lOiAn5ZWG5Yqh6Iy2JywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAyLzIyL0tHWEpOLnBuZyd9LFxuICAgICAgICAgICAge2lkOiA0LCBuYW1lOiAn5rKx6Iy2JywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAyLzIyL0tHMEJLLnBuZyd9LFxuICAgICAgICAgICAge2lkOiA1LCBuYW1lOiAn5pWj6Iy2JywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAyLzIyL0tHYUx5LnBuZyd9LFxuICAgICAgICAgICAge2lkOiA2LCBuYW1lOiAn56S85ZOB6Iy2JywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAyLzIyL0tHTmVYLnBuZyd9XG4gICAgICAgIF1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgbm93KCkge1xuICAgICAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuXG4gICAgfVxufVxuXG4iXX0=