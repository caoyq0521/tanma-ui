# 快速上手

### 介绍

通过本章节你可以了解到 tanma-design 的安装方法和基本使用姿势。

## 安装

### 通过 npm 安装

在现有项目中使用 tanma-design 时，可以通过 `npm` 或 `yarn` 进行安装：

```bash
npm i tanma-design -S
```

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
        "style": true
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
  CollapseText,
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
  TagCombo
} from 'tanma-design';

Vue.use(Avatar);
Vue.use(Button);
Vue.use(CollapseText);
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
```
> Tips：Vue.use(Dialog)会同时绑定Vue.prototype.$tmDialog方法，具体使用方式请查看[Dialog](#/dialog#shi-li-hua-shi-yong-fang-fa)。