<template>
  <button class="tm-button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'TmButton',

  props: {
    color: String,
    type: {
      type: String,
      default: 'primary',
    },
  },
};
</script>
