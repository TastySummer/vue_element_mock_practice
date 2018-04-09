<template>
  <div id="add">
    <div>你的位置: 导航一 > {{position}}</div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>基本信息</span>
      </div>
      <div>
        <el-row :gutter="40">
          <el-col :span="8">
            <div class="grid-content">
              筛选一
              <el-input
                placeholder="请输入内容"
                v-model="code"
                clearable>
              </el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <span class="red">*</span>筛选一
              <el-input
                placeholder="请输入内容"
                v-model="name"
                clearable>
              </el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <span class="red">*</span>筛选一
              <el-input
                placeholder="请输入内容"
                v-model="brief"
                clearable>
              </el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="40">
          <el-col :span="8">
            <div class="grid-content">
              <span class="red">*</span>筛选一
              <el-select v-model="type_value" placeholder="请选择">
                <el-option
                  v-for="item in type_options"
                  :key="item.type_value"
                  :label="item.label"
                  :value="item.type_value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <span class="red">*</span>筛选一
              <el-select v-model="type_value" placeholder="请选择">
                <el-option
                  v-for="item in type_options"
                  :key="item.type_value"
                  :label="item.label"
                  :value="item.type_value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <span class="red">*</span>筛选一
              <el-input
                placeholder="请输入内容"
                v-model="brief"
                clearable>
              </el-input>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>基本信息</span>
      </div>
      <div>
        <el-row :gutter="40">
          <el-col :span="8">
            <div class="grid-content">
              筛选一
              <el-input
                placeholder="请输入内容"
                v-model="code"
                clearable>
              </el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <span class="red">*</span>筛选一
              <el-input
                placeholder="请输入内容"
                v-model="name"
                clearable>
              </el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <span class="red">*</span>筛选一
              <el-input
                placeholder="请输入内容"
                v-model="brief"
                clearable>
              </el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="40">
          <el-col :span="8">
            <div class="grid-content">
              <span class="red">*</span>筛选一
              <el-select v-model="type_value" placeholder="请选择">
                <el-option
                  v-for="item in type_options"
                  :key="item.type_value"
                  :label="item.label"
                  :value="item.type_value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <span class="red">*</span>筛选一
              <el-select v-model="type_value" placeholder="请选择">
                <el-option
                  v-for="item in type_options"
                  :key="item.type_value"
                  :label="item.label"
                  :value="item.type_value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <span class="red">*</span>筛选一
              <el-input
                placeholder="请输入内容"
                v-model="brief"
                clearable>
              </el-input>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "add",
    data: function () {
      return ({
        position: this.$route.name,
        code: '',
        name: '',
        brief: '',
        type_options: [{
          type_value: '选项1',
          label: '选项1'
        }, {
          type_value: '选项2',
          label: '选项2'
        }, {
          type_value: '选项3',
          label: '选项3'
        }, {
          type_value: '选项4',
          label: '选项4'
        }, {
          type_value: '选项5',
          label: '选项5'
        }],
        type_value: ''
      })
    },
    mounted: function () {
      this.sendRouteToParent()
    },
    methods: {
      sendRouteToParent: function(){
        var _this = this;
        _this.$emit("listenToChildEvent", _this.$route.name);
      }
    }
  }
</script>

<style scoped>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
    margin-top: 20px;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .el-input {
     width: auto;
  }

  .red {
    color: red;
  }


</style>
