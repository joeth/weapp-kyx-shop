<style lang="less">
@import 'src/common/styles/config.less';
.goods-item-cover{
    flex-grow: 0;
    width: 180rpx;
    height: 180rpx;
    background-color: @color-forecolor;
    border: 2rpx solid @color-border;
    border-radius: @radius;
}
.goods-item-info{
    overflow: hidden;
    > view{
        display: block;
        margin-bottom: @margin/2;
    }
}
.goods-item-text{
    color: @color-gray;
}
.goods-item-count{
    .price{
        color: @color-base;
    }
}
.goods-item-main{
    flex-grow: 1;
    margin-left: @margin;
}
.goods-item-head{
    padding: @margin;
}
.order-goods-item{
    display: block;
    padding: @margin;
    margin-top: @margin;
    background-color: @color-backcolor;
    &:first-child{
        margin-top: 0;
    }
}
.order-item-head,
.order-item-foot{
    display: block;
    padding: @margin;
}
.order-item-info{
    margin-top: @margin;
}
.order-item-tool{
    .button{
        margin-top: @margin;
        margin-left: @margin;
        &:first-child{
            margin-left: 0;
        }
    }
}
.order-item{
    margin-top: @margin;
    background-color: @color-maincolor;
    // &:first-child{
    //     margin-top: 0;
    // }
}
.order-item-info{
    .price{
        font-size: @font-size-large;
        color: @color-success;
    }
}
</style>
<template>
<view class="order">
    <wxc-tab class="tabbar" line-color="transparent" active-line-color="{{colors.success}}" default-index="{{activeKey}}" animate="{{true}}">
        <view class="tabbar-nav" slot="tablabel">
            <wxc-tab-label class="tabbar-label {{activeKey == index ? 'active' : ''}}" wx:for="{{orderTabs}}" wx:for-item="tab" wx:key="{{tab.title}}" tab-index="{{index}}">
                <button class="tabbar-button" type="normal" bind:tap="onTabClick" data-id="{{tab.id}}">
                    {{tab.title}}
                    <wxc-badge class="tabbar-badge" max="99" value="{{tab.badge}}" wx:if="{{tab.badge}}"></wxc-badge>
                </button>
            </wxc-tab-label>
        </view>
        <view class="tabbar-main">
            <wxc-tab-panel wx:for="{{orderTabs}}" wx:for-item="tab" wx:key="{{tab.id}}" tab-index="{{index}}">
                <view class="order-list">
                    <repeat for="{{orderList}}" index="oindex" item="order" key="oid">
                        <ItemOrder :order="order"></ItemOrder>
                    </repeat>
                </view>
            </wxc-tab-panel>
        </view>
    </wxc-tab>
</view>
</template>
<script>
import wepy from 'wepy'
import colorsMixin from '@/mixins/colors'
import ItemOrder from '@/components/item-order'

const __ORDER_LIST__ = [{
    id: 1,
    code: 'E20180102112200',
    status: 1,
    payStatus: 1,
    pirce: 200.00,
    freight: 0.00,
    goods: [
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
}]

export default class OrderList extends wepy.page {
    config = {
        navigationBarTitleText: '订单列表',
        usingComponents: {
            'wxc-cc': '../../packages/@minui/wxc-cc/dist/index',
            'wxc-flex': '../../packages/@minui/wxc-flex/dist/index',
            'wxc-tab': '../../packages/@minui/wxc-tab/dist/index',
            'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/panel',
            'wxc-tab-label': '../../packages/@minui/wxc-tab/dist/label',
            'wxc-badge': '../../packages/@minui/wxc-badge/dist/index',
            'wxc-price': '../../packages/@minui/wxc-price/dist/index',
        }
    }

    components = {
        ItemOrder
    }

    mixins = [colorsMixin]

    data = {
        activeKey: 0,
        orderTabs: [
            { id: 0, title: '全部', badge: 0, content: '全部' },
            { id: 1, title: '待付款', badge: 0, content: '待付款' },
            { id: 2, title: '待发货', badge: 0, content: '待发货' },
            { id: 3, title: '待收货', badge: 0, content: '待收货' },
            { id: 4, title: '已完成', badge: 0, content: '已完成' }
        ],
        orderList: __ORDER_LIST__
    }

    computed = {
    }

    methods = {
        onTabClick(e){
            const activeKey = this.activeKey;
            const { id } = e.currentTarget.dataset;

            if(id != activeKey){
                this.activeKey = id;
                console.log('执行数据更新');
            }
        }
    }

    events = {
    }

    onLoad(option) {
        console.log(this)
        try{
            this.activeKey = Number(option.type);
        }catch(e) {}
    }
}

</script>
