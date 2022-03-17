<template>
  <div class="upload-container">
    <tm-upload ref="commonUpload" model="image" @uploadList="uploadList" />
    <div class="preview-button" @click="preview">预览</div>
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

<style lang="scss">
  .upload-container {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
    // 临时写的按钮样式
    .preview-button {
      width: 119px;
      height: 36px;
      line-height: 36px;
      background: #FFFFFF;
      border-radius: 5px;
      border: 1px solid #D7D7D7;
      margin-left: 15px;
      text-align: center;
      cursor: pointer;
    }
  }
</style>