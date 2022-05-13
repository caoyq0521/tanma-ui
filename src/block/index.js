import Block from './block.vue';

Block.install = function (Vue) {
  Vue.component(Block.name, Block);
};

export default Block;
export { Block };