# tag

### 介绍

用于标记和选择。

### 引入

```js
  import Vue from 'vue';
  import { Tag } from 'tanma-design';
  
  Vue.use(Tag);
```

## 代码演示

### 基础用法

由`type`属性来选择`tag`的类型，也可以通过`color`属性来自定义背景色。

<demo-code>./demo/index.vue</demo-code>

### 可移除标签

设置`closable`属性可以定义一个标签是否可移除。

<demo-code>./demo/closable.vue</demo-code>

### 不同主题

Tag 组件提供了三个不同的主题：`light` 和 `dot`；

通过设置`effect`属性来改变主题，默认为 `light`；

> Tips：`dot`主题下`closable`不生效。

<demo-code>./demo/effect.vue</demo-code>

### Props

参数 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
type | 类型 | _string_ | `success` `info` `warning` `danger` | -
closable | 是否可关闭 | _boolean_ | - | false
color | 背景色 | _string_ | - | -
effect | 主题 | _string_ | `dot` `light` | light

### Events

事件名称 | 说明 | 回调参数
-- | -- | --
click | 点击 Tag 时触发的事件 | -
close | 关闭 Tag 时触发的事件 | -

### Slots

名称 | 说明
-- | --
default | 内容

### 样式变量

#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题 less](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@tag-font-size | var(--font-size-content) `14px` | tag字体大小
@tag-primary-color | var(--main-color) `#3470ff` | tag默认背景色
@tag-success-color | var(--color-success) `#3daf30` | success tag背景色
@tag-info-color | var(--tm-gray-9) `#CCCCCC` | info tag背景色
@tag-warning-color | var(--tm-auxiliary-7) `#FFAB00` | warning tag背景色
@tag-danger-color | var(--color-danger) `#f67172` | success tag背景色
@tag-dot-font-color | var(--title-font-color) `#333333` | success tag背景色

#### Css 变量

组件提供了下列 Css 变量，可用于自定义样式，使用方法请参考[定制主题 css](#/theme2)。

名称 | 默认值 | 描述
-- | -- | --
--tm-tag-font-size | @font-size-sm `14px` | tag字体大小
--tm-tag-primary-color | var(--main-color) `#3470ff` | tag默认背景色
--tm-tag-success-color | var(--color-success) `#3daf30` | success tag背景色
--tm-tag-info-color | var(--tm-gray-9) `#CCCCCC` | info tag背景色
--tm-tag-warning-color | var(--tm-auxiliary-7) `#FFAB00` | warning tag背景色
--tm-tag-danger-color | var(--color-danger) `#f67172` | success tag背景色
--tm-tag-dot-font-color | var(--title-font-color) `#333333` | success tag背景色