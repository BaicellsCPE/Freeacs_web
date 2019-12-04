<template>
  <div id="testManagement">
    <el-tabs :active-name="activeName">
      <el-tab-pane label="设备（TR069）" name="first">
        <test-project></test-project>
      </el-tab-pane>
      <!-- <el-tab-pane label="设备（Fota）" name="second">
        <test-user></test-user>
      </el-tab-pane> -->
      <el-pagination
        @size-change="handleSizeChange"
        
        
        :page-size="10"
        layout="total, prev, pager, next"
        :total="1000">
      </el-pagination>
    </el-tabs>
  </div>
</template>

<script>
  // import Nothing from '../common/Nothing.vue';
  import TestProject from './TestProject.vue';
  // import TestUser from './TestUser.vue'
  export default{
    data(){
      return {
          activeName: 'first',
      }
    },
    components:{
      // Nothing,
      TestProject,
      // TestUser
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
    }
  } 
</script>

<style>
  .el-tabs{
    width: 100%;
  }
</style>
