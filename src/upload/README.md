# upload

### 介绍

通过点击或者拖拽上传文件

### 引入

```js
  import Vue from 'vue';
  import { Upload } from 'tanma-design';
  
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

### 自定义上传

<demo-code>./demo/customUpload.vue</demo-code>

### 多张上传

<demo-code>./demo/multipleImg.vue</demo-code>

### 单个文件上传

<demo-code>./demo/fileUpload.vue</demo-code>

### 多个文件上传

<demo-code>./demo/multipleFileUpload.vue</demo-code>

### Props

参数 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
accept | 接受上传的文件类型 | _string_ | - | -
action | 上传地址 | _string_ | - | -
before-upload | 上传前限制条件, 返回值为`false` 或者 `Promise 为reject`中止上传 | _function_ | - | () => true
data | 上传时附带的额外参数 | _object_ | - | {}
headers | 设置的请求头 | _object_ | - | {}
limit | 上传文件的数量 | _number_ | - | 1
model | 上传模式，file(文件上传)、image(图片上传) | _string_ | - | file/image
multiple | 是否多选 | _boolean_ | - | false
hover | 单张图片是否开启hover | _boolean_ | - | false
is-custom-upload | 自定义上传 | _boolean_ | - | false
is-cut | 是否开启剪切 | _boolean_ | - | false
img-title | 上传图片提示信息 | _string_ | - | 上传图片
file-title | 上传文件的提示信息 | _string_ | - | -
rate | 剪切比例 | _string_ | - | 4:3
show-list | 是否展示上传文件 | _boolean_ | - | true
show-progress | 是否显示上传进度 | _boolean_ | - | true
size | 上传的文件大小: 单位MB | _number_ | - | 5
upload-list | 回显的文件列表，文件对象格式为 `{ name: xxx, type: xxx, url: xxx }` | _array_ | - | -


### Slots

名称 | 说明 
-- | -- 
custom-upload | 自定义上传


### Events

事件名 | 说明 | 回调参数
-- | -- | --
preview-file | 点击上传的文件触发，携带着点击文件的信息 | -
success | 上传成功后触发，携带着上传文件的信息 | -
error | 上传失败触发，携带着上传失败的信息 | -
progress | 上传文件的进度 | 是一个对象 percentage上传的进度，size 上传文件的大小
remove | 移除的文件 | -

### 样式变量

#### Less 变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[定制主题](#/theme)。

名称 | 默认值 | 描述
-- | -- | --
@upload-width | `103px` | 上传图片的宽高
@upload-border-dashed | `1px dashed #858598` | 未上传图片的边框
@upload-image-border | `1px solid @gray-3` | 上传图片后边框的颜色
@upload-image-radius | `5px` | 上传图片边框的圆角
@upload-text-color | `#D7D7D7` | 边框的提示信息字体颜色
@upload-drag-radius | `8px` | 拖拽边框的圆角
@upload-download-color | var(--main-color) `#3470ff` | 下载按钮文本颜色
@upload-close-font-size | var(--font-size-tooltip) `12px` | 图片删除icon大小
@tm-upload-font-size | `12px` | 字体大小

#### Css 变量

组件提供了下列 Css 变量，可用于自定义样式。

名称 | 默认值 | 描述
-- | -- | --
--tm-upload-width | `103px` | 上传图片的宽高
--tm-upload-border-dashed | `1px dashed #858598` | 未上传图片的边框
--tm-upload-border | `1px solid @gray-3` | 上传图片后边框的颜色
--tm-upload-image-radius | `5px` | 上传图片边框的圆角
--tm-upload-text-color | `#D7D7D7` | 边框的提示信息字体颜色
--tm-upload-font-size | `12px` | 字体大小
--tm-upload-drag-radius | `8px` | 拖拽边框的圆角
--tm-upload-download-color | var(--main-color) `#3470ff` | 下载按钮文本颜色
--tm-upload-close-font-size | var(--font-size-tooltip) `12px` | 图片删除icon大小