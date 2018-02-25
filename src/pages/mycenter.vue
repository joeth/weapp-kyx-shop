<style lang="less">
@import 'src/common/styles/config.less';
.header{
    padding: 60rpx;
    text-align: center;
    background-color: @color-base;
    .user-info-avatar{
        width: 170rpx;
        height: 170rpx;
        overflow: hidden;
        border: 5rpx solid @color-white;
        border-radius: 50%;
    }
    .user-info-name{
        margin-top: @margin;
        color: @color-invert;
    }
}
.menu{
    display: block;
    padding: 60rpx;
    margin-top: @margin;
    background-color: @color-backdrop;
    .menu-button{
        padding: @margin;
    }
    .icon, .text{
        display: block;
        text-align: center;
    }
    .icon{
        font-size: 64rpx;
        margin-bottom: @margin;
    }
}
</style>
<template>
    <view class="mycenter">
        <view class="header">
            <wxc-cc>
                <view class="user-info">
                    <view class="user-info-avatar">
                        <image class="avatar" src="{{userInfo.avatarUrl}}" mode="aspectFit" lazy-load="{{true}}"></image>
                    </view>
                    <view class="user-info-name">
                        <text>{{userInfo.nickName}}</text>
                    </view>
                </view>
            </wxc-cc>
        </view>
        <wxc-tab line-color="transparent" active-line-color="transparent">
            <view class="tab-nav" slot="tablabel">
                <wxc-tab-label class="tab-nav-item" wx:for="{{orderTabs}}" wx:for-item="tab" wx:key="{{tab.title}}" tab-index="{{index}}">
                    <navigator class="normal tab-nav-button" url="/pages/order/list?type={{tab.id}}">
                        {{tab.title}}
                        <wxc-badge class="tab-nav-badge" max="99" value="{{tab.badge}}" wx:if="{{tab.badge}}"></wxc-badge>
                    </navigator>
                </wxc-tab-label>
            </view>
        </wxc-tab>
        <wxc-flex class="menu" main="around">
            <navigator class="normal" url="/pages/shopcart" open-type="switchTab">
                <text class="icon icon-shopcart"></text>
                <text class="text">购物车</text>
            </navigator>
            <navigator class="normal" url="/pages/address/list">
                <text class="icon icon-location"></text>
                <text class="text">收货地址</text>
            </navigator>
            <navigator class="normal" url="/pages/question/list">
                <text class="icon icon-question"></text>
                <text class="text">常见问题</text>
            </navigator>
        </wxc-flex>
    </view>
</template>
<script>
import wepy from 'wepy'

export default class MyCenter extends wepy.page {
    config = {
        navigationBarTitleText: '个人中心',
        usingComponents: {
            'wxc-cc': '../packages/@minui/wxc-cc/dist/index',
            'wxc-flex': '../packages/@minui/wxc-flex/dist/index',
            'wxc-tab': '../packages/@minui/wxc-tab/dist/index',
            'wxc-tab-panel': '../packages/@minui/wxc-tab/dist/panel',
            'wxc-tab-label': '../packages/@minui/wxc-tab/dist/label',
            'wxc-badge': '../packages/@minui/wxc-badge/dist/index',
        }
    }

    components = {}

    mixins = []

    data = {
        userInfo: {
            avatarUrl: 'https://t1.picb.cc/uploads/2018/02/22/KGhb8.jpg',
            nickName: '文书生'
        },
        orderTabs: [
            { id: 0, title: '全部', badge: 0 },
            { id: 1, title: '待付款', badge: 1 },
            { id: 2, title: '待发货', badge: 0 },
            { id: 3, title: '待收货', badge: 0 },
            { id: 4, title: '已完成', badge: 0 }
        ],
        activeKey: 0
    }

    computed = {
        now() {
            return +new Date()
        }
    }

    methods = {
    }

    events = {

    }

    onLoad() {

    }
}

</script>
