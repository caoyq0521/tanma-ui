const { resolve } = require('path');
const CreateDirStructure = require('./plugins/createDirStructure');

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src/index.js'),
  plugins:[
    new CreateDirStructure({
      name: 'button',
      path: resolve(__dirname, 'src')
    })
  ]
};