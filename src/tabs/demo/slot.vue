<template>
  <tm-tabs :options="options" position="center">
    <template #poster="{tab, index }">
      {{ tab.key }} | {{ index }}
    </template>
    <template #left>
      <span>设置</span>
    </template>
    <template #right>
      <span>设置</span>
    </template>
  </tm-tabs>
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