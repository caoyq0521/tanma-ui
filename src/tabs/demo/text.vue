<template>
  <tm-tabs v-model="currentKey" :options="options" type="text" />
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
      ],
      currentKey: 'poster'
    }
  }
}
</script>