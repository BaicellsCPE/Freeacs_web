<template>
    <div style="margin-left: 120px; margin-top: 20px;">
        <el-form :label-position="labelPosition" label-width="80px" :model="form">
            <el-form-item label="部门: ">
                <el-input size="small" v-model="form.section">
                    <el-button slot="append" icon="search"></el-button>
                </el-input>
            </el-form-item>
            <el-form-item label="角色名称: ">
                <el-input size="small" v-model="form.rolename"></el-input>
            </el-form-item>
            <el-form-item label="功能范围: ">
                <el-select size="small" v-model="form.envelop" placeholder="请选择">
                    <el-option label="全部数据" value="overallData"></el-option>
                    <el-option label="公司及以下数据" value="company"></el-option>
                    <el-option label="个人数据" value="one"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="访问控制: "></el-form-item>
            <el-form-item style="margin-left: 50px;" label="OUI: ">
                <el-input size="small" v-model="form.OUI"></el-input>
            </el-form-item>
            <el-form-item label="角色权限: ">
                <el-tree style="border: none;"
                    :data="data2"
                    show-checkbox
                    default-expand-all
                    node-key="id"
                    ref="tree"
                    highlight-current
                    :props="defaultProps">
                </el-tree>
            </el-form-item>
            <el-form-item label="备注: ">
                <el-input type="textarea" :rows="3" v-model="form.message"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="info" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        form: {
          section: '',
          organization: '',
          rolename: '',
          envelop: '',
          message: ''
        },
        data2: [{
          id: 0,
          label: '菜单',
          children: [{
            id: 1,
            label: '用户信息',
            children: [{
                id: 8,
                label: '用户信息',
                children: [{
                    id: 21,
                    label: '用户信息'
                },{
                    id: 22,
                    label: '密码修改'
                }]
            }]
          }, {
            id: 2,
            label: '设备管理',
            children: [{
                id: 9,
                label: '设备列表',
                children: [{
                    id: 23,
                    label: '设备（TR069）',
                    children: [{
                        id: 52,
                        label: '单个删除'
                    },{
                        id: 53,
                        label: '编辑'
                    },{
                        id: 54,
                        label: '恢复出厂'
                    },{
                        id: 55,
                        label: '重启'
                    },{
                        id: 56,
                        label: '批量删除'
                    }]
                }]
            }]
          }, {
            id: 3,
            label: '服务管理',
            children: [{
                id: 10,
                label: '设备组管理',
                children: [{
                    id: 24,
                    label: '设备组',
                    children: [{
                        id: 57,
                        label: '设备组-查看'
                    },{
                        id: 58,
                        label: '设备组-编辑'
                    },{
                        id: 59,
                        label: '设备组-添加'
                    },{
                        id: 60,
                        label: '设备组-删除'
                    }]
                }]
            },{
                id: 11,
                label: '服务组管理',
                children: [{
                    id: 25,
                    label: '服务列表',
                    children: [{
                        id: 61,
                        label: '服务组管理-查看'
                    },{
                        id: 62,
                        label: '服务组管理-编辑'
                    },{
                        id: 63,
                        label: '服务组管理-添加'
                    },{
                        id: 64,
                        label: '服务组管理-删除'
                    }]
                },{
                    id: 26,
                    label: '参数服务',
                },{
                    id: 27,
                    label: '重启服务',
                },{
                    id: 28,
                    label: '恢复出厂',
                },{
                    id: 29,
                    label: '升级服务（TR069）',
                },{
                    id: 30,
                    label: '诊断服务',
                },{
                    id: 31,
                    label: 'APN设置',
                },{
                    id: 32,
                    label: '连接用户',
                }]
            },{
                id: 12,
                label: '服务执行',
                children: [{
                    id: 33,
                    label: '服务运行列表',
                    children: [{
                        id: 65,
                        label: '操作关联-查看'
                    },{
                        id: 66,
                        label: '操作关联-编辑'
                    },{
                        id: 67,
                        label: '操作执行-添加'
                    },{
                        id: 68,
                        label: '操作执行-删除'
                    }]
                }]
            }]
          }, {
            id: 4,
            label: '设备厂商',
            children: [{
                id: 13,
                label: '厂商列表',
                children: [{
                    id: 34,
                    label: '厂商',
                    children: [{
                        id: 69,
                        label: '删除'
                    }]
                }]
            }]
          }, {
            id: 5,
            label: '文件管理',
            children: [{
                id: 14,
                label: '固件管理',
                children: [{
                    id: 35,
                    label: '固件列表',
                    children: [{
                        id: 70,
                        label: '删除'
                    },{
                        id: 71,
                        label: '添加'
                    }]
                }]
            }]
          }, {
            id: 6,
            label: '报表',
            children: [{
                id: 15,
                label: '厂商信息',
                children: [{
                    id: 36,
                    label: '厂商占比',
                },{
                    id: 37,
                    label: '厂商列表',
                },{
                    id: 38,
                    label: '模块占比',
                },{
                    id: 39,
                    label: '模块设备数',
                }]
            },{
                id: 16,
                label: '设备信息',
                children: [{
                    id: 40,
                    label: '设备软件',
                },{
                    id: 41,
                    label: '设置注册曲线',
                }]
            }]
          }, {
            id: 7,
            label: '系统设置',
            children: [{
                id: 17,
                label: '客户用户',
                children: [{
                    id: 42,
                    label: '用户管理',
                    children: [{
                        id: 72,
                        label: '用户编辑自己'
                    },{
                        id: 73,
                        label: '编辑所有用户'
                    },{
                        id: 74,
                        label: '用户解锁'
                    }]
                },{
                    id: 43,
                    label: '客户管理',
                    children: [{
                        id: 75,
                        label: '部门查看'
                    },{
                        id: 76,
                        label: '部门编辑'
                    }]
                },{
                    id: 44,
                    label: '角色管理',
                    children: [{
                        id: 77,
                        label: '角色编辑',
                    },{
                        id: 78,
                        label: '厂商访问控制'
                    }]
                }]
            },{
                id: 18,
                label: '全局配置',
                children: [{
                    id: 45,
                    label: 'ACS配置',
                    children: [{
                        id: 79,
                        label: '编辑'
                    }]
                },{
                    id: 46,
                    label: '厂商服务',
                    children: [{
                        id: 80,
                        label: '编辑'
                    }]
                },{
                    id: 47,
                    label: '参数模型',
                    children: [{
                        id: 81,
                        label: '编辑'
                    }]
                }]
            },{
                id: 19,
                label: '系统设置',
                children: [{
                    id: 48,
                    label: '菜单管理',
                    children: [{
                        id: 82,
                        label: '系统菜单编辑'
                    }]
                },{
                    id: 49,
                    label: '字典管理',
                    children: [{
                        id: 83,
                        label: '字典查看'
                    },{
                        id: 84,
                        label: '字典编辑'
                    }]
                }]
            },{
                id: 20,
                label: '日志信息',
                children: [{
                    id: 50,
                    label: '日志查看',
                },{
                    id: 51,
                    label: '数据库连接池',
                }]
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

    },
  }
</script>