<template>
    <div>
        <el-col :span="24" class="pagination">
            <el-pagination  layout="prev,pager,next" @current-change="handleCurrentPage" :current-page="currentPage" :page-size="pagesize" :total="totalCount" style="float:right">
            </el-pagination>
        </el-col>
        

    </div>
</template>
<script>

export default {
    data() {
        return {
            // page :
        }
    },
    props: ['totalCount','currentPage','pagesize'],
    methods: {
        handleCurrentPage(val) {
            this.$emit('turnPage',val)
        }
    }
}
</script>
<style>

</style>
