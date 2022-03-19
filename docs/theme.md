# 定制主题

### 介绍

tanma-design 提供了一套默认主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。如果你想完全替换主题色或者其他样式，可以按照本文档进行主题定制。

### 样式变量

tanma-design 使用了 `Less` 对样式进行预处理，并内置了一些样式变量，通过替换样式变量即可定制你自己需要的主题。

下面是所有的基础样式变量，组件的颜色变量请参考各个组件的文档：

```CSS
// Color Palette
@black: #000;
@white: #fff;
@gray-1: #D3D3D3;
@gray-2: #C4C4C4;
@gray-3: #D7D7D7;
@gray-4: #F9F9F9;
@gray-5: #F2F2F2;
@gray-6: #F6F6F6;
@gray-7: #f4f4f6;
@gray-8: #E3E3E3;
@gray-9: #CCCCCC;
@red: #FC5A5A;

@auxiliary-1: #385AD3;
@auxiliary-2: #5D76E6;
@auxiliary-3: #8872FB;
@auxiliary-4: #C0A9FF;
@auxiliary-5: #00C381;
@auxiliary-6: #F17B55;
@auxiliary-7: #FFAB00;
@auxiliary-8: #F8E71C;
@auxiliary-9: #FC86B4;
@auxiliary-10: #58C2E2;

// Gradient Colors
@gradient-blue: linear-gradient(227deg, #6468FF 0%, #3470FF 100%);

// Component Colors
@color-primary: #3470ff;
@color-danger: #f67172;
@color-success: #3daf30;
@color-hover: #f9f9f9;
@color-warning: #e6a23c;

@color-text-primary: #333333;
@color-text-regular: #606266;
@color-text-secondary: #858598;
@color-text-placeholder: @gray-1;

@shadow-color-primary: rgb(52, 112, 255, 0.5);

// Padding
@padding-base: 4px;
@padding-xs: @padding-base * 2;
@padding-sm: @padding-base * 3;
@padding-md: @padding-base * 4;
@padding-lg: @padding-base * 6;
@padding-xl: @padding-base * 8;

// Font
@font-size-xs: 12px;
@font-size-sm: 14px;
@font-size-md: 16px;
@font-size-lg: 24px;
@font-size-xl: 30px;
@font-weight-bold: 550;
@font-weight-normal: 400;
@line-height-xs: 14px;
@line-height-sm: 18px;
@line-height-md: 20px;
@line-height-lg: 22px;

// Animation
@animation-duration-base: 0.3s;
@animation-duration-fast: 0.2s;
@animation-timing-function-enter: ease-out;
@animation-timing-function-leave: ease-in;

// Border
@border-color: @gray-3;
@border-width-base: 1px;
@border-radius-sm: 2px;
@border-radius-md: 4px;
@border-radius-lg: 8px;
@border-radius-max: 999px;
```

### 定制方法

#### 步骤一 引入样式源文件

定制主题时，需要引入组件对应的 Less 样式文件，支持按需引入和手动引入两种方式。

#### 按需引入样式（推荐）

在 babel.config.js 中配置按需引入样式源文件，注意 babel6 不支持按需引入样式，请手动引入样式。

```js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        // 指定样式路径
        style: (name) => `${name}/style/less`,
      },
      'vant',
    ],
  ],
};
```

#### 手动引入样式

```js
// 引入全部样式
import 'vant/lib/index.less';

// 引入单个组件样式
import 'vant/lib/button/style/less';
```

### 步骤二 修改样式变量

使用 Less 提供的 [modifyVars](https://lesscss.org/usage/#using-less-in-the-browser-modify-variables) 即可对变量进行修改，下面是参考的 webpack 配置。

```js
// webpack.config.js
module.exports = {
  rules: [
    {
      test: /\.less$/,
      use: [
        // ...其他 loader 配置
        {
          loader: 'less-loader',
          options: {
            // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
            lessOptions: {
              modifyVars: {
                // 直接覆盖变量
                'text-color': '#111',
                'border-color': '#eee',
                // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                hack: `true; @import "your-less-file-path.less";`,
              },
            },
          },
        },
      ],
    },
  ],
};
```

如果 vue-cli 搭建的项目，可以在 vue.config.js 中进行配置。

```js
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            'text-color': '#111',
            'border-color': '#eee',
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "your-less-file-path.less";`,
          },
        },
      },
    },
  },
};
```