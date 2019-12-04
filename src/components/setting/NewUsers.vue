<template>
    <div style="margin-left: 120px;">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="客户 ">
                <el-input size="small" v-model="formLabelAlign.client">
                    <el-button slot="append" icon="search"></el-button>
                </el-input>
            </el-form-item>
            <el-form-item label="部门 ">
                <el-input size="small" v-model="formLabelAlign.section">
                    <el-button slot="append" icon="search"></el-button>
                </el-input>
            </el-form-item>
            <el-form-item label="用户名 " :rules="[{ required: true}]">
                <el-input size="small" v-model="formLabelAlign.userName"></el-input>
            </el-form-item>
            <el-form-item label="登录名 " :rules="[{ required: true}]">
                <el-input size="small" v-model="formLabelAlign.name"></el-input>
            </el-form-item>
              <el-form-item label="密码 " prop="pass" :rules="[{ required: true, message: '请输入密码',}]">
                <el-input size="small" type="password" v-model="formLabelAlign.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码 " prop="checkPass" :rules="[{ required: true, message: '请再次输入密码',}]">
                <el-input size="small" type="password" v-model="formLabelAlign.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item
                prop="email"
                label="邮箱 "
                :rules="[
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                ]"
            >
                <el-input size="small" v-model="dynamicValidateForm.email"></el-input>
            </el-form-item>
            <el-form-item label="IP ">
                <el-input size="small" class="input_IP" v-model="formLabelAlign.IP"></el-input>
            </el-form-item>
              <el-form-item label="允许登录" prop="region">
                <el-select size="small" v-model="formLabelAlign.login" placeholder="请选择">
                    <el-option label="是" value="yes"></el-option>
                    <el-option label="否" value="no"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="角色 ">
                <!-- `checked` 为 true 或 false -->
                <el-checkbox v-model="checked">Admin_Role</el-checkbox>
            </el-form-item>
            <el-form-item label="备注 ">
                <el-input class="input_message" :rows="3" type="textarea" v-model="formLabelAlign.message"></el-input>
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
        // 密码验证
        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.formLabelAlign.checkPass !== '') {
            this.$refs.formLabelAlign.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.formLabelAlign.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
      return {
        labelPosition: 'right',
        formLabelAlign: {
          client: '',
          section: '',
          userName: '',
          name: '',
          pass: '',
          checkPass: '',
          IP: '',
          login: 'yes'
        },
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        },
        checked: true
        // rules2: {
        //   pass: [
        //     { validator: validatePass, trigger: 'blur' }
        //   ],
        //   checkPass: [
        //     { validator: validatePass2, trigger: 'blur' }
        //   ]
        // }
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
