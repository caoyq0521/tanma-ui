import Title from './title.vue';

Title.install = function (Vue) {
  Vue.component(Title.name, Title);
};

export default Title;
export { Title };