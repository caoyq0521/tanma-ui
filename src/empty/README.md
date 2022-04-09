# empty

### 介绍

空状态时的占位提示。

### 引入

```js
  import Vue from 'vue';
  import { Empty } from 'tanma-design';
  
  Vue.use(Empty);
```

## 代码演示

### 基础用法

<demo-code>./demo/index.vue</demo-code>

### 不同类型

为方便使用，提供了`empty`、`error` 、`build`三种类型。

<demo-code>./demo/type.vue</demo-code>

### 自定义图片

通过设置 image 属性传入图片 URL或者通过 `slot image`自定义图片。

<demo-code>./demo/custom.vue</demo-code>

### 图片尺寸

通过设置 image-size 属性来控制图片大小。

<demo-code>./demo/imageSize.vue</demo-code>

### Props

参数 | 说明 | 类型 | 可选值 | 默认值 
-- | -- | -- | -- | --
type | 类型 | _string_ | `empty` `error` `build` | empty
image | 图片地址 | _string_ | - | -
image-size | 图片大小（宽度） | _number \| string_ | - | 260
description | 文本描述 | _string_ | - | -

### Slots

名称 | 说明
-- | --
image | 自定义图片
description | 自定义描述文字

### 样式变量

#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题 less](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@empty-description-font-size | var(--font-size-content) `14px` | 描述字体大小
@empty-description-font-color | var(--list-title-font-color) `#858598` | 描述字体颜色


#### Css 变量

组件提供了下列 Css 变量，可用于自定义样式，使用方法请参考[定制主题 css](#/theme2)。

名称 | 默认值 | 描述
-- | -- | --
--tm-empty-description-font-size | var(--font-size-content) `14px` | 描述字体大小
--tm-empty-description-font-color | var(--list-title-font-color) `#858598` | 描述字体颜色