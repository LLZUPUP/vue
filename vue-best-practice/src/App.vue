<template>
  <div id="wrapper">
    <p>
      FullName: {{ fullName }}
    </p>
    <p>
      FirstName: <input type="text" v-model= "firstName"/>
    </p>
    <p>
      lastName: <input type="text" v-model= "lastName"/>
    </p>
    <p>obj.a {{obj.a}}</p>
    <p>
      obj.a  <input type="text" v-model= "obj.a">
    </p>
    <main-component></main-component>
    <nav class="navbar navbar-default">
      <div class="container">
        <a  class="navbar-brand">
          <i class="glyphicon glyphicon-time"></i>
          计划板
        </a>
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/home">首页</router-link>
          </li>
          <li>
            <router-link to="/time-entries">计划列表</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <sidebar/>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import mainComponent from '@/components/mainComponent'
import Sidebar from '@/components/Sidebar'
export default {
  data () {
    return {
      firstName: '志远',
      lastName: '邓',
      fullName: '',
      obj: {
        a: 123
      }
    }
  },
  watch: {
    firstName: {
      handler (newName, oldName) {
        this.fullName = newName + ' ' + this.lastName
      },
      immediate: true
    },
    obj: {
      handler (newName, oldName) {
        console.log('obj.a changed')
      },
      immediate: true,
      deep: true
    }
    // firstName (newName, oldName) {
    //   console.log(newName, oldName)
    //   this.fullName = newName + ' ' + this.lastName
    // }
  },
  name: 'App',
  components: {
    Sidebar,
    mainComponent
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
