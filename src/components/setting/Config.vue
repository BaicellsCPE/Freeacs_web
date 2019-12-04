<template>
    <div>
        <el-form style="margin-left: 100px; margin-top: 20px;" ref="form" :model="form" label-width="80px">
            <el-form-item style="width: 500px;" label="设备连接: "></el-form-item>
            <el-form-item label="认证类型: ">
                <el-select size="small" style="width: 100px;" v-model="form.type" placeholder="请选择">
                <el-option label="None" value="None"></el-option>
                <el-option label="Basic" value="Basic"></el-option>
                <el-option label="MD5" value="MD5"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Inform上报周期: "></el-form-item>
            <el-form-item label="同时升级数: ">
                <el-input style="width: 200px;" :disabled="true" size="small" v-model="form.meanwhile"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="info" @click="onSubmit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
            type: 'Basic',
            meanwhile: '36'
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>