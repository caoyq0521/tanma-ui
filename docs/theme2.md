# 定制主题

### 介绍

tanma-design 组件通过丰富的 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来组织样式，通过覆盖这些 CSS 变量，可以实现定制主题、动态切换主题等效果。

#### 示例

以 Button 组件为例，查看组件的样式，可以看到 .tm-button--primary 类名上存在以下变量：

```CSS
.tm-button--primary {
  background: var(--tm-btn-primary);
  border-color: var(--tm-btn-primary);
  border-style: var(--tm-btn-solid);
}
```

这些变量的默认值被定义在 root 节点上，HTML 文档的任何节点都可以访问到这些变量：

```CSS
:root {
  --tm-btn-primary: @btn-primary;
  --tm-btn-danger: @btn-danger;
  --tm-btn-disabled-primary:#A3BEFF;
  --tm-btn-disabled-danger:#FBB6B5;
  --tm-btn-padding: @btn-padding;
}
```

### 自定义 CSS 变量

通过 CSS 覆盖
你可以直接在代码中覆盖这些 CSS 变量，Button 组件的样式会随之发生改变：

```CSS
/* 添加这段样式后，Primary Button 会变成红色 */
:root {
  --tm-btn-primary: red;
}
```

### 基础变量

tanma-design 中的 CSS 变量分为 `基础变量` 和 `组件变量`。组件变量会继承基础变量，因此在修改基础变量后，会影响所有相关的组件。

#### 修改变量

基础变量和组件变量都通过 root 选择器 修改。

#### 变量列表

下面是所有的基础变量：

```CSS
  --tm-black: @black;
  --tm-white: @white;
  --tm-gray-1: @gray-1;
  --tm-gray-2: @gray-2;
  --tm-gray-3: @gray-3;
  --tm-gray-4: @gray-4;
  --tm-gray-5: @gray-5;
  --tm-gray-6: @gray-6;
  --tm-gray-7: @gray-7;
  --tm-gray-8: @gray-8;
  --tm-gray-9: @gray-9;
  --tm-red: @red;
  --tm-auxiliary-1: @auxiliary-1;
  --tm-auxiliary-2: @auxiliary-2;
  --tm-auxiliary-3: @auxiliary-3;
  --tm-auxiliary-4: @auxiliary-4;
  --tm-auxiliary-5: @auxiliary-5;
  --tm-auxiliary-6: @auxiliary-6;
  --tm-auxiliary-7: @auxiliary-7;
  --tm-auxiliary-8: @auxiliary-8;
  --tm-auxiliary-9: @auxiliary-9;
  --tm-auxiliary-10: @auxiliary-10;
  --tm-padding-base: @padding-base;
  --tm-padding-xs: @padding-xs;
  --tm-padding-sm: @padding-sm;
  --tm-padding-md: @padding-md;
  --tm-padding-lg: @padding-lg;
  --tm-padding-xl: @padding-xl;
  --tm-line-height-xs: @line-height-xs;
  --tm-line-height-sm: @line-height-sm;
  --tm-line-height-md: @line-height-md;
  --tm-line-height-lg: @line-height-lg;
  --tm-border-width-base: @border-width-base;
  --tm-border-radius-sm: @border-radius-sm;
  --tm-border-radius-md: @border-radius-md;
  --tm-border-radius-lg: @border-radius-lg;
  --tm-border-radius-max: @border-radius-max;

  // 跟tanma项目对应
  --main-color: @color-primary;
  --color-success: @color-success;
  --color-delete-warning: @color-warning;
  --color-danger: @color-danger;
  --color-hover-background: @gray-4;
  --color-background: @gray-7;
  --title-font-color: @color-text-primary;
  --content-font-color: @color-text-regular;
  --list-title-font-color: @color-text-secondary;
  --tooltip-font-color: @color-text-secondary;
  --input-placeholder-color: @gray-1;
  --border-color-base: @gray-2;
  --border-color-light: @gray-3;
  --border-color-lighter: @gray-4;
  --border-color-extra-light: @gray-5;
  --avatar-border-color: @gray-6;
  --table-title-background: @gray-6;
  --font-size-important-number: @font-size-xl;
  --font-size-description-title: @font-size-lg;
  --font-size-title: @font-size-md;
  --font-size-content: @font-size-sm;
  --font-size-tooltip: @font-size-xs;
  --font-bold: @font-weight-bold;
```