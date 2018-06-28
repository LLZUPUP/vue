<template>
    <form class="input-area">
        <label for="">用户名：</label>
        <input type="text" class="user" ref="username" placeholder="请输入用户名"/>
        <label for="">评论：</label>
        <textarea class="textarea" ref="content" placeholder="请输入评论内容" @keydown.enter.prevent="doComment"></textarea>
        <button type="button" @click="doComment" >提交</button>
    </form>
</template>
<script>

export default {
    methods: {
        doComment(val) {
            // val = '来自'
            const user = this.$refs.username.value;
            const content = this.$refs.content.value;
            const pubTime = new Date().toLocaleString();
            this.$emit('addComment',`${user}:${content},发布于${pubTime}`)
            this.$refs.username.value='';
            this.$refs.content.value='';
        }
    }
}
</script>
<style>

</style>
