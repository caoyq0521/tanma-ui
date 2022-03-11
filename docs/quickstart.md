# 快速上手

### 介绍

通过本章节你可以了解到 tanma-ui 的安装方法和基本使用姿势。

## 安装

### 通过 npm 安装

在现有项目中使用 tanma-ui 时，可以通过 `npm` 或 `yarn` 进行安装：

```bash
npm i tanm-ui -S
```

## 使用

### 完整引入

在 main.js 中写入以下内容：

```js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import tanmaUi from 'tanma-ui';
import 'tanma-ui/lib/index.less';

Vue.use(tanmaUi);
Vue.use(ElementUI);

```

以上代码便完成了 tanmaUi 的引入。需要注意的是，样式文件需要单独引入。

> 注：因为部分组件基于Element ui扩展，所以项目中必须依赖Element ui组件。

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
        "libraryName": "tanma-ui",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ]
}
```

#### 3. 引入组件

接着你可以在代码中直接引入 tanma-ui 组件，插件会自动将代码转化为按需引入的形式。

```js
// 原始代码
import { Button } from 'tanma-ui';

// 编译后代码
import Button from 'tanma-ui/es/button';
import 'tanma-ui/es/button/style';
```

### 手动按需引入组件

在不使用任何构建插件的情况下，可以手动引入需要使用的组件和样式。

```js
// 引入组件脚本
import Button from 'tanma-ui/es/button/index';

// 引入组件样式
// 若组件没有样式文件，则无须引入
import 'tanma-ui/es/button/style/index';
```

#### 完整组件列表和引入方式

```js
import Vue from 'vue';

import { 
  Pagination,
  Title,
  Tip,
  Avatar,
  Progress,
  Button,
  Tabs,
  CollapseText,
  Tag,
  TagPro,
  TagMore,
  Dialog,
  Search,
  DateRange,
  AvatarCard
} from 'tanma-ui';
  
Vue.use(Pagination);
Vue.use(Title);
Vue.use(Tip);
Vue.use(Avatar);
Vue.use(Progress);
Vue.use(Button);
Vue.use(Tabs);
Vue.use(CollapseText);
Vue.use(Tag);
Vue.use(TagPro);
Vue.use(TagMore);
Vue.use(Dialog);
Vue.use(Search);
Vue.use(DateRange);
Vue.use(AvatarCard);
```
> 注：Vue.use(Dialog)会同时绑定Vue.prototype.$tmDialog方法，具体使用方式请查看[Dialog](#/dialog#shi-li-hua-shi-yong-fang-fa)。