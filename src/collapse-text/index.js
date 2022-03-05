import CollapseText from './collapse-text.vue';

CollapseText.install = function (Vue) {
  Vue.component(CollapseText.name, CollapseText);
};

export default CollapseText;
export { CollapseText };