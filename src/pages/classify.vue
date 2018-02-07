<style lang="less">
@import 'src/common/styles/config.less';
.classify{
    flex: 1;
    width: 100%;
    overflow: hidden;
    position: relative;
    background-color: @color-backdrop;
}
.classify-nav {
    width: 200rpx;
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    background-image: url('https://t1.picb.cc/uploads/2018/02/05/sqzLX.jpg');
    .nav-item{
        height: 100rpx;
        line-height: 100rpx;
        overflow: hidden;
        padding: 0 15rpx;

        display: -webkit-box;
        word-break: break-all;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;

        border-top: 2rpx solid @color-border;
        text-align: center;

        font-size: @fz-large;

        &:first-child{
            border-top: none;
        }

        &.active{
            background-color: @color-backdrop;
        }
    }
}
.classify-body{
    height: 100%;
    overflow: auto;
    position: absolute;
    bottom: 0;
    left: 200rpx;
    top: 0;
}
</style>
<template>
    <Searchbar></Searchbar>
    <view class="classify">
        <scroll-view class="classify-nav" scroll-y="true">
            <view class="nav-item active">产品</view>
            <view class="nav-item">免费试喝</view>
            <view class="nav-item">个性定制</view>
        </scroll-view>
        <scroll-view class="classify-body" scroll-y="true">
            <ListClassify :datalist="listClassify" width="550"></ListClassify>
        </scroll-view>
    </view>
</template>
<script>
import wepy from 'wepy'
import ListClassify from '@/components/list-classify'
import Searchbar from '@/components/searchbar'

export default class Classify extends wepy.page {
    config = {
        navigationBarTitleText: '产品分类'
    }

    components = {
        Searchbar,
        ListClassify,
    }

    mixins = []

    data = {
        offsettop: 0,
        listClassify: [
            {id: 1, name: '分类名1', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png'},
            {id: 2, name: '分类名2', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png'},
            {id: 1, name: '分类名2', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png'},
            {id: 2, name: '分类名3', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png'},
            {id: 1, name: '分类名4', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png'},
            {id: 2, name: '分类名5', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png'},
            {id: 1, name: '分类名6', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png'},
            {id: 2, name: '分类名7', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png'},
            {id: 1, name: '分类名8', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png'},
            {id: 2, name: '分类名9', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png'},
            {id: 1, name: '分类名10', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png'},
            {id: 2, name: '分类名11', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png'},
            {id: 1, name: '分类名12', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png'},
            {id: 2, name: '分类名13', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png'},
            {id: 1, name: '分类名14', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png'},
            {id: 2, name: '分类名15', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png'}
        ]
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
