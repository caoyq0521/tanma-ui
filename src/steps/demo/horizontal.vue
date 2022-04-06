<template>
  <tm-steps 
    :active="currentStep"
    direction="horizontal"
    @change="handleStepChange"

  >
    <tm-step 
      v-for="(item, index) in steps" 
      :title="item.label"
      :key="item.key"
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
        { key: 'base', label: '基础信息' },
        { key: 'award', label: '奖励设置' },
        { key: 'template', label: '模版设置' }
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