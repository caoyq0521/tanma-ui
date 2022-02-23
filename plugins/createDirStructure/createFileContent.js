const prefix = 'tm';
const upperPrefix = 'Tm';

function getUpperName(name) {
  return name.replace(/^([a-z])/, a => {
    return a.toUpperCase();
  });
}

function getComptTemplate(upperName) {
  const str =  `///js
  import Vue from 'vue';
  import { ${upperName} } from 'tanma-ui';
  
  Vue.use(${upperName});
///`

return str.replace(/\//g,'`');
}

function createComptContent(name, upperName) {
  return `<template>
  <div class="${prefix}-${name}">

  </div>
</template>

<script>
  export default {
    name: "${prefix}${upperName}"
  }
</script>`
}

function createMDContent(name, upperName) {
  const comptTemplate = getComptTemplate(upperName);
  return `# ${name}

### 介绍

组件介绍

### 引入

${comptTemplate}

## 代码演示

### 基础用法

<demo-code compact>./demo/index.vue</demo-code>


## API

### Props`
}

function createStyleContent(name) {
  return `@import '../style/var';
@import './var';
  
:root {

}

.${prefix}-${name} {

}
  `
}

function createExportJsContent(name, upperName) {
  return `import ${upperName} from './${name}.vue';

${upperName}.install = function (Vue) {
  Vue.component(${upperName}.name, ${upperName});
};

export default ${upperName};
export { ${upperName} };`
}

function createVarContent() {
  return `@import '../style/var';`
}

function createTestSpecJsContent(name, upperName) {
  return `import { mount } from '@vue/test-utils';
import ${upperPrefix}${upperName} from '../${name}.vue';

describe('${name}${upperName}', () => {
  
})
  `
}

function createDemoContent(name) {
  return `<template>
  <${prefix}-${name} />
</template>`
};

function createFileContent(name) {
  const upperName = getUpperName(name);
  const comptContent = createComptContent(name, upperName);
  const mdContent = createMDContent(name, upperName);
  const styleContent = createStyleContent(name);
  const exportJsContent = createExportJsContent(name,  upperName);
  const varContent = createVarContent();
  const testSpecJsContent = createTestSpecJsContent(name, upperName);
  const demoContent = createDemoContent(name);

  return {
    comptContent,
    mdContent,
    styleContent,
    exportJsContent,
    varContent,
    testSpecJsContent,
    demoContent
  }
}

module.exports = createFileContent;