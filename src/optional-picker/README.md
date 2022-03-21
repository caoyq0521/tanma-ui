# optionalPicker

### 介绍

日周月时间范围选择器

### 引入

```js
  import Vue from 'vue';
  import { OptionalPicker } from 'tanma-design';
  
  Vue.use(OptionalPicker);
```

## 代码演示

### 基础用法

<demo-code>./demo/index.vue</demo-code>

### 单个时间类型用法
<demo-code>./demo/singleTemplate.vue</demo-code>

### 两个时间类型用法
<demo-code>./demo/twoTemplate.vue</demo-code>


### Props
参数 | 说明 | 类型 | 可选值 | 默认值 
-- | -- | -- | -- | --
default-time | 默认值`[startDate,endDate]` | _array_ | - | []
mode | 可选择模式 | _string \|  array_ | `day` `week` `month` `['day','week']`... | ['day', 'week', 'month']

### Events
事件名称 | 说明 | 回调参数
-- | -- | -- |
change | 时间值改变时触发 | _{ \_type: string, startDate: string, endDate: string }_ |

### 样式变量

#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题](#/theme)。
名称 | 默认值 | 描述
-- | -- | --
@type-border-color | var(--tm-gray-3) `#D7D7D7` | 时间类型选择tab的boder颜色
@type-item-active-color | var(--tm-white) `#fff` | 选中时间类型的文字颜色
@type-item-active-background | var(--main-color) `#3470ff` | 选中时间类型的背景颜色

#### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[定制主题 css](#/theme2)。

名称 | 默认值 | 描述
-- | -- | --
 --tm-optional-picker-type-border-color | var(--tm-gray-3) `#D7D7D7` | 时间类型选择tab的boder颜色
--tm-optional-picker-type-active-color | var(--tm-white) `#fff` | 选中时间类型的文字颜色
--tm-optional-picker-type-active-background | var(--main-color) `#3470ff` | 选中时间类型的背景颜色