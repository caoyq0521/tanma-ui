const timeFormat = (time) => {
  const month = time.getMonth() >= 9 ? (time.getMonth() + 1) : ("0" + (time.getMonth() + 1))
  const date = time.getDate() > 9 ? time.getDate() : ("0" + time.getDate())
  const formatTime = time.getFullYear() + "-" + month + "-" + date;
  return formatTime;
}

/**
 * 获取根元素css样式
 * @param {String} attributeName css属性名
 * @returns 属性值
 * */ 
export const getRootCss = (attributeName) => {
  const  rootElement = document.documentElement;
  const  styles = getComputedStyle(rootElement);
  return styles.getPropertyValue(attributeName).trim();
}

/**
 * 深拷贝
 * @param {Object} target 源数据
 * @returns {Array, Object} 深拷贝后的数据
 * */ 
export const deepClone = (target) => {
  function _deepClone (_target) {
    if (_target instanceof Date) return new Date(_target)
    if (_target instanceof RegExp) return new RegExp(_target)
    if (typeof _target !== 'object' || !_target) return _target

    let obj = {}

    if (_target instanceof Array) obj = []

    for (const key in _target) {
      obj[key] = _deepClone(_target[key])
    }

    return obj
  }

  return _deepClone(target);
}

/**
 * 初始化rangeDate组件数据
 * @param {Number} range 天数
 * @param {Number} type 类型  1: yyyy-MM-dd, 2: yyyy-MM-dd hh:mm
 * @returns {Array} 时间范围数组
 * */ 
export const rangeDate = (range, type) => {
  const end = new Date();
  const start = new Date(Math.round(new Date().getTime() - 1000 * 60 * 60 * 24 * (range - 1)))
  if (type === 1) {
    return [timeFormat(start), timeFormat(end)];
  } else {
    return [timeFormat(start) + " 00:00:00", timeFormat(end) + " 23:59:59"];
  }
}

/**
 * DOM滚动
 * @param {DOM} el 滚动的元素
 * @param {Number} from 从什么位置开始
 * @param {Number} to 滚动到什么位置
 * @param {Number} duration 时间
 * @param {Function} endCallback 结束后的回调
 * @returns void
 */
export const scrollTop = (el, from = 0, to, duration = 500, endCallback) => {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  }
  const difference = Math.abs(from - to);
  const step = Math.ceil(difference / duration * 50);

  function scroll (start, end, step) {
    if (start === end) {
      endCallback && endCallback();
      return;
    }

    let d = (start + step > end) ? end : start + step;
    if (start > end) {
      d = (start - step < end) ? end : start - step;
    }

    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }
    window.requestAnimationFrame(() => scroll(d, end, step));
  }
  scroll(from, to, step);
}

/**
 * 下载bolb 或 base64
 * @param {Object} blob 文件对象
 * @param {String} fileName 文件名
 * @returns void
 * */ 
export const downLoadBlob = (blob, fileName = '') => {
  if ('download' in document.createElement('a')) { // 非IE下载
    const elink = document.createElement('a');
    elink.download = fileName;
    elink.style.display = 'none';
    elink.href = (typeof blob === 'string' && blob.startsWith('data:')) ? blob : URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href); // 释放URL 对象
    document.body.removeChild(elink);
  } else { // IE10+下载
    navigator.msSaveBlob(blob, fileName);
  }
}

/**
 * 文件导出 该导出功能使用前端文件名+后端扩展名的形式生成文件
 * @param responded 接口响应内容
 * @param {string} fileName 文件名
 * @param decode 是否对 encodeURI 编码过的 URI 进行解码
 * @returns void
 * */ 
export const exportFile = (responded, fileName = '', decode = false) => {
  if (!responded) {
    return;
  }
  const typeMap = {
    '.xls': { type: 'application/vnd.ms-excel;charset=utf-8' },
    '.xlsx': { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' }
  }
  let serverName = ''
  const { headers = {} } = responded
  const disposition = headers['content-disposition'] || '';
  const reg = /(filename=)(.+)/
  const serverNameMatched = disposition.match(reg) || []
  serverName = serverNameMatched[0] || ''

  if (serverName) {
    serverName = serverName.split('=')[1]
    serverName = decode ? decodeURI(serverName) : serverName
    if (!fileName) {
      fileName = serverName
    }
  }
  const extReg = /\.\w+$/i
  const servExted = serverName.match(extReg) || []
  const servExt = servExted[0]
  if (servExt) {
    fileName = fileName.replace(extReg, servExt)
  }
  const blob = new Blob([responded.responded], typeMap[servExt]);
  downLoadBlob(blob, fileName)
}

/**
 * 防抖
 * @param {Function} func 处理函数
 * @param {Number} wait 等待时间 
 * @returns {Function} 闭包拿func参数
 * */ 
export const debounce = (func, wait = 500) => {
  let timer
  return function () {
    const args = arguments
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

/**
 * 获取服务器时间
 * @returns {Date} 服务器时间
 * */ 
export const getServerDate = () => {
  const xhr = new window.XMLHttpRequest()
  xhr.open("GET", `/?_t=${+Date.now()}`, false)
  xhr.send(null)
  const date = xhr.getResponseHeader("Date")
  return new Date(date)
}

/**
 * 将base64转换为file
 * @param {String} dataurl base64Data
 * @param {String} name 文件名
 * @returns {Object} File
 * */ 
export const dataURLtoBlob = (dataurl, name) => {
  const arr = dataurl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], name, { type: mime })
}

/**
 * blob转为base64
 * @param {Object} blob blob类型文件
 * @returns {Promise}
 * */ 
export const blobToDataURI = (blob) => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  return new Promise((resolve, reject) => {
    reader.onload = function (e) {
      resolve(e.target.result);
    };
  })
}

/**
 * 图片url转base64
 * @param {String} url 图片路径
 * @param {String} outputFormat 输出的图片类型，默认 image/png
 * @returns {Promise}
 * */
export const convertImgToBase64 = (url, outputFormat) => {
  return new Promise((resolve, reject) => {
    let canvas = document.createElement('CANVAS')
    const ctx = canvas.getContext('2d')
    const img = new Image()

    img.crossOrigin = 'Anonymous'
    img.onload = function () {
      canvas.height = img.height
      canvas.width = img.width
      ctx.drawImage(img, 0, 0)
      const dataURL = canvas.toDataURL(outputFormat || 'image/png')
      // callback.call(this, dataURL);
      resolve(dataURL)
      canvas = null
    }
    img.onerror = function () {
      reject(new Error('the url source is unavailable'))
    }
    img.src = url
  })
}

/**
 * 阻止事件冒泡
 * @param {Object} e 事件对象
 * @returns void
 */
export const stopPropagation = (e) => {
  //如果提供了事件对象，则这是一个非IE浏览器
  if (e && e.stopPropagation) {
    //因此它支持W3C的stopPropagation()方法
    e.stopPropagation();
  } else {
    //否则，我们需要使用IE的方式来取消事件冒泡
    window.event.cancelBubble = true;
  }
}

/**
 * 阻止默认行为
 * @param {Object} e 事件对象
 * @returns {Boolean} false
 */
export const stopDefault = (e) => {
  //阻止默认浏览器动作(W3C)
  if (e && e.preventDefault) {
    e.preventDefault();
  } else {
    //IE中阻止函数器默认动作的方式
    window.event.returnValue = false;
  }
  return false;
}

/**
 * 字节单位换算
 * @param {Number, String} size 字节数
 * @param {Number, String} point 保留小数位数 默认 2位
 * @returns {String} 换算后的大小
 * */ 
export const formatBytes = (size, point = 2) => {
  if (size === 0) return "0 Bytes"
  const c = 1024
  const e = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
  const f = Math.floor(Math.log(size) / Math.log(c))

  return parseFloat((size / Math.pow(c, f)).toFixed(point)) + "" + e[f]
}

/**
 * 字节换算
 * @param {String} size 字符串的可视单位 '222.22 KB'
 * @returns byte为单位的大小
 */ 
export const fileSizeFormatToByte = (size) => {
  const e = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const num = parseFloat(size);
  const i = e.findIndex((item) => size.includes(item));
  const c = 1024;
  return parseFloat((num * Math.pow(c, i)));
}

/**
 * 是否包含特殊字符
 * @param {String} text 校验字符
 * @returns {Boolean}
 * */ 
export const haveSymbol = (text) => {
  const result = /[`~%!@#^=''?~！@#￥……&——‘”“'？*()（），,。.、+-/]/.test(text);
  return result;
}

/**
 * 数组成员是否重复
 * @param {Array} 数组
 * @returns {Boolean}
 * */ 
export const isRepeat = (arr) => {
  const hash = {};
  for (const i of arr) {
    if (hash[i]) { return true; }
    hash[i] = true;
  }
  return false;
}

/**
 * 驼峰转下划线
 * @param {String} 字符串
 * @returns String
 */
export const underScoreCase = (str) => {
  const hyphenateRE = /([A-Z])/g;
  return str
    .replace(hyphenateRE, '_$1')
    .toLowerCase();
}

/**
 * 获取星期几
 * @param {String} time 时间 格式为 xxxx-xx-xx
 * @returns {String}
 * */ 
export const getWeek = (time) => {
  const weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
  return weekday[new Date(time.replace(/-/g, "/")).getDay()]
}

/**
 * 是否是safari浏览器
 * @returns {Boolean}
 * */ 
export const isSafari = () => {
  return userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1;
}

/**
 * 是否是身份证
 * @param {String} str 身份证号
 * @returns {Boolean}
 * */ 
export const isCard = (str) => {
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(str);
}

/**
 * 类型判断 使用方法 dataType.isString('123') // true
 * 
 * */ 
export const dataType = {}
const typeMap = ['String', 'Function', 'Array', 'Number', 'RegExp', 'Object', 'Boolean']
typeMap.forEach(item => {
  dataType['is' + item] = obj => {
    return Object.prototype.toString.apply(obj) === '[object ' + item + ']';
  }
})

// 将文件读取成 Data URL
export const fileToDataURL= obj => {
  return new Promise((resolve, reject) => {
    const a = new FileReader();
    a.readAsDataURL(obj);
    a.onload = function (e) {
      resolve(e.target.result);
    };
  });
}
/**
 * 是否是移动端 
 * @returns {Boolean}
 */
export const isMobile = () => {
  return !!navigator.userAgent.match(
    /(iPhone|iPod|Android|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/ig
  );
}

export const arrayFindIndex = function(arr, pred) {
  for (let i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i;
    }
  }
  return -1;
};
