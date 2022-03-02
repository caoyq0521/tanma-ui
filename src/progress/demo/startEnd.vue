<template>
  <tm-progress :start="start" :end="end" />
</template>
<script>
export default {
  data() {
    return {
      start: false,
      end: false
    }
  },
  created() {
    this.start = true
    setTimeout(() => {
      this.end = true
    }, 10*5)
  }
}
</script>