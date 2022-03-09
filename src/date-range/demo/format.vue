<template>
  <div>
    <tm-date-range v-model="rangeDate" :date-range="20" @change="handleChange"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rangeDate: []
    }
  },
  methods: {
    handleChange(value){
      console.log(value)
    }
  }
}
</script>

<style lang="less" scoped>
@import "./demo.less";
</style>