<template>
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
      prop="type"
      label="类型"
      width="180">
    </el-table-column>
    <el-table-column
      prop="message"
      label="备注"
      width="180">
    </el-table-column>
    <el-table-column
      prop="operate"
      label="操作"
      width="180">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          client: '',
          type: '',
          message: '',
          operate: ''
        }]
      }
    }
  }
</script>