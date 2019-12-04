<template>
    <div>
      <div class="tab_card">
        <el-tabs type="card" :active-name="activeName">
            <el-tab-pane label="角色菜单" name="first">
                <role-menu></role-menu>
            </el-tab-pane>
            <el-tab-pane label="新建角色" name="second">
                <new-role></new-role>
            </el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script>
import RoleMenu from './RoleMenu.vue';
import NewRole from './NewRole.vue';

  export default {
    data() {
      return {
        activeName: 'first',
      }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    },
    components: {
        RoleMenu,
        NewRole
    }
  };
</script>

<style scoped>
    .tree_wrap{
        width: 110px;
        margin: 20px 10px 0 5px;
        float: left;
    }
    .tab_card{
        float: left;
        margin-top: 20px;
    }
</style>