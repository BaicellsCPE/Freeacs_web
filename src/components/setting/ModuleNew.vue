<template>
    <div>
        <el-form style="margin-left: 100px; margin-top: 20px;" ref="form" :model="form" label-width="80px">
            <el-form-item style="width: 500px;" label="模型配置: "></el-form-item>
            <el-form-item label="厂商: ">
                <el-select style="width: 300px;" size="small" v-model="form.type" placeholder="">
                <el-option label="239-998877-LS02I_MIFI" value="1"></el-option>
                <el-option label="237-E47DEB-Product class" value="2"></el-option>
                <el-option label="235-005043-Product class" value="3"></el-option>
                <el-option label="233-A89352-IDU/CN62XX/MT021e" value="4"></el-option>
                <el-option label="231-5CF286-Product class" value="5"></el-option>
                <el-option label="229-48BF74-IDU/EG2030C-M1/MLH3541" value="6"></el-option>
                <el-option label="227-526566-L02IRedRover_US_256" value="7"></el-option>
                <el-option label="225-526564-L02BRedRover_USA_256M" value="8"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="模型名称: ">
                <el-input style="width: 220px;" size="small" v-model="form.meanwhile"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="info" @click="onSubmit">下一步</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
            type: '239-998877-LS02I_MIFI',
            meanwhile: ''
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