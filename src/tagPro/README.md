# tagPro

### 介绍

提供了一些项目中常用的标签。

### 引入

```js
  import Vue from 'vue';
  import { TagPro } from 'tanma-design';
  
  Vue.use(TagPro);
```

## 代码演示

### 基础用法

<demo-code>./demo/index.vue</demo-code>

### 可移除标签

设置`closable`属性可以定义一个标签是否可移除。

<demo-code>./demo/closable.vue</demo-code>

### 自定义标签

通过设置 `icon`、`name`、`color`、`iconColor`、`fontColor`去自定义任意样式的标签。

<demo-code>./demo/custom.vue</demo-code>

### 自定义图标

如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件。

通过 class-prefix 指定类名为 `iconfont`

```html
<tm-tag-pro
  icon="icon-xingzhuang"
  class-prefix="iconfont"
  name="挂断电话"
  color="#f9d8d8"
  icon-color="#f79798"
  font-color="#F67172"
/>
```

### Props

参数 | 说明 | 类型 | 可选值 | 默认值 
-- | -- | -- | -- | --
closable | 是否可关闭 | _boolean_ | - | false
class-prefix | 类名前缀 | _string_ | - | -
color | 背景色 | _string_ | - | -
font-color | 字体颜色 | _string_ | - | -
icon | 自定义icon | _string_ | - | -
icon-color | icon颜色 | _string_ | - | -
limit | 标签内容超出多少后显示... | _number_ | - | 10
name | 标签内容 | _string_ | - | -
type | 类型 | _string_ | `content` `individual` `company` `department` `employee` `group` | employee

### Events

事件名称 | 说明 | 回调参数
-- | -- | --
click | 点击 Tag 时触发的事件 | -
close | 关闭 Tag 时触发的事件 | -

### Slots

名称 | 说明
-- | --
default | 内容
icon | 自定义icon

### 样式变量

#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题 less](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@tag-pro-content-color | var(--tm-gray-6) `#F6F6F6` | 内容标签背景色
@tag-pro-content-font-color | var(--title-font-color) `#333333` | 内容标签内容颜色
@tag-pro-content-icon-color | var(--tm-gray-9) `#CCCCCC` | 内容标签icon颜色
@tag-pro-individual-color | #F0F9EB | 个人标签背景色
@tag-pro-individual-font-color | #4AB43D | 个人标签内容颜色
@tag-pro-individual-icon-color | #C2E8B0 | 个人标签icon颜色
@tag-pro-company-color | `#EDF2FD | 公司标签背景色
@tag-pro-company-font-color | `#3470ff` | 公司标签内容颜色
@tag-pro-company-icon-color | #A4bFFF | 公司标签icon颜色
@tag-pro-department-color | #F0F9EB | 部门标签背景色
@tag-pro-department-font-color | #4AB43D | 部门标签内容颜色
@tag-pro-department-icon-color | #C2E8B0 | 部门标签icon颜色
@tag-pro-employee-color | `#EDF2FD | 员工标签背景色
@tag-pro-employee-font-color | `#3470ff` | 员工标签内容颜色
@tag-pro-employee-icon-color | #A4bFFF | 员工标签icon颜色
@tag-pro-group-color | #F5B350 | 运营群背景色
@tag-pro-group-font-colo | #FEF7EE | 运营群内容颜色
@tag-pro-group-icon-color | #FFD67E | 运营群icon颜色

#### Css 变量

组件提供了下列 Css 变量，可用于自定义样式，使用方法请参考[定制主题 css](#/theme2)。

名称 | 默认值 | 描述
-- | -- | --
--tm-tag-pro-content-color | var(--tm-gray-6) `#F6F6F6` | 内容标签背景色
--tm-tag-pro-content-font-color | var(--title-font-color) `#333333` | 内容标签内容颜色
--tm-tag-pro-content-icon-color | var(--tm-gray-9) `#CCCCCC` | 内容标签icon颜色
--tm-tag-pro-individual-color | #F0F9EB | 个人标签背景色
--tm-tag-pro-individual-font-color | #4AB43D | 个人标签内容颜色
--tm-tag-pro-individual-icon-color | #C2E8B0 | 个人标签icon颜色
--tm-tag-pro-company-color | #EDF2FD `#3470ff` | 公司标签背景色
--tm-tag-pro-company-font-color | | 公司标签内容颜色
--tm-tag-pro-company-icon-color | #A4bFFF | 公司标签icon颜色
--tm-tag-pro-department-color | #F0F9EB | 部门标签背景色
--tm-tag-pro-department-font-color | #4AB43D | 部门标签内容颜色
--tm-tag-pro-department-icon-color | #C2E8B0 | 部门标签icon颜色
--tm-tag-pro-employee-color | #EDF2FD | 员工标签背景色
--tm-tag-pro-employee-font-color | `#3470ff` | 员工标签内容颜色
--tm-tag-pro-employee-icon-color | #A4bFFF | 员工标签icon颜色
--tm-tag-pro-group-color | #FEF7EE | 运营群背景色
--tm-tag-pro-group-font-colo | #F5B350 | 运营群内容颜色
--tm-tag-pro-group-icon-color | #FFD67E | 运营群icon颜色