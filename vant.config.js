module.exports = {
  name: 'tanma-design',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: './', // 部署到本地
      // publicPath: '/tanma-ui/' // 部署到github
    },
    namedExport: true,
  },
  site: {
    title: 'tanma-design',
    logo: './logo.png',
    hideSimulator: true,
    baiduAnalytics: {
      seed: '619bce33d3d0afd261bb503674730cc7'
    },
    nav: [
      {
        title: '开发指南',
        items: [
          // {
          //   path: 'home',
          //   title: '介绍',
          // },
          {
            path: 'home',
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
            path: 'icon',
            title: 'Icon 图标'
          },
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
            title: 'Tip 文字提示',
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
          // {
          //   path: 'button-tabs',
          //   title: 'ButtonTabs 标签按钮',
          // },
          {
            path: 'tabs',
            title: 'Tabs 标签页',
          },
          {
            path: 'collapse-text',
            title: 'CollapseText 折叠文本'
          },
          {
            path: 'tag',
            title: 'Tag 标签'
          },
          {
            path: 'tag-pro',
            title: 'TagPro 标签'
          },
          {
            path: 'tag-group',
            title: 'TagGroup 标签组'
          },
          {
            path: 'upload',
            title: 'upload  上传'
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
          {
            path: 'dept-tree',
            title: 'DeptTree 部门员工选择',
          },
          {
            path: 'tree',
            title: 'Tree 虚拟树',
          },
          {
            path: 'optional-picker',
            title: 'OptionalPicker 日周月选择器'
          },
          {
            path: 'v-title',
            title: 'vTitle 提示'
          }
        ],
      },
      {
        title: '业务组件',
        items: [
          {
            path: 'avatar-card',
            title: 'AvatarCard 头像卡片',
          },
          {
            path: 'tag-combo',
            title: 'TagCombo 标签组合'
          }
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
