# Title 标题

### 介绍

一个基本的标题组件

### 引入

```js
import Vue from 'vue';
import { Title } from 'tanma-design';

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

### Props

参数 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
title | 标题 | _string_ | - | 标题
title-size | 标题文字大小。最小为`14` | _string \| number_ | - | `14`
required | 是否为必填。会在标题后显示红色 `*` 号 | _boolean_ | - | `false`
show-optional | 是否显示 `(选填)` 提示 | _boolean_ | - | `false`
tips | 提示信息 | _string_ | - | -
tips-size | 提示信息自字体大小。<br >字体大小必须 大于等于 `14` 并且 小于 标题字体大小 | _string \| number_ | - | `14`
tips-in-brackets | 提示信息是否显示在 `括号` 中 | _boolean_ | - | `false`
tips-theme | 提示信息主题样式 | _string_ | normal \| danger | `normal`
with-background-color | 标题内容是否带有背景色 | _boolean_ | - | false
background-color | 背景色，在 `withBackgroundColor` 为 true 时生效 | _string_ | - | `#F4F4F6`
radius | 背景圆角，在 `withBackgroundColor` 为 true 时生效 | _string \| number_ | - | `5`

### Slots

名称 | 说明
-- | --
default | 显示在提示信息后的内容
right | 右侧内容


### 样式变量

#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题 less](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@title-font-weight | var(--font-bold) `550` | 标题加粗
@title-required-color | var(--tm-red) `#FC5A5A` | *字体颜色
@title-optional-color | var(--tooltip-font-color) `#858598` | (选填)字体颜色 
@title-tips-color | var(--tooltip-font-color) `#858598` | - 提示字体颜色
@title-tips-danger-color | var(--tm-red) `#FC5A5A` | - | `danger`模式下标题颜色
@title-optional-margin-left | 10px | (选填)离左边的内容距离
@title-tips-margin-left | 10px | 提示信息离左边的内容距离
@title-has-bgc-padding | 12px 16px | `withBackgroundColor`为true时，box的padding

#### Css 变量

组件提供了下列 Css 变量，可用于自定义样式，使用方法请参考[定制主题 css](#/theme2)。

名称 | 默认值 | 描述
-- | -- | --
--tm-title-font-weight | var(--font-bold) `550` | 标题加粗
--tm-title-required-color | var(--tm-red) `#FC5A5A` | *字体颜色
--tm-title-optional-color | var(--tooltip-font-color) `#858598` | (选填)字体颜色 
--tm-title-tips-color | var(--tooltip-font-color) `#858598` | - 提示字体颜色
--tm-title-tips-danger-color | var(--tm-red) `#FC5A5A` | - | `danger`模式下标题颜色
--tm-title-optional-margin-left | 10px | (选填)离左边的内容距离
--tm-title-tips-margin-left | 10px | 提示信息离左边的内容距离
--tm-title-has-bgc-padding | 12px 16px | `withBackgroundColor`为true时，box的padding

