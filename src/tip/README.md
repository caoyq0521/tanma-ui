# tip

### 介绍

鼠标hover的展示信息

### 引入

```js
  import Vue from 'vue';
  import { Tip } from 'tanma-design';
  
  Vue.use(Tip);
```

## 代码演示

### 基础用法
设置`content`属性展示提示信息
<demo-code>./demo/index.vue</demo-code>

### 展示方式
设置`placement`属性展示提示信息
<demo-code>./demo/placementSet.vue</demo-code>

### Props

参数 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
content | 提示信息 | _string_ | - | -
class-prefix | 类名前缀 | _string_ | - | -
placement | 提示信息出现位置 | _string_ | top/top-start/top-end<br>/bottom/bottom-start<br>/bottom-end/left/left-start<br>/left-end/right<br>/right-start/right-end | `left-start`
width | 提示框宽度 | _string_ | - | `auto`
iconColor | icon颜色 | _string_ | - | `rgba(193, 193, 202, .5)`
iconName | icon | _string_ | - | `icon-wenhao11`
iconSize | icon大小 | _string_ | - | `16px`
styleCls | icon样式 | _string_ | - | -
popperClass | 为 Tooltip 的 popper 添加类名 | _string_ | - | -

### Slot

名称 | 说明 
-- | -- 
default | 自定义内容 

### 样式变量

#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题 less](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@font-size-xs | @font-size-xs `12px` | 字体大小
@border-radius-md | @border-radius-md `4px` | 边框圆角
@white | @white `#fff` | 弹框背景色

#### Css 变量

组件提供了下列 Css 变量，可用于自定义样式，使用方法请参考[定制主题 css](#/theme2)。

名称 | 默认值 | 描述
-- | -- | --
--tm-font-s | @font-size-xs `12px` | 字体大小
--tm-border-tip | @border-radius-md `4px` | 边框圆角
--tm-tip-bgc | @white `#fff` | 弹框背景色