/*
 * @Author: zdenzel
 * @Date:   2018-03-14 23:38:28
 * @Last Modified by:   zdenzel
 * @Last Modified time: 2018-03-18 13:47:26
 */

import wepy from 'wepy'
import { createAction } from 'redux-actions'
import { GET_SHOP_CART, SET_SHOP_CART, ADD_SHOP_CART, DEL_SHOP_CART, CHECK_ONE_SHOP_CART, CHECK_ALL_SHOP_CART, GET_BUY_LIST, REMOVE_BUY_LIST } from '../types/shopcart'


export const getShopCart = createAction(GET_SHOP_CART, (payload) => {
    return new Promise((resolve, reject) => {
        resolve(payload)
    })
})

export const addShopCart = createAction(ADD_SHOP_CART, (payload) => {
    return new Promise((resolve, reject) => {
        resolve(payload)
    })
})

export const delShopCart = createAction(DEL_SHOP_CART, (payload) => {
    return new Promise((resolve, reject) => {
        resolve(payload)
    })
})

export const setShopCart = createAction(SET_SHOP_CART, (payload) => {
    return new Promise((resolve, reject) => {
        resolve(payload)
    })
})

export const checkOneShopCart = createAction(CHECK_ONE_SHOP_CART, (payload) => {
    return new Promise((resolve, reject) => {
        resolve(payload)
    })
})

export const checkAllShopCart = createAction(CHECK_ALL_SHOP_CART, (payload) => {
    return new Promise((resolve, reject) => {
        resolve(payload)
    })
})

export const getShopBuyList = createAction(GET_BUY_LIST, (payload) => {
    return new Promise((resolve, reject) => {
        resolve(payload)
    })
})

export const removeShopBuyList = createAction(REMOVE_BUY_LIST, (payload) => {
    return new Promise((resolve, reject) => {
        resolve(payload)
    })
})
