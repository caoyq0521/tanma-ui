import DateRange from './date-range.vue';

DateRange.install = function (Vue) {
  Vue.component(DateRange.name, DateRange);
};

export default DateRange;
export { DateRange };