'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _colors = require('./../../mixins/colors.js');

var _colors2 = _interopRequireDefault(_colors);

var _orderList = require('./../../components/order-list.js');

var _orderList2 = _interopRequireDefault(_orderList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ORDER_DATA__ = [{
    id: 1,
    code: 'E20180102112200',
    status: 1,
    payStatus: 1,
    freightAmount: '0.00',
    actualAmount: '200.00',
    isCommented: false,
    commodityList: [{
        id: 2,
        cover: 'https://t1.picb.cc/uploads/2018/02/22/KGQhG.png',
        title: '云之七味',
        type: '熟茶',
        price: '100.00',
        count: 1
    }]
}, {
    id: 2,
    code: 'E20180102112201',
    status: 2,
    payStatus: 1,
    freightAmount: '0.00',
    actualAmount: '200.00',
    isCommented: false,
    commodityList: [{
        id: 1,
        cover: 'https://t1.picb.cc/uploads/2018/02/22/KGQhG.png',
        title: '云之七味',
        type: '熟茶',
        price: '100.00',
        count: 1
    }, {
        id: 2,
        cover: 'https://t1.picb.cc/uploads/2018/02/22/KGQhG.png',
        title: '云之七味',
        type: '熟茶',
        price: '100.00',
        count: 1
    }]
}];

var OrderList = function (_wepy$page) {
    _inherits(OrderList, _wepy$page);

    function OrderList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, OrderList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderList.__proto__ || Object.getPrototypeOf(OrderList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '订单列表',
            usingComponents: {
                'wxc-cc': '../../packages/@minui/wxc-cc/dist/index',
                'wxc-flex': '../../packages/@minui/wxc-flex/dist/index',
                'wxc-tab': '../../packages/@minui/wxc-tab/dist/index',
                'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/panel',
                'wxc-tab-label': '../../packages/@minui/wxc-tab/dist/label',
                'wxc-badge': '../../packages/@minui/wxc-badge/dist/index',
                'wxc-price': '../../packages/@minui/wxc-price/dist/index'
            }
        }, _this.$repeat = {}, _this.$props = { "cp-order-list": { "xmlns:v-bind": "", "v-bind:datalist.once": "orderList" } }, _this.$events = {}, _this.components = {
            'cp-order-list': _orderList2.default
        }, _this.mixins = [_colors2.default], _this.data = {
            activeKey: 0,
            orderTabs: [{ id: 0, title: '全部', badge: 0, content: '全部' }, { id: 1, title: '待付款', badge: 0, content: '待付款' }, { id: 2, title: '待发货', badge: 0, content: '待发货' }, { id: 3, title: '待收货', badge: 0, content: '待收货' }, { id: 4, title: '已完成', badge: 0, content: '已完成' }],
            orderList: __ORDER_DATA__
        }, _this.computed = {}, _this.methods = {
            onTabClick: function onTabClick(e) {
                var activeKey = this.activeKey;
                var id = e.currentTarget.dataset.id;


                if (id != activeKey) {
                    this.activeKey = id;
                    this.orderList = __ORDER_DATA__;
                    console.log('执行数据更新');
                }
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(OrderList, [{
        key: 'onLoad',
        value: function onLoad(option) {
            try {
                this.activeKey = Number(option.type);
            } catch (e) {}
        }
    }]);

    return OrderList;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(OrderList , 'pages/order/list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiX19PUkRFUl9EQVRBX18iLCJpZCIsImNvZGUiLCJzdGF0dXMiLCJwYXlTdGF0dXMiLCJmcmVpZ2h0QW1vdW50IiwiYWN0dWFsQW1vdW50IiwiaXNDb21tZW50ZWQiLCJjb21tb2RpdHlMaXN0IiwiY292ZXIiLCJ0aXRsZSIsInR5cGUiLCJwcmljZSIsImNvdW50IiwiT3JkZXJMaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJhY3RpdmVLZXkiLCJvcmRlclRhYnMiLCJiYWRnZSIsImNvbnRlbnQiLCJvcmRlckxpc3QiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJvblRhYkNsaWNrIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsImV2ZW50cyIsIm9wdGlvbiIsIk51bWJlciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLENBQUM7QUFDcEJDLFFBQUksQ0FEZ0I7QUFFcEJDLFVBQU0saUJBRmM7QUFHcEJDLFlBQVEsQ0FIWTtBQUlwQkMsZUFBVyxDQUpTO0FBS3BCQyxtQkFBZSxNQUxLO0FBTXBCQyxrQkFBYyxRQU5NO0FBT3BCQyxpQkFBYSxLQVBPO0FBUXBCQyxtQkFBZSxDQUNYO0FBQ0lQLFlBQUksQ0FEUjtBQUVJUSxlQUFPLGlEQUZYO0FBR0lDLGVBQU8sTUFIWDtBQUlJQyxjQUFNLElBSlY7QUFLSUMsZUFBTyxRQUxYO0FBTUlDLGVBQU87QUFOWCxLQURXO0FBUkssQ0FBRCxFQWtCckI7QUFDRVosUUFBSSxDQUROO0FBRUVDLFVBQU0saUJBRlI7QUFHRUMsWUFBUSxDQUhWO0FBSUVDLGVBQVcsQ0FKYjtBQUtFQyxtQkFBZSxNQUxqQjtBQU1FQyxrQkFBYyxRQU5oQjtBQU9FQyxpQkFBYSxLQVBmO0FBUUVDLG1CQUFlLENBQ1g7QUFDSVAsWUFBSSxDQURSO0FBRUlRLGVBQU8saURBRlg7QUFHSUMsZUFBTyxNQUhYO0FBSUlDLGNBQU0sSUFKVjtBQUtJQyxlQUFPLFFBTFg7QUFNSUMsZUFBTztBQU5YLEtBRFcsRUFTWDtBQUNJWixZQUFJLENBRFI7QUFFSVEsZUFBTyxpREFGWDtBQUdJQyxlQUFPLE1BSFg7QUFJSUMsY0FBTSxJQUpWO0FBS0lDLGVBQU8sUUFMWDtBQU1JQyxlQUFPO0FBTlgsS0FUVztBQVJqQixDQWxCcUIsQ0FBdkI7O0lBOENxQkMsUzs7Ozs7Ozs7Ozs7Ozs7Z01BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLDZCQUFpQjtBQUNiLDBCQUFVLHlDQURHO0FBRWIsNEJBQVksMkNBRkM7QUFHYiwyQkFBVywwQ0FIRTtBQUliLGlDQUFpQiwwQ0FKSjtBQUtiLGlDQUFpQiwwQ0FMSjtBQU1iLDZCQUFhLDRDQU5BO0FBT2IsNkJBQWE7QUFQQTtBQUZaLFMsUUFhVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsaUJBQWdCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsd0JBQXVCLFdBQTFDLEVBQWpCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ047QUFETSxTLFFBSVZDLE0sR0FBUyxrQixRQUVUQyxJLEdBQU87QUFDSEMsdUJBQVcsQ0FEUjtBQUVIQyx1QkFBVyxDQUNQLEVBQUV4QixJQUFJLENBQU4sRUFBU1MsT0FBTyxJQUFoQixFQUFzQmdCLE9BQU8sQ0FBN0IsRUFBZ0NDLFNBQVMsSUFBekMsRUFETyxFQUVQLEVBQUUxQixJQUFJLENBQU4sRUFBU1MsT0FBTyxLQUFoQixFQUF1QmdCLE9BQU8sQ0FBOUIsRUFBaUNDLFNBQVMsS0FBMUMsRUFGTyxFQUdQLEVBQUUxQixJQUFJLENBQU4sRUFBU1MsT0FBTyxLQUFoQixFQUF1QmdCLE9BQU8sQ0FBOUIsRUFBaUNDLFNBQVMsS0FBMUMsRUFITyxFQUlQLEVBQUUxQixJQUFJLENBQU4sRUFBU1MsT0FBTyxLQUFoQixFQUF1QmdCLE9BQU8sQ0FBOUIsRUFBaUNDLFNBQVMsS0FBMUMsRUFKTyxFQUtQLEVBQUUxQixJQUFJLENBQU4sRUFBU1MsT0FBTyxLQUFoQixFQUF1QmdCLE9BQU8sQ0FBOUIsRUFBaUNDLFNBQVMsS0FBMUMsRUFMTyxDQUZSO0FBU0hDLHVCQUFXNUI7QUFUUixTLFFBWVA2QixRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDTkMsc0JBRE0sc0JBQ0tDLENBREwsRUFDTztBQUNULG9CQUFNUixZQUFZLEtBQUtBLFNBQXZCO0FBRFMsb0JBRUR2QixFQUZDLEdBRU0rQixFQUFFQyxhQUFGLENBQWdCQyxPQUZ0QixDQUVEakMsRUFGQzs7O0FBSVQsb0JBQUdBLE1BQU11QixTQUFULEVBQW1CO0FBQ2YseUJBQUtBLFNBQUwsR0FBaUJ2QixFQUFqQjtBQUNBLHlCQUFLMkIsU0FBTCxHQUFpQjVCLGNBQWpCO0FBQ0FtQyw0QkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDSDtBQUNKO0FBVkssUyxRQWFWQyxNLEdBQVMsRTs7Ozs7K0JBR0ZDLE0sRUFBUTtBQUNYLGdCQUFHO0FBQ0MscUJBQUtkLFNBQUwsR0FBaUJlLE9BQU9ELE9BQU8zQixJQUFkLENBQWpCO0FBQ0gsYUFGRCxDQUVDLE9BQU1xQixDQUFOLEVBQVMsQ0FBRTtBQUNmOzs7O0VBMURrQyxlQUFLUSxJOztrQkFBdkIxQixTIiwiZmlsZSI6Imxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgY29sb3JzTWl4aW4gZnJvbSAnQC9taXhpbnMvY29sb3JzJ1xuaW1wb3J0IG9yZGVyTGlzdCBmcm9tICdAL2NvbXBvbmVudHMvb3JkZXItbGlzdCdcblxuY29uc3QgX19PUkRFUl9EQVRBX18gPSBbe1xuICAgIGlkOiAxLFxuICAgIGNvZGU6ICdFMjAxODAxMDIxMTIyMDAnLFxuICAgIHN0YXR1czogMSxcbiAgICBwYXlTdGF0dXM6IDEsXG4gICAgZnJlaWdodEFtb3VudDogJzAuMDAnLFxuICAgIGFjdHVhbEFtb3VudDogJzIwMC4wMCcsXG4gICAgaXNDb21tZW50ZWQ6IGZhbHNlLFxuICAgIGNvbW1vZGl0eUxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBjb3ZlcjogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDIvMjIvS0dRaEcucG5nJyxcbiAgICAgICAgICAgIHRpdGxlOiAn5LqR5LmL5LiD5ZGzJyxcbiAgICAgICAgICAgIHR5cGU6ICfnhp/ojLYnLFxuICAgICAgICAgICAgcHJpY2U6ICcxMDAuMDAnLFxuICAgICAgICAgICAgY291bnQ6IDFcbiAgICAgICAgfVxuICAgIF1cbn0se1xuICAgIGlkOiAyLFxuICAgIGNvZGU6ICdFMjAxODAxMDIxMTIyMDEnLFxuICAgIHN0YXR1czogMixcbiAgICBwYXlTdGF0dXM6IDEsXG4gICAgZnJlaWdodEFtb3VudDogJzAuMDAnLFxuICAgIGFjdHVhbEFtb3VudDogJzIwMC4wMCcsXG4gICAgaXNDb21tZW50ZWQ6IGZhbHNlLFxuICAgIGNvbW1vZGl0eUxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBjb3ZlcjogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDIvMjIvS0dRaEcucG5nJyxcbiAgICAgICAgICAgIHRpdGxlOiAn5LqR5LmL5LiD5ZGzJyxcbiAgICAgICAgICAgIHR5cGU6ICfnhp/ojLYnLFxuICAgICAgICAgICAgcHJpY2U6ICcxMDAuMDAnLFxuICAgICAgICAgICAgY291bnQ6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBjb3ZlcjogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDIvMjIvS0dRaEcucG5nJyxcbiAgICAgICAgICAgIHRpdGxlOiAn5LqR5LmL5LiD5ZGzJyxcbiAgICAgICAgICAgIHR5cGU6ICfnhp/ojLYnLFxuICAgICAgICAgICAgcHJpY2U6ICcxMDAuMDAnLFxuICAgICAgICAgICAgY291bnQ6IDFcbiAgICAgICAgfVxuICAgIF1cbn1dXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyTGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6i5Y2V5YiX6KGoJyxcbiAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnd3hjLWNjJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtY2MvZGlzdC9pbmRleCcsXG4gICAgICAgICAgICAnd3hjLWZsZXgnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1mbGV4L2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy10YWInOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9pbmRleCcsXG4gICAgICAgICAgICAnd3hjLXRhYi1wYW5lbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L3BhbmVsJyxcbiAgICAgICAgICAgICd3eGMtdGFiLWxhYmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvbGFiZWwnLFxuICAgICAgICAgICAgJ3d4Yy1iYWRnZSc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWJhZGdlL2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy1wcmljZSc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXByaWNlL2Rpc3QvaW5kZXgnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiY3Atb3JkZXItbGlzdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6ZGF0YWxpc3Qub25jZVwiOlwib3JkZXJMaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgJ2NwLW9yZGVyLWxpc3QnOiBvcmRlckxpc3RcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbY29sb3JzTWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgICBhY3RpdmVLZXk6IDAsXG4gICAgICAgIG9yZGVyVGFiczogW1xuICAgICAgICAgICAgeyBpZDogMCwgdGl0bGU6ICflhajpg6gnLCBiYWRnZTogMCwgY29udGVudDogJ+WFqOmDqCcgfSxcbiAgICAgICAgICAgIHsgaWQ6IDEsIHRpdGxlOiAn5b6F5LuY5qy+JywgYmFkZ2U6IDAsIGNvbnRlbnQ6ICflvoXku5jmrL4nIH0sXG4gICAgICAgICAgICB7IGlkOiAyLCB0aXRsZTogJ+W+heWPkei0pycsIGJhZGdlOiAwLCBjb250ZW50OiAn5b6F5Y+R6LSnJyB9LFxuICAgICAgICAgICAgeyBpZDogMywgdGl0bGU6ICflvoXmlLbotKcnLCBiYWRnZTogMCwgY29udGVudDogJ+W+heaUtui0pycgfSxcbiAgICAgICAgICAgIHsgaWQ6IDQsIHRpdGxlOiAn5bey5a6M5oiQJywgYmFkZ2U6IDAsIGNvbnRlbnQ6ICflt7LlrozmiJAnIH1cbiAgICAgICAgXSxcbiAgICAgICAgb3JkZXJMaXN0OiBfX09SREVSX0RBVEFfX1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIG9uVGFiQ2xpY2soZSl7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVLZXkgPSB0aGlzLmFjdGl2ZUtleTtcbiAgICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuXG4gICAgICAgICAgICBpZihpZCAhPSBhY3RpdmVLZXkpe1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlS2V5ID0gaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlckxpc3QgPSBfX09SREVSX0RBVEFfXztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5omn6KGM5pWw5o2u5pu05pawJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKG9wdGlvbikge1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUtleSA9IE51bWJlcihvcHRpb24udHlwZSk7XG4gICAgICAgIH1jYXRjaChlKSB7fVxuICAgIH1cbn1cblxuIl19