<template>
  <div>
    Main
    <click-component v-for= "i in 5" :key="i" :index= "i"></click-component>
    <show-component></show-component>
  </div>
</template>
<script>
import ClickComponent from './click'
import ShowComponent from './show'
export default {
  components: {
    ClickComponent,
    ShowComponent
  }
}
</script>
<style scoped>

</style>
