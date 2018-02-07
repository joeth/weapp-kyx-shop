<style lang="less">
@import 'src/common/styles/icon.less';
@import 'src/common/styles/config.less';
page{
    // background-image: url('https://applet.store.keyixing.com/images/bg.jpg');
    background-image: url('https://t1.picb.cc/uploads/2018/02/05/sqzLX.jpg');
    background-color: @color-backdrop;
}
page, view, input, button{
    font-size: @fz-base;
    font-family: @fontDefault;
}
page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: space-between;
    // box-sizing: border-box;
}
.container {
    height: 100%;
    display: flex;
}
scroll-view:-webkit-scrollbar{
    position: absolute;
    z-index: 1000;
}
</style>
<script>
import wepy from 'wepy'
import 'wepy-async-function'

const device = wx.getSystemInfoSync()
const deviceRadio = device.windowWidth / 750

export default class extends wepy.app {
    config = {
        pages: [
            'pages/classify',
            'pages/homepage',
            'pages/shopcart',
            'pages/mycenter',
        ],
        tabBar: {
            color: '#452713',
            backgroundColor: '#e9e0cc',
            list: [{
                pagePath: 'pages/homepage',
                iconPath: 'images/homepage.png',
                selectedIconPath: 'images/homepage.png',
                text: '首页'
            }, {
                pagePath: 'pages/classify',
                iconPath: 'images/classify.png',
                selectedIconPath: 'images/classify.png',
                text: '产品分类'
            }, {
                pagePath: 'pages/shopcart',
                iconPath: 'images/shopcart.png',
                selectedIconPath: 'images/shopcart.png',
                text: '购物车'
            }, {
                pagePath: 'pages/mycenter',
                iconPath: 'images/mycenter.png',
                selectedIconPath: 'images/mycenter.png',
                text: '个人中心'
            }]
        },
        window: {
            backgroundColor: '#e9e0cc',
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#452713',
            navigationBarTitleText: '可以兴商城',
            navigationBarTextStyle: '#d6c5ac'
        }
    }

    globalData = {
        deviceRadio: deviceRadio,
        userInfo: null
    }

    constructor() {
        super()
        this.use('requestfix')
    }

    onLaunch() {
        // this.testAsync()
    }

    sleep(s) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('promise resolved')
            }, s * 1000)
        })
    }

    async testAsync() {
        const data = await this.sleep(3)
        console.log(data)
    }

    getUserInfo(cb) {
        const that = this
        if (this.globalData.userInfo) {
            return this.globalData.userInfo
        }
        wepy.getUserInfo({
            success(res) {
                that.globalData.userInfo = res.userInfo
                cb && cb(res.userInfo)
            }
        })
    }
}

</script>
