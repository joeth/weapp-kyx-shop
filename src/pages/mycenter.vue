<style lang="less">
@import 'src/common/styles/config.less';

</style>
<template>
    <view class="mycenter">
        <view class="mycenter-header">
            <view class="user-info">
                <view class="user-info-avatar">
                    <image src="{{userInfo.avatarUrl}}" mode="aspectFit" lazy-load="{{true}}"></image>
                </view>
                <view class="user-info-name">
                    <text>{{userInfo.nickName}}</text>
                </view>
            </view>
        </view>
        <view class="mycenter-tabbar">
            <wxc-tab bind:tabchange="onTabChange" default-index="{{activeKey}}" component-id="c3" animate="{{true}}" class="demo-tab">
                <view slot="tablabel">
                    <wxc-tab-label wx:for="{{tabs}}" wx:for-item="tab" wx:key="{{tab.title}}" tab-index="{{index}}" component-id="c3">
                        <view class="demo-tab__label">
                            <view class="demo-tab__text {{ activeKey === index ? 'demo-tab--active' : ''}}">
                                {{tab.title}}
                                <wxc-badge class="user__un-read-msg-count">5</wxc-badge>
                            </view>
                        </view>
                    </wxc-tab-label>
                </view>
                <wxc-tab-panel wx:for="{{tabs}}" wx:for-item="tab" wx:key="{{tab.content}}" tab-index="{{index}}" component-id="c3">
                    {{tab.content}}
                </wxc-tab-panel>
            </wxc-tab>
        </view>
        <text class="mycenter-contain">
            <div>
                <p>asdf;lkasdfjl;asdfj</p>
                <p>asdf;lkasdfjl;asdfj</p>
                <p>asdf;lkasdfjl;asdfj</p>
                <p>asdf;lkasdfjl;asdfj</p>
                <p>asdf;lkasdfjl;asdfj</p>
            </div>
        </text>
    </view>
</template>
<script>
import wepy from 'wepy'

export default class MyCenter extends wepy.page {
    config = {
        navigationBarTitleText: '个人中心',
        usingComponents: {
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
            avatarUrl: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png',
            nickName: '文书生'
        },
        tabs: [
            { title: '全部' },
            { title: '待付款' },
            { title: '待发货' },
            { title: '待收货' },
            { title: '已完成' }
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
        }
    }

    events = {

    }

    onLoad() {

    }
}

</script>
