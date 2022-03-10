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
    baiduAnalytics: {
      seed: '619bce33d3d0afd261bb503674730cc7'
    },
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
            title: '定制主题 less',
          },
          {
            path: 'theme2',
            title: '定制主题 css',
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
            path: 'button',
            title: 'Button 按钮',
          },
          {
            path: 'tabs',
            title: 'Tabs 标签页',
          },
          {
            path: 'collapse-text',
            title: 'collapseText 折叠文本'
          },
          {
            path: 'tag',
            title: 'Tag 标签'
          },
          {
            path: 'tag-pro',
            title: 'Tag pro 标签'
          },
          {
            path: 'dialog',
            title: 'Dialog 对话框'
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
      {
        title: 'API',
        items: [
          {
            path: 'api',
            title: 'API'
          }
        ]
      }
    ],
  },
};
