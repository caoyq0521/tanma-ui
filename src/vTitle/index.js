import tip from './tip.js'
import directive from './directive.js'

const vTitle = {
  tip,
  directive
}

vTitle.install = function (Vue) {
  Vue.use(directive);
};

export default vTitle;
export { vTitle };