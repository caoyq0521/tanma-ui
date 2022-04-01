<template>
  <div class="button-styl">
    <div>
      <tm-button>默认按钮</tm-button>
      <tm-button type="primary">主要按钮</tm-button>
      <tm-button type="danger">危险按钮</tm-button>
      <tm-button type="addition">添加按钮</tm-button>
    </div>
    <div>
      <tm-button round>默认按钮</tm-button>
      <tm-button type="primary" round>主要按钮</tm-button>
      <tm-button type="danger" round>危险按钮</tm-button>
      <tm-button type="addition" round>添加按钮</tm-button>
    </div>
  </div>
</template>
<style lang="less" scoped>
.button-styl{
  div{
    margin-bottom: 15px;
  }
}
</style>