<style lang="less">
@import 'src/common/styles/config.less';
</style>
<template>
<view class="order">
    <wxc-tab line-color="transparent" default-index="{{activeKey}}" animate="{{true}}">
        <view class="tab-nav" slot="tablabel">
            <wxc-tab-label class="tab-nav-item {{activeKey == index ? 'active' : ''}}" wx:for="{{orderTabs}}" wx:for-item="tab" wx:key="{{tab.title}}" tab-index="{{index}}">
                <button class="tab-nav-button" type="normal" bind:tap="onTabClick" data-id="{{tab.id}}">
                    {{tab.title}}
                    <wxc-badge class="tab-nav-badge" max="99" value="{{tab.badge}}" wx:if="{{tab.badge}}"></wxc-badge>
                </button>
            </wxc-tab-label>
        </view>
        <view class="tab-main">
            <wxc-tab-panel wx:for="{{orderTabs}}" wx:for-item="tab" wx:key="{{tab.id}}" tab-index="{{index}}">
                {{tab.content}}
            </wxc-tab-panel>
        </view>
    </wxc-tab>
</view>
</template>
<script>
import wepy from 'wepy'

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
        }
    }

    components = {

    }

    mixins = []

    data = {
        activeKey: 0,
        orderTabs: [
            { id: 0, title: '全部', badge: 0, content: '全部' },
            { id: 1, title: '待付款', badge: 0, content: '待付款' },
            { id: 2, title: '待发货', badge: 0, content: '待发货' },
            { id: 3, title: '待收货', badge: 0, content: '待收货' },
            { id: 4, title: '已完成', badge: 0, content: '已完成' }
        ],
    }

    computed = {
    }

    methods = {
        onTabClick(e){
            const activeKey = this.activeKey;
            const { id } = e.currentTarget.dataset;

            if(id != activeKey){
                this.activeKey = id;
                console.log('执行数据更新')
            }
        }
    }

    events = {
    }

    onLoad(option) {
        try{
            this.activeKey = Number(option.type);
        }catch(e) {}
    }
}

</script>
