import Message from './main.js';

Message.install = function (Vue) {
  Vue.prototype.$tmMessage = Message;
};

export default Message;
export { Message };