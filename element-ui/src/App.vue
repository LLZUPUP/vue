<template>
  <div id="app">
      <el-button @click="doLoading" :loading="isLoading" icon="el-icon-edit" type="success"></el-button>
      <el-button icon="el-icon-edit" type="warning">提交</el-button>
      <el-button loading :disabled="disabled" type="danger">提交</el-button>
      <el-button :disabled="disabled" type="primary">提交</el-button>
      <el-button :disabled="disabled" type="info">提交</el-button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ElButton from './components/ElButton'

export default {
  name: 'App',
  data(){
    return {
      disabled: false,
      isLoading: false
    }
  },
  components: {
    "el-button": ElButton
  },
  mounted() {
    setTimeout(()=>{
      this.disabled = true;
    },2000)
  },
  methods:{
    doLoading() {
      // return this.isLoading = true
      console.log('aadsd')
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
</style>
