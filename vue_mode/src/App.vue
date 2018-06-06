<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div v-html="content"></div>
    <p><img v-bind:src="imgSrc" width="200px"></p>
        <p><a :href="webUrl" target="_blank">百度</a></p>
        <hr>
        <div :class="className">1、绑定class</div>
        <div :class="{classA:isOK}">2、绑定class中的判断</div>
        <div :class="[classA,classB]">3、绑定class中数组</div>
        <div :class="isOK?classA:classB">4、绑定class中三元运算符</div>
        <hr>
        <div>
            <input type="checkbox" id="isOk" v-model="isOK">
            <label for="isOk">isOK={{isOK}}</label>
        </div>
        <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
     content: '<p>立志做一个有才，code高素养，颜值过得去的家伙</p>',
     imgSrc:'http://jspang.com/wp-content/uploads/2017/08/jianfei.jpg',
      webUrl: 'www.baidu.com',
      className: 'classA',
      isOK: true,
      classA: 'true',
      classB: 'classB',
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
.classA{
    color: red;
}
.classB{
    font-size: 150%;
}
</style>
