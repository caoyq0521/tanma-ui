<template>
  <tm-search v-model="value" placeholder="请输入搜索内容" ref="search" />
</template>

<script>
export default {
  data() {
    return {
      value: ""
    }
  }
}
</script>
