const { resolve } = require('path');
module.exports = {
  mode: 'production',
  module: {
    rules: [
      {        
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        exclude: resolve('../node_modules'),
        options: {
          limit: 10000
        }
      }
    ]
  },
  externals: {
    'Vue': 'Vue',
    'element-ui': 'ElementUI'
  }
}