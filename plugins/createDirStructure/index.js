const { writeFileSync, mkdirSync } = require('fs');
const createFileContent = require('./createFileContent');



class CreateDirStructure {
  constructor({ name, path = 'src' }) {
    if(!name) {
      throw new Error('name必填');
    }
    this.name = name;
    this.path = path;
    this.halfPath = `${path}/${name}`;
  }

  apply() {
    const { name, halfPath } = this;
    const { comptContent, mdContent, exportJsContent, styleContent, varContent, testSpecJsContent, demoContent } = createFileContent(name);

    mkdirSync(halfPath);
    writeFileSync(`${halfPath}/${name}.vue`, comptContent);
    writeFileSync(`${halfPath}/README.md`, mdContent);
    writeFileSync(`${halfPath}/index.js`, exportJsContent);
    writeFileSync(`${halfPath}/index.less`, styleContent);
    writeFileSync(`${halfPath}/var.less`, varContent);

    mkdirSync(`${halfPath}/test`);
    writeFileSync(`${halfPath}/test/index.spec.js`, testSpecJsContent);

    mkdirSync(`${halfPath}/demo`);
    writeFileSync(`${halfPath}/demo/index.vue`, demoContent);

    console.log('写入成功');
  }
}

module.exports = CreateDirStructure;