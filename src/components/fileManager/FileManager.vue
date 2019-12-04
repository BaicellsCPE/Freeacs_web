<template>
  <div id="testManagement">
    <el-tabs type="card" :active-name="activeName">
      <el-tab-pane label="软件列表" name="first">
          <file-list></file-list>
      </el-tab-pane>
      <el-tab-pane label="新增" name="second">
          <new-file></new-file>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  // import Nothing from '../common/Nothing.vue';
  import FileList from './FileList.vue';
  import NewFile from './NewFile.vue';
  export default{
    data(){
      return {
        activeName: 'first',
      }
    },
    components:{
    //   Nothing,
      FileList,
      NewFile
    },
  } 
</script>

<style>
  .el-tabs{
    width: 100%;
  }
</style>
