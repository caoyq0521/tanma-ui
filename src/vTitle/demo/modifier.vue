<template>
  <span v-title.top.click="msg">{{ msg }}</span>
</template>
<script>
export default {
  data() {
    return {
      msg: '这是一段信息'
    }
  },
}
</script>