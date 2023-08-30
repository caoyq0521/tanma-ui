<template>
  <div class="upload-container">
    <tm-upload
      model="file"
      :limit="2"
      :data="{corpid: 'ww9c5530210a0d5116'}"
      action="https://dev.tanmarket.cn/resourceServer/file/uploadForClient"
    />
  </div>
</template>
<script>
export default {
}
</script>