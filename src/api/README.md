# API

### 介绍

tanma-design 中现有的公共方法介绍以及使用方式

### 引入
  
```javascript
  import * as tools from 'tanma-design/es/util';
  Vue.prototype.$tools = tools;
  
  import {deepClone} from 'tanma-design/es/util';
```

### getRootCss
#### 概述
  获取根元素css样式

#### 语法
```javascript
  getRootCss(attributeName)
```

#### 参数
  `attributeName` css属性名 {String}

#### 返回值
  属性值

#### 示例
```javascript
  getRootCss('color') // '#FFFFFF'
```

### deepClone
#### 概述
  深拷贝

#### 语法
```javascript
  deepClone(target)
```

#### 参数
  `target` 源数据 {Object}

#### 返回值
  备份数据

#### 示例
```javascript
  const targetObj = {name: '张三', skills: ['sing', 'dance'] }
  deepClone(targetObj) // {name: '张三', skills: ['sing', 'dance'] }
```

### rangeDate
#### 概述
  初始化rangeDate组件数据

#### 语法
```javascript
  rangeDate(range, type)
```

#### 参数
  `range` 区间、间隔 {Number} <br />
  `type` 类型 {Number} 1: yyyy-MM-dd, 2: yyyy-MM-dd hh:mm

#### 返回值
  时间范围数组

#### 示例
```javascript
  rangeDate(7， 1) // ['2022-03-03', '2022-03-09']
  rangeDate(7， 2) // ['2022-03-03 00:00:00', '2022-03-09 23:59:59']
```

### scrollTop
#### 概述
  DOM滚动

#### 语法
```javascript
  scrollTop(el, from = 0, to, duration = 500, endCallback)
```

#### 参数
  `el` 滚动的元素 {DOM} <br />
  `from` 从什么位置开始 {Number} <br />
  `to` 滚动到什么位置 {Number} <br />
  `duration` 时间 {Number} <br />
  `endCallback` 结束后的回调 {Function}

### downLoadBlob
#### 概述
  创建 a 标签下载bolb或base64文件

#### 语法
```javascript
  downLoadBlob(blob, fileName = '')
```

#### 参数
  `blob` 文件对象 {blob} <br />
  `fileName` 文件名 {String}

### exportFile
#### 概述
  文件导出 该导出功能使用前端文件名+后端扩展名的形式生成文件

#### 语法
```javascript
  exportFile(responded, fileName = '', decode = false)
```

#### 参数
  `responded` 接口响应内容 <br />
  `fileName` 文件名 {String} <br />
  `decode` 是否对 encodeURI 编码过的 URI 进行解码 {Boolean}

### debounce
#### 概述
  防抖

#### 语法
```javascript
  debounce(func, wait = 500)
```

#### 参数
  `func` 处理函数 {Function} <br />
  `wait` 等待时间 {Number}

#### 示例
```javascript
  const func = function (val) {
    console.log(val) // 100
  }
  debounce(func(100), 500)
```

### getServerDate
#### 概述
  获取服务器标准时间

#### 语法
```javascript
  getServerDate()
```

#### 返回值
  服务器时间

#### 示例
```javascript
  getServerDate() // Wed Mar 09 2022 15:27:05 GMT+0800 (中国标准时间)
```

### stopPropagation
#### 概述
  阻止事件冒泡

#### 语法
```javascript
  stopPropagation(e)
```

#### 参数
  `e` 事件对象 {Object}

### stopDefault
#### 概述
  阻止默认行为

#### 语法
```javascript
  stopDefault(e)
```

#### 参数
  `e` 事件对象 {Object}

### haveSymbol
#### 概述
  校验是否包含特殊字符

#### 语法
```javascript
  haveSymbol(text)
```

#### 参数
  `text` 校验字符 {String}

#### 返回值
  是否包含特殊字符

#### 示例
```javascript
  haveSymbol('()123') // true
```

### isRepeat
#### 概述
  校验数组成员是否重复,只能校验一维数组

#### 语法
```javascript
  isRepeat(arr)
```

#### 参数
  `arr` 数组 {Array}

#### 返回值
  数组成员是否重复

#### 示例
```javascript
  const arr = [1, 2, 3, 1, 4]
  isRepeat(arr) // true
```

### isSafari
#### 概述
  校验是否是safari浏览器

#### 语法
```javascript
  isSafari()
```

#### 返回值
  是否是safari浏览器

#### 示例
```javascript
  isSafari() // true
```

### isCard
#### 概述
  校验是否是身份证

#### 语法
```javascript
  isCard(str)
```

#### 参数
  `str` 身份证号 {String}

#### 返回值
  是否是身份证

#### 示例
```javascript
  const str = '410523199001011010'
  isCard(str) // true
```

### underScoreCase
#### 概述
  驼峰转下划线

#### 语法
```javascript
  underScoreCase(str)
```

#### 参数
  `str` 驼峰字符串 {String}

#### 返回值
  转换后的下划线字符串

#### 示例
```javascript
  const str = 'underScoreCase'
  underScoreCase(str) // 'under_score_case'
```

### getWeek
#### 概述
  获取星期数

#### 语法
```javascript
  getWeek(time)
```

#### 参数
  `time` 时间 格式为 xxxx-xx-xx {String}

#### 返回值
  星期数

#### 示例
```javascript
  const time = '2022-3-9'
  getWeek(time) // '星期三'
```
### formatBytes
#### 概述
  字节单位换算 Bytes ==> KB/MB...

#### 语法
```javascript
  formatBytes(size, point = 2)
```

#### 参数
  `size` 字节数 {Number} <br />
  `point` 保留小数位数 {Number}

#### 返回值
  换算后的大小

#### 示例
```javascript
  formatBytes(100) // '100Bytes'
  formatBytes(1024) // '1KB'
  formatBytes(1024 * 1024) // '1MB'
```

### fileSizeFormatToByte
#### 概述
  字节单位换算 KB/MB... ==> Bytes

#### 语法
```javascript
  fileSizeFormatToByte(size)
```

#### 参数
  `size` 字节数 {String}

#### 返回值
  换算后的大小

#### 示例
```javascript
  fileSizeFormatToByte('1KB') // 1024
  fileSizeFormatToByte('1MB') // 1024 * 1024
```

### dataURLtoBlob
#### 概述
  base64转换为file

#### 语法
```javascript
  dataURLtoBlob(dataurl, name)
```

#### 参数
  `dataurl` base64格式的数据 <br />
  `name` 输出的文件名

#### 返回值
  转换后的file

### blobToDataURI
#### 概述
  blob转为base64

#### 语法
```javascript
  blobToDataURI(blob)
```

#### 参数
  `blob` blob类型文件

#### 返回值
  转换后的base64

### convertImgToBase64
#### 概述
  图片url转base64

#### 语法
```javascript
  convertImgToBase64(url, outputFormat)
```

#### 参数
  `url` 图片路径 <br />
  `outputFormat` 输出的图片类型，默认 image/png

#### 返回值
  转换后的base64

###  类型判断
#### 概述
  校验数据类型

#### 语法
```javascript
  dataType[type](data)
```

#### 参数
  `type` 数据类型 {String} <br />
  `data` 校验的数据 {*}

#### 返回值
  是否是`type`类型

#### 示例
```javascript
  dataType.isNumber(123) // true
  dataType.isString('123') // true
  dataType.isBoolean(true) // true
  dataType.isArray([1, 2, 3]) // true
  dataType.isFunction(() => {}) // true
  dataType.isObject({}) // true
  dataType.isRegExp(/www/) // true
```

### isMobile

#### 概述

判断当前环境是不是移动设备

#### 语法

```javascript
  isMobile()
```

#### 返回值

是否是移动设备

#### 示例

```javascript
  isMobile() // false
```