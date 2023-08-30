# tag-combo

### 介绍

显示部门标签和个人标签集合。

### 引入

```js
  import Vue from 'vue';
  import { TagCombo } from 'tanma-design';
  
  Vue.use(TagCombo);
```

## 代码演示

### 基础用法

可通过设置`limit`属性控制显示几个标签。

还可通过设置显示内容超过多少字后显示...，鼠标移入后显示全部。

<demo-code>./demo/index.vue</demo-code>

### 自定义配置

可通过自定义`props`属性中的 `id`、`name` 字段自定义显示内容。

<demo-code>./demo/props.vue</demo-code>

### 可移除标签

设置`closable`属性可以定义一个标签是否可移除。

<demo-code>./demo/closable.vue</demo-code>

### Props

参数 | 说明 | 类型 | 可选值 | 默认值 
-- | -- | -- | -- | --
trigger | 全部标签触发方式 | _string_ | `click` `focus` `hover` `manual` | click
closable | 是否可关闭 | _boolean_ | - | false
dept-list | 部门标签 | _array_ | - | []
limit | 标签超出多少个后显示 更多按钮 | _number_ | - | 3
props | 配置选项，具体看下表 | _object_ | - | -
name-limit | 名字超出多少字后显示... | _number_ | - | 10
sales-list | 销售标签 | _array_ | - | []
popperClass | 为 Tooltip 的 popper 添加类名 | _string_ | - | -

#### props

参数 | 说明 | 类型 | 可选值 | 默认值 
-- | -- | -- | -- | --
id | 标签唯一标识的属性 | _string_ | - | id
name | 标签展示数据 | _string_ | - | name


### Events

事件名称 | 说明 | 回调参数
-- | -- | --
click | 点击 Tag 时触发的事件 | _type: string, info: object_
close | 关闭 Tag 时触发的事件 | _type: string, info: object_

### Slots

名称 | 说明
-- | --
deptL | 部门标签左侧内容，参数为 { info }
deptR | 部门标签右侧内容，参数为 { info }
employeeL | 个人标签左侧内容，参数为 { info }
employeeR | 个人标签右侧内容，参数为 { info }