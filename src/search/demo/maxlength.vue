<template>
  <tm-search v-model="value" :maxlength="maxlength" show-word-limit />
</template>

<script>
export default {
  data() {
    return {
      value: "",
      maxlength: "10"
    }
  }
}
</script>
