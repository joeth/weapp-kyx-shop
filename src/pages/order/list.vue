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
.goods-item-text{
    color: @color-gray;
}
.goods-item-info{
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
.order-item-info,
.order-item-tool{
    display: block;
    padding: @margin;
}
.order-item-tool{
    padding-top: 0;
    .button{
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
                    <repeat for="{{2}}" index="oindex" item="order" key="oid">
                        <view class="order-item">
                            <wxc-flex class="order-item-head" main="between">
                                <text class="c-gray">订单编号：E20180102112200</text>
                                <text class="c-success">待付款</text>
                            </wxc-flex>
                            <view class="order-item-main">
                                <view class="order-goods-list">
                                    <repeat for="{{2}}" index="gindex" item="goods" key="gid">
                                        <wxc-flex class="order-goods-item">
                                            <image class="goods-item-cover" src="https://t1.picb.cc/uploads/2018/02/22/KGQhG.png"></image>
                                            <wxc-flex class="goods-item-main" dir="top" main="between">
                                                <view>
                                                    <view class="goods-item-title">云之七味</view>
                                                    <view class="goods-item-text">普洱熟茶小方砖</view>
                                                </view>
                                                <wxc-flex class="goods-item-info" main="between" cross="center">
                                                    <wxc-price class="price" value="100.00"></wxc-price>
                                                    <text class="count">x1</text>
                                                </wxc-flex>
                                            </wxc-flex>
                                        </wxc-flex>
                                    </repeat>
                                </view>
                            </view>
                            <wxc-flex class="order-item-info" main="between">
                                <view class="side"></view>
                                <view class="main">
                                    合计：<wxc-price class="price" value="200.00"></wxc-price>
                                </view>
                            </wxc-flex>
                            <wxc-flex class="order-item-tool" main="end">
                                <view class="button"><button type="warn">取消订单</button></view>
                                <view class="button"><button type="base">确认付款</button></view>
                            </wxc-flex>
                        </view>
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
        ]
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
