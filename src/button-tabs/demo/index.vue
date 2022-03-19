<template>
  <div class="button-tabs">
    <div class="button-tabs-item">
      <h5>默认状态</h5>
      <tm-button-tabs  />
    </div>
    <div class="button-tabs-item">
      <h5>隐藏按钮</h5>
      <span>隐藏左边按钮</span>
      <tm-button-tabs hide="left"  />
      <span>隐藏右边按钮</span>
      <tm-button-tabs hide="right"  />
    </div>
    <div class="button-tabs-item">
      <span>自定义按钮内容</span>
      <tm-button-tabs leftContent="后退" />
      <tm-button-tabs rightContent="前进" />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .button-tabs{
    &-item{
      margin-bottom: 20px;
      h5{
        color: var(--main-color);
      }
      span{
        display: inline-block;
        margin-bottom: 10px;
      }
    }
  }
</style>