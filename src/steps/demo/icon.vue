<template>
  <tm-steps :active="currentStep"  @change="handleStepChange">
    <tm-step 
      v-for="(item, index) in steps" 
      :title="item.label"
      :key="item.key"
      :icon="item.icon"
    >
    </tm-step>
  </tm-steps>
</template>
<script>
export default {
  data() {
    return {
      currentStep: 0,
      steps: [
        { key: 'base', label: '基础信息', icon: 'tm-icon-touxiang' },
        { key: 'award', label: '奖励设置', icon: 'tm-icon-biaoqian1' },
        { key: 'template', label: '模版设置', icon: 'tm-icon-qun' }
      ]
    }
  },
  methods: {
    handleStepChange(index) {
      this.currentStep = index;
    }
  },
}
</script>