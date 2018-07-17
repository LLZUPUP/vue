<template>
  <div id="app">
    <el-form :rules= "rules" :model= "activity" ref= "ruleForm"  labelPosition= "left">
      <el-form-item label= "活动名称" prop= "name">
        <el-input v-model= "activity.name">

        </el-input>
      </el-form-item>
      <a @click.prevent= "submitForm('ruleForm')" class="el-button el-button--primary">立即创建</a>
    </el-form>
  </div>
</template>

<script>
import elForm from '@/components/elForm'
import elFormItem from '@/components/elFormItem'
import elInput from '@/components/elInput'
export default {
  name: 'App',
  data () {
    return {
      activity: {
        name: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入活动名称'
          }
        ]
      }
    }
  },
  components: {
    elForm,
    elFormItem,
    elInput
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {

      })
    }
  }
}
</script>

<style>
</style>
