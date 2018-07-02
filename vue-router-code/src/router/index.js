import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Foo from '@/views/Foo'
Vue.use(Router);
export default new Router({
    mode: 'history',
    routes:[
        {
            path:"/",
            component: Home
        },
        {
            path:"/foo",
            component: Foo
        }
    ]
})