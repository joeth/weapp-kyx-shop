<style lang="less">
@import 'src/common/styles/config.less';
.catalog{
    flex: 1;
    width: 100%;
    overflow: hidden;
    position: relative;
    background-color: @color-backdrop;
}
.catalog-nav {
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
.catalog-body{
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
    <view class="catalog">
        <scroll-view class="catalog-nav" scroll-y="true">
            <button type="normal" class="nav-item active">产品</button>
            <button type="normal" class="nav-item">免费试喝</button>
            <button type="normal" class="nav-item">个性定制</button>
        </scroll-view>
        <scroll-view class="catalog-body" scroll-y="true">
            <ListCatalog :datalist="catalogList" width="550"></ListCatalog>
        </scroll-view>
    </view>
</template>
<script>
import wepy from 'wepy'
import ListCatalog from '@/components/list-catalog'
import Searchbar from '@/components/searchbar'

export default class Catalog extends wepy.page {
    config = {
        navigationBarTitleText: '产品分类'
    }

    components = {
        Searchbar,
        ListCatalog,
    }

    mixins = []

    data = {
        catalogList: [
            {id: 1, name: '饼茶', image: 'https://t1.picb.cc/uploads/2018/01/31/UpnXX.png'},
            {id: 2, name: '砖茶', image: 'https://t1.picb.cc/uploads/2018/02/22/KGQhG.png'},
            {id: 3, name: '商务茶', image: 'https://t1.picb.cc/uploads/2018/02/22/KGXJN.png'},
            {id: 4, name: '沱茶', image: 'https://t1.picb.cc/uploads/2018/02/22/KG0BK.png'},
            {id: 5, name: '散茶', image: 'https://t1.picb.cc/uploads/2018/02/22/KGaLy.png'},
            {id: 6, name: '礼品茶', image: 'https://t1.picb.cc/uploads/2018/02/22/KGNeX.png'}
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
