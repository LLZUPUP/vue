import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'

Vue.use(Vuex)

// Vuex 管理Vue大型项目中的数据流，小型项目不要用vuex。
// vue项目将分为两部分
// vue  vueRouter 界面构建  组件化
// vuex  数据流开发

export default new Vuex.Store({
    modules: {
        products
    }
})