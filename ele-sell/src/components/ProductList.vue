<template>
    <ul>
        <li v-for="(product,index) in products" :key= "index">
            {{ product.title }}
        </li>
    </ul>
</template>
<script>
import {mapState} from 'vuex'
export default {
    created() {
        this.$store.dispatch('getAllProducts')
    },
    computed:mapState({
        // 读取状态 map 
        products: state => state.products.all
    })
    
    
}
</script>
<style>

</style>
