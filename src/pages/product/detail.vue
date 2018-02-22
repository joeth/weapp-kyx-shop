<style lang="less">
@import 'src/common/styles/config.less';
</style>
<template>

</template>
<script>
import wepy from 'wepy'

export default class ProductDetail extends wepy.page {
    config = {
        navigationBarTitleText: '产品详情'
    }

    components = {
    }

    mixins = []

    data = {
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
