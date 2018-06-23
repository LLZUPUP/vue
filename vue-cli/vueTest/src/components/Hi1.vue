<template>
    <div>
        <h2>{{msg}}--{{$route.params.username}}</h2>
    </div>
</template>
<style>


</style>

<script>
export default {
    name: 'hi1',
    data() {
        return {
            msg: '我是hi 1页面'
        }
    }

}
</script>


