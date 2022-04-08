import Cascader from './cascader.vue';
import 'element-ui/lib/theme-chalk/cascader.css';

Cascader.install = function (Vue) {
  Vue.component(Cascader.name, Cascader);
};

export default Cascader;
export { Cascader };