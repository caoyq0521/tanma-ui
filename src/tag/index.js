import Tag from './tag.vue';

Tag.install = function (Vue) {
  Vue.component(Tag.name, Tag);
};

export default Tag;
export { Tag };