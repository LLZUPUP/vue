<template>
  <div>
    <form action="" class="el-form" :class= "[labelPosition? 'el-form--label-' + labelPosition:'', {'el-form--inline': inline}]" >
      <slot></slot>
    </form>
  </div>
</template>
<script>
export default {
  name: 'ElForm',
  componentName: 'ElForm',
  data() {
    return {
      fields: []
    }
  },
  props: {
    model: Object,
    rules: Object,
    inline: Boolean,
    labelPosition: String
  },
  methods: {
    validate() {
      this.fields.forEach(field => {
        field.validate('',(message, field)=> {
          
        })
      })
    }
  },
  created() {
    this.$on('el.form.addField',(field)=> {
      console.log(field)
      this.fields.push(field)
    })
  }
}
</script>
<style>

</style>
