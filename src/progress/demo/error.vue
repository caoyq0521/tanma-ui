<template>
  <tm-progress :start="start" :error="error" />
</template>
<script>
export default {
  data() {
    return {
      start: false,
      error: false
    }
  },
  created() {
    this.start = true
    setTimeout(() => {
      this.error = true
    }, 10*5)
  }
}
</script>