<template>
  <button class="tm-button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'tmButton',

  props: {
    color: String,
    type: {
      type: String,
      default: 'primary',
    },
  },
};
</script>
