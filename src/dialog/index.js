import Dialog from './dialog.vue';
import TmDialog from './dialog-function.js';

Dialog.install = function (Vue) {
  Vue.component(Dialog.name, Dialog);
  Vue.prototype.$tmDialog = TmDialog;
};

export default Dialog;
export { Dialog };