<template>
    <div>
        <el-form style="margin: 20px;" :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="厂商：">
                <el-select style="width: 300px;" size="small" v-model="formInline.manufacturer" placeholder="">
                    <el-option label="" value=""></el-option>
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
            <el-form-item label="服务模型名称：">
                <el-input size="small" v-model="formInline.moduleName" placeholder=""></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="info" @click="onSubmit">搜索</el-button>
            </el-form-item>
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                prop="manufacturer"
                label="厂商"
                width="180">
                </el-table-column>
                <el-table-column
                prop="moduleName"
                label="服务模型名称"
                width="180">
                </el-table-column>
                <el-table-column
                prop="date"
                label="创建时间">
                </el-table-column>
                <el-table-column
                prop="operate"
                label="操作">
                </el-table-column>
            </el-table>
        </el-form>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="1000">
        </el-pagination>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          manufacturer: '',
          moduleName: ''
        },
        tableData: [{
            manufacturer: '',

        }],
        currentPage1: 5
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
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