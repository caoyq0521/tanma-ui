# button

### 介绍

常用的操作按钮

### 引入

```js
  import Vue from 'vue';
  import { Button } from 'tanma-ui';
  
  Vue.use(Button);
```

## 代码演示

### 基础用法
基础按钮用法，使用type属性定义Button样式。

<demo-code>./demo/index.vue</demo-code>

### 禁用状态
使用disabled属性来定义按钮是否可用，它接受一个Boolean值。

<demo-code>./demo/disabledButton.vue</demo-code>

### 文字按钮
没有边框和背景色的按钮。

<demo-code>./demo/textButton.vue</demo-code>

### Props

参数 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
type | 类型 | _string_ | primary/danger/addition/text | -
disabled | 	是否禁用状态 | _boolean_ | - | false

### Slots

名称 | 说明
-- | --
default | 显示在按钮里面的内容

### 样式变量

#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@btn-padding | 8px 20px | 基础按钮padding
@btn-line-height| 18px | 行高
@btn-border-radius | 5px | 按钮圆角