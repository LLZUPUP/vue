<template>
  <div id="app">
    <!-- <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <hr>
    <Shopping-cart></Shopping-cart>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import ShoppingCart from '@/components/shoppingCart'
import {urlParse} from './common/js/util'
import header from '@/components/header/header'
const response = require('./common/data/seller.json')

const ERR_OK = 0;
export default {
  name: 'App',
  components: {
    "v-header": header,
    ProductList,
    ShoppingCart
  },
  data() {
    return {
      seller: {
        id: (()=> {
          let queryParam = urlParse();
          return queryParam.id;
        })
      },
      
    }
  },
  created() {
    if(response.errno === ERR_OK) {
      this.seller = Object.assign({},this.seller,response.data)
    }
    
  }
}
</script>

<style lang="stylus" scoped>
@import "./common/stylus/mixin.styl"

.tab
  display flex
  width 100%
  height 40px
  line-height 40px
  border-1px(rgba(7,17,27,.1))
  .tab-item
    flex 1
    text-align center
    & > a
      display block
      font-size 14px
      color rgb(77,85,93)
      &.active
        color rgb(240,20,20)

</style>
