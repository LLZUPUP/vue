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
    }
}
</script>
