<template>
    <div class="loginContainer">
        <head-top head-title="登录" goBack="true">
            <!-- <slot name="button"></slot> -->
        </head-top>
        <img :src="captchCodeImg" v-if= "captchCodeImg" alt="" style="margin-top:10rem"/>
    </div>
</template>
<script>
import headTop from '@/components/headTop'
import { getCaptchas } from '@/api/getData.js'
// 业务经验一： navigationBar的封装 history title 居中 右边的buttons
export default {
    data() {
        return{
            captchCodeImg: '',
            codeNumber: null
        }
    },
    components: {
        'head-top': headTop
    },
    methods: {
        async getCaptchaCode() {
            const res = await getCaptchas()
            console.log(res)
            this.captchCodeImg = res.code
            console.log(this.captchCodeImg)
        }
    },
    mounted() {
        this.getCaptchaCode()
    }
}
</script>
<style lang="stylus" scoped>

</style>
