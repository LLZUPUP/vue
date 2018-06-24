<template>
    <div>
        <h2>{{msg}}</h2>
        <hr>
        <h3>{{$store.state.a.count}}--{{count}}</h3>
        <p>
            <button @click="$store.commit('add',30)">+</button>
            <button @click="reduce(20)">-</button>
        </p>
        <p>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </p>
    </div>
</template>

<style>

</style>

<script>
import store from '@/vuex/store'
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
    data(){
        return {
            msg: 'hello vuex!'
        }
    },
    computed: {
        count(){
            return this.$store.state.a.count;
        }
        // ...mapState(['count']),
        // ...mapGetters(['count'])
    },
    methods:{
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction','reduceAction'])
    },
    store
}
</script>
