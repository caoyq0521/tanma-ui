import TagGroup from './tagGroup.vue';

TagGroup.install = function (Vue) {
  Vue.component(TagGroup.name, TagGroup);
};

export default TagGroup;
export { TagGroup };