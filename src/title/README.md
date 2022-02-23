# Title 按钮

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

<demo-code compact>./demo/index.vue</demo-code>

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


