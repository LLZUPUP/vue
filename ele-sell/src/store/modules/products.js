import shop from '../../api/shop'


// Store 里的一间库房 => modules
// 搬运 actions 动作
// state 状态数据
// getters 获取状态的get方法
// mutations改变  会计  记帐

const state = {
    all: []
}

const getters = {}
const actions = {
    getAllProducts({commit}) {
        console.log('货车发动')
        shop.getProducts(products => {
            console.log('货车带着货物回来了')
            commit('setProducts',products)
        })
    }
}
const mutations = {
    setProducts(state,products) {
        console.log('入库，开始卸货，随时准备给组件使用')
        state.all = products
    },
    decrementProductInventory(state,{ id }) {
        const product = state.all.find(product => product.id === id);
        product.inventory--
    }
}
export default {
    state,
    getters,
    actions,
    mutations

}