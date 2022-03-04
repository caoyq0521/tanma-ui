import TreeSelect from './treeSelect.vue';

TreeSelect.install = function (Vue) {
  Vue.component(TreeSelect.name, TreeSelect);
};

export default TreeSelect;
export { TreeSelect };