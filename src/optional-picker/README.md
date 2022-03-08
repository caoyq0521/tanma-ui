# optionalPicker

### 介绍

日周月时间范围选择器

### 引入

```js
  import Vue from 'vue';
  import { OptionalPicker } from 'tanma-ui';
  
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