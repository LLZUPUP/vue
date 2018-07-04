<template>
    <ul>
        <li v-for="(product,index) in products" :key= "index">
            {{ product.title }}-{{ product.price | currency}}
            <br>
            <button :disabled="!product.inventory" @click="addProductToCart(product)">Add to cart</button>
        </li>
    </ul>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
    created() {
        this.$store.dispatch('getAllProducts')
    },
    methods: mapActions([
        'addProductToCart'
    ]),
    computed:mapState({
        // 读取状态 map 
        products: state => state.products.all
    })
    
    
}
</script>
<style>

</style>
