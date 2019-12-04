<template>
    <div style="margin-left: 120px; margin-top: 20px;">
        <el-form :label-position="labelPosition" label-width="80px" :model="form">
            <el-form-item label="机构名称: ">
                <el-input v-model="form.organization "></el-input>
            </el-form-item>
            <el-form-item label="类型: ">
                <el-select :disabled="true" v-model="form.region" placeholder="Company">
                    <el-option label="Department" value="shanghai"></el-option>
                    <el-option label="Company" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="备注: ">
                <el-input type="textarea" :rows="3" v-model="form.message"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="info" @click="submitForm('ruleForm2')">提交</el-button>
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
        form: {
          organization: '',
          type: '',
          message: ''
        }
      };
    }
  }
</script>