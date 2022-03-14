<template>
  <div class="tm-tabs--pagination">
    <tm-tabs v-model="currentKey" :options="options" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      options: [],
      currentKey: 'item 15'
    }
  },
  created () {
    const options = [];
    for (let index = 1; index < 31; index++) {
      options.push({
        key: `item ${index}`,
        title: `item ${index}`
      })
    }
    this.options = options;
  }
}
</script>
<style lang="less" scoped>
.tm-tabs--pagination {
  width: 800px;
}
</style>