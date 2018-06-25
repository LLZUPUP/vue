<template>
  <div id="app">
    <!-- <router-view/> -->
    <v-articles></v-articles>
  </div>
</template>

<script>
import Articles from '@/components/articles/articles'
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
    "v-articles": Articles
  }
}
</script>

<style lang="stylus">
  
</style>
