import Tip from './tip.vue';

Tip.install = function (Vue) {
  Vue.component(Tip.name, Tip);
};

export default Tip;
export { Tip };