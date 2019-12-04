<template>
  <div id="app">
    <div class="app_header">
      <data-header></data-header>
    </div>
    <div class="app_content">
      <div class="app_nav">
        <side-nav></side-nav>
      </div>
      <div class="app_right">
        <!-- <div class="breadcrumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{pathName}}</el-breadcrumb-item>

          </el-breadcrumb>
        </div> -->
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
import DataHeader from './components/common/DataHeader.vue'
import SideNav from './components/common/SideNav.vue'
// import Nothing from './components/common/Nothing.vue'

export default {
  name: 'app',
  data () {
    return {
      pathName: this.$route.name,
    }
  },
  components:{
    DataHeader,
    SideNav,
    // Nothing
  },
  watch: {
    '$route': function(){
      this.pathName = this.$route.name;

    }
  }
}
</script>

<style>

  #app{
    height: 100%;
    margin: 0;
    display: flex;
    flex-flow: column;
  }
  .app_nav{
    overflow-y: auto;
    height: 850px;
  }
  .app_nav::-webkit-scrollbar {
    display: none;/*隐藏滚动条*/
  }
  .app_header{
    position: relative;
    flex: 0 0 auto;
    z-index: 2;
  }
  .app_header .title{
    margin-left: 16px;
    color: #fff;
  }
  .app_content{
    flex: 1;
    display: flex;
    flex-flow: row;
  }
  .app_nav{
    position: relative;
    flex: 0 0 162px;
    background: #ffffff;
    border-right: 1px solid #dddddd;
    padding: 5px; 
  }
  .app_right{
    flex: 1;
    overflow: auto;
    padding: 20px;

  }
  .breadcrumb{
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }
</style>
