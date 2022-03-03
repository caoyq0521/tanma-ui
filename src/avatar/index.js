import Avatar from './avatar.vue';

Avatar.install = function (Vue) {
  Vue.component(Avatar.name, Avatar);
};

export default Avatar;
export { Avatar };