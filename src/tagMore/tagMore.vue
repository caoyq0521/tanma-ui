<template>
  <el-popover
    placement="bottom"
    :width="width"
    :trigger="trigger"
    class="tm-tag-more"
  >
    <div
      slot="reference"
      class="reference"
    >
      <i class="iconfont icon-gengduo2"></i>
    </div>
    <slot></slot>
  </el-popover>
</template>

<script>
  import Vue from 'vue';
  import { Popover } from 'element-ui';
  Vue.use(Popover);

  export default {
    name: "tmTagMore",
    props: {
      // 触发方式
      // `click` `focus` `hover` `manual`
      trigger: {
        type: String,
        default: 'click'
      },
      // 宽度
      width: {
        type: [String, Number],
        default: 292
      }
    },
  }
</script>