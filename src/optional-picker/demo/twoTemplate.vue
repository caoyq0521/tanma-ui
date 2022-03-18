<template>
<div class="index">
  <div>
    <h5>日-周</h5>
    <tm-optional-picker :mode="['day', 'week']" />
  </div>
  <div>
    <h5>周-月</h5>
    <tm-optional-picker :mode="['week', 'month']" />
  </div>
  <div>
    <h5>日-月</h5>
    <tm-optional-picker :mode="['day', 'month']" />
  </div>
</div>
</template>
<style lang="less" scoped>
.index{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>