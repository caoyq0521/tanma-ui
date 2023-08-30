<template>
  <tm-title 
    :title="title" 
    :tips="tips"
    tips-in-brackets
    with-background-color
    :background-color="color"
  />
</template>

<script>
  export default {
    data() {
      return {
        color: '#F4F4F6',
        title: '这是一段标题文本',
        tips: '这是一段提示信息文本'
      }
    },
  }
</script>