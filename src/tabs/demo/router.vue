<template>
  <div>
    <tm-tabs v-model="currentKey" :options="options" router queryname="type"/>
    <br>
    <div>currentKey: {{ currentKey }}</div>
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
      ],
      currentKey: 'poster'
    }
  }
}
</script>