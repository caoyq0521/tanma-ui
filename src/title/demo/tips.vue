<template>
   <tm-title 
    :title="title" 
    :tips="tips"
    tips-in-brackets
  />
</template>

<script>
  export default {
    data() {
      return {
        title: '这是一段标题文本',
        tips: '这是一段提示信息文本'
      }
    },
  }
</script>