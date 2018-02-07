<style lang="less">
@import 'src/common/styles/config.less';
.searchbar{
    padding: @margin;
    position: relative;
    z-index: 100;
    border-bottom: 2rpx solid @color-border;
    .wrapper{
        margin: 0;
        padding: 0 64rpx;

        height: 64rpx;

        line-height: 1;

        position: relative;

        border: 2rpx solid @color-border;
        border-radius: 64rpx;
        
        background-color: #fff;

        transition: all ease 400ms;
    }
    input{
        min-height: 0;
        height: 64rpx;
        line-height: 64rpx;

        width: 100%;

        margin: 0;
        padding: 0;

        font-size: @fz-large;
    }
    button{
        margin: 0;
        padding: 0;

        width: 64rpx;
        height: 64rpx;
        line-height: 64rpx;

        background-color: transparent;
        font-size: 40rpx;

        position: absolute;
        left: 5rpx;
        top: 0;

        z-index: 10;

        transition: all ease .4s;

        &:after{
            display: none;
            transform: none;
            box-shadow: none;
        }
    }
    button.cancel{
        width: 80rpx;
        left: 200%;
        font-size: @fz-large;
    }
    &.inputing{
        .wrapper{
            margin-right: 80rpx;
        }
        .cancel{
            left: 100%;
        }
    }
}
</style>
<template>
    <form class="searchbar {{inputKeyword ? 'inputing':''}} {{skin}}" style="{{style}}" report-submit="{{true}}" bindsubmit="formSubmit" bindreset="formReset">
        <view class="wrapper">
            <input type="text" value="{{inputKeyword}}" confirm-type="search" bindinput="inputTyping" placeholder="搜索产品名" />
            <button class="submit" form-type="submit"><text class="icon icon-search"></text></button>
            <button class="cancel" form-type="reset">取消</button>
        </view>
    </form>
</template>
<script>
import wepy from 'wepy'

const w = 750
const winRtio = wepy.getSystemInfoSync().windowWidth / w

export default class ListClassify extends wepy.component {
    props = {
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
        width: {
            type: [String, Number],
            default: 750
        },
        height: {
            type: [String, Number],
            default: 64
        },
        //外补白
        margin: {
            type: [String, Number],
            default: 0
        },
        //内补白
        padding: {
            type: [String, Number],
            default: 20
        },
        keyword: {
            type: String,
            default: ''
        }
    }

    data = {
        inputFocused: false,
        inputKeyword: ''
    }

    events = {
    }

    watch = {
    }

    methods = {
        inputTyping(e){
            this.inputKeyword = e.detail.value
        },
        formSubmit(){
            console.log('formSubmit')
        },
        formReset: function() {
            console.log('formReset')
            this.inputKeyword = ''
        }
    }

    onLoad () {
    }
}

</script>
