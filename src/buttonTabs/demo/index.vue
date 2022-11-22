<template>
  <div class="button-tabs">
    <div class="button-tabs-item">
      <h5>默认状态</h5>
      <tm-button-tabs />
      <tm-button-tabs button-type="danger" />
      <tm-button-tabs button-type="danger" disabled="right" />
    </div>
    <div class="button-tabs-item">
      <h5>自定义按钮内容</h5>
      <tm-button-tabs left-content="后退" right-content="前进" />
    </div>
    <div class="button-tabs-item">
      <h5>隐藏按钮</h5>
      <tm-button-tabs hide="left" />
      <tm-button-tabs hide="right" />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .button-tabs{
    &-item{
      margin-bottom: 20px;
      span{
        display: inline-block;
        margin-bottom: 10px;
      }
    }
  }
</style>