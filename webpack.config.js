const { resolve } = require('path');
module.exports = {
  mode: 'development',
  module: {
    rules: [
      {        
        test: /\.(woff2?|eot|ttf|otf|png|jpe?g|gif)(\?.*)?$/,
        loader: 'file-loader',
        exclude: resolve('../node_modules'),
        options: {
          limit: 10000
        }
      }
    ],
  },
  devServer: {
    open: true, // 设置是否自动打开浏览器
    hot: true,
    proxy: {
      '/': {
        target: 'https://dev.tanmarket.cn/',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^': ''
        }
      }
    }
  },
  externals: {
    'Vue': 'Vue',
    'element-ui': 'ElementUI'
  }
}