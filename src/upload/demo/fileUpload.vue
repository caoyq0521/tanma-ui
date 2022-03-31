<template>
  <div class="upload-container" style="width: 400px">
    <tm-upload
      model="file"
      file-title="image"
      :data="{corpid: 'ww9c5530210a0d5116'}"
      :before-upload="beforeUpload"
      action="https://dev.tanmarket.cn/resourceServer/file/uploadForClient"
    />
  </div>
</template>
<script>
export default {
  methods: {
    beforeUpload () {
      return Promise.resolve(false)
    },
  }
}
</script>