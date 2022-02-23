<template>
  <div class="tm-title__demo">
    <tm-title 
      :title="title" 
      :tips="tips"
    />
    <br />
    <tm-title 
      :title="title1" 
      :tips="tips"
      tips-theme="danger"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'tips默认主题',
        title1: 'tips danger主题样式',
        tips: '这是一段提示信息文本'
      }
    },
  }
</script>