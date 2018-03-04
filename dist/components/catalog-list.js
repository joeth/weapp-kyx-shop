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

var CatalogList = function (_wepy$component) {
    _inherits(CatalogList, _wepy$component);

    function CatalogList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, CatalogList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CatalogList.__proto__ || Object.getPrototypeOf(CatalogList)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
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

    _createClass(CatalogList, [{
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

    return CatalogList;
}(_wepy2.default.component);

exports.default = CatalogList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2ctbGlzdC5qcyJdLCJuYW1lcyI6WyJ3Iiwid2luUnRpbyIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJDYXRhbG9nTGlzdCIsInByb3BzIiwiaW1hZ2UiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsIm5hbWUiLCJza2luIiwic3R5bGUiLCJyb3V0ZSIsInJlZGllY3QiLCJCb29sZWFuIiwiaG92ZXJDbGFzcyIsImxhenlMb2FkIiwid2lkdGgiLCJOdW1iZXIiLCJjb2x1bW4iLCJtYXJnaW4iLCJwYWRkaW5nIiwicmF0aW8iLCJBcnJheSIsImRhdGFsaXN0IiwiZGF0YSIsIml0ZW1XaWR0aCIsImltYWdlV2lkdGgiLCJpbWFnZUhlaWdodCIsImV2ZW50cyIsIndhdGNoIiwibWV0aG9kcyIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZVJhdGlvIiwiaXNOYU4iLCJlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFWO0FBQ0EsSUFBTUMsVUFBVSxlQUFLQyxpQkFBTCxHQUF5QkMsV0FBekIsR0FBdUNILENBQXZEOztJQUVxQkksVzs7Ozs7Ozs7Ozs7Ozs7b01BQ2pCQyxLLEdBQVE7QUFDSkMsbUJBQU87QUFDSEMsc0JBQU1DLE1BREg7QUFFSEMseUJBQVM7QUFGTixhQURIO0FBS0pDLGtCQUFNO0FBQ0ZILHNCQUFNQyxNQURKO0FBRUZDLHlCQUFTO0FBRlAsYUFMRjtBQVNKRSxrQkFBTTtBQUNGSixzQkFBTUMsTUFESjtBQUVGQyx5QkFBUztBQUZQLGFBVEY7QUFhSkcsbUJBQU87QUFDSEwsc0JBQU1DLE1BREg7QUFFSEMseUJBQVM7QUFGTixhQWJIO0FBaUJKSSxtQkFBTztBQUNITixzQkFBTUMsTUFESDtBQUVIQyx5QkFBUztBQUZOLGFBakJIO0FBcUJKSyxxQkFBUztBQUNMUCxzQkFBTVEsT0FERDtBQUVMTix5QkFBUztBQUZKLGFBckJMO0FBeUJKTyx3QkFBWTtBQUNSVCxzQkFBTUMsTUFERTtBQUVSQyx5QkFBUztBQUZELGFBekJSO0FBNkJKUSxzQkFBVTtBQUNOVixzQkFBTVEsT0FEQTtBQUVOTix5QkFBUztBQUZILGFBN0JOO0FBaUNKUyxtQkFBTztBQUNIWCxzQkFBTSxDQUFDQyxNQUFELEVBQVNXLE1BQVQsQ0FESDtBQUVIVix5QkFBUztBQUZOLGFBakNIO0FBcUNKO0FBQ0FXLG9CQUFRO0FBQ0piLHNCQUFNLENBQUNDLE1BQUQsRUFBU1csTUFBVCxDQURGO0FBRUpWLHlCQUFTO0FBRkwsYUF0Q0o7QUEwQ0o7QUFDQVksb0JBQVE7QUFDSmQsc0JBQU0sQ0FBQ0MsTUFBRCxFQUFTVyxNQUFULENBREY7QUFFSlYseUJBQVM7QUFGTCxhQTNDSjtBQStDSjtBQUNBYSxxQkFBUztBQUNMZixzQkFBTSxDQUFDQyxNQUFELEVBQVNXLE1BQVQsQ0FERDtBQUVMVix5QkFBUztBQUZKLGFBaERMO0FBb0RKO0FBQ0FjLG1CQUFPO0FBQ0hoQixzQkFBTWlCLEtBREg7QUFFSGYseUJBQVMsQ0FBQyxHQUFELEVBQUssR0FBTDtBQUZOLGFBckRIO0FBeURKZ0Isc0JBQVU7QUFDTmxCLHNCQUFNLENBQUNpQixLQUFELEVBQVFMLE1BQVIsQ0FEQTtBQUVOVix5QkFBUztBQUZIO0FBekROLFMsUUErRFJpQixJLEdBQU87QUFDSEMsdUJBQVczQixJQUFFLENBRFY7QUFFSDRCLHdCQUFZNUIsSUFBRSxDQUZYO0FBR0g2Qix5QkFBYTdCLElBQUU7QUFIWixTLFFBTVA4QixNLEdBQVMsRSxRQUdUQyxLLEdBQVEsRSxRQUdSQyxPLEdBQVUsRTs7Ozs7aUNBR0E7O0FBRU5DLG9CQUFRQyxHQUFSLENBQVlYLEtBQVo7O0FBRk0sd0JBSTRDLEtBQUtHLElBSmpEO0FBQUEsZ0JBSUVSLEtBSkYsU0FJRUEsS0FKRjtBQUFBLGdCQUlTRSxNQUpULFNBSVNBLE1BSlQ7QUFBQSxnQkFJaUJDLE1BSmpCLFNBSWlCQSxNQUpqQjtBQUFBLGdCQUl5QkMsT0FKekIsU0FJeUJBLE9BSnpCO0FBQUEsZ0JBSWtDQyxLQUpsQyxTQUlrQ0EsS0FKbEM7O0FBS04sZ0JBQUlJLFlBQVksQ0FBQ1QsUUFBUUUsU0FBU0MsTUFBbEIsSUFBNEJELE1BQTVDO0FBQ0EsZ0JBQUllLGFBQWEsQ0FBakI7QUFDQSxnQkFBRztBQUNDQSw2QkFBYVosTUFBTSxDQUFOLElBQVdBLE1BQU0sQ0FBTixDQUF4QjtBQUNBLG9CQUFHYSxNQUFNRCxVQUFOLENBQUgsRUFBcUI7QUFDakJBLGlDQUFhLENBQWI7QUFDSDtBQUNKLGFBTEQsQ0FLQyxPQUFNRSxDQUFOLEVBQVEsQ0FBRTs7QUFFWCxpQkFBS1YsU0FBTCxHQUFpQkEsWUFBWUwsVUFBUSxDQUFyQztBQUNBLGlCQUFLTSxVQUFMLEdBQWtCRCxZQUFZTCxVQUFRLENBQXRDO0FBQ0EsaUJBQUtPLFdBQUwsR0FBbUJGLFlBQVlRLFVBQVosR0FBeUJiLFVBQVEsQ0FBcEQ7QUFDSDs7OztFQWhHb0MsZUFBS2dCLFM7O2tCQUF6QmxDLFciLCJmaWxlIjoiY2F0YWxvZy1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5jb25zdCB3ID0gNzUwXG5jb25zdCB3aW5SdGlvID0gd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoIC8gd1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRhbG9nTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHNraW46IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICByb3V0ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfSxcbiAgICAgICAgcmVkaWVjdDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyQ2xhc3M6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGxhenlMb2FkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgd2lkdGg6IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgICAgICBkZWZhdWx0OiA3NTBcbiAgICAgICAgfSxcbiAgICAgICAgLy/liJfmlbBcbiAgICAgICAgY29sdW1uOiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgZGVmYXVsdDogM1xuICAgICAgICB9LFxuICAgICAgICAvL+WkluihpeeZvVxuICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgICAgICBkZWZhdWx0OiAxNVxuICAgICAgICB9LFxuICAgICAgICAvL+WGheihpeeZvVxuICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgZGVmYXVsdDogMTBcbiAgICAgICAgfSxcbiAgICAgICAgLy/lm77niYfmr5TkvotcbiAgICAgICAgcmF0aW86IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgZGVmYXVsdDogWzEwMCwxMDBdXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGFsaXN0OiB7XG4gICAgICAgICAgICB0eXBlOiBbQXJyYXksIE51bWJlcl0sXG4gICAgICAgICAgICBkZWZhdWx0OiAwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgICBpdGVtV2lkdGg6IHcvMixcbiAgICAgICAgaW1hZ2VXaWR0aDogdy8yLFxuICAgICAgICBpbWFnZUhlaWdodDogdy8yLFxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICB3YXRjaCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2cocmF0aW8pXG5cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgY29sdW1uLCBtYXJnaW4sIHBhZGRpbmcsIHJhdGlvIH0gPSB0aGlzLmRhdGFcbiAgICAgICAgbGV0IGl0ZW1XaWR0aCA9ICh3aWR0aCAtIGNvbHVtbiAqIG1hcmdpbikgLyBjb2x1bW5cbiAgICAgICAgbGV0IGltYWdlUmF0aW8gPSAxXG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGltYWdlUmF0aW8gPSByYXRpb1sxXSAvIHJhdGlvWzBdXG4gICAgICAgICAgICBpZihpc05hTihpbWFnZVJhdGlvKSl7XG4gICAgICAgICAgICAgICAgaW1hZ2VSYXRpbyA9IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWNhdGNoKGUpe31cblxuICAgICAgICB0aGlzLml0ZW1XaWR0aCA9IGl0ZW1XaWR0aCAtIHBhZGRpbmcqMlxuICAgICAgICB0aGlzLmltYWdlV2lkdGggPSBpdGVtV2lkdGggLSBwYWRkaW5nKjJcbiAgICAgICAgdGhpcy5pbWFnZUhlaWdodCA9IGl0ZW1XaWR0aCAqIGltYWdlUmF0aW8gLSBwYWRkaW5nKjJcbiAgICB9XG59XG5cbiJdfQ==