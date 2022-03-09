module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset",
    [
      '@vue/babel-preset-jsx',
      {
        'injectH': false
      }
    ]
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]
  ],
};
