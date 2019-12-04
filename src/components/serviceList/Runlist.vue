<template>
    <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <!-- <div class="block"> -->
                <span class="demonstration">创建时间：</span>
                <el-date-picker
                    v-model="value6"
                    type="daterange"
                    placeholder="选择日期范围">
                </el-date-picker>
            <!-- </div> -->

            <el-form-item label="设备组名称：">
                <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="服务组名称：">
                <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="执行时间：">
                <el-select v-model="formInline.region" placeholder="">
                <el-option label="" value=""></el-option>
                <el-option label="立即执行" value="immediate"></el-option>
                <el-option label="Inform周期执行" value="cycle"></el-option>
                <el-option label="指定时间段执行" value="Specified"></el-option>
                </el-select>
            </el-form-item><el-form-item>
                <el-button type="info" @click="onSubmit">搜索</el-button>
            </el-form-item>
        </el-form>
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            label="编号"
            width="180">
            <template scope="scope">
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="创建时间"
            width="180">
            <template scope="scope">
                <el-popover trigger="hover" placement="top">
                <p>编号: {{ scope.row.name }}</p>
                <p>创建时间: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                    <el-tag>{{ scope.row.name }}</el-tag>
                </div>
                </el-popover>
            </template>
            </el-table-column>
            <el-table-column label="操作">
            <template scope="scope">
                <el-button
                size="small"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        value6: '',
        formInline: {
          user: '',
          region: ''
        },
        //   tableData: [{
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // }, {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // }, {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // }]
      };
    },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    };
</script>
