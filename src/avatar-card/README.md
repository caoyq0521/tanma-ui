# AvatarCard 头像卡片

### 介绍

组件介绍

### 引入

```js
  import Vue from 'vue';
  import { Avatar-card } from 'tanma-ui';
  
  Vue.use(Avatar-card);
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

头像信息参考Avatar组件，提示信息参考Tip组件

| 参数             | 说明           | 类型      | 可选值                             | 默认值   |
| ---------------- | -------------- | --------- | ---------------------------------- | -------- |
| can-click        | 昵称可否点击   | _boolean_ | -                                  | false    |
| description      | 描述信息       | _string_  | -                                  | -        |
| hide-description | 是否有描述信息 | _boolean_ | -                                  | false    |
| hide-wechat-icon | 是否有微信图标 | _boolean_ | -                                  | false    |
| icon-type        | 头像类型       | _string_  | `image` `person` `company` `group` | person   |
| image-source     | 图片地址       | _string_  | -                                  | -        |
| img-size         | 图片尺寸       | _number_  | -                                  | 45       |
| text-image       | 文本图片       | _string_  | -                                  | -        |
| tip              | 提示信息       | _string_  | -                                  | -        |
| title            | 用户昵称       | _string_  | -（必传）                          | 我是标题 |

