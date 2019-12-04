<template>
    <div>
        <el-form style="margin: 20px;" :inline="true" :model="formInline" class="demo-form-inline">
            <!-- <div class="block"> -->
                <!-- <span class="demonstration">创建时间：</span>
                <el-date-picker
                    v-model="value6"
                    type="daterange"
                    placeholder="选择日期范围">
                </el-date-picker> -->
            <!-- </div> -->

            <el-form-item label="厂商码：">
                <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="产品类型：">
                <el-input v-model="formInline.region" placeholder=""></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="info" @click="onSubmit">搜索</el-button>
            </el-form-item>
        </el-form>
        <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
            prop="date"
            label="日期"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="180">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址">
            </el-table-column>
        </el-table>
          <!-- <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            label="日期"
            width="180">
            <template scope="scope">
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="姓名"
            width="180">
            <template scope="scope">
                <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
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
        </el-table> -->
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
