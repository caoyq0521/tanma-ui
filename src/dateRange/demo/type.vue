<template>
  <ul>
    <li>
      <h4>年份</h4>
      <tm-date-range v-model="rangeDate1" type="year" hide-shortcuts />
    </li>
    <li>
      <h4>月份</h4>
      <tm-date-range v-model="rangeDate2" type="month" hide-shortcuts />
    </li>
    <li>
      <h4>天份</h4>
      <tm-date-range v-model="rangeDate3" type="date" hide-shortcuts default-time="00:00:00" />
    </li>
    <li>
      <h4>时间点</h4>
      <tm-date-range v-model="rangeDate4" type="datetime" hide-shortcuts default-time="00:00:00" />
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      rangeDate1: "",
      rangeDate2: "",
      rangeDate3: "",
      rangeDate4: ""
    }
  }
}
</script>

<style lang="less" scoped>
@import "./demo.less";
</style>