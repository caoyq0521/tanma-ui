import Vtip from 'vtip';
import 'vtip/lib/index.min.css';

Vtip.install = function (Vue) {
  Vue.use(Vtip.directive, { directiveName: 'title' });
};

export default Vtip;
export { Vtip };