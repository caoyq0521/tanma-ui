import OptionalPicker from './optional-picker.vue';

OptionalPicker.install = function (Vue) {
  Vue.component(OptionalPicker.name, OptionalPicker);
};

export default OptionalPicker;
export { OptionalPicker };