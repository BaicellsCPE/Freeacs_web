<template>
    <div>
        <el-form style="margin: 20px;" :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="操作方法：">
                <el-input style="width: 110px;" size="small" v-model="formInline.operational" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="操作人：">
                <el-input style="width: 110px;" size="small" v-model="formInline.operator" placeholder=""></el-input>
            </el-form-item>
            <el-form-item>
                <el-button size="small" type="info" @click="onSubmit">搜索</el-button>
                <el-button size="small" type="info" @click="onSubmits">导出</el-button>
            </el-form-item>
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                prop="client"
                label="客户"
                width="180">
                </el-table-column>
                <el-table-column
                prop="section"
                label="部门"
                width="180">
                </el-table-column>
                <el-table-column
                prop="operator"
                label="操作人">
                </el-table-column>
                <el-table-column
                prop="operational"
                label="操作方法">
                </el-table-column>
                <el-table-column
                prop="operationIP"
                label="操作IP">
                </el-table-column>
                <el-table-column
                prop="operationTime"
                label="操作时间">
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage1"
                :page-size="100"
                layout="total, prev, pager, next"
                :total="1000">
            </el-pagination>
        </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          operational: '',
          operator: ''
        },
        currentPage1: 5,
        tableData: [{
          client: '超级管理员',
          section: 'Admin',
          operator: 'Redroverltd',
          operational: 'Delete device [L02B16091400203]',
          operationIP: '172.221.48.123',
          operationTime: '2019-10-30 02:22:07'
        },{
          client: '超级管理员',
          section: 'Admin',
          operator: 'Redroverltd',
          operational: 'Delete device [L02B16091400203]',
          operationIP: '172.221.48.123',
          operationTime: '2019-10-30 02:22:07'
        },{
          client: '超级管理员',
          section: 'Admin',
          operator: 'Redroverltd',
          operational: 'Delete device [L02B16091400203]',
          operationIP: '172.221.48.123',
          operationTime: '2019-10-30 02:22:07'
        },{
          client: '超级管理员',
          section: 'Admin',
          operator: 'Redroverltd',
          operational: 'Delete device [L02B16091400203]',
          operationIP: '172.221.48.123',
          operationTime: '2019-10-30 02:22:07'
        }]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      onSubmits() {
        console.log('submits!');
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>