<template>
    <div>
        <el-form style="margin: 20px;" :inline="true" :model="formInline" class="demo-form-inline">
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
            <el-form-item label="设备组类型：">
                <el-select v-model="formInline.region" placeholder="">
                <el-option label="" value=""></el-option>
                <el-option label="所有设备" value="shanghai"></el-option>
                <el-option label="根据厂商编号" value="beijing"></el-option>
                <el-option label="根据设备编号" value="shenzhen"></el-option>
                <el-option label="根据自定义规则" value="guangzhou"></el-option>
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
            prop="ID"
            label="设备组编号"
            width="180">
            </el-table-column>
            <el-table-column
            prop="date"
            label="创建时间"
            width="180">
            </el-table-column>
            <el-table-column
            prop="creator"
            label="创建者">
            </el-table-column>
            <el-table-column
            prop="name"
            label="设备组名称">
                <template scope="scope">
                    <el-button
                    size="small"
                    type="text"
                    @click="handleEdit(scope.$index, scope.row)">Black Mifi</el-button>
                </template>
            </el-table-column>
            <el-table-column
            prop="type"
            label="设备组类型">
            </el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <el-button
                    size="small"
                    type="text"
                    @click="handleEdit(scope.$index, scope.row)">组配置</el-button>
                    <el-button
                    size="small"
                    type="text"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="10"
            layout="total, prev, pager, next"
            :total="100">
        </el-pagination>
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
        tableData: [{
          ID: '1',
          date: '2019-10-24 22:24:36',
          creator: 'redroverltd',
          name: 'Black Mifi',
          type: '根据厂商编号',
          operate: ''
        }]
      };
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
    };
</script>
