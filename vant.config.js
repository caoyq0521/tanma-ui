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
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
        ],
      },
    ],
  },
};
