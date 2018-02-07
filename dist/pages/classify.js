'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _listClassify = require('./../components/list-classify.js');

var _listClassify2 = _interopRequireDefault(_listClassify);

var _searchbar = require('./../components/searchbar.js');

var _searchbar2 = _interopRequireDefault(_searchbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Classify = function (_wepy$page) {
    _inherits(Classify, _wepy$page);

    function Classify() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Classify);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Classify.__proto__ || Object.getPrototypeOf(Classify)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '产品分类'
        }, _this.$repeat = {}, _this.$props = { "ListClassify": { "xmlns:v-bind": "", "v-bind:datalist.once": "listClassify", "width": "550" } }, _this.$events = {}, _this.components = {
            Searchbar: _searchbar2.default,
            ListClassify: _listClassify2.default
        }, _this.mixins = [], _this.data = {
            offsettop: 0,
            listClassify: [{ id: 1, name: '分类名1', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png' }, { id: 2, name: '分类名2', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png' }, { id: 1, name: '分类名2', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png' }, { id: 2, name: '分类名3', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png' }, { id: 1, name: '分类名4', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png' }, { id: 2, name: '分类名5', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png' }, { id: 1, name: '分类名6', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png' }, { id: 2, name: '分类名7', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png' }, { id: 1, name: '分类名8', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png' }, { id: 2, name: '分类名9', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png' }, { id: 1, name: '分类名10', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png' }, { id: 2, name: '分类名11', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png' }, { id: 1, name: '分类名12', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png' }, { id: 2, name: '分类名13', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png' }, { id: 1, name: '分类名14', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png' }, { id: 2, name: '分类名15', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png' }]
        }, _this.computed = {
            now: function now() {
                return +new Date();
            }
        }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Classify, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return Classify;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Classify , 'pages/classify'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5LmpzIl0sIm5hbWVzIjpbIkNsYXNzaWZ5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlNlYXJjaGJhciIsIkxpc3RDbGFzc2lmeSIsIm1peGlucyIsImRhdGEiLCJvZmZzZXR0b3AiLCJsaXN0Q2xhc3NpZnkiLCJpZCIsIm5hbWUiLCJpbWFnZSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7OExBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsZ0JBQWUsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix3QkFBdUIsY0FBMUMsRUFBeUQsU0FBUSxLQUFqRSxFQUFoQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNOQywwQ0FETTtBQUVOQztBQUZNLFMsUUFLVkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0hDLHVCQUFXLENBRFI7QUFFSEMsMEJBQWMsQ0FDVixFQUFDQyxJQUFJLENBQUwsRUFBUUMsTUFBTSxNQUFkLEVBQXNCQyxPQUFPLGlEQUE3QixFQURVLEVBRVYsRUFBQ0YsSUFBSSxDQUFMLEVBQVFDLE1BQU0sTUFBZCxFQUFzQkMsT0FBTyxpREFBN0IsRUFGVSxFQUdWLEVBQUNGLElBQUksQ0FBTCxFQUFRQyxNQUFNLE1BQWQsRUFBc0JDLE9BQU8saURBQTdCLEVBSFUsRUFJVixFQUFDRixJQUFJLENBQUwsRUFBUUMsTUFBTSxNQUFkLEVBQXNCQyxPQUFPLGlEQUE3QixFQUpVLEVBS1YsRUFBQ0YsSUFBSSxDQUFMLEVBQVFDLE1BQU0sTUFBZCxFQUFzQkMsT0FBTyxpREFBN0IsRUFMVSxFQU1WLEVBQUNGLElBQUksQ0FBTCxFQUFRQyxNQUFNLE1BQWQsRUFBc0JDLE9BQU8saURBQTdCLEVBTlUsRUFPVixFQUFDRixJQUFJLENBQUwsRUFBUUMsTUFBTSxNQUFkLEVBQXNCQyxPQUFPLGlEQUE3QixFQVBVLEVBUVYsRUFBQ0YsSUFBSSxDQUFMLEVBQVFDLE1BQU0sTUFBZCxFQUFzQkMsT0FBTyxpREFBN0IsRUFSVSxFQVNWLEVBQUNGLElBQUksQ0FBTCxFQUFRQyxNQUFNLE1BQWQsRUFBc0JDLE9BQU8saURBQTdCLEVBVFUsRUFVVixFQUFDRixJQUFJLENBQUwsRUFBUUMsTUFBTSxNQUFkLEVBQXNCQyxPQUFPLGlEQUE3QixFQVZVLEVBV1YsRUFBQ0YsSUFBSSxDQUFMLEVBQVFDLE1BQU0sT0FBZCxFQUF1QkMsT0FBTyxpREFBOUIsRUFYVSxFQVlWLEVBQUNGLElBQUksQ0FBTCxFQUFRQyxNQUFNLE9BQWQsRUFBdUJDLE9BQU8saURBQTlCLEVBWlUsRUFhVixFQUFDRixJQUFJLENBQUwsRUFBUUMsTUFBTSxPQUFkLEVBQXVCQyxPQUFPLGlEQUE5QixFQWJVLEVBY1YsRUFBQ0YsSUFBSSxDQUFMLEVBQVFDLE1BQU0sT0FBZCxFQUF1QkMsT0FBTyxpREFBOUIsRUFkVSxFQWVWLEVBQUNGLElBQUksQ0FBTCxFQUFRQyxNQUFNLE9BQWQsRUFBdUJDLE9BQU8saURBQTlCLEVBZlUsRUFnQlYsRUFBQ0YsSUFBSSxDQUFMLEVBQVFDLE1BQU0sT0FBZCxFQUF1QkMsT0FBTyxpREFBOUIsRUFoQlU7QUFGWCxTLFFBc0JQQyxRLEdBQVc7QUFDUEMsZUFETyxpQkFDRDtBQUNGLHVCQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0g7QUFITSxTLFFBTVhDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOzs7OztpQ0FJQSxDQUVSOzs7O0VBckRpQyxlQUFLQyxJOztrQkFBdEJyQixRIiwiZmlsZSI6ImNsYXNzaWZ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBMaXN0Q2xhc3NpZnkgZnJvbSAnQC9jb21wb25lbnRzL2xpc3QtY2xhc3NpZnknXHJcbmltcG9ydCBTZWFyY2hiYXIgZnJvbSAnQC9jb21wb25lbnRzL3NlYXJjaGJhcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsYXNzaWZ5IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Lqn5ZOB5YiG57G7J1xyXG4gICAgfVxyXG5cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJMaXN0Q2xhc3NpZnlcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmRhdGFsaXN0Lm9uY2VcIjpcImxpc3RDbGFzc2lmeVwiLFwid2lkdGhcIjpcIjU1MFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgU2VhcmNoYmFyLFxyXG4gICAgICAgIExpc3RDbGFzc2lmeSxcclxuICAgIH1cclxuXHJcbiAgICBtaXhpbnMgPSBbXVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgb2Zmc2V0dG9wOiAwLFxyXG4gICAgICAgIGxpc3RDbGFzc2lmeTogW1xyXG4gICAgICAgICAgICB7aWQ6IDEsIG5hbWU6ICfliIbnsbvlkI0xJywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAxLzMxL1VwblhYLnBuZyd9LFxyXG4gICAgICAgICAgICB7aWQ6IDIsIG5hbWU6ICfliIbnsbvlkI0yJywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAxLzMxL1VwblhYLnBuZyd9LFxyXG4gICAgICAgICAgICB7aWQ6IDEsIG5hbWU6ICfliIbnsbvlkI0yJywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAxLzMxL1VwblhYLnBuZyd9LFxyXG4gICAgICAgICAgICB7aWQ6IDIsIG5hbWU6ICfliIbnsbvlkI0zJywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAxLzMxL1VwblhYLnBuZyd9LFxyXG4gICAgICAgICAgICB7aWQ6IDEsIG5hbWU6ICfliIbnsbvlkI00JywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAxLzMxL1VwblhYLnBuZyd9LFxyXG4gICAgICAgICAgICB7aWQ6IDIsIG5hbWU6ICfliIbnsbvlkI01JywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAxLzMxL1VwblhYLnBuZyd9LFxyXG4gICAgICAgICAgICB7aWQ6IDEsIG5hbWU6ICfliIbnsbvlkI02JywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAxLzMxL1VwblhYLnBuZyd9LFxyXG4gICAgICAgICAgICB7aWQ6IDIsIG5hbWU6ICfliIbnsbvlkI03JywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAxLzMxL1VwblhYLnBuZyd9LFxyXG4gICAgICAgICAgICB7aWQ6IDEsIG5hbWU6ICfliIbnsbvlkI04JywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAxLzMxL1VwblhYLnBuZyd9LFxyXG4gICAgICAgICAgICB7aWQ6IDIsIG5hbWU6ICfliIbnsbvlkI05JywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAxLzMxL1VwblhYLnBuZyd9LFxyXG4gICAgICAgICAgICB7aWQ6IDEsIG5hbWU6ICfliIbnsbvlkI0xMCcsIGltYWdlOiAnaHR0cHM6Ly90MS5waWNiLmNjL3VwbG9hZHMvMjAxOC8wMS8zMS9VcG5YWC5wbmcnfSxcclxuICAgICAgICAgICAge2lkOiAyLCBuYW1lOiAn5YiG57G75ZCNMTEnLCBpbWFnZTogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDEvMzEvVXBuWFgucG5nJ30sXHJcbiAgICAgICAgICAgIHtpZDogMSwgbmFtZTogJ+WIhuexu+WQjTEyJywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAxLzMxL1VwblhYLnBuZyd9LFxyXG4gICAgICAgICAgICB7aWQ6IDIsIG5hbWU6ICfliIbnsbvlkI0xMycsIGltYWdlOiAnaHR0cHM6Ly90MS5waWNiLmNjL3VwbG9hZHMvMjAxOC8wMS8zMS9VcG5YWC5wbmcnfSxcclxuICAgICAgICAgICAge2lkOiAxLCBuYW1lOiAn5YiG57G75ZCNMTQnLCBpbWFnZTogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDEvMzEvVXBuWFgucG5nJ30sXHJcbiAgICAgICAgICAgIHtpZDogMiwgbmFtZTogJ+WIhuexu+WQjTE1JywgaW1hZ2U6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAxLzMxL1VwblhYLnBuZyd9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGVkID0ge1xyXG4gICAgICAgIG5vdygpIHtcclxuICAgICAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuIl19