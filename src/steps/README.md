# steps

### 介绍

引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。

### 引入

```js
  import Vue from 'vue';
  import { Steps, Step } from 'tanma-design';
  
  Vue.use(Steps);
  Vue.use(Step);
```

## 代码演示

### 基础用法

<demo-code>./demo/index.vue</demo-code>

### 带图标的步骤条

步骤条内可以启用各种自定义的图标。

<demo-code>./demo/icon.vue</demo-code>

> 通过icon属性来设置图标，图标的类型可以参考 Icon 组件的文档，除此以外，还能通过具名slot来使用自定义的图标。

### 垂直步骤条

水平方向的步骤条。

<demo-code>./demo/horizontal.vue</demo-code>

### 禁用某一步骤

如果某一步骤要禁用或者不可点击可通过`disabled`控制。

<demo-code>./demo/disabled.vue</demo-code>

### Props

#### Steps props

参数 | 说明 | 类型 | 可选值 | 默认值 
-- | -- | -- | -- | --
active | 设置当前激活步骤 | _number_ | - | 0
direction | 显示方向 | _string_ | `vertical`\|`horizontal` | vertical

#### Step props

参数 | 说明 | 类型 | 可选值 | 默认值 
-- | -- | -- | -- | --
title | 标题 | _string_ | - | -
icon | 图标 | _string_ | - | -
disabled | 是否禁用 | _boolean_ | - | false

### Events

事件名称 | 说明 | 回调参数
-- | -- | --
change | 点击 step 时触发的事件 | 当前 step 索引

### Slots

#### Step Slots

名称 | 说明
-- | --
title | 自定义标题
icon | 自定义icon

### 样式变量

#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题 less](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@step-active-color | var(--main-color) `#3470ff` | 当前活动项的颜色，包括索引、title、line
@step-head-normal-bgc | var(--tm-gray-3) `#D7D7D7` | 索引未选中和禁用时的背景色
@step-vertical-line-color | var(--tm-gray-3) `#D7D7D7` | `vertical`模式下未选中线的颜色
@step-horizontal-arrow-color | var(--tm-gray-3) `#D7D7D7` | `horizontal`模式下未选中箭头的颜色
@step-disabled-title-color | var(--tm-gray-3) `#D7D7D7` | 禁用时title的颜色
@step-disabled-head-color | var(--list-title-font-color) `#858598` | 禁用时索引的背景色

#### Css 变量

组件提供了下列 Css 变量，可用于自定义样式，使用方法请参考[定制主题 css](#/theme2)。

名称 | 默认值 | 描述
-- | -- | --
--tm-step-active-color | var(--main-color) `#3470ff` | 当前活动项的颜色，包括索引、title、line
--tm-step-head-normal-bgc | var(--tm-gray-3) `#D7D7D7` | 索引未选中和禁用时的背景色
--tm-step-vertical-line-color | var(--tm-gray-3) `#D7D7D7` | `vertical`模式下未选中线的颜色
--tm-step-horizontal-arrow-color | var(--tm-gray-3) `#D7D7D7` | `horizontal`模式下未选中箭头的颜色
--tm-step-disabled-title-color | var(--tm-gray-3) `#D7D7D7` | 禁用时title的颜色
--tm-step-disabled-head-color | var(--list-title-font-color) `#858598` | 禁用时索引的背景色