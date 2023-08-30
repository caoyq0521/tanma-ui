<template>
  <el-popover
    placement="bottom"
    :width="width"
    :trigger="trigger"
    class="tm-tag-more"
    :popper-class="popoverPopperClass"
  >
    <div
      slot="reference"
      class="reference"
    >
      <i class="tm-icon-gengduo2 tm-tag-more__icon"></i>
    </div>
    <slot></slot>
  </el-popover>
</template>

<script>
  import Vue from 'vue';
  import { Popover } from 'element-ui';
  Vue.use(Popover);

  export default {
    name: "tmTagGroup",
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
      },
      // 为 Tooltip 的 popper 添加类名
      popperClass: {
        type: String,
        default: ''
      }
    },
    computed: {
      popoverPopperClass() {
        return `tm-tag-more__popper ${this.popperClass}` 
      }
    },
  }
</script>