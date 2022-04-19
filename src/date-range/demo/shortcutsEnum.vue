<template>
  <ul>
    <li>
      <tm-date-range v-model="rangeDate" :shortcuts-enum="[0,1,90]" />
    </li>
  </ul>
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