<template>
  <div>
    <tm-title title="button类型" class="tabs-demo__title" />
    <tm-tabs :options="options" type="button" size="small" round />
    <br>
    <tm-title title="text类型" class="tabs-demo__title" />
    <tm-tabs :options="options" type="text" size="small" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      options: [
        {
          key: 'article',
          title: '文章'
        },
        {
          key: 'poster',
          title: '海报'
        },
        {
          key: 'form',
          title: '表单'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.tabs-demo__title {
  margin-bottom: 10px;
}
</style>