<template>
    <div style="width: 1200px;">
      <div class="tree_wrap">
        <el-tree style="border: none;"
            :data="data" :props="defaultProps" 
            @node-click="handleNodeClick">
        </el-tree>
      </div>
      <div class="tab_card">
        <el-tabs type="card" :active-name="activeName">
            <el-tab-pane label="用户列表" name="first">
                <user-lists></user-lists>
            </el-tab-pane>
            <el-tab-pane label="新建用户" name="second">
                <new-users></new-users>
            </el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script>
import UserLists from './UserLists.vue';
import NewUsers from './NewUsers.vue';

  export default {
    data() {
      return {
        activeName: 'first',

        data: [{
          label: '超级管理员',
          children: [{
            label: '管理员',
            children: [{
              label: 'Admin'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    },
    components: {
        UserLists,
        NewUsers
    }
  };
</script>

<style scoped>
    .tree_wrap{
        width: 110px;
        margin: 20px 10px 0 5px;
        float: left;
        height: 800px;
        border-right: 1px solid #dddddd;
    }
    .tab_card{
        float: left;
        margin-top: 20px;
    }
</style>