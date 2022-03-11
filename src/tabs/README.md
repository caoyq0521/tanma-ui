# tabs

<demo-code>./demo/pagination.vue</demo-code>


### 介绍

页面标签组件，可切换多种样式。

### 引入

```js
  import Vue from 'vue';
  import { Tabs } from 'tanma-ui';
  
  Vue.use(Tabs);
```

## 代码演示

### 基础用法

默认选中第一个标签页，你也可以通过 value 属性来指定当前选中的标签页。
<demo-code>./demo/index.vue</demo-code>

### 标签样式

只需要设置 ``type`` 属性为 ``text`` 就可以只将选中标签的字体变色。
<demo-code>./demo/text.vue</demo-code>

只需要设置 ``type`` 属性为 ``button`` 就可以使选中标签改变为按钮风格。
<demo-code>./demo/button.vue</demo-code>

添加 ``round`` 属性可使选中标签改变为圆角。
<demo-code>./demo/round.vue</demo-code>

设置 ``size`` 属性为 ``small`` 可改变标签整体高度及字体大小。
<demo-code>./demo/size.vue</demo-code>

### 标签位置

可以通过 ``placement`` 设置标签在整行中的位置。
<demo-code>./demo/placement.vue</demo-code>

### 插槽

可使用 ``left`` 和 ``right`` 插槽插入自定义内容。也可以通过name为标签key值的插槽自定义某个标签的内容。
<demo-code>./demo/slot.vue</demo-code>


### Props

参数 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
value/v-model | 绑定值，选中标签的 key | _string_ | - | 第一个标签的 key
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
[key] | name为每个标签的``key``值，{ tab, index }，``tab``是``key``对应的标签对象，``index``是此标签在数组中的位置

### Events

name | 说明 | 回调参数
-- | -- | --
tab-click | tab 被选中时触发 | 被选中的标签 tab 实例

### 样式变量
#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题 less](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@tabs-font-size | @font-size-sm `14px` | 标签字体大小
@tabs-active-font-size | @font-size-md `16px` | 选中标签的字体大小
@tabs-color | var(--tm-black) `#000000` | 未选中标签的字体颜色
@tabs-active-color | var(--main-color) `#3470ff` | 选中标签的字体颜色，按钮类型选中标签的背景色
@tabs-button-active-color | var(--tm-white) `#ffffff` | 标签类型为按钮时选中标签的字体颜色
@tabs-button-border-radius | @border-radius-md `4px` | 标签类型为按钮时选中标签的圆角大小
@tabs-font-weight-normal | @font-weight-normal `400` | 标准字体粗细
@tabs-font-weight-bold | @font-weight-bold `550` | 加粗字体粗细
@tabs-button-active-padding | @padding-sm `12px` | 按钮类型选中标签的左右内边距大小



#### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[定制主题 css](#/theme2)。

名称 | 默认值 | 描述
-- | -- | --
--tm-tabs-font-size | @font-size-sm `14px` | 标签字体大小
--tm-tabs-active-font-size | @font-size-md `16px` | 选中标签的字体大小
--tm-tabs-color | var(--tm-black) `#000000` | 未选中标签的字体颜色
--tm-tabs-active-color | var(--main-color) `#3470ff` | 选中标签的字体颜色，按钮类型选中标签的背景色
--tm-tabs-button-active-color | var(--tm-white) `#ffffff` | 标签类型为按钮时选中标签的字体颜色
--tm-tabs-button-border-radius | @border-radius-md `4px` | 标签类型为按钮时选中标签的圆角大小
--tm-tabs-shadow-color | @shadow-color-primary `rgb(52, 112, 255, 0.5)` | 标签类型为按钮时选中标签的阴影颜色
--tm-tabs-font-weight-normal | @font-weight-normal `400` | 标准字体粗细
--tm-tabs-font-weight-bold | @font-weight-bold `550` | 加粗字体粗细
--tm-tabs-button-active-padding | @padding-sm `12px` | 按钮类型选中标签的左右内边距大小