<template>
  <div class="upload-container">
    <tm-upload
      ref="commonUpload"
      model="image"
      :before-upload="beforeUpload"
      @success="uploadList"
      :data="data"
      action="https://dev.tanmarket.cn/resourceServer/file/uploadForClient"
    >
      <div slot="test">112222</div>
    </tm-upload>
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
    },
    beforeUpload () {
      return Promise.resolve(false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .tm-button {
    margin-left: 15px;
  }
</style>