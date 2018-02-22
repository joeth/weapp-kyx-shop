<style lang="less">
@import 'src/common/styles/config.less';
.navbar{
    padding: @margin/2 0;
    background-color: @color-backdrop;
    .navbar-item{
        padding: @margin 0;
        position: relative;
        &:before{
            content: '';
            height: 1em;
            width: 2rpx;
            margin-top: -.5em;
            position: absolute;
            top: 50%;
            left: 0;

            background-color: @color-border;
        }
        &:first-child{
            &:before{
                display: none;
            }
        }
    }
    .navbar-badge{
        position: absolute;
        right: 10rpx;
        top: 0;
    }
}
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
        <wxc-tab bind:tabchange="onTabChange" line-color="transparent" active-line-color="transparent" class="tabbar">
            <view class="navbar" slot="tablabel">
                <wxc-tab-label wx:for="{{tabs}}" wx:for-item="tab" wx:key="{{tab.title}}" tab-index="{{index}}" class="navbar-item">
                    <button type="normal" class="navbar-button">
                        {{tab.title}}
                        <wxc-badge class="navbar-badge" max="99" value="{{tab.badge}}" wx:if="{{tab.badge}}"></wxc-badge>
                    </button>
                </wxc-tab-label>
            </view>
        </wxc-tab>
        <wxc-flex class="menu" main="around">
            <navigator class="normal" url="/pages/shopcart" open-type="switchTab">
                <text class="icon icon-shopcart"></text>
                <text class="text">购物车</text>
            </navigator>
            <navigator class="normal">
                <text class="icon icon-location"></text>
                <text class="text">收货地址</text>
            </navigator>
            <navigator class="normal">
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
        tabs: [
            { title: '全部', badge: 0 },
            { title: '待付款', badge: 1 },
            { title: '待发货', badge: 0 },
            { title: '待收货', badge: 0 },
            { title: '已完成', badge: 0 }
        ],
        activeKey: 0
    }

    computed = {
        now() {
            return +new Date()
        }
    }

    methods = {
        onTabChange(res) {
            console.log(res)
            this.activeKey = res.detail.key
        }
    }

    events = {

    }

    onLoad() {

    }
}

</script>
