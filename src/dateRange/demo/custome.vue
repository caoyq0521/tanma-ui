<template>
  <div>
    <tm-date-range v-model="rangeDate" type="datetime" default-time="00:00:00" :picker-options="pickerOptions" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      rangeDate: "",
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() < Date.now()
        }
      }
    }
  }
}
</script>