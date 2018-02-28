<style lang="less">
@import 'src/common/styles/config.less';

.cp-item-order-head,
.cp-item-order-foot{
    display: block;
    padding: @margin;
}
.cp-item-order-code{
    color: @color-gray;
}
.cp-item-order-status{
    color: @color-gray;
}
.cp-item-order-info{
    margin-top: @margin;
    .price{
        font-size: @font-size-large;
        color: @color-success;
    }
}
.cp-item-order-tool{
    .button{
        margin-top: @margin;
        margin-left: @margin;
        &:first-child{
            margin-left: 0;
        }
    }
}
.cp-item-order{
    margin-top: @margin;
    background-color: @color-maincolor;
    &.is-pending{
        .cp-item-order-code{
            color: @color-success;
        }
    }
    &.is-complete{
        .cp-item-order-code{
            color: @color-primary;
        }
    }
    &.is-invailed{
        .cp-item-order-code{
            color: @color-gray;
        }
    }
}
</style>
<template>
    <view class="cp-item-order is-complete">
        <wxc-flex class="cp-item-order-head" main="between">
            <text class="cp-item-order-code">订单编号：{{order.code}}</text>
            <text class="cp-item-order-status">{{order.statusText}}</text>
        </wxc-flex>
        <view class="cp-item-order-main">
            <view class="order-goods-list">
                <repeat for="{{order.goods}}" index="gindex" item="goods" key="gid">
                    <ItemOrderGoods :goods="goods"></ItemOrderGoods>
                </repeat>
            </view>
        </view>
        <view class="cp-item-order-foot">
            <wxc-flex class="cp-item-order-info" main="between" dir="right">
                <view>合计（含运费）：<wxc-price class="price" value="{{order.price+order.freight}}"></wxc-price></view>
            </wxc-flex>
            <wxc-flex class="cp-item-order-tool" main="end" wrap="wrap">
                <view class="button"><button type="warn">取消订单</button></view>
                <view class="button"><button type="base">马上支付</button></view>
                <!-- <view class="button"><button type="base">确认收货</button></view>
                <view class="button"><button type="base">查看订单</button></view>
                <view class="button"><button type="base">发表评价</button></view> -->
            </wxc-flex>
        </view>
    </view>
</template>
<script>
import wepy from 'wepy'
import ItemOrderGoods from '@/components/item-order-goods'

const w = 750
const winRtio = wepy.getSystemInfoSync().windowWidth / w

export default class ItemOrder extends wepy.component {
    components = {
        ItemOrderGoods
    }

    props = {
        order: {
            type: Object,
            default: null,
            coerce (val) {
              console.log('coerce order', val)
              return val
            }
        }
    }
}

</script>
