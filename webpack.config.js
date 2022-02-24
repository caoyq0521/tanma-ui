const { resolve } = require('path');
module.exports = {
  mode: 'development',
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
  }
}