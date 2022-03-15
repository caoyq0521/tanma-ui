# pagination

### 介绍

当数据量过多时，使用分页分解数据。

### 引入

```js
  import Vue from 'vue';
  import { Pagination } from 'tanma-design';
  
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

### Props

参数 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
mode | 简单模式 | _string_ | `normal` `easy` | normal
pager-count | 页码按钮的数量，当总页数超过该值时会折叠 | _number_ | 大于等于 5 且小于等于 21 的奇数 | 7
current-page | 当前页数，支持 .sync 修饰符 | _number_ | - | 1
page-sizes | 每页显示个数选择器的选项设置 | _number[]_ | - | [20, 30, 40, 50, 100]
page-size | 每页显示条目个数，支持 .sync 修饰符 | _number_ | 必须是`page-sizes`中的值 | 20
total | 总条目数 | _number_ | - | -
pager | 是否可调整每页显示条数 | _boolean_ | - | true

### Events

事件名称 | 说明 | 回调参数
-- | -- | --
size-change | pageSize | 改变时会触发 | 每页条数
current-change | currentPage 改变时会触发 | 当前页
prev-click | 用户点击上一页按钮改变当前页后触发 | 当前页
next-click | 用户点击下一页按钮改变当前页后触发 | 当前页

### 样式变量

#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题 less](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@pagination-font-size | @font-size-sm `14px` | 分页字体大小
@pagination-active-color | var(--main-color) `#3470ff` | 当前页码选中态
@pagination-disable-color | var(--tm-gray-8) `#E3E3E3` | 页码禁用颜色
@pagination-arrow-font-size | @font-size-xs `12px` | 左右箭头字体大小
@pagination-arrow-normal-color | var(--tm-gray-1) `#D3D3D3` | 左右箭头正常态颜色
@pagination-arrow-disable-color | var(--tm-gray-3) `#D7D7D7` | 左右箭头禁用颜色
@pagination-border-color | var(--tm-gray-3) `#D7D7D7`| border颜色

#### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[定制主题 css](#/theme2)。

名称 | 默认值 | 描述
-- | -- | --
--tm-pagination-font-size | @font-size-sm `14px` | 分页字体大小
--tm-pagination-active-color | var(--main-color) `#3470ff` | 当前页码选中态
--tm-pagination-disable-color | var(--tm-gray-8) `#E3E3E3` | 页码禁用颜色
--tm-pagination-arrow-font-size | @font-size-xs `12px` | 左右箭头字体大小
--tm-pagination-arrow-normal-color | var(--tm-gray-1) `#D3D3D3` | 左右箭头正常态颜色
--tm-pagination-arrow-disable-color | var(--tm-gray-3) `#D7D7D7` | 左右箭头禁用颜色
--tm-pagination-border-color | var(--tm-gray-3) `#D7D7D7`| border颜色