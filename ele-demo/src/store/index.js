import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// lbs 应用

const state = {
    latitude: '',
    longitude: '',
    cartList: {},
    userInfo: null,
    shopId: null,
    products: [],
    shopDetail: null
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})