/*
* @Author: zdenzel
* @Date:   2018-03-14 23:38:28
* @Last Modified by:   zdenzel
* @Last Modified time: 2018-03-15 02:31:03
*/

import wepy from 'wepy'
import { createAction } from 'redux-actions'
import { GET_SHOP_CART, SET_SHOP_CART, ADD_SHOP_CART, DEL_SHOP_CART } from '../types/shopcart'


export const getShopCart = createAction(GET_SHOP_CART, (payload) => {
    return new Promise((resolve, reject) => {
        console.log('getShopart action', payload)
        setTimeout(() => {
            resolve()
        }, 1000)
    })
})

export const addShopCart = createAction(ADD_SHOP_CART, (payload) => {
    return new Promise((resolve, reject) => {
        console.log('getShopart', payload)
        setTimeout(() => {
            resolve(payload)
        }, 1000)
    })
})

export const delShopCart = createAction(DEL_SHOP_CART, (payload) => {
    return new Promise((resolve, reject) => {
        console.log('getShopart')
        setTimeout(() => {
            resolve()
        }, 1000)
    })
})

