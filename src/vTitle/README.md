# v-title

### 介绍

注入全局指令`v-title`，用于内容超出后查看全部。

### 引入

```js
  import Vue from 'vue';
  import { vTitle } from 'tanma-design';
  
  // 默认注入v-title指令
  Vue.use(vTitle);
```

## 代码演示

### 基础用法

<demo-code>./demo/index.vue</demo-code>

推荐的使用方式为注册指令来使用，默认的指令名称为 `v-title`。如果想用其他名称可以在 `Vue.use` 进行配置。

```js
Vue.use(vTitle.directive, { directiveName: 'otherName' })
```

如果只是作为过长文案提示，可以直接绑定一个需要显示文案：

#### 指标的修饰符：

<demo-code>./demo/modifier.vue</demo-code>

- `click`： 点击触发，默认由 hover 触发

- `top right bottom left`： 可用于设置 tip 优先显示方向

- `transition`: 是否为 tip 设置 tranfrom 过渡效果

如果还想进一步自定义 tip 显示，`v-title` 指令支持绑定一个配置对象进行更配置：

<demo-code>./demo/options.vue</demo-code>

对应的 `options` 详细配置说明可以参考参数说明

### Options

参数 | 说明 | 类型 | 可选值 | 默认值 
-- | -- | -- | -- | --
title | 内容标题 | _string_ | - | -
content| 显示的内容 | _string_ | - | -
customComponent | 工具函数与指令调用时，可以通过 customComponent 传递自定义组件来渲染自定义内容 | _string_ \| _function_ \| _object_ | - | -
customProps | 附加到 customComponent 自定义组件 props 上面的值 | _object_ | - | -
customListeners | 用监听 customComponent 自定义组件内部 emit 的事件 |  _object_ | - | -
target | tip 绑定的目标元素 | _element objcet_ | - | -
container | tip 父级容器，未设置容器是 vTitle 会自动绑定在document.body | _element objcet_ | - | -
placements | 用于设置 tip 显示的优先级 | _array_ | `top`, `right`, `bottom`, `left` |
duration | tip 窗口多久后自动消失 | _number_ | - | 400
arrowsSize | 提示用的小箭头大小 | _number_ | - | 8
width | 组件的宽度 | _number_ \| _string_ | - | auto
height | 内容的高度 | _number_ \| _string_ | - | auto
zIndex | tip 的 z-index | _number_ | - | 9999
customClass | 组件自定义 class 的类名 | _string_ | - | -
transition | 是否为组件添加 transfrom 过渡 | _boolean_ | - | false

#### customComponent

`customComponent` 用于往 tip 中塞一些自定义的组件，内部实现实际上使用 `<component>` 组件：

```html
<component :is="customComponent" v-bind="customProps" v-on="customListeners"></component>
```

所以 `customComponent` 的值与 `<component>` 组件的 `is` 属性相同。

#### customProps

`customProps` 其实就是附加给自定义组件 `customComponent` 上的 `props` 参数，有时候可以将处理函数以 props 的形式传入便于处理自定义组件内部的事件。

#### customListeners

`customListeners` 直接绑定一个事件对象如：`{ mousedown: doThis, mouseup: doThat }` 。

通过传入的 `customListeners` 可以方便的处理自定义组件内部的 `emit` 出的事件。

#### placements

`placements` 用于限制 tip 的显示方向与各个方向的优先级。

例如 `placements` 设置为 `top right` tip 会优先尝试在 top 与 right 方向上显示 tip。

如果 top 与 right 方向上都可显示 tip 内容，优先在 top 方向上显示。

如果 top 与 right 上都不足以容纳 tip 内容，则会在 tip 会自动在选择一个可容纳 tip 方向展示。

#### container

`container` tip 的容器对象，不设置时组件会默认插入到`document.body`，平时使用的还是**推荐手动设置一个容器**。


### 组件方法

| 方法  | 说明 | 参数 |
| ---  | ---  | --- |
| showTip() | 显示 tip | - |
| hiddenTip(immedia) | 隐藏 tip | `immedia` 是否立即隐藏 tip |
| updateTip()  | 显示更新 tip 位置 |  - |
| destroy() | 销毁 tip 实例，一般不需要调用 |-|

附：组件内部有监听 `customComponent` 自定义组件 emit 出的 `hidden-tip` 事件与 `update-tip` 事件，对应触发 `hiddenTip` 与 `updateTip` 方法。