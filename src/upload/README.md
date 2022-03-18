# upload

### 介绍

组件介绍

### 引入

```js
  import Vue from 'vue';
  import { Upload } from 'tanma-ui';
  
  Vue.use(Upload);
```

## 代码演示

### 基础用法
开启hover效果的单张图片

<demo-code>./demo/hoverImg.vue</demo-code>

### 单张图片预览

单张图片不支持预览，我们提供了组件内部的方法`handlePreview`，直接调用这个方法传入预览的地址。

<demo-code>./demo/index.vue</demo-code>

### 剪切用法

<demo-code>./demo/cutterSingle.vue</demo-code>

### 多张上传

<demo-code>./demo/multipleImg.vue</demo-code>

### 单个文件上传

<demo-code>./demo/fileUpload.vue</demo-code>

### 多个文件上传

<demo-code>./demo/multipleFileUpload.vue</demo-code>

### Props

参数 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
action | 上传地址 | _string_ | - | `/resourceServer/file/commonUpload`
beforeUpload | 上传前限制条件, 返回值为`true`上传 | _function_ | - | -
data | 上传时附带的额外参数 | _object_ | - | -
headers | 设置的请求头 | _object_ | - | -
limit | 上传文件的数量 | _number_ | - | 1
model | 上传模式，file(文件上传)、image(图片上传) | _string_ | - | file/image
hover | 单张图片是否开启hover | _boolean_ | - | false
isCut | 是否开启剪切 | _boolean_ | - | false
imgTitle | 上传图片提示信息 | _string_ | - | 上传图片
fileTitle | 上传文件的提示信息 | _string_ | - | -
rate | 剪切比例 | _string_ | - | 4:3
size | 上传的文件大小: 单位MB | _number_ | - | 5

### Events

事件名 | 说明 | 回调参数
-- | -- | --
previewFile | 点击上传的文件触发，携带着点击文件的信息 | -
uploadList | 上传后触发，携带着上传文件的信息 | -

### 样式变量

#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@width-size-img | `103px` | 上传图片的宽高
@image-upload-border-dashed | `1px dashed #858598` | 未上传图片的边框
@image-upload-border | `1px solid @gray-3` | 上传图片后边框的颜色
@image-boder-radius | `5px` | 上传图片边框的圆角
@upload-box-p | `#D7D7D7` | 边框的提示信息字体颜色

#### Css 变量

组件提供了下列 Css 变量，可用于自定义样式。

名称 | 默认值 | 描述
-- | -- | --
--tm-upload-width | `103px` | 上传图片的宽高
--tm-upload-border-dashed | `1px dashed #858598` | 未上传图片的边框
--tm-upload-border | `1px solid @gray-3` | 上传图片后边框的颜色
--tm-border-radius | `5px` | 上传图片边框的圆角
--tm-upload-p | `#D7D7D7` | 边框的提示信息字体颜色
--tm-uplaod-font | `14px` | 字体大小