<template>
  <el-container>
    <el-header>欢迎登陆后台管理操作系统！</el-header>
    <el-container>
      <el-aside width="200px">
        <el-row>
          <el-col :span="24">
            <el-menu
              router
              default-active="$route.path"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#3c464e"
              text-color="#91a1ac"
              active-text-color="#fff">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group border-right="none">
                  <!--<template slot="title">分组一</template>-->
                  <el-menu-item index="/channelmanagement/add">分组一</el-menu-item>
                  <el-menu-item index="/channelmanagement/maintenance">分组二</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer></el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  import api from '../config/api.js'

  export default {
    name: 'index',
    data: function () {
      return
    },
    mounted: function () {
      api.post('/news/index', 'type=top&key=123456')
        .then(res => {
          console.log(res)
          if(res.status === 200){
            this.$message({
              message: '请求mock数据成功！',
              type: 'success'
            });
          }else{
            this.$message({
              message: '请求mock数据失败！',
              type: 'error'
            });
          }
        });
    },
    watch: {},
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header {
    background-color: #336699;
    color: #fff;
    text-align: center;
    line-height: 60px;
    font-size: 14px;
  }

  .el-footer {
    background-color: #336699;
    color: #fff;
    text-align: center;
    line-height: 60px;
    font-size: 12px;
  }

  .el-aside {
    background-color: #3c464e;
    color: #333;
    text-align: left;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    font-size: 14px;
  }

  .el-menu {
    border-right: none;
  }

  .el-container {
    height: 100%;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

