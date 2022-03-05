# tree-select

### 介绍

树选择器

### 引入

```js
  import Vue from 'vue';
  import { Tree-select } from 'tanma-ui';
  
  Vue.use(Tree-select);
```

## 代码演示

### 基础用法

<demo-code>./demo/index.vue</demo-code>

### beforeSelect函数对label2节点进行点击校验

<demo-code>./demo/beforeSelect.vue</demo-code>

## API

### Props


参数 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
data |  tree data | Array | - | []
beforeSelect |  点击节点之前的校验函数 | Function(返回一个Promise) | - | null
placeholder |  选择框placeholder | String | - | 请选择部门
defaultProps | 选择框的默认Props | object | - | {}
propsKeys | tree使用的keys | object | - | {children: 'children', label: 'label',value: 'id'}
