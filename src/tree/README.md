# tree

### 介绍

组件介绍

### 引入

```js
  import Vue from 'vue';
  import { Tree } from 'tanma-design';
  
  Vue.use(Tree);
```

## 代码演示

### 基本用法（1w+数据）

<demo-code>./demo/index.vue</demo-code>

### Props

参数 | 说明 | 类型 | 可选值 | 默认值 
-- | -- | -- | -- | --
virtualScroll | 是否开启虚拟列表，必传 | _boolean_ | - | false
height | 虚拟列表的高度，必传 | _number_ | - | 0
itemHeight | 虚拟列表每一项的高度，可选 | _number_ | - | 0

其他参数跟element tree 参数一样

