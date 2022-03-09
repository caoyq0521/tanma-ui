<template>
  <div>
    <tm-search v-model="value1" placeholder="不允许输入特殊字符串" />&nbsp;
    <tm-search v-model="value2" allow-special-char placeholder="允许输入特殊字符串" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      value2: ""
    }
  }
}
</script>
