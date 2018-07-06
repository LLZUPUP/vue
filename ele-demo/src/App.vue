<template>
  <div id="app">
    <!-- vue 内置组件 transition -->
    <!-- <router-link to="/login">/login</router-link> -->
    <transition name="router-fade">
      <keep-alive>
        <router-view v-if="$route.meta.keepalive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade">
      <router-view v-if="!$route.meta.keepalive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import './style/common'
// name + enter 进入的那一瞬间
// .router-fade-enter-active 会在进入的整个过程中，完全进入之后会移出.router-fade-enter这个样式
  .router-fade-enter-active
    transition opacity .3s
  .router-fade-enter
    opacity 0
  .router-fade-leave
    opacity 1
  .router-fade-leave-active
    transition opacity .3s
    
</style>
