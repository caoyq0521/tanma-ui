# avatar

### 介绍

头像组件

### 引入

```js
  import Vue from 'vue';
  import { Avatar } from 'tanma-design';
  
  Vue.use(Avatar);
```

## 代码演示

### 基础用法
通过指定`imageSource`属性设置图片路径。
<demo-code>./demo/index.vue</demo-code>

### 展示类型
通过指定`iconType`和`iconSize`属性设置字体图标类型和大小。
<demo-code>./demo/type.vue</demo-code>

### 展示形状
通过指定`mode`和`width` `height`属性设置图片轮廓和大小。
<demo-code>./demo/shape.vue</demo-code>

### 文本图片
通过指定`textImage`属性设置文本图片，使用该属性时`imageSource`不可以设置值
<demo-code>./demo/textImage.vue</demo-code>


## API

### Props
参数 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
crop | 裁切尺寸</br>需要`isCrop`为`true`且`imageSource`有值时该属性才生效 | _string_ | - | `40x40` 
customIcon | 自定义icon类型 | _string_ | icon图标类名 | -
class-prefix | 类名前缀 | _string_ | - | -
height | 高度 | _string \| number_ | - | `40`
iconSize | icon字体大小 | _number_ | 字体大小必须 大于等于 `12` 并且 小于等于 `30` | `16`
iconType | icon类型 | _string_ | `image` `person` `company` `group` `goods` | `image`
imageSource | 图片地址 | _string_ | - | -
isCrop | 是否裁切图片 | _boolean_ | `true` `false` | `false`
mode | 图片轮廓 | _string_ | `circle` `square` `rectangle` | `square`
textImage | 文本图片 <br /> 取`textImage`的首个字符置于图片上 | _string_ | - | -
theme | 主题 | _string_ | `dark` `light` | `dark`
width | 宽度 | _string \| number_ | - | `40`

### Slots

名称 | 说明
-- | --
error | `imageSource`图片加载失败时展示的内容

### 样式变量

#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题 less](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@avatar-background-color-dark | var(--tm-gray-3) `#D7D7D7` | `theme`为`drak`时头像组件背景色
@avatar-background-color-light | rgba(246,246,246,0.5) | `theme`为`light`时头像组件背景色
@avatar-icon-color | var(--tm-white) `#FFFFFF` | 字体图标颜色
@avatar-text-image-color | var(--tm-white) `#FFFFFF` | 文本颜色

#### Css 变量

组件提供了下列 Css 变量，可用于自定义样式，使用方法请参考[定制主题 css](#/theme2)。

名称 | 默认值 | 描述
-- | -- | --
--tm-avatar-background-color-dark | var(--tm-gray-3) `#D7D7D7` | `theme`为`drak`时头像组件背景色
--tm-avatar-background-color-light |  rgba(246,246,246,0.5) | `theme`为`light`时头像组件背景色
--tm-avatar-icon-color | var(--tm-white) `#FFFFFF` | 字体图标颜色 
--tm-avatar-text-image-color | var(--tm-white) `#FFFFFF` | 文本颜色