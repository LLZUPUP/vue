<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/">首页</router-link>|
      <router-link to="/Hi">Hi</router-link>|
      <router-link :to="{name:'Hi1',params:{username:'llz'}}">Hi 1</router-link>|
      <router-link to="/Hi/Hi2">Hi 2</router-link>
      <br>
      <router-link to="/">Home</router-link>|
      <router-link to="/params/12124/llz website is very good">params</router-link>|
      <router-link to="/goHome">goHome</router-link>|
      <router-link to="/goParams/12323/llz params is well">goParams</router-link>
    </p>
    <!-- <p>{{$route.name}}</p> -->
    <router-view/>
    <!-- <router-view name="left" style="float:left;width:50%;height:300px;background-color:green;"/>
    <router-view name="right" style="float:right;width:50%;height:300px;background-color:yellow;"/> -->
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
