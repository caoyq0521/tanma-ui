# pagination

### 介绍

当数据量过多时，使用分页分解数据。

### 引入

```js
  import Vue from 'vue';
  import { Pagination } from 'tanma-ui';
  
  Vue.use(Pagination);
```

## 代码演示

### 基础用法

<demo-code>./demo/index.vue</demo-code>

### 设置最大页码按钮数

默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。通过pager-count属性可以设置最大页码按钮数。

<demo-code>./demo/pagerCount.vue</demo-code>

### 简单模式

在空间有限的情况下，可以使用简单的分页。

<demo-code>./demo/easy.vue</demo-code>

### 调整每页显示条数

可通过设置`pager`去设置是否可调整每页显示条数。

<demo-code>./demo/pager.vue</demo-code>

## API

### Props

参数 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
easy | 简单模式 | _boolean_ | - | false
pager-count | 页码按钮的数量，当总页数超过该值时会折叠 | _number_ | 大于等于 5 且小于等于 21 的奇数 | 7
current-page | 当前页数，支持 .sync 修饰符 | _number_ | - | 1
page-sizes | 每页显示个数选择器的选项设置 | _number[]_ | - | [20, 30, 40, 50, 100]
page-size | 每页显示条目个数，支持 .sync 修饰符 | _number_ | 必须是`page-sizes`中的值 | 20
total | 总条目数 | _number_ | - | -
pager | 是否可调整每页显示条数 | _boolean_ | - | true