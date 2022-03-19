# progress

### 介绍

进度条

### 引入

```js
  import Vue from 'vue';
  import { Progress } from 'tanma-design';
  
  Vue.use(Progress);
```

## 代码演示

### 5秒后成功

<demo-code>./demo/startEnd.vue</demo-code>

### 5秒后错误

<demo-code>./demo/error.vue</demo-code>

## API

### Props

参数 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
start | 是否开始 | _boolean_ | - | false
end | 是否结束 | _boolean_ | - | false
error | 是否出错 | _boolean_ | - | false


### 样式变量

#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题 less](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@progress-success-color | `#67C23A`| 成功后的进度条颜色
@progress-error-color | `#F56C6C`| 出错后的进度条颜色

#### Css 变量

组件提供了下列 Css 变量，可用于自定义样式，使用方法请参考[定制主题 css](#/theme2)。

名称 | 默认值 | 描述
-- | -- | --
--tm-progress-success-color | `#67C23A`| 成功后的进度条颜色
--tm-progress-error-color | `#F56C6C`| 出错后的进度条颜色