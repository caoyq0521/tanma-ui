<template>
  <div class="tm-block">
    <div class="tm-block__title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="tm-block__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tmBlock",
    props: {
      // 标题
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>