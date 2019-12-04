
import TestManagement from './components/testManagement/TestManagement.vue';
import UserGroup from './components/userGroup/UserGroup.vue';
import Report from './components/report/Report.vue';
import UserList from './components/user/UserList.vue';
import PassWord from './components/user/PassWord.vue';
import Transceiver from './components/transceiver/transceiver.vue';
import FileManager from './components/fileManager/fileManager.vue';
import Login from './components/login/Login.vue';
import ServiceList from './components/serviceList/ServiceList.vue';
import Parameters from './components/serviceList/Parameters.vue';
import Restart from './components/serviceList/Restart.vue';
import Reset from './components/serviceList/Reset.vue';
import Update_one from './components/serviceList/Update_one.vue';
import Update_two from './components/serviceList/Update_two.vue';
import Diagnostic from './components/serviceList/Diagnostic.vue';
import APN from './components/serviceList/APN.vue';
import Runlist from './components/serviceList/Runlist.vue';
import VendorList from './components/report/VendorList.vue';
import Module from './components/report/Module.vue';
import ModuleNumber from './components/report/ModuleNumber.vue';
import Software from './components/report/Software.vue';
import Curve from './components/report/Curve.vue';
import Users from './components/setting/Users.vue';
import Customer from './components/setting/Customer.vue';
import RoleBased from './components/setting/RoleBased.vue';
import Config from './components/setting/Config.vue';
import Manufacturers from './components/setting/Manufacturers.vue';
import Parametric from './components/setting/Parametric.vue';
import Menu from './components/setting/Menu.vue';
import Dictionary from './components/setting/Dictionary.vue';
import Log from './components/setting/Log.vue';
import Dbcp from './components/setting/Dbcp.vue';
import App from './App.vue';
export default [{
        path: '/index',
        component: App,
        children: [
            {
              name: '设备管理',
              path: 'testManagement',
              component: TestManagement
            },
            {
              name: '服务管理',
              path: 'userGroup',
              component: UserGroup
            },
            {
              name: '服务列表',
              path: 'serviceList',
              component: ServiceList
            },
            {
              name: '参数服务',
              path: 'parameters',
              component: Parameters
            },
            {
              name: '重启服务',
              path: 'restart',
              component: Restart
            },
            {
              name: '恢复出厂',
              path: 'reset',
              component: Reset
            },
            {
              name: '升级服务（TR069）',
              path: 'update_one',
              component: Update_one
            },
            {
              name: '升级服务（Fota）',
              path: 'update_two',
              component: Update_two
            },
            {
              name: '诊断服务',
              path: 'diagnostic',
              component: Diagnostic
            },
            {
              name: 'APN设置',
              path: 'apn',
              component: APN
            },
            {
              name: '服务运行列表',
              path: 'runlist',
              component: Runlist
            },
            {
              name: '设备厂商',
              path: 'transceiver',
              component: Transceiver
            },
            {
              name: '固件管理',
              path: 'fileManager',
              component: FileManager
            },
            {
              name: '用户信息',
              path: 'userList',
              component: UserList
            },
            {
              name: '密码修改',
              path: 'password',
              component: PassWord
            },
            {
              name: '厂商占比',
              path: 'report',
              component: Report
            },
            {
              name: '厂商列表',
              path: 'vendorList',
              component: VendorList
            },
            {
              name: '模块占比',
              path: 'module',
              component: Module
            },
            {
              name: '模块设备数',
              path: 'moduleNumber',
              component: ModuleNumber
            },
            {
              name: '设备软件',
              path: 'software',
              component: Software
            },
            {
              name: '设备注册曲线',
              path: 'curve',
              component: Curve
            },
            {
              name: '用户管理',
              path: 'users',
              component: Users
            },
            {
              name: '客户管理',
              path: 'customer',
              component: Customer
            },
            {
              name: '角色管理',
              path: 'roleBased',
              component: RoleBased
            },
            {
              name: 'ACS配置',
              path: 'config',
              component: Config
            },
            {
              name: '厂商服务',
              path: 'manufacturers',
              component: Manufacturers
            },
            {
              name: '参数模型',
              path: 'parametric',
              component: Parametric
            },
            {
              name: '菜单管理',
              path: 'menu',
              component: Menu
            },
            {
              name: '字典管理',
              path: 'dictionary',
              component: Dictionary
            },
            {
              name: '日志查看',
              path: 'log',
              component: Log
            },
            {
              name: '数据库连接池',
              path: 'dbcp',
              component: Dbcp
            },
            {
              name: '登录',
              path: 'login',
              component: Login
            },
        ]
    },
    {
        path: '*',
        redirect: '/index/testManagement'
    }
]
