import TagCombo from './tagCombo.vue';

TagCombo.install = function (Vue) {
  Vue.component(TagCombo.name, TagCombo);
};

export default TagCombo;
export { TagCombo };