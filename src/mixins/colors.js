import wepy from 'wepy'

export default class colorsMixin extends wepy.mixin {
    data = {
        colors: {
            backcolor: '#ddd4c1',
            forecolor: '#f6f1dd',
            maincolor: '#e9e0cc',
            border: '#b9ae8b',
            base: '#452713',
            primary: '#a91e11',
            success: '#e75607',
            warn: '#6b5021',
            invert: '#d6c5ac',
            gray: '#8c8174'
        }
    }
}
