# dialog

### 介绍

在保留当前页面状态的情况下，告知用户并承载相关操作。

`Dialog`提供了两种用法，普通组件使用和封装好的简洁实例调用。

### 引入

```js
  import Vue from 'vue';
  import { Dialog } from 'tanma-ui';
  
  Vue.use(Dialog);
```

## 代码演示

### 基础用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

<demo-code>./demo/index.vue</demo-code>

### Props

参数 | 说明 | 类型 | 可选值 | 默认值 
-- | -- | -- | -- | --
append-to-body | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true | _boolean_ | - | false
before-close | 关闭前的回调，会暂停 Dialog 的关闭 | _function_ | - | null
cancel-text | 取消按钮文字 | _string_ | - | 取消
close-on-click-modal | 是否可以通过点击 modal 关闭 Dialog | _boolean_ | - | true
close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog | _boolean_ | - | true
custom-class | Dialog 的自定义类名 | _string_ | - | -
destroy-on-close | 关闭时销毁 Dialog 中的元素 | _boolean_ | - | false
footer-hide | 是否显示底部按钮 | _boolean_ | - | false
fullscreen | 是否为全屏 Dialog | _boolean_ | - | false
loading | 点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置value来关闭对话框 | _boolean_ | - | false
lock-scroll | 是否在 Dialog 出现时将 body 滚动锁定 | _boolean_ | - | true
modal | 是否需要遮罩层 | _boolean_ | - | true
modal-append-to-body | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上 | _boolean_ | - | true
ok-text | 确定按钮文字 | _string_ | - | 确定
ok-type | 确定按钮类型 | _string_ | `primary` `danger` | primary
show-close | 是否显示关闭按钮 | _boolean_ | - | true
title | Dialog 的标题 | _string_ | - | -
top | Dialog CSS 中的 margin-top 值 | _string_ | - | 15vh
value | 对话框是否显示，可使用 v-model 双向绑定数据。 | _boolean_ | - | true
width | Dialog 的宽度 | _string_ | - | 50%

### Events

事件名称 | 说明 | 回调参数
-- | -- | --
open | Dialog 打开的回调 | -
opened | Dialog 打开动画结束时的回调 | -
close | Dialog 关闭的回调 | - 
closed | Dialog 关闭动画结束时的回调 | -
ok | Dialog 点击确定的回调 | -

### Slots

名称 | 说明
-- | --
default | Dialog 的内容
footer | Dialog 按钮操作区的内容

### 样式变量

#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@dialog-title-font-size | var(--font-size-title) `16px` | Dialog 标题字体大小
@dialog-title-font-weight | var(--font-bold) `550` | Dialog 标题字重

#### Css 变量

组件提供了下列 Css 变量，可用于自定义样式。

名称 | 默认值 | 描述
-- | -- | --
--tm-dialog-title-font-size | var(--font-size-title) `16px` | Dialog 标题字体大小
--tm-dialog-title-font-weight | var(--font-bold) `550` | Dialog 标题字重