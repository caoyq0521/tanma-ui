import FileIcon from './file-icon.vue';

FileIcon.install = function (Vue) {
  Vue.component(FileIcon.name, FileIcon);
};

export default FileIcon;
export { FileIcon };