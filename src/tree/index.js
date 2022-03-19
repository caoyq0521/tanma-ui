import "element-ui/lib/theme-chalk/tree.css"
import Tree from './src/tree.vue';

Tree.install = function(Vue) {
  Vue.component(Tree.name, Tree);
};

export default Tree;
export { Tree };
