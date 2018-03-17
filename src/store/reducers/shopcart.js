/*
 * @Author: zdenzel
 * @Date:   2018-03-14 23:23:42
 * @Last Modified by:   zdenzel
 * @Last Modified time: 2018-03-18 00:01:56
 */

import wepy from 'wepy'
import { handleActions } from 'redux-actions'
import { GET_SHOP_CART, SET_SHOP_CART, UPDATE_SHOP_CART, ADD_SHOP_CART, DEL_SHOP_CART, CHECK_ONE_SHOP_CART, CHECK_ALL_SHOP_CART, GET_BUY_LIST } from '../types/shopcart'

const SHOP_BUY_LIST = 'SHOP_BUY_LIST'
const SHOP_CART_LIST = 'SHOP_CART_LIST'

const initState = {
    shopCartData: [],
    shopCartList: [],
    shopBuyList: [],
    isSelectedAll: false,
    totalAmount: 0,
}

const getSelectStatus = (state) => {
    try {
        return !state.every(n => n.isSelected == false)
    } catch (e) {}
}
const getTotalAmount = (state) => {
    try {
        let totalAmount = 0
        state.forEach(item => {
            let itemPrice = Number(item.price) != NaN ? Number(item.price) : 0
            let itemCount = Number(item.count) != NaN ? Number(item.count) : 0
            if (item.isSelected) {
                totalAmount = totalAmount + itemPrice * itemCount
            }
        })
        return totalAmount.toFixed(2)
    } catch (e) {}
}

//list
const todos = handleActions({
    [GET_SHOP_CART](state, { type, payload }) {
        let shopCartData = Array.from(new Set(state.shopCartData.concat(wepy.getStorageSync(SHOP_CART_LIST) || [])))
        let shopCartList = Array.from(new Set(shopCartData.filter(item => item.uid == payload.uid)))
        let isSelectedAll = getSelectStatus(shopCartList)
        let totalAmount = getTotalAmount(shopCartList)

        return { ...state, shopCartData, shopCartList, isSelectedAll, totalAmount }
    },
    [SET_SHOP_CART](state, { type, payload }) {
        let shopCartData = state.shopCartData.concat()
        try {
            shopCartData = shopCartData.map(item => {
                if (item.uid == payload.uid && item.id == payload.id) {
                    item = payload
                }
                return item
            })
        } catch (e) {}

        let shopCartList = shopCartData.filter(item => item.uid == payload.uid)
        let isSelectedAll = getSelectStatus(shopCartList)
        let totalAmount = getTotalAmount(shopCartList)

        wepy.setStorageSync(SHOP_CART_LIST, shopCartData)

        return { ...state, shopCartData, shopCartList, isSelectedAll, totalAmount }
    },
    [DEL_SHOP_CART](state, { type, payload }) {
        let shopCartData = state.shopCartData.concat()

        try {
            let index = shopCartData.findIndex(item => item.uid == payload.uid && item.id == payload.id)
            shopCartData.splice(index, 1)
        } catch (e) {}

        let shopCartList = shopCartData.filter(item => item.uid == payload.uid)
        let isSelectedAll = getSelectStatus(shopCartList)
        let totalAmount = getTotalAmount(shopCartList)

        wepy.setStorageSync(SHOP_CART_LIST, shopCartData)

        return { ...state, shopCartData, shopCartList, isSelectedAll, totalAmount }
    },
    [ADD_SHOP_CART](state, { type, payload }) {
        let shopCartData = state.shopCartData.concat()
        try {
            let index = shopCartData.findIndex(item => item.id == payload.id && item.uid == payload.uid)
            if (index > -1) {
                shopCartData[index] = Object.assign({}, shopCartData[index], payload, {
                    count: shopCartData[index].count + payload.count
                })
            } else {
                shopCartData.push(payload)
            }
        } catch (e) {}

        let shopCartList = shopCartData.filter(item => item.uid == payload.uid)
        let isSelectedAll = getSelectStatus(shopCartList)
        let totalAmount = getTotalAmount(shopCartList)

        wepy.setStorageSync(SHOP_CART_LIST, shopCartData)

        return { ...state, shopCartData, shopCartList, isSelectedAll, totalAmount }
    },
    [CHECK_ONE_SHOP_CART](state, { type, payload }) {
        let shopCartData = state.shopCartData.concat()

        try {
            shopCartData = shopCartData.map(item => {
                if (item.uid == payload.uid && item.id == payload.id) {
                    item.isSelected = !item.isSelected
                }
                return item
            })
        } catch (e) {}

        let shopCartList = shopCartData.filter(item => item.uid == payload.uid)
        let isSelectedAll = getSelectStatus(shopCartList)
        let totalAmount = getTotalAmount(shopCartList)

        wepy.setStorageSync(SHOP_CART_LIST, shopCartData)

        return { ...state, shopCartData, shopCartList, isSelectedAll, totalAmount }
    },
    [CHECK_ALL_SHOP_CART](state, { type, payload }) {
        let shopCartData = state.shopCartData.concat()
        let isSelectedAll = !state.isSelectedAll

        try {
            shopCartData = shopCartData.map(item => {
                if (item.uid == payload.uid) {
                    item.isSelected = isSelectedAll
                }
                return item
            })
        } catch (e) {}

        let shopCartList = shopCartData.filter(item => item.uid == payload.uid)
        let totalAmount = getTotalAmount(shopCartList)

        wepy.setStorageSync(SHOP_CART_LIST, shopCartData)

        return { ...state, shopCartData, shopCartList, isSelectedAll, totalAmount }
    },
    [GET_BUY_LIST](state, { type, payload }) {
        let shopCartList = state.shopCartList.concat()
        let shopBuyList = state.shopBuyList || []

        try {
            shopBuyList = shopCartList.filter(item => item.isSelected)
        } catch (e) {}

        wepy.setStorageSync(SHOP_BUY_LIST, shopBuyList)

        return { ...state, shopBuyList }
    },


}, initState);

export default todos;
