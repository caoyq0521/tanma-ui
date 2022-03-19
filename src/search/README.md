# search

### 介绍

组件介绍

### 引入

```js
  import Vue from 'vue';
  import { Search } from 'tanma-design';
  
  Vue.use(Search);
```

## 代码演示

### 基础用法

<demo-code>./demo/index.vue</demo-code>

### 可清空

<demo-code>./demo/clearable.vue</demo-code>

### 输入长度限制

<demo-code>./demo/maxlength.vue</demo-code>

### 是否允许输入特殊字符

>当前枚举的特殊字符串：@ < > * % & ? # ( ) ! ; " '

<demo-code>./demo/special.vue</demo-code>

## API

### Props

参数 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
value / v-model | 绑定值 | _string \/ number_ | - | -
placeholder | 输入框占位文本 | _string_ | - | 请输入内容
maxlength | 原生属性，最大输入长度 | _string \/ number_ | - | -
show-word-limit | 是否显示输入字数统计 | _boolean_ | - | false
clearable | 是否可清空 | _boolean_ | - | false
show-icon | 是否显示搜索Icon | _boolean_ | - | true
allow-special-char | 是否允许输入特殊字符 | _boolean_ | - | false

### Slots
名称 | 说明
-- | --
prepend | 输入框前置内容

### Events
事件名 | 说明 | 回调参数
-- | -- | --
change | 仅在输入框失去焦点或用户按下回车时触发 | (value: string \| number)
blur | 在 Input 失去焦点时触发 | (event: Event)

### Methods

方法名 | 说明 | 参数
-- | --| --
focus | 使 Input 获取焦点 | -
clear | 清空 Input 内容 | -