# tag-group

### 介绍

标签过多时使用。

### 引入

```js
  import Vue from 'vue';
  import { TagGroup } from 'tanma-design';
  
  Vue.use(TagGroup);
```

## 代码演示

### 基础用法

<demo-code>./demo/index.vue</demo-code>

### Props

参数 | 说明 | 类型 | 可选值 | 默认值 
-- | -- | -- | -- | --
trigger | 触发方式 | _string_ | `click` `focus` `hover` `manual` | click
width | 宽度 | _string \|  number_ | - | 292
popperClass | 为 Tooltip 的 popper 添加类名 | _string_ | - | -

### Slots

名称 | 说明
-- | --
default | 显示在按钮里面的内容

### 样式变量

#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题 less](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@tag-more-height | `26px` | 触发按钮的高度
@tag-more-padding | `10px` | 触发按钮的左右padding
@tag-more-radius | `5px` | 触发按钮的圆角大小
@tag-more-left | `3px` | 触发按钮的离左侧的距离
@tag-more-bgc | `#F5F5FA` | 触发按钮的背景色
@@tag-more-icon-color | var(--tooltip-font-color) `#858598` | ...icon的颜色

#### Css 变量

组件提供了下列 Css 变量，可用于自定义样式，使用方法请参考[定制主题 css](#/theme2)。

名称 | 默认值 | 描述
-- | -- | --
--tm-tag-more-height | `26px` | 触发按钮的高度
--tm-tag-more-padding | `10px` | 触发按钮的左右padding
--tm-tag-more-radius | `5px` | 触发按钮的圆角大小
--tm-tag-more-left | `3px` | 触发按钮的离左侧的距离
--tm-tag-more-bgc | `#F5F5FA` | 触发按钮的背景色
--tm-@tag-more-icon-color | var(--tooltip-font-color) `#858598` | ...icon的颜色