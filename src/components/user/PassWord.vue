<template>
    <div style="margin: 20px 0 0 70px;">
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="当前密码：" prop="pass">
                <el-input class="from_info" type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="新密码：" prop="checkPass">
                <el-input class="from_new" type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="新密码确认：" prop="newPassword">
                <el-input class="from_success" type="password" v-model="ruleForm2.newPassword"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'));
        }else{
          callback();
        }
        // setTimeout(() => {
        //   if (!Number.isInteger(value)) {
        //     callback(new Error('请输入数字值'));
        //   } else {
        //     if (value < 18) {
        //       callback(new Error('必须年满18岁'));
        //     } else {
        //       callback();
        //     }
        //   }
        // }, 1000);
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.newPassword !== '') {
            this.$refs.ruleForm2.validateField('newPassword');
          }
          callback();
        }
      };
      var checkNewPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.checkPass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          newPassword: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          newPassword: [
            { validator: checkNewPass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
    .from_info{
        width: 220px;
    }
    .from_new{
        width: 220px;
    }
    .from_success{
        width: 220px;
    }
</style>