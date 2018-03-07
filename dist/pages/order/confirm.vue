<style lang="less">
@import 'src/common/styles/config.less';
.order-confirm-amount,
.order-confirm-property,
.order-confirm-toolbar,
.order-confirm-consignee,
.order-confirm-commodity{
    padding: @margin;
    margin-top: @margin;
    background-color: @color-maincolor;
}
.order-confirm-consignee{
    display: block;
    margin-top: 0;
}
.order-consignee-side{
    display: block;
    .icon{
        font-size: 40rpx;
    }
    .icon-address{
        color: @color-primary;
    }
    .icon-arrow-right{
        font-size: 60rpx;
    }
}
.order-consignee-main{
    margin-left: @margin;
}
.order-consignee-name{
    margin-right: @margin;
}
.order-consignee-title{
    font-weight: 700;
    font-size: @font-size-large;
}
.order-consignee-address{
    margin-top: @margin/2;
}
.order-confirm-commodity{
    padding: 0;
    background-color: transparent;
    .cp-order-commodity{
        margin-top: 2rpx;
        background-color: @color-maincolor;
    }
}
.order-confirm-amount{
    .price{
        font-size: @font-size-bigger;
        color: @color-success;
    }
}
.order-confirm-property{
    margin-top: 2rpx;
    line-height: 1.8;
}
.order-confirm-toolbar{
    margin-top: 0;
    padding-bottom: @margin*2;
    display: flex;
}
</style>
<template>
    <view class="order-detail">
        <wxc-flex class="order-confirm-consignee">
            <wxc-cc class="order-consignee-side">
                <text class="icon icon-address"></text>
            </wxc-cc>
            <view class="order-consignee-main" wx:if="{{order.consignee.id}}">
                <view class="order-consignee-title">
                    <text class="order-consignee-name">{{order.consignee.name}}</text>
                    <text class="order-consignee-tel">{{order.consignee.tel}}</text>
                </view>
                <view class="order-consignee-address">
                    <text>收货地址：</text>{{order.consignee.area +' '+ order.consignee.address}}
                </view>
            </view>
            <view class="order-consignee-main" wx:else>
                <view class="order-consignee-title">您还没有收货地址</view>
                <view class="order-consignee-address">请添加先添加收货地址</view>
            </view>
            <wxc-cc class="order-consignee-side">
                <text class="icon icon-arrow-right"></text>
            </wxc-cc>
        </wxc-flex>
        <view class="order-confirm-commodity">
            <repeat for="{{order.commodityList}}" item="commodity" key="cid">
                <cp-order-commodity :commodity="commodity"></cp-order-commodity>
            </repeat>
        </view>
        <view class="order-confirm-amount">
            <wxc-flex class="amount" main="between" cross="center">
                <text>商品总价</text>
                <wxc-price class="price" value="{{order.totalAmount}}"></wxc-price>
            </wxc-flex>
            <wxc-flex class="freight" main="between" cross="center">
                <text>运费（满200包邮）</text>
                <wxc-price class="price" value="{{order.freightAmount}}"></wxc-price>
            </wxc-flex>
        </view>
        <view class="order-confirm-toolbar">
            <view class="order-confirm-info">
                <text>实付款：</text>
                <wxc-price class="price" value="{{order.actualAmount}}"></wxc-price>
            </view>
            <view class="order-confirm-button"><button type="warn">提交订单</button></view>
        </view>
    </view>
</template>
<script>

import wepy from 'wepy'
import orderCommodity from '@/components/order-commodity'

const __DATA__ = {
    freightAmount: '10.00',
    actualAmount: '200.00',
    message: '帮我包装得好看点',
    consignee: {
        id: 1,
        name: '张生',
        tel: '15817489898',
        area: '广东 广州市  天河区',
        address: '金穗路1号3401(广东星外星唱片)',
    },
    commodityList: [
        {
            id: 1,
            cover: 'https://t1.picb.cc/uploads/2018/02/22/KGQhG.png',
            title: '云之七味',
            type: '熟茶',
            price: 100.00,
            count: 1
        },
        {
            id: 2,
            cover: 'https://t1.picb.cc/uploads/2018/02/22/KGQhG.png',
            title: '云之七味',
            type: '熟茶',
            price: 100.00,
            count: 1
        }
    ]
}

export default class OrderDetail extends wepy.page {
    config = {
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
    }

    components = {
        'cp-order-commodity': orderCommodity
    }

    mixins = []

    data = {
        order: __DATA__
    }

    computed = {
    }

    methods = {

    }

    events = {

    }

    onLoad() {
        console.log(this.route)
    }
}

</script>
