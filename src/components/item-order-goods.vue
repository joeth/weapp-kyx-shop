<style lang="less">
@import 'src/common/styles/config.less';

.cp-order-goods-cover{
    flex-grow: 0;
    width: 180rpx;
    height: 180rpx;
    background-color: @color-forecolor;
    border: 2rpx solid @color-border;
    border-radius: @radius;
}
.cp-order-goods-info{
    overflow: hidden;
}
.cp-order-goods-row{
    display: block;
    margin-bottom: @margin/2;
}
.cp-order-goods-text{
    color: @color-gray;
}
.cp-order-goods-price{
    color: @color-base;
}
.cp-order-goods-count{
}
.cp-order-goods-head{
    padding: @margin;
}
.cp-order-goods-main{
    flex-grow: 1;
    margin-left: @margin;
}
.cp-order-goods{
    display: block;
    padding: @margin;
    margin-top: @margin;
    background-color: @color-backcolor;
    &:first-child{
        margin-top: 0;
    }
}
</style>
<template>
    <wxc-flex class="cp-order-goods">
        <image class="cp-order-goods-cover" src="{{goods.cover}}"></image>
        <wxc-flex class="cp-order-goods-main" dir="top" main="between">
            <view class="cp-order-goods-info">
                <text class="cp-order-goods-row cp-order-goods-title">{{goods.title}}</text>
                <text class="cp-order-goods-row cp-order-goods-text">{{goods.type}}</text>
            </view>
            <wxc-flex class="cp-order-goods-count" main="between" cross="center">
                <wxc-price class="cp-order-goods-price" value="{{goods.price}}"></wxc-price>
                <text class="cp-order-goods-count">x{{goods.count}}</text>
            </wxc-flex>
        </wxc-flex>
    </wxc-flex>
</template>
<script>
import wepy from 'wepy'

const w = 750
const winRtio = wepy.getSystemInfoSync().windowWidth / w

const GOODS = {
    id: 1,
    cover: 'https://t1.picb.cc/uploads/2018/02/22/KGQhG.png',
    title: '云之七味',
    type: '熟茶',
    price: 100.00,
    count: 1
}

export default class ItemOrderGoods extends wepy.component {
    props = {
        goods: {
            type: Object,
            default: {},
            coerce (val) {
                console.log(val)
            }
        }
    }

    data = {
    }

    events = {
    }

    watch = {
    }

    methods = {
    }

    onLoad () {
    }
}

</script>
