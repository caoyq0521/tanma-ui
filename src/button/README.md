# button

### 介绍

常用的操作按钮

### 引入

```js
  import Vue from 'vue';
  import { Button } from 'tanma-design';
  
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


### 不可用按钮
自带禁用属性，不用传递disabled。

<demo-code>./demo/forbiddenButton.vue</demo-code>

### 加载中按钮
设置loading属性为true即可。

<demo-code>./demo/loadButton.vue</demo-code>

### 不同尺寸按钮
Button 组件提供两种尺寸，默认按钮最小宽度115px，小型按钮最小宽度70px，可以在不同场景下选择合适的按钮尺寸。

<demo-code>./demo/sizeButton.vue</demo-code>
### Props

参数 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
disabled | 	是否禁用状态 | _boolean_ | - | false
loading | 	是否加载中状态 | _boolean_ | - | false
size | 	尺寸 | _string_ | small | -
type | 类型 | _string_ | primary/danger/addition/text/forbidden/wicked | -
round | 是否圆角按钮 | _boolean_ | - | false
native-type | 原生类型 | _string_ | button / submit / reset | button
### Slots

名称 | 说明
-- | --
default | 显示在按钮里面的内容

### 样式变量

#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题 less](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@btn-primary | var(--main-color) `#3470ff` | 主要按钮颜色
@btn-danger | @color-danger `#f67172` | 危险按钮颜色
@btn-gray-9 | var(--tm-gray-9) `#CCCCCC` | 禁用按钮颜色
@btn-gray-7|  var(--color-background) `#f4f4f6` | 置灰按钮颜色
@btn-padding |  0 20px | 按钮边距
@btn-border-radius | `5px` | 按钮圆角
@btn-font-size-sm | var(--font-size-content) `14px`  | 按钮字体大小
@btn-heigh | `36px`  | 按钮高度
@btn-width-medium | `115px`  | 默认size按钮最小宽度
@btn-width-small | `70px`  | size为small按钮最小宽度
@btn-solid | solid  | 按钮实线边框
@btn-dashed | dashed  | 按钮虚线边框
@btn-hover-danger-bgc | fade(@color-danger, 85%)  | 危险按钮hover颜色


#### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[定制主题 css](#/theme2)。

名称 | 默认值 | 描述
-- | -- | --
--tm-btn-primary | var(--main-color) `#3470ff` | 主要按钮颜色
--tm-btn-danger | @color-danger `#f67172` | 危险按钮颜色
--tm-btn-padding |  0 20px | 按钮边距
--tm-btn-border-radius | `5px` | 按钮圆角
--tm-btn-font-size-sm | var(--font-size-content) `14px` | 按钮字体大小
--tm-btn-heigh | `36px`| 按钮高度
--tm-btn-width-medium | @btn-width-medium `115px` | 默认size按钮最小宽度
--tm-btn-width-small | @btn-width-small `70px` | size为small按钮最小宽度
--tm-btn-solid | solid | 按钮实线边框
--tm-btn-dashed | dashed | 按钮虚线边框
--tm-btn-hover-danger-bgc | @btn-hover-danger-bgc | 危险按钮hover颜色

