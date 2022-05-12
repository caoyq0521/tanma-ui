# tabs

### 介绍

选项卡切换组件，常用于平级区域大块内容的的收纳和展现。

### 引入

```js
  import Vue from 'vue';
  import { Tabs } from 'tanma-design';
  
  Vue.use(Tabs);
```

## 代码演示

### 基础用法

默认选中第一个 tab，你也可以通过 value 属性来指定当前选中的 tab。
<demo-code>./demo/index.vue</demo-code>

### 选项卡样式

只需要设置 ``type`` 属性为 ``text`` 就可以使用简洁样式。
<demo-code>./demo/text.vue</demo-code>

只需要设置 ``type`` 属性为 ``button`` 就可以使选中tab改变为按钮风格。
<demo-code>./demo/button.vue</demo-code>

添加 ``round`` 属性可使选中tab改变为圆角。
<demo-code>./demo/round.vue</demo-code>

设置 ``size`` 属性为 ``small`` 可改变 tabs 整体高度及字体大小。
<demo-code>./demo/size.vue</demo-code>

### 页签位置

可以通过 ``position`` 设置页签在整行中的位置。
<demo-code>./demo/position.vue</demo-code>

### 插槽

可使用 ``left`` 和 ``right`` 插槽插入自定义内容。也可以通过name为tab key值的插槽自定义某个tab的内容。
<demo-code>./demo/slot.vue</demo-code>

### 分页

当tab过多时，会自动在两边添加翻页按钮。且当前选中的tab会自动居中显示。

组件默认监听浏览器窗口大小的变化来计算是否显示两侧按钮。如果不是浏览器窗口导致组件宽度改变时，需手动调用组件的``initEle``方法。
<demo-code>./demo/pagination.vue</demo-code>

### 路由监听

可通过``router``属性设置是否监听路由，``router``为``true``时将根据路由参数绑定当前激活的tab，切换tab时自动改变路由参数。

可用``queryname``自定义参数名称。

> 注意：如果开启路由监听，首次绑定时参数的优先级高于value。

<demo-code>./demo/router.vue</demo-code>


### Props

参数 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
value/v-model | 绑定值，当前激活tab的 key | _string_ | - | 第一个tab的 key
type | 样式类型 | _string_ | text / underline / button | underline
options | tab选项列表，每项必须包含 ``key`` 和 ``title`` | _array_ | - | []
router | 是否监听路由参数改变及切换tab时自动改变路由参数 | _boolean_ | - | false
queryname | 路由参数名称，默认为``tab``，``router``为``true``时有效 | _string_ | - | tab
size | 控制 tabs 高度 | _string_ | default / small | default
round | 选中的 tab 是否圆角，仅按钮类型有效 | _boolean_ | - | false
position | 控制页签在整行中的位置 | _string_ | left / center / right | left

### Slot

name | 说明 
-- | -- 
left | 最左侧
right | 最右侧
[key] | name为每个 tab 的 key 值，插槽prop为 { tab, index }，``tab``是``key``对应的tab对象，``index``是此tab在数组中的位置
 
### Events

name | 说明 | 回调参数
-- | -- | --
tab-click | tab被选中时触发 | 被选中的 tab 实例

### 样式变量
#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题 less](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@tabs-font-size | @font-size-sm `14px` | 选项卡字体大小
@tabs-active-font-size | @font-size-md `16px` | 选中 tab 的字体大小
@tabs-color | var(--tm-black) `#000000` | 未选中 tab 的字体颜色
@tabs-active-color | var(--main-color) `#3470ff` | 选中 tab 的字体颜色，按钮类型选中 tab 的背景色
@tabs-button-active-color | var(--tm-white) `#ffffff` | 选项卡类型为按钮时选中 tab 的字体颜色
@tabs-button-border-radius | @border-radius-md `4px` | 选项卡类型为按钮时选中 tab 的圆角大小
@tabs-font-weight-normal | @font-weight-normal `400` | 标准字体粗细
@tabs-font-weight-bold | @font-weight-bold `550` | 加粗字体粗细
@tabs-button-active-padding | @padding-sm `12px` | 按钮类型选中 tab 的左右内边距大小


#### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[定制主题 css](#/theme2)。

名称 | 默认值 | 描述
-- | -- | --
--tm-tabs-font-size | @font-size-sm `14px` | 选项卡字体大小
--tm-tabs-active-font-size | @font-size-md `16px` | 选中 tab 的字体大小
--tm-tabs-color | var(--tm-black) `#000000` | 未选中 tab 的字体颜色
--tm-tabs-active-color | var(--main-color) `#3470ff` | 选中 tab 的字体颜色，按钮类型选中 tab 的背景色
--tm-tabs-button-active-color | var(--tm-white) `#ffffff` | 选项卡类型为按钮时选中 tab 的字体颜色
--tm-tabs-button-border-radius | @border-radius-md `4px` | 选项卡类型为按钮时选中 tab 的圆角大小
--tm-tabs-font-weight-normal | @font-weight-normal `400` | 标准字体粗细
--tm-tabs-font-weight-bold | @font-weight-bold `550` | 加粗字体粗细
--tm-tabs-button-active-padding | @padding-sm `12px` | 按钮类型选中 tab 的左右内边距大小