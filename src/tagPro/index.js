import TagPro from './tagPro.vue';

TagPro.install = function (Vue) {
  Vue.component(TagPro.name, TagPro);
};

export default TagPro;
export { TagPro };