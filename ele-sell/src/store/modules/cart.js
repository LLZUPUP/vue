const state = {
    items: [],
    checkoutStatus: null,
}
// 对state 的修改 计算或处理
// vuex store  一棵树。树根，products.all
const getters = {
    cartProducts: (state,getters,rootState)=>{
        return state.items.map(({id,quantity})=>{
            const product = rootState.products.all.find(product => product.id==id);
            return {
                id: product.id,
                title: product.title,
                quantity,
                price: product.price
            }

        })
    },
    cartTotalPrice: (state,getters)=> {
        return getters.cartProducts.reduce((total,product)=>{
            return total + product.quantity * product.price
        },0)
    }
}
const actions = {
    addProductToCart({ state,commit },product) {
        console.log(product);
        // 是否已经在购物车里？
        if(product.inventory > 0) {
            const cartItem = state.items.find
            (item => item.id===product.id)
            if(!cartItem) {
                commit('pushProductToCart',{
                    id: product.id
                })
            }else {
                commit('incrementItemQuantity',cartItem)
            }
            commit('decrementProductInventory',{id:product.id})
        }
    }
}
const mutations = {
    pushProductToCart(state,{id}) {
        state.items.push({
            id: id,
            quantity: 1
        })
    },
    incrementItemQuantity(state,{id}) {
        const cartItem = state.items.find(item=> item.id === id)
        cartItem.quantity++
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}