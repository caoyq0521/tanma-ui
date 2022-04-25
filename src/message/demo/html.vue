<template>
  <tm-button @click="openHTML">使用 HTML 片段</tm-button>
</template>

<script>
  export default {
    methods: {
      openHTML() {
        this.$tmMessage({
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>