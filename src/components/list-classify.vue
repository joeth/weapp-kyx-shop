<style lang="less">
.item-classify{
    width: 33.333%;
}
.item-classify-image{
    // padding: 10rpx;
    box-sizing: border-box;
}
.item-classify-image image{
    width: 100%;
    height: 100%;
}
.item-classify-name{
    display: -webkit-box;
    word-break: break-all;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-align: center;
}
.list-classify{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    box-sizing: border-box;
}
</style>
<template>
    <view class="list-classify {{skin}}" style="width:{{width}}rpx;padding:{{margin}}rpx;{{style}}">
        <repeat for="{{datalist}}" index="index" item="item" key="id">
            <navigator class="item-classify" url="{{item.id}}" rediect="{{rediect}}" hover-class="{{hoverClass}}" style="width:{{itemWidth}}rpx;padding:{{padding}}rpx;margin-top:{{index>=column?margin:0}}rpx">
                <view class="item-classify-image" style="width:{{imageWidth}}rpx;height:{{imageHeight}}rpx;">
                    <image src="{{item.image}}" mode="aspectFill" lazy-load="{{lazyLoad}}"></image>
                </view>
                <text class="item-classify-name">{{item.name}}</text>
                <slot></slot>
            </navigator>
        </repeat>
    </view>
</template>
<script>
import wepy from 'wepy'

const w = 750
const winRtio = wepy.getSystemInfoSync().windowWidth / w

export default class ListClassify extends wepy.component {
    props = {
        image: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        skin: {
            type: String,
            default: ''
        },
        style: {
            type: String,
            default: ''
        },
        route: {
            type: String,
            default: ''
        },
        rediect: {
            type: Boolean,
            default: false
        },
        hoverClass: {
            type: String,
            default: ''
        },
        lazyLoad: {
            type: Boolean,
            default: false
        },
        width: {
            type: [String, Number],
            default: 750
        },
        //列数
        column: {
            type: [String, Number],
            default: 3
        },
        //外补白
        margin: {
            type: [String, Number],
            default: 15
        },
        //内补白
        padding: {
            type: [String, Number],
            default: 10
        },
        //图片比例
        ratio: {
            type: Array,
            default: [100,100]
        },
        datalist: {
            type: [Array, Number],
            default: 0
        }
    }

    data = {
        itemWidth: w/2,
        imageWidth: w/2,
        imageHeight: w/2,
    }

    events = {
    }

    watch = {
    }

    methods = {
    }

    onLoad () {

        console.log(ratio)

        const { width, column, margin, padding, ratio } = this.data
        let itemWidth = (width - column * margin) / column
        let imageRatio = 1
        try{
            imageRatio = ratio[1] / ratio[0]
            if(isNaN(imageRatio)){
                imageRatio = 1
            }
        }catch(e){}

        this.itemWidth = itemWidth - padding*2
        this.imageWidth = itemWidth - padding*2
        this.imageHeight = itemWidth * imageRatio - padding*2
    }
}

</script>
