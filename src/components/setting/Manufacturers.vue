<template>
    <div>
      <div class="tab_card">
        <el-tabs type="card" :active-name="activeName">
            <el-tab-pane label="服务模型列表" name="first">
                <module-list></module-list>
            </el-tab-pane>
            <el-tab-pane label="服务模型添加" name="second">
                <module-new></module-new>
            </el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script>
import ModuleList from './ModuleList.vue';
import ModuleNew from './ModuleNew.vue';

  export default {
    data() {
      return {
        activeName: 'first'
      }
    },
    components: {
        ModuleList,
        ModuleNew
    }
  };
</script>

<style scoped>
    .tab_card{
        float: left;
        margin-top: 20px;
    }
</style>