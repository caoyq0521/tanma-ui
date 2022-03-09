<template>
  <div class="upload-container">
    <tm-upload model="image" :isCut="true" />
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