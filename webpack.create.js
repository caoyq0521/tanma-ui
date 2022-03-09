const { resolve } = require('path');
const CreateDirStructure = require('./plugins/createDirStructure');

module.exports = {
  mode: 'development',
  plugins:[
    new CreateDirStructure({
      name: 'api',
      path: resolve(__dirname, 'src')
    })
  ]
};