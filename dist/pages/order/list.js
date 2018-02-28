'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _colors = require('./../../mixins/colors.js');

var _colors2 = _interopRequireDefault(_colors);

var _itemOrder = require('./../../components/item-order.js');

var _itemOrder2 = _interopRequireDefault(_itemOrder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ORDER_LIST__ = [{
    id: 1,
    code: 'E20180102112200',
    status: 1,
    payStatus: 1,
    pirce: 200.00,
    freight: 0.00,
    goods: [{
        id: 1,
        cover: 'https://t1.picb.cc/uploads/2018/02/22/KGQhG.png',
        title: '云之七味',
        type: '熟茶',
        price: 100.00,
        count: 1
    }, {
        id: 2,
        cover: 'https://t1.picb.cc/uploads/2018/02/22/KGQhG.png',
        title: '云之七味',
        type: '熟茶',
        price: 100.00,
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
        }, _this.$repeat = { "orderList": { "com": "ItemOrder", "props": "order" } }, _this.$props = { "ItemOrder": { "xmlns:v-bind": { "value": "", "for": "orderList", "item": "order", "index": "oindex", "key": "oid" }, "v-bind:order.once": { "value": "order", "type": "item", "for": "orderList", "item": "order", "index": "oindex", "key": "oid" } } }, _this.$events = {}, _this.components = {
            ItemOrder: _itemOrder2.default
        }, _this.mixins = [_colors2.default], _this.data = {
            activeKey: 0,
            orderTabs: [{ id: 0, title: '全部', badge: 0, content: '全部' }, { id: 1, title: '待付款', badge: 0, content: '待付款' }, { id: 2, title: '待发货', badge: 0, content: '待发货' }, { id: 3, title: '待收货', badge: 0, content: '待收货' }, { id: 4, title: '已完成', badge: 0, content: '已完成' }],
            orderList: __ORDER_LIST__
        }, _this.computed = {}, _this.methods = {
            onTabClick: function onTabClick(e) {
                var activeKey = this.activeKey;
                var id = e.currentTarget.dataset.id;


                if (id != activeKey) {
                    this.activeKey = id;
                    console.log('执行数据更新');
                }
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(OrderList, [{
        key: 'onLoad',
        value: function onLoad(option) {
            console.log(this);
            try {
                this.activeKey = Number(option.type);
            } catch (e) {}
        }
    }]);

    return OrderList;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(OrderList , 'pages/order/list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiX19PUkRFUl9MSVNUX18iLCJpZCIsImNvZGUiLCJzdGF0dXMiLCJwYXlTdGF0dXMiLCJwaXJjZSIsImZyZWlnaHQiLCJnb29kcyIsImNvdmVyIiwidGl0bGUiLCJ0eXBlIiwicHJpY2UiLCJjb3VudCIsIk9yZGVyTGlzdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJJdGVtT3JkZXIiLCJtaXhpbnMiLCJkYXRhIiwiYWN0aXZlS2V5Iiwib3JkZXJUYWJzIiwiYmFkZ2UiLCJjb250ZW50Iiwib3JkZXJMaXN0IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwib25UYWJDbGljayIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCJldmVudHMiLCJvcHRpb24iLCJOdW1iZXIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQixDQUFDO0FBQ3BCQyxRQUFJLENBRGdCO0FBRXBCQyxVQUFNLGlCQUZjO0FBR3BCQyxZQUFRLENBSFk7QUFJcEJDLGVBQVcsQ0FKUztBQUtwQkMsV0FBTyxNQUxhO0FBTXBCQyxhQUFTLElBTlc7QUFPcEJDLFdBQU8sQ0FDSDtBQUNJTixZQUFJLENBRFI7QUFFSU8sZUFBTyxpREFGWDtBQUdJQyxlQUFPLE1BSFg7QUFJSUMsY0FBTSxJQUpWO0FBS0lDLGVBQU8sTUFMWDtBQU1JQyxlQUFPO0FBTlgsS0FERyxFQVNIO0FBQ0lYLFlBQUksQ0FEUjtBQUVJTyxlQUFPLGlEQUZYO0FBR0lDLGVBQU8sTUFIWDtBQUlJQyxjQUFNLElBSlY7QUFLSUMsZUFBTyxNQUxYO0FBTUlDLGVBQU87QUFOWCxLQVRHO0FBUGEsQ0FBRCxDQUF2Qjs7SUEyQnFCQyxTOzs7Ozs7Ozs7Ozs7OztnTUFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsTUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsMEJBQVUseUNBREc7QUFFYiw0QkFBWSwyQ0FGQztBQUdiLDJCQUFXLDBDQUhFO0FBSWIsaUNBQWlCLDBDQUpKO0FBS2IsaUNBQWlCLDBDQUxKO0FBTWIsNkJBQWEsNENBTkE7QUFPYiw2QkFBYTtBQVBBO0FBRlosUyxRQWFWQyxPLEdBQVUsRUFBQyxhQUFZLEVBQUMsT0FBTSxXQUFQLEVBQW1CLFNBQVEsT0FBM0IsRUFBYixFLFFBQ2JDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sV0FBbEIsRUFBOEIsUUFBTyxPQUFyQyxFQUE2QyxTQUFRLFFBQXJELEVBQThELE9BQU0sS0FBcEUsRUFBaEIsRUFBMkYscUJBQW9CLEVBQUMsU0FBUSxPQUFULEVBQWlCLFFBQU8sTUFBeEIsRUFBK0IsT0FBTSxXQUFyQyxFQUFpRCxRQUFPLE9BQXhELEVBQWdFLFNBQVEsUUFBeEUsRUFBaUYsT0FBTSxLQUF2RixFQUEvRyxFQUFiLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ05DO0FBRE0sUyxRQUlWQyxNLEdBQVMsa0IsUUFFVEMsSSxHQUFPO0FBQ0hDLHVCQUFXLENBRFI7QUFFSEMsdUJBQVcsQ0FDUCxFQUFFeEIsSUFBSSxDQUFOLEVBQVNRLE9BQU8sSUFBaEIsRUFBc0JpQixPQUFPLENBQTdCLEVBQWdDQyxTQUFTLElBQXpDLEVBRE8sRUFFUCxFQUFFMUIsSUFBSSxDQUFOLEVBQVNRLE9BQU8sS0FBaEIsRUFBdUJpQixPQUFPLENBQTlCLEVBQWlDQyxTQUFTLEtBQTFDLEVBRk8sRUFHUCxFQUFFMUIsSUFBSSxDQUFOLEVBQVNRLE9BQU8sS0FBaEIsRUFBdUJpQixPQUFPLENBQTlCLEVBQWlDQyxTQUFTLEtBQTFDLEVBSE8sRUFJUCxFQUFFMUIsSUFBSSxDQUFOLEVBQVNRLE9BQU8sS0FBaEIsRUFBdUJpQixPQUFPLENBQTlCLEVBQWlDQyxTQUFTLEtBQTFDLEVBSk8sRUFLUCxFQUFFMUIsSUFBSSxDQUFOLEVBQVNRLE9BQU8sS0FBaEIsRUFBdUJpQixPQUFPLENBQTlCLEVBQWlDQyxTQUFTLEtBQTFDLEVBTE8sQ0FGUjtBQVNIQyx1QkFBVzVCO0FBVFIsUyxRQVlQNkIsUSxHQUFXLEUsUUFHWEMsTyxHQUFVO0FBQ05DLHNCQURNLHNCQUNLQyxDQURMLEVBQ087QUFDVCxvQkFBTVIsWUFBWSxLQUFLQSxTQUF2QjtBQURTLG9CQUVEdkIsRUFGQyxHQUVNK0IsRUFBRUMsYUFBRixDQUFnQkMsT0FGdEIsQ0FFRGpDLEVBRkM7OztBQUlULG9CQUFHQSxNQUFNdUIsU0FBVCxFQUFtQjtBQUNmLHlCQUFLQSxTQUFMLEdBQWlCdkIsRUFBakI7QUFDQWtDLDRCQUFRQyxHQUFSLENBQVksUUFBWjtBQUNIO0FBQ0o7QUFUSyxTLFFBWVZDLE0sR0FBUyxFOzs7OzsrQkFHRkMsTSxFQUFRO0FBQ1hILG9CQUFRQyxHQUFSLENBQVksSUFBWjtBQUNBLGdCQUFHO0FBQ0MscUJBQUtaLFNBQUwsR0FBaUJlLE9BQU9ELE9BQU81QixJQUFkLENBQWpCO0FBQ0gsYUFGRCxDQUVDLE9BQU1zQixDQUFOLEVBQVMsQ0FBRTtBQUNmOzs7O0VBMURrQyxlQUFLUSxJOztrQkFBdkIzQixTIiwiZmlsZSI6Imxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgY29sb3JzTWl4aW4gZnJvbSAnQC9taXhpbnMvY29sb3JzJ1xuaW1wb3J0IEl0ZW1PcmRlciBmcm9tICdAL2NvbXBvbmVudHMvaXRlbS1vcmRlcidcblxuY29uc3QgX19PUkRFUl9MSVNUX18gPSBbe1xuICAgIGlkOiAxLFxuICAgIGNvZGU6ICdFMjAxODAxMDIxMTIyMDAnLFxuICAgIHN0YXR1czogMSxcbiAgICBwYXlTdGF0dXM6IDEsXG4gICAgcGlyY2U6IDIwMC4wMCxcbiAgICBmcmVpZ2h0OiAwLjAwLFxuICAgIGdvb2RzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgY292ZXI6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAyLzIyL0tHUWhHLnBuZycsXG4gICAgICAgICAgICB0aXRsZTogJ+S6keS5i+S4g+WRsycsXG4gICAgICAgICAgICB0eXBlOiAn54af6Iy2JyxcbiAgICAgICAgICAgIHByaWNlOiAxMDAuMDAsXG4gICAgICAgICAgICBjb3VudDogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIGNvdmVyOiAnaHR0cHM6Ly90MS5waWNiLmNjL3VwbG9hZHMvMjAxOC8wMi8yMi9LR1FoRy5wbmcnLFxuICAgICAgICAgICAgdGl0bGU6ICfkupHkuYvkuIPlkbMnLFxuICAgICAgICAgICAgdHlwZTogJ+eGn+iMticsXG4gICAgICAgICAgICBwcmljZTogMTAwLjAwLFxuICAgICAgICAgICAgY291bnQ6IDFcbiAgICAgICAgfVxuICAgIF1cbn1dXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyTGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6i5Y2V5YiX6KGoJyxcbiAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnd3hjLWNjJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtY2MvZGlzdC9pbmRleCcsXG4gICAgICAgICAgICAnd3hjLWZsZXgnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1mbGV4L2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy10YWInOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9pbmRleCcsXG4gICAgICAgICAgICAnd3hjLXRhYi1wYW5lbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L3BhbmVsJyxcbiAgICAgICAgICAgICd3eGMtdGFiLWxhYmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvbGFiZWwnLFxuICAgICAgICAgICAgJ3d4Yy1iYWRnZSc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWJhZGdlL2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy1wcmljZSc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXByaWNlL2Rpc3QvaW5kZXgnLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge1wib3JkZXJMaXN0XCI6e1wiY29tXCI6XCJJdGVtT3JkZXJcIixcInByb3BzXCI6XCJvcmRlclwifX07XHJcbiRwcm9wcyA9IHtcIkl0ZW1PcmRlclwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwib3JkZXJMaXN0XCIsXCJpdGVtXCI6XCJvcmRlclwiLFwiaW5kZXhcIjpcIm9pbmRleFwiLFwia2V5XCI6XCJvaWRcIn0sXCJ2LWJpbmQ6b3JkZXIub25jZVwiOntcInZhbHVlXCI6XCJvcmRlclwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJvcmRlckxpc3RcIixcIml0ZW1cIjpcIm9yZGVyXCIsXCJpbmRleFwiOlwib2luZGV4XCIsXCJrZXlcIjpcIm9pZFwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICBJdGVtT3JkZXJcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbY29sb3JzTWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgICBhY3RpdmVLZXk6IDAsXG4gICAgICAgIG9yZGVyVGFiczogW1xuICAgICAgICAgICAgeyBpZDogMCwgdGl0bGU6ICflhajpg6gnLCBiYWRnZTogMCwgY29udGVudDogJ+WFqOmDqCcgfSxcbiAgICAgICAgICAgIHsgaWQ6IDEsIHRpdGxlOiAn5b6F5LuY5qy+JywgYmFkZ2U6IDAsIGNvbnRlbnQ6ICflvoXku5jmrL4nIH0sXG4gICAgICAgICAgICB7IGlkOiAyLCB0aXRsZTogJ+W+heWPkei0pycsIGJhZGdlOiAwLCBjb250ZW50OiAn5b6F5Y+R6LSnJyB9LFxuICAgICAgICAgICAgeyBpZDogMywgdGl0bGU6ICflvoXmlLbotKcnLCBiYWRnZTogMCwgY29udGVudDogJ+W+heaUtui0pycgfSxcbiAgICAgICAgICAgIHsgaWQ6IDQsIHRpdGxlOiAn5bey5a6M5oiQJywgYmFkZ2U6IDAsIGNvbnRlbnQ6ICflt7LlrozmiJAnIH1cbiAgICAgICAgXSxcbiAgICAgICAgb3JkZXJMaXN0OiBfX09SREVSX0xJU1RfX1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIG9uVGFiQ2xpY2soZSl7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVLZXkgPSB0aGlzLmFjdGl2ZUtleTtcbiAgICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuXG4gICAgICAgICAgICBpZihpZCAhPSBhY3RpdmVLZXkpe1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlS2V5ID0gaWQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJp+ihjOaVsOaNruabtOaWsCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZChvcHRpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcylcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVLZXkgPSBOdW1iZXIob3B0aW9uLnR5cGUpO1xuICAgICAgICB9Y2F0Y2goZSkge31cbiAgICB9XG59XG5cbiJdfQ==