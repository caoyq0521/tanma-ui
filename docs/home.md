# 快速上手

### 介绍

通过本章节你可以了解到 tanma-design 的安装方法和基本使用姿势。

## 安装

### 通过 npm 安装

在现有项目中使用 tanma-design 时，可以通过 `npm` 或 `yarn` 进行安装：

```bash
npm i tanma-design -S
```

### 通过 cdn 安装

使用 tanma-design 最简单的方法是直接在 html 文件中引入 CDN 链接。

```html
<!-- 引入element-ui和tanma-design样式文件 -->
<link 
  rel="stylesheet" 
  href="https://unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css"
>
<link
  rel="stylesheet" 
  href="https://cdn.jsdelivr.net/npm/tanma-design/lib/index.css"
>
<!-- 引入 Vue 、element-ui和tanma-design 的 JS 文件 -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.6/dist/vue.min.js"></script>
<script src="https://unpkg.com/element-ui@2.13.0/lib/index.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tanma-design/lib/tanma-design.min.js"></script>

<body>
  <div id="app">
    <!-- 渲染一个搜索框 -->
    <tm-search v-model="value" placeholder="请输入搜索内容" ref="search" />
  </div>
</body>
<script>
  new Vue({
    el: '#app',
    data: function() {
      return { 
        value: ""
      }
    }
  })
</script>
```

#### 免费 CDN

你可以通过以下免费 CDN 服务来使用 tanma-design:

+ [jsdelivr](https://www.jsdelivr.com/package/npm/tanma-design)

+ [unpkg](https://unpkg.com/browse/tanma-design/)

注意：免费 CDN 一般用于制作原型或个人小型项目，不推荐在企业生产环境中使用免费 CDN。

对于企业开发者，建议使用以下方式：

通过 npm 引入，并通过构建工具进行打包
下载对应文件，并托管在你自己的服务器或 CDN 上

## 使用

### 完整引入

在 main.js 中写入以下内容：

```js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import tanmaDesign from 'tanma-design';
import 'tanma-design/lib/index.less';

Vue.use(tanmaDesign);
Vue.use(ElementUI);

```

以上代码便完成了 tanmaDesign 的引入。需要注意的是，样式文件需要单独引入。

> Tips: 配置按需引入插件后，将不允许直接导入所有组件。

> Tips：因为部分组件基于Element ui扩展，所以项目中必须依赖Element ui组件。

### 按需引入

可以通过 babel 插件来实现按需引入组件。我们需要安装 [babel-plugin-import](https://github.com/umijs/babel-plugin-import) 插件，它会在编译过程中将 import 语句自动转换为按需引入的方式。

#### 1. 安装插件

```js
npm i babel-plugin-import -D
```

#### 2. 配置插件

在.babelrc 或 babel.config.js 中添加配置：

```js
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "tanma-design",
        "libraryDirectory": "es",
        "style": true,
        "camel2DashComponentName": false
      }
    ]
  ]
}
```

#### 3. 引入组件

接着你可以在代码中直接引入 tanma-design 组件，插件会自动将代码转化为按需引入的形式。

```js
// 原始代码
import { Button } from 'tanma-design';

// 编译后代码
import Button from 'tanma-design/es/button';
import 'tanma-design/es/button/style';
```

### 手动按需引入组件

在不使用任何构建插件的情况下，可以手动引入需要使用的组件和样式。

```js
// 引入组件脚本
import Button from 'tanma-design/es/button/index';

// 引入组件样式
// 若组件没有样式文件，则无须引入
import 'tanma-design/es/button/style/index';
```

#### 完整组件列表和引入方式

```js
import Vue from 'vue';

import { 
  Avatar,
  Button,
  ButtonTabs,
  CollapseText,
  Empty,
  Pagination,
  Title,
  Tip,
  Progress,
  Tabs,
  Tag,
  TagPro,
  TagGroup,
  Dialog,
  Search,
  DateRange,
  AvatarCard,
  OptionalPicker,
  TagCombo,
  vTitle,
  Upload,
  Tree,
  DeptTree,
  TagCombo,
  Timeline,
  TimelineItem,
  Steps,
  Step,
  Message,
  Block
} from 'tanma-design';

Vue.use(Avatar);
Vue.use(Button);
Vue.use(ButtonTabs);
Vue.use(CollapseText);
Vue.use(Empty);
Vue.use(Pagination);
Vue.use(Title);
Vue.use(Tip);
Vue.use(Progress);
Vue.use(Tabs);
Vue.use(Tag);
Vue.use(TagPro);
Vue.use(TagGroup);
Vue.use(Dialog);
Vue.use(Search);
Vue.use(DateRange);
Vue.use(AvatarCard);
Vue.use(OptionalPicker);
Vue.use(TagCombo);
Vue.use(vTitle);
Vue.use(Upload);
Vue.use(Tree);
Vue.use(DeptTree);
Vue.use(TagCombo);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Message);
Vue.use(Block);


Vue.prototype.$message = Message;
```
> Tips：Vue.use(Dialog)会同时绑定Vue.prototype.$tmDialog方法，具体使用方式请查看[Dialog](#/dialog#shi-li-hua-shi-yong-fang-fa)。