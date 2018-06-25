<template>
    <div class="articles">
        <v-article :details= "detail"></v-article>
    </div>
</template>

<script>
import Article from '@/components/article/article'
import axios from 'axios';
export default {
    data() {
        return {
            detail: []
        }
    },
    components: {
        "v-article": Article
    },
    created() {
        axios.get('https://www.easy-mock.com/mock/5af03acc957fd4308a30b9d8/api/articles#!method=get')
            .then((res)=>{
                this.detail = res.data.data.article;
                console.log(this.detail)
            })
            .catch((error)=>{
                console.log(error)
            })
    }
}
</script>

<style>

</style>
