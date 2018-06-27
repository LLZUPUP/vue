<template>
    <div class="login-container">
        <el-form class="login-form"  autoComplete="on" :model="loginForm" ref="loginForm" :rules="loginRules" label-position="left">
            <div class="title-container">
                <h3 class="title">
                    系统登录
                </h3>
            </div>
            <el-form-item prop="username">
                <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input @keyup.enter.native="handleLogin" name="password" type="password" v-model="loginForm.password" autoComplete="on" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-button v-if="loading" type="primary" style="width:100%;margin-bottom:30px;" :loading="true">加载中</el-button>
            <el-button v-else type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>

        </el-form>

    </div>
</template>
<script>
import {isvalidUsername} from '@/utils/validate'
export default {
    data() {
        const validateUsername = (rule,value,callback)=>{
            if(! isvalidUsername(value)) {
                callback(new Error('请输入正确的用户名'))
            }else {
                callback();
            }
        }
        const validatePassword = (rule,value,callback)=>{
            if(value.length<6){
                callback(new Error('密码至少6位'));
            }else {
                callback();
            }
        }
        return {
            loginRules: {
                username: [{
                    required: true,
                    trigger: 'blur',
                    validator: validateUsername
                }],
                password: [{
                    required: true,
                    trigger: 'blur',
                    validator: validatePassword
                }]
            },
            loginForm: {
                username: '',
                password: ''
            },
            loading: false
        }
    },
    methods: {
        handleLogin() {
            // 要做什么？要验证数据
            this.$refs.loginForm.validate(valid=>{
                if(valid) {
                    this.loading = true
                    setTimeout(()=>{
                        this.loading = false
                    },2000)
                    console.log('success submit!');
                    return true;
                }else {
                    console.log('error submit!');
                    return false;
                }
            })
        }
    }
}
</script>
<style>

</style>
