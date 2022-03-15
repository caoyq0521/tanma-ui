import ButtonTabs from './button-tabs.vue';

ButtonTabs.install = function (Vue) {
  Vue.component(ButtonTabs.name, ButtonTabs);
};

export default ButtonTabs;
export { ButtonTabs };