<template>
  <div>
    <a href="#" class="click" :data-index= "index" @click.prevent= "doClick($event)">点击我</a>
  </div>
</template>
<script>
// import Bus from '@/common/bus.js'
export default {
  props: {
    index: Number
  },
  methods: {
    doClick (event) {
      // console.log(event.target.dataset.index)
      // Bus.$emit('getTarget', event.target.dataset.index)
      this.$emit('global:getTarget', event.target.dataset.index)
    }
  }
}
</script>
<style>

</style>
