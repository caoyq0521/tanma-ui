module.exports = {
  name: 'tanma-ui',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/tanma-ui/',
    },
    namedExport: true,
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
            title: 'Pagination 分页',
          },
          {
            path: 'title',
            title: 'Title 标题',
          },
          {
            path: 'tip',
            title: 'tip 文字提示',
          },
          {
            path: 'avatar',
            title: 'Avatar 头像',
          },
          {
            path: 'progress',
            title: 'Progress 进度条',
          },
          {
            path: 'tree-select',
            title: 'TreeSelect 选择树',
          },
          {
            path: 'search',
            title: 'Search 搜索框',
          },
          // {
          //   path: "svg-icon",
          //   title: "SvgIcon "
          // },
          // {
          //   path: "file-icon",
          //   title: "FileIcon 文件Icon"
          // },
          {
            path: 'date-range',
            title: 'DateRange 日期范围',
          },
        ],
      },
      {
        title: '业务组件',
        items: [
          {
            path: 'avatar-card',
            title: 'AvatarCard 头像卡片',
          },
        ]
      },
    ],
  },
};
