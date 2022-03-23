<template>
  <el-popover
    placement="bottom"
    :width="width"
    :trigger="trigger"
    class="tm-tag-more"
    popper-class="tm-tag-more__popper"
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
      }
    },
  }
</script>