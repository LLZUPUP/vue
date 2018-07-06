<template>
    <header id="head_top">
        <slot name="logo"/>
        <router-link class="head_login" :to="userInfo?'/profile':'/login'">
            <span class="login_span" v-if="!userInfo">登录｜注册</span>
        </router-link>
    </header>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed:{
        ...mapState([
            'userInfo'
        ])
    }
}
</script>
<style lang="stylus" scoped>
@import '../style/mixin'


.head_logo
    left 0.4rem
    ct()
    font-weight 400
    sc(0.7rem,#fff)
    wh(2.3rem,0.7rem)
#head_top
    background-color $blue
    position fixed
    z-index 100
    left 0
    top 0
    wh(100%,1.95rem)

.head_login
    right 0.55rem
    sc(0.65rem,#fff)
    ct()
    .login_span
        color #ffffff
    

</style>
