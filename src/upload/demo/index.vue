<template>
  <div class="upload-container">
    <tm-upload ref="commonUpload" model="image" @uploadList="uploadList" />
    <tm-button @click="preview">预览</tm-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      url: ''
    }
  },
  methods: {
    preview() {
      this.$refs['commonUpload'].handlePreview(this.url)
    },
    uploadList (files) {
      this.url = files[0].url
    }
  }
}
</script>

<style lang="scss" scoped>
  .tm-button {
    width: 115px;
    margin-left: 15px;
  }
</style>