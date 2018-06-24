<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="goBack">后退</button>
      <button @click="goGo">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <p>
      <router-link to="/">首页</router-link>|
      <router-link to="/Hi">Hi</router-link>|
      <router-link :to="{name:'Hi1',params:{username:'llz'}}">Hi 1</router-link>|
      <router-link to="/Hi/Hi2">Hi 2</router-link>
      <br>
      <router-link to="/">Home</router-link>|
      <router-link to="/params/12124/llz website is very good">params</router-link>|
      <router-link to="/goHome">goHome</router-link>|
      <router-link to="/goParams/12323/llz params is well">goParams</router-link>|
      <router-link to="/hello1">Hello1</router-link>|
      <router-link to="/alias">alias</router-link>|
      <router-link to="/index">index</router-link>
      <br>
      <router-link to="/asfasfaf">error</router-link>
    </p>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

    <!-- <p>{{$route.name}}</p> -->
    <!-- <router-view name="left" style="float:left;width:50%;height:300px;background-color:green;"/>
    <router-view name="right" style="float:right;width:50%;height:300px;background-color:yellow;"/> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goGo(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity .4s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity .5s;
}
</style>
