<template>
  <div class="testUser">
    <div class="function">
      <!-- <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="请输入用户ID名称"
              icon="search"
              v-model="input">
            </el-input>
          </div>
        </el-col>
        <el-col :span="20">
          <el-button type="primary">新建测试</el-button>
        </el-col>
      </el-row> -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="厂商码 :">
          <el-select size="small" style="width: 100px;" v-model="formInline.region" placeholder="Nothing">
            <el-input size="small" style="width: 75px; margin-left: 5px;" v-model="formInline.search" placeholder=""></el-input>
            <el-option label="998877" value="00"></el-option>
            <el-option label="E47DEB" value="01"></el-option>
            <el-option label="005043" value="02"></el-option>
            <el-option label="A89352" value="03"></el-option>
            <el-option label="5CF286" value="04"></el-option>
            <el-option label="48BF74" value="05"></el-option>
            <el-option label="526566" value="06"></el-option>
            <el-option label="526564" value="07"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品类型 :">
          <el-input size="small" v-model="formInline.user" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="IMEI :">
          <el-input size="small" v-model="formInline.user" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="序列号 :">
          <el-input size="small" v-model="formInline.user" placeholder=""></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="margin-left: 10px;" type="info" @click="onSubmit">导出</el-button>
          <el-button type="info" @click="onSubmit">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div id="table">
      <el-table
        :data="tableData"
        stripe
        border
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="id"
          label="序列号">
        </el-table-column>
        <el-table-column
          prop="imei"
          label="IMEI">
        </el-table-column>
        <el-table-column
          prop="testName"
          label="厂商码">
        </el-table-column>
        <el-table-column
          prop="types"
          label="产品类型">
        </el-table-column>
        <el-table-column
          prop="testUser"
          label="厂商">
        </el-table-column>
        <el-table-column
          prop="projectID"
          label="软件版本">
        </el-table-column>
        <el-table-column
          prop="create"
          label="CP软件版本">
        </el-table-column>
        <el-table-column
          prop="lastUpdate"
          label="注册时间">
        </el-table-column>
        <!-- <el-table-column
          prop="status"
          label="全部状态">
        </el-table-column> -->

        <el-table-column
          :context="_self"
          inline-template
          label="操作">
          <span>
            <el-button @click="handleClick" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </span>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import tableData from '../../mock/testProject.js';
  export default {
    data(){
      return {
        input: '',
        tableData,
        formInline: {
          user: '',
          region: ''
        }
      }

    },
    methods: {
      handleClick: function(){
        alert('click');
      },
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style media="screen">

</style>
