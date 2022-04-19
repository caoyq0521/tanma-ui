# button-tabs

### 介绍

基于button按钮定制的按钮组。

### 引入

```js
  import Vue from 'vue';
  import { ButtonTabs } from 'tanma-design';
  
  Vue.use(ButtonTabs);
```

## 代码演示

### 上一步/下一步用法

<demo-code>./demo/index.vue</demo-code>

### 取消/确定用法

<demo-code>./demo/certainty.vue</demo-code>

### Props

参数 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
type | 类型 | _string_ | step/certainty | step
hide | 	隐藏按钮 | _string_ | left/right | -
rightContent | 自定义右侧按钮内容	 | _string_ | - | -
leftContent | 自定义左侧按钮内容 | _string_ | - | -
buttonType | 主要按钮类型 | _string_ | primary/danger | primary
disabled | 禁用按钮 | _string_ | left/right/all | -
loading | 	主要按钮(右侧)是否加载中状态 | _boolean_ | - | false

### Events
事件名称 | 说明 | 回调参数
-- | -- | --
click | 用户点击按钮时触发 | cancel/confirm


#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题 less](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@btn-tabs-cancel-hover-color | var(--tm-gray-7) `#f4f4f6` | type为certainty时左侧按钮hover颜色
@btn-tabs-next-width | `156px` | type为step时主要按钮宽度



#### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[定制主题 css](#/theme2)。

名称 | 默认值 | 描述
-- | -- | --
--tm-btn-tabs-cancel-hover-color | var(--tm-gray-7) `#f4f4f6` | type为certainty时左侧按钮hover颜色
--tm-btn-tabs-next-width | `156px` | type为step时主要按钮宽度

