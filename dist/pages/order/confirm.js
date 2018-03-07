'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _orderCommodity = require('./../../components/order-commodity.js');

var _orderCommodity2 = _interopRequireDefault(_orderCommodity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __DATA__ = {
    totalAmount: '1149.00',
    freightAmount: '0.00',
    actualAmount: '1149.00',
    message: '帮我包装得好看点',
    consignee: {
        id: 1,
        name: '张生',
        tel: '15817489898',
        area: '广东 广州市  天河区',
        address: '金穗路1号3401(广东星外星唱片)'
    },
    commodityList: [{
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
};

var OrderDetail = function (_wepy$page) {
    _inherits(OrderDetail, _wepy$page);

    function OrderDetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, OrderDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderDetail.__proto__ || Object.getPrototypeOf(OrderDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '订单详情',
            usingComponents: {
                'wxc-cc': '../../packages/@minui/wxc-cc/dist/index',
                'wxc-flex': '../../packages/@minui/wxc-flex/dist/index',
                'wxc-tab': '../../packages/@minui/wxc-tab/dist/index',
                'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/panel',
                'wxc-tab-label': '../../packages/@minui/wxc-tab/dist/label',
                'wxc-badge': '../../packages/@minui/wxc-badge/dist/index',
                'wxc-price': '../../packages/@minui/wxc-price/dist/index'
            }
        }, _this.$repeat = { "order": { "com": "cp-order-commodity", "props": "commodity" } }, _this.$props = { "cp-order-commodity": { "xmlns:v-bind": { "value": "", "for": "order.commodityList", "item": "commodity", "index": "index", "key": "cid" }, "v-bind:commodity.once": { "value": "commodity", "type": "item", "for": "order.commodityList", "item": "commodity", "index": "index", "key": "cid" }, "class": { "value": "order-confirm-commodity", "for": "order.commodityList", "item": "commodity", "index": "index", "key": "cid" } } }, _this.$events = {}, _this.components = {
            'cp-order-commodity': _orderCommodity2.default
        }, _this.mixins = [], _this.data = {
            order: __DATA__
        }, _this.computed = {}, _this.methods = {
            bindinput: function bindinput(e) {
                var type = e.currentTarget.dataset.type;

                var message = e.detail.value && e.detail.value.replace(/[\s\r\n]+/g, ' ') || '';
                this.order[type] = message;
            },
            formSubmit: function formSubmit(e) {
                console.log(e.detail.formId);
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(OrderDetail, [{
        key: 'onLoad',
        value: function onLoad(res) {
            console.log(res);
        }
    }]);

    return OrderDetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(OrderDetail , 'pages/order/confirm'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0uanMiXSwibmFtZXMiOlsiX19EQVRBX18iLCJ0b3RhbEFtb3VudCIsImZyZWlnaHRBbW91bnQiLCJhY3R1YWxBbW91bnQiLCJtZXNzYWdlIiwiY29uc2lnbmVlIiwiaWQiLCJuYW1lIiwidGVsIiwiYXJlYSIsImFkZHJlc3MiLCJjb21tb2RpdHlMaXN0IiwiY292ZXIiLCJ0aXRsZSIsInR5cGUiLCJwcmljZSIsImNvdW50IiwiT3JkZXJEZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibWl4aW5zIiwiZGF0YSIsIm9yZGVyIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiYmluZGlucHV0IiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZGV0YWlsIiwidmFsdWUiLCJyZXBsYWNlIiwiZm9ybVN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JtSWQiLCJldmVudHMiLCJyZXMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXO0FBQ2JDLGlCQUFhLFNBREE7QUFFYkMsbUJBQWUsTUFGRjtBQUdiQyxrQkFBYyxTQUhEO0FBSWJDLGFBQVMsVUFKSTtBQUtiQyxlQUFXO0FBQ1BDLFlBQUksQ0FERztBQUVQQyxjQUFNLElBRkM7QUFHUEMsYUFBSyxhQUhFO0FBSVBDLGNBQU0sYUFKQztBQUtQQyxpQkFBUztBQUxGLEtBTEU7QUFZYkMsbUJBQWUsQ0FDWDtBQUNJTCxZQUFJLENBRFI7QUFFSU0sZUFBTyxpREFGWDtBQUdJQyxlQUFPLE1BSFg7QUFJSUMsY0FBTSxJQUpWO0FBS0lDLGVBQU8sTUFMWDtBQU1JQyxlQUFPO0FBTlgsS0FEVyxFQVNYO0FBQ0lWLFlBQUksQ0FEUjtBQUVJTSxlQUFPLGlEQUZYO0FBR0lDLGVBQU8sTUFIWDtBQUlJQyxjQUFNLElBSlY7QUFLSUMsZUFBTyxNQUxYO0FBTUlDLGVBQU87QUFOWCxLQVRXO0FBWkYsQ0FBakI7O0lBZ0NxQkMsVzs7Ozs7Ozs7Ozs7Ozs7b01BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLDZCQUFpQjtBQUNiLDBCQUFVLHlDQURHO0FBRWIsNEJBQVksMkNBRkM7QUFHYiwyQkFBVywwQ0FIRTtBQUliLGlDQUFpQiwwQ0FKSjtBQUtiLGlDQUFpQiwwQ0FMSjtBQU1iLDZCQUFhLDRDQU5BO0FBT2IsNkJBQWE7QUFQQTtBQUZaLFMsUUFhVkMsTyxHQUFVLEVBQUMsU0FBUSxFQUFDLE9BQU0sb0JBQVAsRUFBNEIsU0FBUSxXQUFwQyxFQUFULEUsUUFDYkMsTSxHQUFTLEVBQUMsc0JBQXFCLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLHFCQUFsQixFQUF3QyxRQUFPLFdBQS9DLEVBQTJELFNBQVEsT0FBbkUsRUFBMkUsT0FBTSxLQUFqRixFQUFoQixFQUF3Ryx5QkFBd0IsRUFBQyxTQUFRLFdBQVQsRUFBcUIsUUFBTyxNQUE1QixFQUFtQyxPQUFNLHFCQUF6QyxFQUErRCxRQUFPLFdBQXRFLEVBQWtGLFNBQVEsT0FBMUYsRUFBa0csT0FBTSxLQUF4RyxFQUFoSSxFQUErTyxTQUFRLEVBQUMsU0FBUSx5QkFBVCxFQUFtQyxPQUFNLHFCQUF6QyxFQUErRCxRQUFPLFdBQXRFLEVBQWtGLFNBQVEsT0FBMUYsRUFBa0csT0FBTSxLQUF4RyxFQUF2UCxFQUF0QixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNOO0FBRE0sUyxRQUlWQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDSEMsbUJBQU8zQjtBQURKLFMsUUFJUDRCLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNOQyxxQkFETSxxQkFDSUMsQ0FESixFQUNNO0FBQUEsb0JBQ0FqQixJQURBLEdBQ1NpQixFQUFFQyxhQUFGLENBQWdCQyxPQUR6QixDQUNBbkIsSUFEQTs7QUFFUixvQkFBSVYsVUFBVTJCLEVBQUVHLE1BQUYsQ0FBU0MsS0FBVCxJQUFrQkosRUFBRUcsTUFBRixDQUFTQyxLQUFULENBQWVDLE9BQWYsQ0FBdUIsWUFBdkIsRUFBcUMsR0FBckMsQ0FBbEIsSUFBK0QsRUFBN0U7QUFDQSxxQkFBS1QsS0FBTCxDQUFXYixJQUFYLElBQW1CVixPQUFuQjtBQUNILGFBTEs7QUFPTmlDLHNCQVBNLHNCQU9LTixDQVBMLEVBT087QUFDVE8sd0JBQVFDLEdBQVIsQ0FBWVIsRUFBRUcsTUFBRixDQUFTTSxNQUFyQjtBQUNIO0FBVEssUyxRQVlWQyxNLEdBQVMsRTs7Ozs7K0JBSUZDLEcsRUFBSztBQUNSSixvQkFBUUMsR0FBUixDQUFZRyxHQUFaO0FBQ0g7Ozs7RUFoRG9DLGVBQUtDLEk7O2tCQUF6QjFCLFciLCJmaWxlIjoiY29uZmlybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IG9yZGVyQ29tbW9kaXR5IGZyb20gJ0AvY29tcG9uZW50cy9vcmRlci1jb21tb2RpdHknXG5cbmNvbnN0IF9fREFUQV9fID0ge1xuICAgIHRvdGFsQW1vdW50OiAnMTE0OS4wMCcsXG4gICAgZnJlaWdodEFtb3VudDogJzAuMDAnLFxuICAgIGFjdHVhbEFtb3VudDogJzExNDkuMDAnLFxuICAgIG1lc3NhZ2U6ICfluK7miJHljIXoo4Xlvpflpb3nnIvngrknLFxuICAgIGNvbnNpZ25lZToge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ+W8oOeUnycsXG4gICAgICAgIHRlbDogJzE1ODE3NDg5ODk4JyxcbiAgICAgICAgYXJlYTogJ+W5v+S4nCDlub/lt57luIIgIOWkqeays+WMuicsXG4gICAgICAgIGFkZHJlc3M6ICfph5HnqZfot68x5Y+3MzQwMSjlub/kuJzmmJ/lpJbmmJ/llLHniYcpJyxcbiAgICB9LFxuICAgIGNvbW1vZGl0eUxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBjb3ZlcjogJ2h0dHBzOi8vdDEucGljYi5jYy91cGxvYWRzLzIwMTgvMDIvMjIvS0dRaEcucG5nJyxcbiAgICAgICAgICAgIHRpdGxlOiAn5LqR5LmL5LiD5ZGzJyxcbiAgICAgICAgICAgIHR5cGU6ICfnhp/ojLYnLFxuICAgICAgICAgICAgcHJpY2U6IDEwMC4wMCxcbiAgICAgICAgICAgIGNvdW50OiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgY292ZXI6ICdodHRwczovL3QxLnBpY2IuY2MvdXBsb2Fkcy8yMDE4LzAyLzIyL0tHUWhHLnBuZycsXG4gICAgICAgICAgICB0aXRsZTogJ+S6keS5i+S4g+WRsycsXG4gICAgICAgICAgICB0eXBlOiAn54af6Iy2JyxcbiAgICAgICAgICAgIHByaWNlOiAxMDAuMDAsXG4gICAgICAgICAgICBjb3VudDogMVxuICAgICAgICB9XG4gICAgXVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckRldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6i5Y2V6K+m5oOFJyxcbiAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnd3hjLWNjJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtY2MvZGlzdC9pbmRleCcsXG4gICAgICAgICAgICAnd3hjLWZsZXgnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1mbGV4L2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy10YWInOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9pbmRleCcsXG4gICAgICAgICAgICAnd3hjLXRhYi1wYW5lbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L3BhbmVsJyxcbiAgICAgICAgICAgICd3eGMtdGFiLWxhYmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvbGFiZWwnLFxuICAgICAgICAgICAgJ3d4Yy1iYWRnZSc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWJhZGdlL2Rpc3QvaW5kZXgnLFxuICAgICAgICAgICAgJ3d4Yy1wcmljZSc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXByaWNlL2Rpc3QvaW5kZXgnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7XCJvcmRlclwiOntcImNvbVwiOlwiY3Atb3JkZXItY29tbW9kaXR5XCIsXCJwcm9wc1wiOlwiY29tbW9kaXR5XCJ9fTtcclxuJHByb3BzID0ge1wiY3Atb3JkZXItY29tbW9kaXR5XCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJvcmRlci5jb21tb2RpdHlMaXN0XCIsXCJpdGVtXCI6XCJjb21tb2RpdHlcIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJjaWRcIn0sXCJ2LWJpbmQ6Y29tbW9kaXR5Lm9uY2VcIjp7XCJ2YWx1ZVwiOlwiY29tbW9kaXR5XCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcIm9yZGVyLmNvbW1vZGl0eUxpc3RcIixcIml0ZW1cIjpcImNvbW1vZGl0eVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImNpZFwifSxcImNsYXNzXCI6e1widmFsdWVcIjpcIm9yZGVyLWNvbmZpcm0tY29tbW9kaXR5XCIsXCJmb3JcIjpcIm9yZGVyLmNvbW1vZGl0eUxpc3RcIixcIml0ZW1cIjpcImNvbW1vZGl0eVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImNpZFwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAnY3Atb3JkZXItY29tbW9kaXR5Jzogb3JkZXJDb21tb2RpdHlcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgICAgb3JkZXI6IF9fREFUQV9fXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgYmluZGlucHV0KGUpe1xuICAgICAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gZS5kZXRhaWwudmFsdWUgJiYgZS5kZXRhaWwudmFsdWUucmVwbGFjZSgvW1xcc1xcclxcbl0rL2csICcgJykgfHwgJyc7XG4gICAgICAgICAgICB0aGlzLm9yZGVyW3R5cGVdID0gbWVzc2FnZVxuICAgICAgICB9LFxuXG4gICAgICAgIGZvcm1TdWJtaXQoZSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC5mb3JtSWQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICB9XG59XG5cbiJdfQ==