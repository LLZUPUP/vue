<template>
    <div>
        <comment-form @addComment="addComment"></comment-form>
        <comment-list :list="list"></comment-list>
        <pagination :totalCount="totalCount" :currentPage="currentPage" :pagesize="pagesize" @turnPage="turnPage"></pagination>

    </div>
</template>
<script>
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import Pagination from './PagiNation'
export default {
    data() {
        return {
            // totalData 所有的数据 => 当前页面的评论
            list: [],
            pagesize: 3,
            totalData: [],
            totalCount: 0,
            currentPage: 1
        }
    },
    components: {
        CommentForm,
        CommentList,
        Pagination
    },
    methods: {
        addComment(msg) {
            this.totalCount = this.totalData.length+1;
            if(this.totalCount <this.pagesize) {
                this.list.reverse();
                this.totalData.push(msg);
                this.list = this.totalData
            }else {
                this.list.reverse();
                this.totalData.push(msg);
                this.list=this.totalData.slice(this.totalCount-this.pagesize)
                // this.list.reverse();
            }
            this.list.reverse();
            this.currentPage = 1;
        },
        turnPage(curr) {
            console.log(curr)
        }
    }
}
</script>
<style>
.input-area {
  color: #000;
  font-size: 15px;
  margin: 10px auto;
  width: 300px;
}
.input-area .user {
  border: 1px solid blue;
  width: 100px;
  display: block;
  margin-bottom: 10px;
}
.input-area .textarea {
  border: 1px solid blue;
  width: 100px;
  height: 100px;
  display: block;
  margin-bottom: 10px;
}
</style>
