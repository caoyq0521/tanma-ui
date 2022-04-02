# timeline

### 介绍

对一系列信息进行时间排序时，垂直地展示。

### 引入

```js
  import Vue from 'vue';
  import { Timeline, TimelineItem } from 'tanma-design';
  
  Vue.use(Timeline);
  Vue.use(TimelineItem);
```

## 代码演示

### 基础用法

<demo-code>./demo/index.vue</demo-code>

### 右侧内容

<demo-code>./demo/right.vue</demo-code>

### Props

#### TimelineItem props

参数 | 说明 | 类型 | 可选值 | 默认值 
-- | -- | -- | -- | --
timestamp | 时间戳 | _string_ | - | -
hide-timestamp | 是否隐藏时间戳 | _boolean_ | - | false
color | 节点颜色 | _string_ | - | var(--main-color) `#3470ff`

### Slots

#### TimelineItem Slots

名称 | 说明
-- | --
header | 时间戳右侧内容
default | 内容

### 样式变量

#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题 less](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@timeline-timestamp-color | var(--list-title-font-color) `#858598` | 时间戳文字颜色
@timeline-content-color | var(--title-font-color) `#333333` | 内容文字颜色

#### Css 变量

组件提供了下列 Css 变量，可用于自定义样式，使用方法请参考[定制主题 css](#/theme2)。

名称 | 默认值 | 描述
-- | -- | --
--tm-timeline-timestamp-color | var(--list-title-font-color) `#858598` | 时间戳文字颜色
--tm-timeline-content-color | var(--title-font-color) `#333333` | 内容文字颜色
