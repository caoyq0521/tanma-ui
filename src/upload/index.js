import Upload from './upload.vue';

Upload.install = function (Vue) {
  Vue.component(Upload.name, Upload);
};

export default Upload;
export { Upload };