<template>
    <div>
        <h2>{{msg}}</h2>
        <router-view></router-view>
    </div>
</template>
<style>


</style>

<script>
export default {
    name: 'hi',
    data() {
        return {
            msg: '我是hi页面'
        }
    }

}
</script>


