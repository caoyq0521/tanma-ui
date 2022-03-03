<template>
  <tm-tip :content="content" />
</template>

<script>
  export default {
    data() {
      return {
        content: '这是一段提示信息'
      }
    },
  }
</script>