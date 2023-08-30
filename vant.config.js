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
    // logo: './logo.png',
    logo: 'https://dev.tanmarket.cn/site/logo.png',
    hideSimulator: true,
    baiduAnalytics: {
      // seed: '619bce33d3d0afd261bb503674730cc7' // github
      seed: 'f59e812c45db896c796d182c59148734' // 本地
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
            path: 'changelog',
            title: '更新日志'
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
            path: 'button',
            title: 'Button 按钮',
          },
          {
            path: 'icon',
            title: 'Icon 图标'
          },
          {
            path: 'title',
            title: 'Title 标题',
          }
        ],
      },
      {
        title: '表单组件',
        items: [
          {
            path: 'optional-picker',
            title: 'OptionalPicker 日周月选择器'
          },
          {
            path: 'search',
            title: 'Search 搜索框',
          },
          {
            path: 'upload',
            title: 'Upload 上传'
          },
        ]
      },
      {
        title: '展示组件',
        items: [
          {
            path: 'avatar',
            title: 'Avatar 头像',
          },
          {
            path: 'collapse-text',
            title: 'CollapseText 折叠文本'
          },
          {
            path: 'empty',
            title: 'Empty 空状态'
          },
          {
            path: 'pagination',
            title: 'Pagination 分页',
          },
          {
            path: 'tabs',
            title: 'Tabs 标签页',
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
            path: 'timeline',
            title: 'Timeline 时间线'
          },
          {
            path: 'tree',
            title: 'Tree 树',
          },
          {
            path: 'button-tabs',
            title: 'ButtonTabs 标签按钮',
          }
        ]
      },
      {
        title: '导航组件',
        items: [
          {
            path: 'steps',
            title: 'Steps 步骤条'
          },
        ]
      },
      {
        title: '反馈组件',
        items: [
          {
            path: 'dialog',
            title: 'Dialog 对话框'
          },
          {
            path: 'message',
            title: 'Message 消息提示'
          },
          {
            path: 'tip',
            title: 'Tip 文字提示',
          },
          {
            path: 'v-title',
            title: 'vTitle 提示'
          }
        ]
      },
      {
        title: '业务组件',
        items: [
          {
            path: 'avatar-card',
            title: 'AvatarCard 头像卡片',
          },
          {
            path: 'block',
            title: 'Block 内容块'
          },
          {
            path: 'date-range',
            title: 'DateRange 日期范围',
          },
          {
            path: 'dept-tree',
            title: 'DeptTree 部门员工选择',
          },
          {
            path: 'progress',
            title: 'Progress 进度条',
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
