import Search from './search.vue';

Search.install = function (Vue) {
  Vue.component(Search.name, Search);
};

export default Search;
export { Search };