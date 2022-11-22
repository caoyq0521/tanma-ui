<template>
  <tm-optional-picker :default-time="dateRange" />
</template>
<script>
export default {
  data(){
    return {
      dateRange: ['2022-03-07', '2022-03-28']
    }
  }
}
</script>