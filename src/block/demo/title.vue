<template>
  <div class="block-demo">
    <tm-block title="标题1">
      <div class="block-demo__content">
        <div class="content-one">内容1</div>
      </div>
      <div class="block-demo-two">
        <div class="tm-block__title">标题2</div>
        <div class="block-demo__content">
          <div class="content-one">内容2</div>
        </div>
      </div>
    </tm-block>
  </div>
</template>

<style lang="less" scoped>
.block-demo {
  padding: 15px;
  border-radius: 5px;
  background-color: #f4f4f6;

  /deep/ .tm-block__content {
    padding: 0;
  }

  .block-demo-two {
    margin-top: 15px;
  }

  .block-demo__content {
    padding: 18px 15px 0;
  }
}
</style>