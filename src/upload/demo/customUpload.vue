<template>
  <div class="upload-container">
    <tm-upload
      hover
      is-custom-upload
      :data="{corpid: 'ww9c5530210a0d5116'}"
      @success="success"
      action="https://dev.tanmarket.cn/resourceServer/file/uploadForClient"
    >
    <span slot="custom-upload">上传</span>
    </tm-upload>
  </div>
</template>
<script>
export default {
  methods: {
    success (file) {
      console.log('file', file)
    },
  }
}
</script>