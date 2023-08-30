<template>
  <div>
    <tm-date-range v-model="rangeDate" :date-range="20" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      rangeDate: []
    }
  }
}
</script>

<style lang="less" scoped>
@import "./demo.less";
</style>