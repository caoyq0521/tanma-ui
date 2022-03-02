module.exports = {
  name: 'tanma-ui',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/tanma-ui/',
    },
    namedExport: true
  },
  site: {
    title: 'tanma-ui',
    logo: './logo.png',
    hideSimulator: true,
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
          {
            path: 'theme',
            title: '定制主题',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'pagination',
            title: 'Pagination 分页'
          },
          {
            path: 'title',
            title: 'Title 标题',
          },
          {
            path: "search",
            title: "Search 搜索框"
          },
          {
            path: "file-icon",
            title: "FileIcon 文件Icon"
          }
        ],
      },
    ],
  },
};
