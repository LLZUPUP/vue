<template>
    <div></div>
</template>
<script>
import { cityGuess } from '@/api/getData'
export default {
    data() {
        return {
            geohash: ''
        }
    },
    async beforeMount() {
        // msite是由一个独立的项目组做的 多个spa 组成
        this.cityid=this.$route.params.cityid
        if(this.$route.query.geohash) {
            this.geohash = this.$route.query.geohash
        }else {
            const data = await cityGuess();
            console.log(data)
            this.geohash = `${data.latitude},${data.longitude}`
        }
        console.log(this.$route.query.geohash)
    }
}
</script>
<style lang="stylus" scoped>

</style>
