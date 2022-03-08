module.exports = {
  presets: [
    "@babel/preset-env",
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
