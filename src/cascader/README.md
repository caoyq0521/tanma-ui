# cascader

### 介绍

支持虚拟滚动的级联选择器。
组件在el-cascader的基础上修改，完全支持el-cascader的属性及方法。

### 引入

```js
  import Vue from 'vue';
  import { Cascader } from 'tanma-design';
  
  Vue.use(Cascader);
```

## 代码演示

### 多选和虚拟滚动

<demo-code>./demo/index.vue</demo-code>

### 单选

<demo-code>./demo/radio.vue</demo-code>

### 级联面板

<demo-code>./demo/panel.vue</demo-code>

### Attributes Events Props Methods Slots
同 [Element Cascader](https://element.eleme.cn/#/zh-CN/component/cascader)

### 样式变量

#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题 less](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@tm-cascader-primary-color | var(--main-color) `#3470ff` | 选中时字体颜色
@tm-cascader-in-active-color | var(--content-font-color) `#606266` | 展开时字体颜色

#### Css 变量

组件提供了下列 Css 变量，可用于自定义样式，使用方法请参考[定制主题 css](#/theme2)。

名称 | 默认值 | 描述
-- | -- | --
--tm-cascader-primary-color | var(--main-color) `#3470ff` | 选中时字体颜色
--tm-cascader-in-active-color | var(--content-font-color) `#606266` | 展开时字体颜色