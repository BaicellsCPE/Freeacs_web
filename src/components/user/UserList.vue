<!-- 用户管理组件 -->

<template>
    <div class="user_wrap">
        <el-radio-group v-model="labelPosition" size="small">
        </el-radio-group>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="公司名称 :">
                <el-input class="input_name" v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="部门 :">
                <el-input class="input_section" v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="用户名 :">
                <el-input class="input_user" :disabled="true" v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item label="邮箱 :">
                <el-input class="input_email" v-model="formLabelAlign.email"></el-input>
            </el-form-item>
            <el-form-item label="备注 :">
                <el-input class="input_message" :rows="3" type="textarea" v-model="formLabelAlign.message"></el-input>
            </el-form-item>
            <el-form-item label="用户角色 :">
                <el-input class="input_role" v-model="formLabelAlign.role"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="info" @click="submitForm('ruleForm2')">保存</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '柏才邦技术有限公司',
          region: 'Admin',
          type: 'Baicells',
          email: 'baicells@baicells.com',
          message: '',
          role: 'Admin_role'
        }
      };
    }
  }
</script>

<style scoped>
    .user_wrap{
        margin: 10px 0 0 70px;
    }
    .input_name{
        width: 220px;
    }
    .input_section{
        width: 220px;
    }
    .input_user{
        width: 220px;
    }
    .input_email{
        width: 220px;
    }
    .input_message{
        width: 320px;
    }
    .input_role{
        width: 220px;
    }
</style>