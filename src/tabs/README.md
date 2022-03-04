# tabs

### 介绍

组件介绍

### 引入

```js
  import Vue from 'vue';
  import { Tabs } from 'tanma-ui';
  
  Vue.use(Tabs);
```

## 代码演示

### 基础用法

Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 value 属性来指定当前选中的标签页。
<demo-code>./demo/index.vue</demo-code>

### 选项卡样式

只需要设置 ``type`` 属性为 ``button`` 就可以使选项卡改变为按钮风格。
<demo-code>./demo/button.vue</demo-code>

添加 ``round`` 属性可使选项卡改变为圆角。
<demo-code>./demo/round.vue</demo-code>

设置 ``size`` 属性为 ``small`` 可改变为小按钮。
<demo-code>./demo/size.vue</demo-code>

### 选项卡位置

可以通过 ``placement`` 设置标签在整行中的位置。
<demo-code>./demo/placement.vue</demo-code>

### 插槽

可使用 ``left`` 和 ``right`` 插槽插入自定义内容。
<demo-code>./demo/slot.vue</demo-code>


### Props

参数 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
value/v-model | 绑定值，选中选项卡的 key | _string_ | - | 第一个选项卡的 key
type | 样式类型 | _string_ | underline / button | underline
options | 标签选项列表，每项必须包含 key 和 title | _array_ | - | []
size | 控制标签高度 | _string_ | medium / small | medium
round | 选中的标签是否圆角，仅按钮类型有效 | _boolean_ | - | false
placement | 控制标签在整行中的位置 | _string_ | left / center / right | left

### Slot

name | 说明 
-- | -- 
left | 最左侧 
right | 最右侧 

### Events

name | 说明 | 回调参数
-- | -- | --
tab-click | tab 被选中时触发 | 被选中的标签 tab 实例