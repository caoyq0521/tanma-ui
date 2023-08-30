<template>
  <div>
    <el-radio-group v-model="position" style="margin-bottom: 30px">
      <el-radio-button label="left">left</el-radio-button>
      <el-radio-button label="center">center</el-radio-button>
      <el-radio-button label="right">right</el-radio-button>
    </el-radio-group>
    <tm-tabs :options="options" :position="position" />
  </div>
</template>
<script>
import Vue from 'vue';
import {RadioGroup, RadioButton} from 'element-ui';
Vue.use(RadioGroup);
Vue.use(RadioButton);
export default {
  data () {
    return {
      options: [
        {
          key: 'article',
          title: '文章'
        },
        {
          key: 'poster',
          title: '海报'
        },
        {
          key: 'form',
          title: '表单'
        }
      ],
      position: 'left'
    }
  }
}
</script>
<style lang="less" scoped>
::v-deep .el-radio-button__orig-radio:checked+.el-radio-button__inner {
  background-color: var(--main-color);
  border-color: var(--main-color);
}
</style>