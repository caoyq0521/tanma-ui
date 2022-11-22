<template>
  <ul>
    <li>
      <h4>默认</h4>
      <tm-date-range v-model="rangeDate1"/>
    </li>
    <li>
      <h4>可清空</h4>
      <tm-date-range v-model="rangeDate2" clearable/>
    </li>
    <li>
      <h4>配置占位符内容</h4>
      <tm-date-range v-model="rangeDate3" start-placeholder="开始时间" end-placeholder="结束时间" />
    </li>
    <li>
      <h4>设置分割符</h4>
      <tm-date-range v-model="rangeDate4" range-separator="-" />
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      rangeDate1: [],
      rangeDate2: [],
      rangeDate3: [],
      rangeDate4: []
    }
  }
}
</script>

<style lang="less" scoped>
@import "./demo.less";
</style>