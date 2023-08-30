# block

### 介绍

带标题的块内容。

### 引入

```js
  import Vue from 'vue';
  import { Block } from 'tanma-design';
  
  Vue.use(Block);
```

## 代码演示

### 基础用法

<demo-code>./demo/index.vue</demo-code>

### 多title

如出现一个块中需要显示多块内容，可手动更改部分样式实现。

<demo-code>./demo/title.vue</demo-code>

### Props
参数 | 说明 | 类型 | 可选值 | 默认值 
-- | -- | -- | -- | --
title | 标题 | _string_ | - | 测试标题

### Slots
名称 | 说明
-- | --
title | 标题
default | 内容

### 样式变量

#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题 less](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@block-mark-color | var(--main-color) `#3470ff` | 标题前标注颜色

#### Css 变量

组件提供了下列 Css 变量，可用于自定义样式，使用方法请参考[定制主题 css](#/theme2)。

名称 | 默认值 | 描述
-- | -- | --
--tm-block-mark-color | var(--main-color) `#3470ff` | 标题前标注颜色