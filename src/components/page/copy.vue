<template>
    <div class="copy">
        <div class="titles">
            <a-space>
                <el-date-picker v-model="value1" type="date" placeholder="选择日期" size="medium " format="yyyy-MM-dd"> </el-date-picker>
                <el-input v-model="input" placeholder="请输入内容" size="medium "></el-input>
                <el-button size="medium " @click="queryMyorderlist1">查询</el-button>
            </a-space>
        </div>
        <div class="table">
            <el-table :data="tableData.slice((currentPage - 1) * PageSize, currentPage * PageSize)" border style="width: 100%">
                <el-table-column type="index" label="序号"> </el-table-column>
                <el-table-column prop="orderSn" label="订单编号"> </el-table-column>
                <el-table-column prop="createTime" label="创建时间"> </el-table-column>
                <el-table-column prop="orderName" label="订单名称"> </el-table-column>
                <el-table-column prop="customerCode" label="客户代码"> </el-table-column>
                <el-table-column prop="createTime" label="保存时间"> </el-table-column>
                <el-table-column label="操作" width="180">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">复制订单信息</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="tabListPage">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="pageSizes"
                :page-size="PageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalCount"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
import { queryMyorderlist } from './../../api/ml';
export default {
    data() {
        return {
            value1: '',
            input: '',
            tableData: [],
            currentPage: 1,
            // 总条数，根据接口获取数据长度(注意：这里不能为空)
            totalCount: 1,
            // 个数选择器（可修改）
            pageSizes: [10, 20, 30, 40],
            // 默认每页显示的条数（可修改）
            PageSize: 10
        };
    },
    mounted() {},
    methods: {
        queryMyorderlist1() {
            queryMyorderlist({
                token: this.$store.getters.getToken,
                pageNo: 1,
                queryTime: this.value1,
                queryName: this.input
            }).then((res) => {
                console.log(res);
                this.tableData = res.data.records;
                this.$set(this.tableData);
                this.totalCount = this.tableData.length;
            });
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        // 分页
        // 每页显示的条数
        handleSizeChange(val) {
            // 改变每页显示的条数
            this.PageSize = val;
            // 注意：在改变每页显示的条数时，要将页码显示到第一页
            this.currentPage = 1;
        },
        // 显示第几页
        handleCurrentChange(val) {
            // 改变默认的页数
            this.currentPage = val;
        }
    }
};
</script>

<style scoped>
.tabListPage {
    float: right;
    margin-right: 20px;
}
.table {
    width: 1200px;
    margin: 10px auto;
}
.titles {
    margin-left: 10px;
    padding-top: 10px;
}
.copy {
    margin: 20px auto;
    width: 1257px;
    min-height: 900px;
    background-color: #ffffff;
}
</style>