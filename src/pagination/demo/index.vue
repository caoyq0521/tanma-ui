<template>
  <div>
    <tm-title title="页数较少时的效果" class="pagination-demo__title" />
    <tm-pagination :total="50" :current-page="0" />

    <tm-title title="大于 7 页时的效果" class="pagination-demo__title pagination-demo2" />
    <tm-pagination :total="500" />
  </div>
</template>

<style scoped>
  .pagination-demo__title {
    margin-bottom: 10px;
  }

  .pagination-demo2 {
    margin-top: 20px;
  }
</style>