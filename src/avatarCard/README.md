# AvatarCard 头像卡片

### 介绍

组件介绍

### 引入

```js
  import Vue from 'vue';
  import { AvatarCard } from 'tanma-design';
  
  Vue.use(AvatarCard);
```

## 代码演示

### 基础用法

<demo-code>./demo/index.vue</demo-code>

### 描述信息

<demo-code>./demo/description.vue</demo-code>

### 提示信息

<demo-code>./demo/tip.vue</demo-code>

### 不展示描述信息

<demo-code>./demo/nodescription.vue</demo-code>

## API

### Props

头像信息参考[Avatar组件](#/avatar)，目前仅支持`icon-type`、`image-source`、`text-image`属性

提示信息参考[Tip组件](#/tip)，目前仅支持`content`属性

| 参数             | 说明           | 类型      | 可选值                                     | 默认值   |
| ---------------- | -------------- | --------- | ------------------------------------------ | -------- |
| can-click        | 昵称可否点击   | _boolean_ | -                                          | false    |
| description      | 描述信息       | _string_  | -                                          | -        |
| hide-description | 是否有描述信息 | _boolean_ | -                                          | false    |
| hide-wechat-icon | 是否有微信图标 | _boolean_ | -                                          | false    |
| icon-type        | 头像类型       | _string_  | `image` `person` `company` `group` `goods` | person   |
| image-source     | 图片地址       | _string_  | -                                          | -        |
| img-size         | 图片尺寸       | _number_  | -                                          | 45       |
| text-image       | 文本图片       | _string_  | -                                          | -        |
| tip              | 提示信息       | _string_  | -                                          | -        |
| title            | 用户昵称       | _string_  | -（必传）                                  | 我是标题 |

### Slots

| 名称        | 说明                   |
| ----------- | ---------------------- |
| title       | AvatarCard标题部分内容 |
| description | AvatarCard描述部分内容 |




### 样式变量

#### Less变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题](#/theme)。

| 名称                           | 默认值                             | 描述             |
| ------------------------------ | ---------------------------------- | ---------------- |
| @avatar-card-title-color       | var(--tm-black)`#000`              | 头像卡片标题颜色 |
| @avatar-card-description-color | var(--tooltip-font-color)`#858598` | 头像卡片描述颜色 |

#### Css变量

组件提供了下列 Css 变量，可用于自定义样式，使用方法请参考[定制主题](#/theme)。

| 名称                               | 默认值                             | 描述             |
| ---------------------------------- | ---------------------------------- | ---------------- |
| --tm-avatar-card-title-color       | var(--tm-black)`#000`              | 头像卡片标题颜色 |
| --tm-avatar-card-description-color | var(--tooltip-font-color)`#858598` | 头像卡片描述颜色 |
