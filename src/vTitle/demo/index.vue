<template>
  <tm-tag v-title="name">{{ name }}</tm-tag>
</template>
<script>
export default {
  data() {
    return {
      name: '这是一个长标签'
    }
  },
}
</script>