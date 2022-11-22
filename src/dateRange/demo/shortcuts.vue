<template>
  <ul>
    <li>
      <h4>隐藏配置快捷选项</h4>
      <tm-date-range v-model="rangeDate1" hide-shortcuts />
    </li>
    <li>
      <h4>配置快捷选项</h4>
      <tm-date-range v-model="rangeDate2" :shortcuts="shortcuts" />
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      shortcuts: [
        {
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        },
        {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }
      ],
      rangeDate1: [],
      rangeDate2: [],
    }
  }
}
</script>

<style lang="less" scoped>
@import "./demo.less";
</style>