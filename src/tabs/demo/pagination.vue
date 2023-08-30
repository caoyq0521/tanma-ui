<template>
  <div>
    <div class="tm-tabs--pagination" :style="{ width: width + 'px' }">
      <tm-tabs ref="tab" v-model="currentKey" :options="options" />
    </div>
    <br>
    <tm-button @click="toggleWidth">切换宽度</tm-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      options: [],
      currentKey: 'item 9',
      width: 800
    }
  },
  created () {
    const options = [];
    for (let index = 1; index < 15; index++) {
      options.push({
        key: `item ${index}`,
        title: `item ${index}`
      })
    }
    this.options = options;
  },
  methods: {
    toggleWidth () {
      this.width = this.width === 800 ? 1200 : 800;

      this.$refs.tab.initEle();
    }
  }
}
</script>
<style lang="less" scoped>
</style>