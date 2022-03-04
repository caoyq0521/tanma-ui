# collapseText

### 介绍

折叠展示多行文本组件，根据传入的行数自动判断是否需要折叠展示

两种模式：展开/收起展示全文本（默认）、popover展示全文本

### 引入

```js
  import Vue from 'vue';
  import { CollapseText } from 'tanma-ui';
  
  Vue.use(CollapseText);
```

## 代码演示

### 基础用法

<demo-code>./demo/index.vue</demo-code>

### popover展示全文本

<demo-code>./demo/popover.vue</demo-code>

## API

### Props
参数 | 说明 | 类型 | 可选值 | 默认值 
-- | -- | -- | -- | --
close-button-text | '收起'按钮文本 | _string_ | - | 收起
lines | 折叠显示行数 | _number_ | - | 3
open-button-text | '展开'按钮文本 | _string_ | - | 展开
popover-place | popover展示位置 | _string_ | - | bottom
show-button | 是否显示'展开'/'收起'按钮 | _boolean_ | - | true
show-icon | 是否显示'展开'/'收起'按钮图标 | _boolean_ | - | true
show-popover | 是否采用popover显示全文本模式 | _boolean_ | - | false
text | 文本内容 | _string_ | - | -