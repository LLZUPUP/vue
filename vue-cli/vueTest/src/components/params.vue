<template>
    <div>
        <h2>{{msg}}</h2>
        <p>newsId: {{$route.params.newsId}}</p>
        <p>newsTitle: {{$route.params.newsTitle}}</p>
        <p></p>
    </div>
</template>
<style>

</style>

<script>
export default {
    data(){
        return {
            msg: 'params page'
        }
    },
    beforeRouteEnter: (to,from,next)=>{
        console.log('准备进入params路由模版')
        next()
    },
    beforeRouteLeave: (to,from,next)=> {
        console.log('准备离开params路由模版')
        next()
    }
}
</script>
