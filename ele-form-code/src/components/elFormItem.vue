<template>
  <div class="el-form-item">
    <label class="el-form-item__label" v-if= "label || $slots.label">
      <slot name="label">{{label}}</slot>
    </label>
    <div class= "el-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import emitter from '@/mixins/emitter'
export default {
  props: {
    label: String,
    prop: String
  },
  mixins: [emitter],
  mounted() {
    this.dispatch('ElForm', 'el.form.addField', [this])
  },
  computed: {
    form() {
      let parent = this.$parent;
      let parentName = parent.$options.componentName;
      while(parentName !== 'ElForm') {
        parent = parent.$parent;
        parentName =parent.$options.componentName;
      }
      return parent;
    }
  },
  methods: {
    validate(trigger, callback) {
      const rules = this.form.rules;
      const item_rule = rules[this.prop]
      console.log(item_rule)
      // app.vue rules, ElForm props form
      // 当前item rules ?[name] 对应的rule 是什么？
      // el-input 值是什么？
    }
  }
}
</script>
<style>

</style>
