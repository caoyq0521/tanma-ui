# Title 标题

### 介绍

一个基本的标题组件

### 引入

```js
import Vue from 'vue';
import { Title } from 'tanma-ui';

Vue.use(Title);
```

## 代码演示

### 基础用法

可以设置 `titleSize` 属性，用于控制标题字体大小。

<demo-code>./demo/index.vue</demo-code>

### 必填提示

默认情况下 `*` 不显示，如果需要，可以使用 `required`属性。它接受一个Boolean，默认为false，设置为true即为启用。

<demo-code>./demo/required.vue</demo-code>

### 带提示信息的标题

tipsInBrackets属性可以将提示信息放在 `()` 中。它接受一个Boolean，默认为false，设置为true即为启用；同时可以设置 `titleSize` 属性，用于控制提示信息字体大小。

<demo-code>./demo/tips.vue</demo-code>

### 提示信息主题

Title组件为提示信息提供了两个不同的主题：`normal`和`danger`。

通过设置tipsTheme属性来改变主题，默认为normal。

<demo-code>./demo/tipsTheme.vue</demo-code>

### 带有背景色的标题

通过配置 `withBackgroundColor` 来决定是否带有背景色。背景色默认为 `#F4F4F6`，可以通过 `backgroundColor`来设置，还可通过设置 `radius` 属性来决定背景的圆角大小。

<demo-code>./demo/backgroundColor.vue</demo-code>

## API

### Props

参数 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
title | 标题 | _string_ | - | 标题
titleSize | 标题文字大小。最小为`14` | _string \| number_ | - | `16`
required | 是否为必填。会在标题后显示红色 `*` 号 | _boolean_ | - | `false`
showOptional | 是否显示 `(选填)` 提示 | _boolean_ | - | `false`
tips | 提示信息 | _string_ | - | -
tipsSize | 提示信息自字体大小。<br >字体大小必须 大于等于 `14` 并且 小于 标题字体大小 | _string \| number_ | - | `14`
tipsInBrackets | 提示信息是否显示在 `括号` 中 | _boolean_ | - | `false`
tipsTheme | 提示信息主题样式 | _string_ | normal \| danger | `normal`
withBackgroundColor | 标题内容是否带有背景色 | _boolean_ | - | false
backgroundColor | 背景色，在 `withBackgroundColor` 为 true 是生效 | _string_ | - | `#F4F4F6`
radius | 背景圆角，在 `withBackgroundColor` 为 true 是生效 | _string \| number_ | - | `5`

### Slots

名称 | 说明
-- | --
default | 显示在提示信息后的内容
right | 右侧内容


### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@title-font-weight | @font-weight-bold | -
@title-required-color | @red | -
@title-optional-color | @color-text-secondary | -
@title-tips-color | @color-text-secondary | -
@title-tips-danger-color | @red | -
@title-optional-margin-left | 10px | -
@title-tips-margin-left | 10px | -
@title-has-bgc-padding-top | 12px | -
@title-has-bgc-padding-bottom | 12px | -
@title-has-bgc-padding-left | 16px | -
@title-has-bgc-padding-right | 16px | -

