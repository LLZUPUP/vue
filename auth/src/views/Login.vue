<template>
    <div>
        <div>Login</div>
        <form @submit.prevent="login">
            <label for="">
                <input v-model="email" placeholder="email"/>
            </label>
            <label for="">
                <input v-model="pass" placeholder="password" type="password"/>
            </label>
            <button type="submit" >Login</button>
        </form>
    </div>
    
</template>
<script>
import auth from '@/auth.js'
export default {
    data() {
        return {
            email: 'joe@eample.com',
            pass: ''
        }
    },
    methods: {
        login() {
            auth.login(this.email,this.pass,(loggedIn)=>{
                console.log(loggedIn)
                if(loggedIn) {
                    this.$router.replace(this.$route.query.redirect || '/')
                }
            });
            // 验证（email,pass）=> auth.login()
            // 有两种情况，失败／成功 localStorage.setItem('token',123124)
            // 1. auth.login 传参 ，callback
            // 2. this.$router
        }
    },
    mounted() {
        console.log(this.$route.query.redirect)
    }
}
</script>
<style>

</style>
