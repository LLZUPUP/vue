<template>
    <div class="app-container">
        <div class="filter-container">
            <el-select v-model="listQuery.importance" placeholder="重要性" class="filter-item">
                <el-option v-for="item in importanceOption" :key="item" :label="item" :value="item"></el-option>
            </el-select>
            <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
        </div>
        <el-table :data="list" v-loading="listLoading">
            <el-table-column label="序号" align="center" width="65">
                <template slot-scope="scope">
                    <span>{{scope.row.id}}</span>
                </template>
            </el-table-column>
            <el-table-column label="重要性" align="center" width="65">
                <template slot-scope="scope">
                    <span>{{scope.row.importance}}</span>
                </template>
            </el-table-column>
            <el-table-column label="日期" align="center" width="150">
                <template slot-scope="scope">
                    <span>{{scope.row.timestamp}}</span>
                </template>
            </el-table-column>
            <el-table-column label="标题" min-width="150">
                <template slot-scope="scope">
                    <span>{{scope.row.title}}</span>
                </template>
            </el-table-column>
            <el-table-column label="作者" align="center" width="110">
                <template slot-scope="scope">
                    <span>{{scope.row.author}}</span>
                </template>
            </el-table-column>
            <el-table-column label="阅读数" align="center" width="95">
                <template slot-scope="scope">
                    <span>{{scope.row.pageviews}}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center" width="230" class="small-padding fixed-width">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="pagination-container">
            <el-pagination :currentPage="listQuery.page" :page-size="listQuery.limit" :total="total" 
            layout="total,sizes,prev,pager,next,jumper" 
            @current-change="handleCurrentChange">

            </el-pagination>
        </div>
        <el-dialog title="Edit" :visible.sync="dialogFormVisible">
            <el-form :model="temp" label-position="left" label-width="70" style="width:400px;margin-left:50px;">
                <el-form-item prop="type" label="类型">
                    <el-input v-model="temp.type"></el-input>
                </el-form-item>
                <el-form-item prop="timestamp" label="时间">
                    <el-input v-model="temp.timestamp"></el-input>
                </el-form-item>
                <el-form-item prop="title" label="标题">
                    <el-input v-model="temp.title"></el-input>
                </el-form-item>
                <el-form-item prop="status" label="状态">
                    <el-input v-model="temp.status"></el-input>
                </el-form-item>
                <el-form-item prop="importance" label="重要性">
                    <el-input v-model="temp.importance"></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible=false">取消</el-button>
                <el-button @click="updateData">保存</el-button>
            </div>

        </el-dialog>
    </div>
</template>
<script>
import { fetchList } from '@/api/article'
export default {
    data() {
        return {
            importanceOption: [1,2,3],
            total: 0,
            listLoading: false,
            dialogFormVisible: false,
            temp: {
                id: null,
                importance: 1,
                remark: '',
                timestamp: new Date(),
                title: '',
                type: '',
                status: 'published'
            },//弹窗里的表单model
            list: [],
            listQuery: {
                title: undefined,
                importance: undefined,
                type: undefined,
                sort: "+id",
                page: 1,
                limit: 20
            }
        }
    },
    methods: {
        handleFilter() {
            this.listQuery.page = 1;
            this.getList();
        },
        handleCurrentChange(page) {
            this.listQuery.page = page;
            this.getList();
        },
        updateData() {

            this.dialogFormVisible = false;
        },
        handleUpdate(row) {
            this.temp = Object.assign({},row);
            console.log(this.temp)
            this.dialogFormVisible = true;
        },
        getList() {
            this.listLoading = true
            fetchList(this.listQuery).then(res=>{
                this.list = res.data.items
                this.total = res.data.total
                setTimeout(()=>{
                    this.listLoading = false
                },2000)
            })
        }
    },
    created() {
        this.getList()
    }
}
</script>
<style>

</style>
