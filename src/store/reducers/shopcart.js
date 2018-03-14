/*
 * @Author: zdenzel
 * @Date:   2018-03-14 23:23:42
 * @Last Modified by:   zdenzel
 * @Last Modified time: 2018-03-15 02:42:50
 */

import wepy from 'wepy'
import { handleActions } from 'redux-actions'
import { GET_SHOP_CART, ADD_SHOP_CART, DEL_SHOP_CART, SET_SHOP_CART } from '../types/shopcart'

const initState = [{
    uid: 1,
    commodityList: []
}]

//item
const todo = handleActions({
    [GET_SHOP_CART](state, { payload }) {
        let uid = payload.uid
        let commodity = payload.commodity || null
        return { uid, commodity }
    },
    [ADD_SHOP_CART](state, { payload: { uid, commodity } }) {
        if(state.uid !== uid){
            return { uid, commodityList: [commodity] }
        }
        return { uid, commodityList: [...state.commodityList, commodity] }
    },
    [DEL_SHOP_CART](state, { payload: { uid, commodity } }) {
        if(state.uid === uid){
            try{
                let commodityList = state.commodityList.concat([])
                let index = commodityList.findIndex(n => n.id == id)
                commodityList.splice(index, 1)
                return { uid, commodityList }
            } catch(e) {}
        }
    }
}, {});

//list
const todos = handleActions({
    [GET_SHOP_CART](state, action) {
        console.log('getShopart reducers', state)
        return state
    },
    [SET_SHOP_CART](state, action) {

    },
    [ADD_SHOP_CART](state, action) {
        let haven = state.find(item => item.uid === action.payload.uid)
        if(haven){
            return state.map(t => todo(t, action))
        }
        return [...state, action.payload]
    },
    [DEL_SHOP_CART](state, action) {
        return state.map(t => todo(t, action))
    }
}, initState);

export default todos;
