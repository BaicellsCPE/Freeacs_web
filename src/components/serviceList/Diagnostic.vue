
<template>
    <div class="user_wrap">
        <el-radio-group v-model="labelPosition" size="small">
        </el-radio-group>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="服务组名 :">
                <el-input class="input_name" v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="服务类型 :">
                <el-input class="input_section" :disabled="true" v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="优先级 :">
                <el-input class="input_user" v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item label="厂商 :">
                <el-input class="input_email" v-model="formLabelAlign.email"></el-input>
            </el-form-item>
            <el-form-item label="备注 :">
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
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '诊断服务',
          type: '10',
          email: 'baicells',
          message: ''
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