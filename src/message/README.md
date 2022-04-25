# message

### 介绍

常用于主动操作后的反馈提示。

### 引入

```js
  import Vue from 'vue';
  import { Message } from 'tanma-design';
  
  Vue.use(Message);
```

## 代码演示

### 基础用法

<demo-code>./demo/index.vue</demo-code>

### 使用 HTML 片段

将`dangerouslyUseHTMLString`属性设置为 true，`message` 就会被当作 HTML 片段处理。

<demo-code>./demo/html.vue</demo-code>

### 全局方法

tanma-design 为 Vue.prototype 添加了全局方法 `$tmMessage`。因此在 vue instance 中可以采用本页面中的方式调用 Message。

### 单独引用

单独引入 Message：

```js
import { Message } from 'tanma-design';
```

此时调用方法为 `Message(options)`。我们也为每个 type 定义了各自的方法，如 `Message.success(options)`。并且可以调用 `Message.closeAll()` 手动关闭所有实例。

### Options

参数 | 说明 | 类型 | 可选值 | 默认值 
-- | -- | -- | -- | --
message | 消息文字 | _string_ | - | 成功提示
type | 主题 | _string_ | `success` `warning` `error` `info` | error
iconClass | 自定义图标的类名，会覆盖`type` | _string_ | - | -
dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理 | _string_ | - | -
classPrefix | 类名前缀 | _string_ | - | -
customClass | 自定义类名 | _string_ | - | -
duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | _number_ | - | 3000
offset | Message 距离窗口顶部的偏移量 | _number_ | - | 20
onClose | 关闭时的回调函数, 参数为被关闭的 message 实例 | _function_ | - | null

### 样式变量

#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题 less](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@message-success-color | #3DAF30 | success 字体颜色
@message-success-bgc | #F0F9EB | success 背景色
@message-warning-color | #FFAB00 | warning 字体颜色
@message-warning-bgc | #FFF6E3 | warning 背景色
@message-error-color | #f67172 | error 字体颜色
@message-error-bgc | #FEF1F0 | error 背景色
@message-info-color | #3470ff | info 字体颜色
@message-info-bgc | #C2D4FF | error 背景色

#### Css 变量

组件提供了下列 Css 变量，可用于自定义样式，使用方法请参考[定制主题 css](#/theme2)。

名称 | 默认值 | 描述
-- | -- | --
--tm-message-success-color | #3DAF30 | success 字体颜色
--tm-message-success-bgc | #F0F9EB | success 背景色
--tm-message-warning-color | #FFAB00 | warning 字体颜色
--tm-message-warning-bgc | #FFF6E3 | warning 背景色
--tm-message-error-color | #f67172 | error 字体颜色
--tm-message-error-bgc | #FEF1F0 | error 背景色
--tm-message-info-color | #3470ff | info 字体颜色
--tm-message-info-bgc | #C2D4FF | error 背景色