<template>
    <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="客户：">
                <el-input style="width: 180px;" size="small" v-model="formInline.client" placeholder="" 
                    :on-icon-click="handleIconClick">
                  <el-button slot="append" icon="search"></el-button>
                </el-input>
            </el-form-item>
            <el-form-item label="部门：">
                <el-input style="width: 180px;" size="small" v-model="formInline.user" placeholder="" 
                :on-icon-click="handleIconClick">
                  <el-button slot="append" icon="search"></el-button>
            </el-input>
            </el-form-item>
            <el-form-item label="用户名：">
                <el-input size="small" v-model="formInline.region" placeholder="">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button size="small" type="info" @click="onSubmit">搜索</el-button>
            </el-form-item>
        </el-form>
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="clients"
              label="客户"
              width="110">
            </el-table-column>
            <el-table-column
              prop="section"
              label="部门"
              width="110">
            </el-table-column>
            <el-table-column
              prop="name"
              label="登录名"
              width="120">
              <template scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">redroverltd</el-button>
              </template>
            </el-table-column>
            <el-table-column
              prop="userName"
              label="用户名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="email"
              label="邮箱"
              width="180">
            </el-table-column>
            <el-table-column
              prop="IP"
              label="IP"
              width="150">
            </el-table-column>
            <el-table-column
              prop="status"
              label="状态"
              width="80">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="180">
              <template scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">重置密码</el-button>
                <el-button type="text" size="small">修改</el-button>
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              layout="total, prev, pager, next, jumper"
              :total="100">
            </el-pagination>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          client: '',
          user: '',
          region: ''
        },
        tableData: [{
          clients: '超级管理员',
          section: 'Admin',
          // name: 'redroverltd',
          userName: 'Redroverltd',
          email: 'steve@redroverltd.com',
          IP: '',
          status: 'nomal',
          operate: ''
        }, {
          clients: '超级管理员',
          section: 'Admin',
          // name: 'Sam_Rivas',
          userName: 'Sam_Rivas',
          email: 'samuel.rivas@desertsands.us',
          IP: '',
          status: 'nomal',
          operate: ''
        }],
        currentPage4: 4,
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleIconClick() {
        console.log('客户')
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