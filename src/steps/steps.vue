<template>
  <div :class="['tm-steps', 'tm-steps--' + direction]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tmSteps",
    props: {
      // 设置当前激活步骤
      active: {
        type: Number,
        default: 0
      },
      // 显示方向
      direction: {
        type: String,
        default: 'vertical',
        validator: (val) => {
          return ['vertical', 'horizontal'].includes(val);
        }
      }
    },
    data() {
      return {
        steps: []
      }
    },
    watch: {
      steps(steps) {
        steps.forEach((child, index) => {
          child.index = index;
        });
      }
    },
    methods: {
      handleChange(index) {
        this.$emit('change', index);
      }
    },
  }
</script>