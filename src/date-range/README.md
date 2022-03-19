# DateRange 日期范围

### 介绍

组件介绍

### 引入

```js
  import Vue from 'vue';
  import { Date-range } from 'tanma-design';
  
  Vue.use(Date-range);
```

## 代码演示

### 基础用法

<demo-code>./demo/index.vue</demo-code>

### 配置快捷项

<demo-code>./demo/shortcuts.vue</demo-code>

### 配置时间范围

<demo-code>./demo/format.vue</demo-code>

### 类型

> 如果类型为date、datetime时，必须指定default-time字段，且为字符串，例如（00:00:00）

<demo-code>./demo/type.vue</demo-code>

## API

### Props

| 参数              | 说明                                     | 类型               | 可选值 | 默认值               |
| ----------------- | ---------------------------------------- | ------------------ | ------ | -------------------- |
| clearable         | 是否显示清除按钮                         | _boolean_          | -      | false                |
| date-range        | 选择日期范围                             | _number_           | -      | 0                    |
| default-time      | 范围选择时选中日期所使用的当日内具体时刻 | _string \|  array_ | -      | [00:00:00, 23:59:59] |
| hide-shortcuts    | 隐藏快捷方式数                           | _boolean_          | -      | false                |
| end-placeholder   | 范围选择时结束日期的占位内容             | _string_           | -      | 结束日期             |
| range-separator   | 选择范围时的分隔符                       | _string_           | -      | ~                    |
| shortcuts         | 快捷方式数组                             | _array_            | -      | ShortcutOptions      |
| size              | 输入框尺寸                               | _string_           | -      | small                |
| start-placeholder | 范围选择时开始日期的占位内容             | _string_           | -      | 开始日期             |
| type              | 显示类型                                 | _string_           | -      | daterange            |
| value             | 绑定值                                   | _array \|  string_ | -      | []                   |
| value-format      | 绑定值的格式                             | _string_           | -      | yyyy-MM-dd           |

### Events

| 事件名 | 说明           | 回调参数                 |
| ------ | -------------- | ------------------------ |
| focus  | 失去焦点时触发 | -                        |
| change | 修改日期后触发 | (value: string \| array) |

