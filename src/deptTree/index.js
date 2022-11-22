import DeptTree from './dept-tree.vue';

DeptTree.install = function (Vue) {
  Vue.component(DeptTree.name, DeptTree);
};

export default DeptTree;
export { DeptTree };