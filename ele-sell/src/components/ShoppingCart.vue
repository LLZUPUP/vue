<template>
    <div class="cart"> 
        <h2>ShoppingCart</h2>
        <p v-show="!products.length"><i>Please add some products to cart</i></p>
        <ul>
            <li v-for="product in products" :key="product.id">{{product.title}} - {{product.price | currency}} x {{product.quantity}}</li>
            <p>Total:{{total | currency}}</p>
        </ul>
    </div>
</template>
<script>
import { mapState,mapGetters } from 'vuex'
export default {
    computed:{
        ...mapState({
        // 读取状态 map 
        items: state => state.cart.items,
        checkoutStatus: state => state.cart.checkoutStatus
        }),
        ...mapGetters({
            products: 'cartProducts',
            total: 'cartTotalPrice'
        })
    }
}
</script>
<style>

</style>
