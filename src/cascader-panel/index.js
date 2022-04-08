import CascaderPanel from './cascader-panel.vue';

CascaderPanel.install = function (Vue) {
  Vue.component(CascaderPanel.name, CascaderPanel);
};

export default CascaderPanel;
export { CascaderPanel };