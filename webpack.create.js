const { resolve } = require('path');
const CreateDirStructure = require('./plugins/createDirStructure');

module.exports = {
  mode: 'development',
  plugins:[
    new CreateDirStructure({
      name: 'dialog',
      path: resolve(__dirname, 'src')
    })
  ]
};