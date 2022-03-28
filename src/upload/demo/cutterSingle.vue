<template>
  <div class="upload-container">
    <tm-upload
      model="image"
      is-cut
      :data="{corpid: 'ww9c5530210a0d5116'}"
      action="https://dev.tanmarket.cn/resourceServer/file/uploadForClient"
     />
  </div>
</template>

<style lang="scss">
  .upload-container {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
</style>