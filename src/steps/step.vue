<template>
  <div 
    :class="setStepClass"
    :disabled="disabled"
  >
    <div
      class="tm-step__main"
      @click="handleStepClick"
    >
      <div class="tm-step__head">
        <span v-if="!icon && !$slots.icon">{{ index + 1 }}</span>
        <slot v-else name="icon">
          <i :class="icon"></i>
        </slot>
      </div>
      <div class="tm-step__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div
      class="tm-step__tail" 
      :class="{'tm-step__tail-line': !isHorizontal}"
    >
      <i 
        v-if="isHorizontal" 
        class="tm-icon-daohangjiantou tm-step__tail-arrow"
      ></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tmStep",
    props: {
      // 标题
      title: {
        type: String,
        default: ''
      },
      // 图标
      icon: {
        type: String,
        default: ''
      },
      // 是否禁用
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        index: -1,
        isCurrentStep: false
      }
    },
    computed: {
      isHorizontal() {
        return this.$parent.direction === 'horizontal'
      },
      setStepClass() {
        const { isCurrentStep, isHorizontal } = this;
        return {
          'tm-step': true,
          'tm-step--current': isCurrentStep,
          'tm-step--horizontal': isHorizontal
        }
      }
    },
    beforeCreate() {
      this.$parent.steps.push(this);
    },

    beforeDestroy() {
      const steps = this.$parent.steps;
      const index = steps.indexOf(this);
      if (index >= 0) {
        steps.splice(index, 1);
      }
    },
    created() {
      const unwatch = this.$watch('index', () => {
        this.$watch('$parent.active', this.updateStatus, { immediate: true });
        unwatch();
      });
    },
    methods: {
      handleStepClick() {
        if(this.disabled) return;

        this.$parent.handleChange(this.index);
      },
      updateStatus(val) {
        this.isCurrentStep = val === this.index;
      },
    },
  }
</script>