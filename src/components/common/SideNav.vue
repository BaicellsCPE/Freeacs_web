<template>

  <el-col>
    <el-menu default-active="/testManagement" class="el-menu-vertical-demo" router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-information"></i>设备管理</template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="/index/testManagement">设备列表</el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组二">
          <el-menu-item index="/index/userList">用户信息</el-menu-item>
        </el-menu-item-group> -->
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-time"></i>服务管理</template>
        <el-menu-item-group>
          <el-menu-item index="/index/userGroup">设备组</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/index/serviceList">服务列表</el-menu-item>
          <el-menu-item index="/index/parameters">参数服务</el-menu-item>
          <el-menu-item index="/index/restart">重启服务</el-menu-item>
          <el-menu-item index="/index/reset">恢复出厂</el-menu-item>
          <el-menu-item index="/index/update_one">升级服务（TR069）</el-menu-item>
          <!-- <el-menu-item index="/index/update_two">升级服务（Fota）</el-menu-item> -->
          <el-menu-item index="/index/diagnostic">诊断服务</el-menu-item>
          <el-menu-item index="/index/APN">APN设置</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/index/runlist">服务运行列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-document"></i>设备厂商</template>
        <el-menu-item-group>
          <el-menu-item index="/index/transceiver">厂商</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-circle-check"></i>文件管理</template>
        <el-menu-item-group>
          <el-menu-item index="/index/fileManager">固件列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-message"></i>用户信息</template>
        <el-menu-item-group>
          <el-menu-item index="/index/userList">用户信息</el-menu-item>
          <el-menu-item index="/index/password">密码修改</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title"><i class="el-icon-date"></i>报表</template>
        <el-menu-item-group>
          <el-menu-item index="/index/report">厂商占比</el-menu-item>
          <el-menu-item index="/index/vendorList">厂商列表</el-menu-item>
          <el-menu-item index="/index/module">模块占比</el-menu-item>
          <el-menu-item index="/index/moduleNumber">模块设备数</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/index/software">设备软件</el-menu-item>
          <el-menu-item index="/index/curve">设置注册曲线</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
        <el-menu-item-group>
          <el-menu-item index="/index/users">用户管理</el-menu-item>
          <el-menu-item index="/index/customer">客户管理</el-menu-item>
          <el-menu-item index="/index/roleBased">角色管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/index/config">ACS配置</el-menu-item>
          <el-menu-item index="/index/manufacturers">厂商服务</el-menu-item>
          <el-menu-item index="/index/parametric">参数模型</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/index/menu">菜单管理</el-menu-item>
          <el-menu-item index="/index/dictionary">字典管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/index/log">日志查看</el-menu-item>
          <el-menu-item index="/index/dbcp">数据库连接池</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-menu-item index="/index/userList"><i class="el-icon-message"></i>用户信息</el-menu-item> -->
      <!-- <el-menu-item index="/index/help"><i class="el-icon-date"></i>报表</el-menu-item> -->
      <!-- <el-menu-item index="/index/feedback"><i class="el-icon-setting"></i>系统设置</el-menu-item> -->
    </el-menu>
  </el-col>

</template>

<style scoped>
  .el-menu{
    background-color: #ffffff;
  }
  .el-menu-item{
    width: 100px;
  }
  .el-menu-item-group{
    background-color: #ffffff;
  }
</style>