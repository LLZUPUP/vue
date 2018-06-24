import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    count:5
}
const mutations = {
    add(state,num){
        state.count+=num;
    },
    reduce(state,num){
        state.count-=num;
    }
}
const getters = {
    count:(state)=>{
        return state.count+=10;
    }
}

const actions={
    addAction(context){
        context.commit('add',10)
        setTimeout(()=>{
            context.commit('reduce',10);
        },3000)
        console.log('我比reduce先执行了3秒')

    },
    reduceAction({commit}) {
        commit('reduce',20)
    }
}

const moduleA = {
    state,
    mutations,
    getters,
    actions
}

export default new Vuex.Store({
    modules:{
        a:moduleA
    }
})