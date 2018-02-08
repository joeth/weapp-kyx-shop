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

var ListClassify = function (_wepy$component) {
    _inherits(ListClassify, _wepy$component);

    function ListClassify() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ListClassify);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListClassify.__proto__ || Object.getPrototypeOf(ListClassify)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            image: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            },
            skin: {
                type: String,
                default: ''
            },
            style: {
                type: String,
                default: ''
            },
            route: {
                type: String,
                default: ''
            },
            rediect: {
                type: Boolean,
                default: false
            },
            hoverClass: {
                type: String,
                default: ''
            },
            lazyLoad: {
                type: Boolean,
                default: false
            },
            width: {
                type: [String, Number],
                default: 750
            },
            //列数
            column: {
                type: [String, Number],
                default: 3
            },
            //外补白
            margin: {
                type: [String, Number],
                default: 15
            },
            //内补白
            padding: {
                type: [String, Number],
                default: 10
            },
            //图片比例
            ratio: {
                type: Array,
                default: [100, 100]
            },
            datalist: {
                type: [Array, Number],
                default: 0
            }
        }, _this.data = {
            itemWidth: w / 2,
            imageWidth: w / 2,
            imageHeight: w / 2
        }, _this.events = {}, _this.watch = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ListClassify, [{
        key: 'onLoad',
        value: function onLoad() {

            console.log(ratio);

            var _data = this.data,
                width = _data.width,
                column = _data.column,
                margin = _data.margin,
                padding = _data.padding,
                ratio = _data.ratio;

            var itemWidth = (width - column * margin) / column;
            var imageRatio = 1;
            try {
                imageRatio = ratio[1] / ratio[0];
                if (isNaN(imageRatio)) {
                    imageRatio = 1;
                }
            } catch (e) {}

            this.itemWidth = itemWidth - padding * 2;
            this.imageWidth = itemWidth - padding * 2;
            this.imageHeight = itemWidth * imageRatio - padding * 2;
        }
    }]);

    return ListClassify;
}(_wepy2.default.component);

exports.default = ListClassify;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtY2xhc3NpZnkuanMiXSwibmFtZXMiOlsidyIsIndpblJ0aW8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwiTGlzdENsYXNzaWZ5IiwicHJvcHMiLCJpbWFnZSIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwibmFtZSIsInNraW4iLCJzdHlsZSIsInJvdXRlIiwicmVkaWVjdCIsIkJvb2xlYW4iLCJob3ZlckNsYXNzIiwibGF6eUxvYWQiLCJ3aWR0aCIsIk51bWJlciIsImNvbHVtbiIsIm1hcmdpbiIsInBhZGRpbmciLCJyYXRpbyIsIkFycmF5IiwiZGF0YWxpc3QiLCJkYXRhIiwiaXRlbVdpZHRoIiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0IiwiZXZlbnRzIiwid2F0Y2giLCJtZXRob2RzIiwiY29uc29sZSIsImxvZyIsImltYWdlUmF0aW8iLCJpc05hTiIsImUiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQVY7QUFDQSxJQUFNQyxVQUFVLGVBQUtDLGlCQUFMLEdBQXlCQyxXQUF6QixHQUF1Q0gsQ0FBdkQ7O0lBRXFCSSxZOzs7Ozs7Ozs7Ozs7OztzTUFDakJDLEssR0FBUTtBQUNKQyxtQkFBTztBQUNIQyxzQkFBTUMsTUFESDtBQUVIQyx5QkFBUztBQUZOLGFBREg7QUFLSkMsa0JBQU07QUFDRkgsc0JBQU1DLE1BREo7QUFFRkMseUJBQVM7QUFGUCxhQUxGO0FBU0pFLGtCQUFNO0FBQ0ZKLHNCQUFNQyxNQURKO0FBRUZDLHlCQUFTO0FBRlAsYUFURjtBQWFKRyxtQkFBTztBQUNITCxzQkFBTUMsTUFESDtBQUVIQyx5QkFBUztBQUZOLGFBYkg7QUFpQkpJLG1CQUFPO0FBQ0hOLHNCQUFNQyxNQURIO0FBRUhDLHlCQUFTO0FBRk4sYUFqQkg7QUFxQkpLLHFCQUFTO0FBQ0xQLHNCQUFNUSxPQUREO0FBRUxOLHlCQUFTO0FBRkosYUFyQkw7QUF5QkpPLHdCQUFZO0FBQ1JULHNCQUFNQyxNQURFO0FBRVJDLHlCQUFTO0FBRkQsYUF6QlI7QUE2QkpRLHNCQUFVO0FBQ05WLHNCQUFNUSxPQURBO0FBRU5OLHlCQUFTO0FBRkgsYUE3Qk47QUFpQ0pTLG1CQUFPO0FBQ0hYLHNCQUFNLENBQUNDLE1BQUQsRUFBU1csTUFBVCxDQURIO0FBRUhWLHlCQUFTO0FBRk4sYUFqQ0g7QUFxQ0o7QUFDQVcsb0JBQVE7QUFDSmIsc0JBQU0sQ0FBQ0MsTUFBRCxFQUFTVyxNQUFULENBREY7QUFFSlYseUJBQVM7QUFGTCxhQXRDSjtBQTBDSjtBQUNBWSxvQkFBUTtBQUNKZCxzQkFBTSxDQUFDQyxNQUFELEVBQVNXLE1BQVQsQ0FERjtBQUVKVix5QkFBUztBQUZMLGFBM0NKO0FBK0NKO0FBQ0FhLHFCQUFTO0FBQ0xmLHNCQUFNLENBQUNDLE1BQUQsRUFBU1csTUFBVCxDQUREO0FBRUxWLHlCQUFTO0FBRkosYUFoREw7QUFvREo7QUFDQWMsbUJBQU87QUFDSGhCLHNCQUFNaUIsS0FESDtBQUVIZix5QkFBUyxDQUFDLEdBQUQsRUFBSyxHQUFMO0FBRk4sYUFyREg7QUF5REpnQixzQkFBVTtBQUNObEIsc0JBQU0sQ0FBQ2lCLEtBQUQsRUFBUUwsTUFBUixDQURBO0FBRU5WLHlCQUFTO0FBRkg7QUF6RE4sUyxRQStEUmlCLEksR0FBTztBQUNIQyx1QkFBVzNCLElBQUUsQ0FEVjtBQUVINEIsd0JBQVk1QixJQUFFLENBRlg7QUFHSDZCLHlCQUFhN0IsSUFBRTtBQUhaLFMsUUFNUDhCLE0sR0FBUyxFLFFBR1RDLEssR0FBUSxFLFFBR1JDLE8sR0FBVSxFOzs7OztpQ0FHQTs7QUFFTkMsb0JBQVFDLEdBQVIsQ0FBWVgsS0FBWjs7QUFGTSx3QkFJNEMsS0FBS0csSUFKakQ7QUFBQSxnQkFJRVIsS0FKRixTQUlFQSxLQUpGO0FBQUEsZ0JBSVNFLE1BSlQsU0FJU0EsTUFKVDtBQUFBLGdCQUlpQkMsTUFKakIsU0FJaUJBLE1BSmpCO0FBQUEsZ0JBSXlCQyxPQUp6QixTQUl5QkEsT0FKekI7QUFBQSxnQkFJa0NDLEtBSmxDLFNBSWtDQSxLQUpsQzs7QUFLTixnQkFBSUksWUFBWSxDQUFDVCxRQUFRRSxTQUFTQyxNQUFsQixJQUE0QkQsTUFBNUM7QUFDQSxnQkFBSWUsYUFBYSxDQUFqQjtBQUNBLGdCQUFHO0FBQ0NBLDZCQUFhWixNQUFNLENBQU4sSUFBV0EsTUFBTSxDQUFOLENBQXhCO0FBQ0Esb0JBQUdhLE1BQU1ELFVBQU4sQ0FBSCxFQUFxQjtBQUNqQkEsaUNBQWEsQ0FBYjtBQUNIO0FBQ0osYUFMRCxDQUtDLE9BQU1FLENBQU4sRUFBUSxDQUFFOztBQUVYLGlCQUFLVixTQUFMLEdBQWlCQSxZQUFZTCxVQUFRLENBQXJDO0FBQ0EsaUJBQUtNLFVBQUwsR0FBa0JELFlBQVlMLFVBQVEsQ0FBdEM7QUFDQSxpQkFBS08sV0FBTCxHQUFtQkYsWUFBWVEsVUFBWixHQUF5QmIsVUFBUSxDQUFwRDtBQUNIOzs7O0VBaEdxQyxlQUFLZ0IsUzs7a0JBQTFCbEMsWSIsImZpbGUiOiJsaXN0LWNsYXNzaWZ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5jb25zdCB3ID0gNzUwXG5jb25zdCB3aW5SdGlvID0gd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoIC8gd1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0Q2xhc3NpZnkgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICBza2luOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfSxcbiAgICAgICAgcm91dGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHJlZGllY3Q6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBob3ZlckNsYXNzOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICBsYXp5TG9hZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHdpZHRoOiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgZGVmYXVsdDogNzUwXG4gICAgICAgIH0sXG4gICAgICAgIC8v5YiX5pWwXG4gICAgICAgIGNvbHVtbjoge1xuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IDNcbiAgICAgICAgfSxcbiAgICAgICAgLy/lpJbooaXnmb1cbiAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgZGVmYXVsdDogMTVcbiAgICAgICAgfSxcbiAgICAgICAgLy/lhoXooaXnmb1cbiAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEwXG4gICAgICAgIH0sXG4gICAgICAgIC8v5Zu+54mH5q+U5L6LXG4gICAgICAgIHJhdGlvOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFsxMDAsMTAwXVxuICAgICAgICB9LFxuICAgICAgICBkYXRhbGlzdDoge1xuICAgICAgICAgICAgdHlwZTogW0FycmF5LCBOdW1iZXJdLFxuICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgICAgaXRlbVdpZHRoOiB3LzIsXG4gICAgICAgIGltYWdlV2lkdGg6IHcvMixcbiAgICAgICAgaW1hZ2VIZWlnaHQ6IHcvMixcbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgd2F0Y2ggPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJhdGlvKVxuXG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGNvbHVtbiwgbWFyZ2luLCBwYWRkaW5nLCByYXRpbyB9ID0gdGhpcy5kYXRhXG4gICAgICAgIGxldCBpdGVtV2lkdGggPSAod2lkdGggLSBjb2x1bW4gKiBtYXJnaW4pIC8gY29sdW1uXG4gICAgICAgIGxldCBpbWFnZVJhdGlvID0gMVxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBpbWFnZVJhdGlvID0gcmF0aW9bMV0gLyByYXRpb1swXVxuICAgICAgICAgICAgaWYoaXNOYU4oaW1hZ2VSYXRpbykpe1xuICAgICAgICAgICAgICAgIGltYWdlUmF0aW8gPSAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1jYXRjaChlKXt9XG5cbiAgICAgICAgdGhpcy5pdGVtV2lkdGggPSBpdGVtV2lkdGggLSBwYWRkaW5nKjJcbiAgICAgICAgdGhpcy5pbWFnZVdpZHRoID0gaXRlbVdpZHRoIC0gcGFkZGluZyoyXG4gICAgICAgIHRoaXMuaW1hZ2VIZWlnaHQgPSBpdGVtV2lkdGggKiBpbWFnZVJhdGlvIC0gcGFkZGluZyoyXG4gICAgfVxufVxuXG4iXX0=