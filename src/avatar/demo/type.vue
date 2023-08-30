<template>
  <div>
    <div class="tm-flex">
      <tm-avatar
        icon-type="image"
        class="tm-avatar__item"
      />

      <tm-avatar
        icon-type="person"
        class="tm-avatar__item"
      />

      <tm-avatar
        icon-type="company"
        class="tm-avatar__item"
      />

      <tm-avatar
        icon-type="group"
        class="tm-avatar__item"
      />

      <tm-avatar
        icon-type="goods"
        class="tm-avatar__item"
      />
    </div>
    <br />
    <div class="tm-flex">
      <tm-avatar
        icon-type="person"
        :icon-size="14"
        class="tm-avatar__item"
      />

      <tm-avatar
        icon-type="person"
        :icon-size="16"
        class="tm-avatar__item"
      />

      <tm-avatar
        icon-type="person"
        :icon-size="18"
        class="tm-avatar__item"
      />

      <tm-avatar
        icon-type="person"
        :icon-size="20"
        class="tm-avatar__item"
      />
    </div>
  </div>
</template>
<style>
  .tm-avatar__item {
    margin-right: 10px;
  }
</style>
