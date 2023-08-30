<template>
  <div class="button-tabs">
    <div class="button-tabs-item">
      <h5>默认状态</h5>
      <tm-button-tabs  type="certainty"  />
      <tm-button-tabs  type="certainty" button-type="danger"  />
      <tm-button-tabs  type="certainty" button-type="danger" disabled="all" />
    </div>
    <div class="button-tabs-item">
      <h5>自定义按钮内容</h5>
      <tm-button-tabs type="certainty" left-content="关闭" right-content="继续" />
    </div>
    <div class="button-tabs-item">
      <h5>隐藏按钮</h5>
      <tm-button-tabs type="certainty" hide="left"  />
      <tm-button-tabs type="certainty" hide="right"  />
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