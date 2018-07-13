<template>
  <div>
    {{html}}
  </div>
</template>
<script>
// import Bus from '@/common/bus.js'
export default {
  data () {
    return {
      html: '还没有点击'
    }
  },
  created () {
    this.$on('global:getTarget', ind => {
      this.html = `第${ind}个元素被点击了`
    })
  }
}
</script>
<style>

</style>
