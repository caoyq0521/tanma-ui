# dialog

### 介绍

在保留当前页面状态的情况下，告知用户并承载相关操作。

`Dialog`提供了两种用法，普通组件使用和封装好的简洁实例调用。

### 引入

```js
  import Vue from 'vue';
  import { Dialog } from 'tanma-design';
  
  Vue.use(Dialog);

  // Vue.use(Dialog)同时绑定Vue.prototype.$tmDialog方法。
```

## 代码演示

### 基础用法

组件基于`element-ui`重新封装，除`居中布局`不支持外其他的所有属性都已支持；示例请大家移步[element-ui dialog](https://element.eleme.cn/#/zh-CN/component/dialog)进行查看。

### 实例化使用方法

除了上述通过标准组件的使用方法，tanma-design还封装了实例方法，用来创建一次性的轻量级对话框。

实例以隐式创建 Vue 组件的方式在全局创建一个对话框，并在消失时移除，所以同时只能操作一个对话框。

<demo-code>./demo/index.vue</demo-code>

#### 自定义内容

使用 `render` 字段可以基于 jsx 语法来自定义内容。

使用 render 后，将不再限制类型，content 也将无效。

[学习 vue jsx语法内容](https://cn.vuejs.org/v2/guide/render-function.html#JSX)

> Tips：使用render后内容样式需自已定义。

<demo-code>./demo/render.vue</demo-code>

### Props

参数 | 说明 | 类型 | 可选值 | 默认值 
-- | -- | -- | -- | --
value | 对话框是否显示，可使用 v-model 双向绑定数据。 | _boolean_ | - | true
title | Dialog 的标题 | _string_ | - | -
top | Dialog CSS 中的 margin-top 值 | _string_ | - | 15vh
width | Dialog 的宽度 | _string_ | - | 50%
append-to-body | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true | _boolean_ | - | false
before-close | 关闭前的回调，会暂停 Dialog 的关闭 | _function_ | - | null
before-ok | 确定前的回调，会暂停 Dialog 的关闭，如果是Promise函数则默认显示 loading 状态 | _function_ | - | null
cancel-text | 取消按钮文字 | _string_ | - | 取消
footer-hide | 是否显示底部按钮 | _boolean_ | - | false
custom-class | Dialog 的自定义类名 | _string_ | - | -
destroy-on-close | 关闭时销毁 Dialog 中的元素 | _boolean_ | - | false
fullscreen | 是否为全屏 Dialog | _boolean_ | - | false
loading | 点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置value来关闭对话框 | _boolean_ | - | false
lock-scroll | 是否在 Dialog 出现时将 body 滚动锁定 | _boolean_ | - | true
modal | 是否需要遮罩层 | _boolean_ | - | true
modal-append-to-body | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上 | _boolean_ | - | true
ok-text | 确定按钮文字 | _string_ | - | 确定
ok-type | 确定按钮类型 | _string_ | `primary` `danger` | primary
show-close | 是否显示关闭按钮 | _boolean_ | - | true
close-on-click-modal | 是否可以通过点击 modal 关闭 Dialog | _boolean_ | - | true
close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog | _boolean_ | - | true

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

### 实例化调用

通过直接调用以下方法来使用：

```js
this.$tmDialog(config);

// 另外提供了全局关闭对话框的方法：
this.$tmDialog.remove();
```

以上方法隐式地创建及维护Vue组件。参数 config 为对象，具体说明如下：

参数 | 说明 | 类型 | 可选值 | 默认值 
-- | -- | -- | -- | --
title | Dialog 的标题 | _string_ | - | -
content | Dialog 内容 | _string_ | - | -
width | Dialog 的宽度 | _string_ | - | 50%
cancelText | 取消按钮文字 | _string_ | - | 取消
cancelHide | 是否隐藏取消按钮 | _boolean_ | false
render | 自定义内容，使用后不再限制类型， content 也无效。[学习 vue jsx语法内容](https://cn.vuejs.org/v2/guide/render-function.html#JSX) | _function_ | - | -
showClose | 是否显示关闭按钮 | _boolean_ | - | true
okText | 确定按钮文字 | _string_ | - | 确定
okType | 确定按钮类型 | _string_ | `primary` `danger` | primary
top | Dialog CSS 中的 margin-top 值 | _string_ | - | 15vh
modal | 是否需要遮罩层 | _boolean_ | - | true
onOk | 点击确定的回调 | _function_ | -
onCancel | 点击取消的回调 | _function_ | -
footerHide | 是否显示底部按钮 | _boolean_ | - | false
closeOnClickModal | 是否可以通过点击 modal 关闭 Dialog | _boolean_ | - | true
closeOnPressEscape | 是否可以通过按下 ESC 关闭 Dialog | _boolean_ | - | true
loading | 点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动调用tmDialog.remove()来关闭对话框 | _boolean_ | - | false
lockScroll | 是否在 Dialog 出现时将 body 滚动锁定 | _boolean_ | - | true

### 样式变量

#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题 less](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@dialog-title-font-size | var(--font-size-title) `16px` | Dialog 标题字体大小
@dialog-title-font-weight | var(--font-bold) `550` | Dialog 标题字重
@dialog-footer-button-width | `115px` | Dialog 底部按钮宽度
@dialog-footer-button-height | `35px` | Dialog 底部按钮高度

#### Css 变量

组件提供了下列 Css 变量，可用于自定义样式，使用方法请参考[定制主题 css](#/theme2)。

名称 | 默认值 | 描述
-- | -- | --
--tm-dialog-title-font-size | var(--font-size-title) `16px` | Dialog 标题字体大小
--tm-dialog-title-font-weight | var(--font-bold) `550` | Dialog 标题字重
--tm-dialog-footer-button-width | `115px` | Dialog 底部按钮宽度
--tm-dialog-footer-button-height | `35px` | Dialog 底部按钮高度