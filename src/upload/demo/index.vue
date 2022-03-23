<template>
  <div class="upload-container">
    <tm-upload
      ref="commonUpload"
      model="image"
      @upload-list="uploadList"
      :data="data"
      action="https://dev.tanmarket.cn/resourceServer/file/uploadForClient"
    />
    <tm-button @click="preview">预览</tm-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      url: '',
      data: {
        corpid: 'ww9c5530210a0d5116'
      }
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
    margin-left: 15px;
  }
</style>