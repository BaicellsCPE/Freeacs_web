<template>
    <div>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="roleName"
            label="角色名称"
            width="180">
            </el-table-column>
            <el-table-column
            prop="tissue"
            label="组织"
            width="180">
            </el-table-column>
            <el-table-column
            prop="envelop"
            label="功能范围"
            width="180">
            </el-table-column>
            <el-table-column width="180" label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          roleName: 'Admin_Role',
          tissue: 'Admin',
          envelop: '全部数据'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>