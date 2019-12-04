<template>
    <div class="login_wrap">
        <!-- <span>用户名：</span>
        <el-input type="text" v-model="input" placeholder="username"></el-input>
        <span>密码：</span>
        <el-input type="password" v-model="pass" placeholder="password"></el-input> -->
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="用户名：">
            <el-input class="login_user" type="text" v-model="formLabelAlign.user"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
            <el-input class="login_pass" type="password" v-model="formLabelAlign.pass"></el-input>
        </el-form-item>
        </el-form>
        <el-button type="info">登录</el-button>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          user: '',
          pass: ''
        }
      };
    }
  }
</script>

<style scoped>
    .login_user{
        width: 220px;
    }
    .login_pass{
        width: 220px;
    }
</style>