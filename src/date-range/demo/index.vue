<template>
  <div>
    <tm-date-range v-model="rangeDate1" type="year" />
    <tm-date-range v-model="rangeDate2" type="month" />
    <tm-date-range v-model="rangeDate3" type="date" />
    <tm-date-range v-model="rangeDate4" type="week" />
    <tm-date-range v-model="rangeDate5" type="datetime" />
    <tm-date-range v-model="rangeDate6" type="datetimerange" />
    <tm-date-range v-model="rangeDate7" type="daterange" day-num="20" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      rangeDate1: "",
      rangeDate2: "",
      rangeDate3: "",
      rangeDate4: "",
      rangeDate5: "",
      rangeDate6: [],
      rangeDate7: [],
    }
  }
}
</script>