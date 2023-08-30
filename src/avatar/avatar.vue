<template>
  <div
    class="tm-avatar"
    :style="mainStyles"
    :class="setClass">
    <el-image
      v-if="imageUrl"
      class="tm-avatar__image"
      :src="imageUrl"
      alt=""
      v-bind="$attrs"
    >
      <div slot="error" class="image-slot">
        <i
          class="tm-avatar__icon tm-icon-jiazaishibai"
          :style="setIconStyle"
        ></i>
      </div>
    </el-image>
    <div
      v-else-if="!textImage"
      class="tm-flex__center tm-avatar__image"
    >
      <i
        class="tm-avatar__icon"
        :class="setIconClass"
        :style="setIconStyle"
      ></i>
      <span v-if="tipTitle">{{ tipTitle }}</span>
    </div>
    <div
      v-else
      class="tm-avatar__text-image"
      :style="setIconStyle"
    >
      {{ textImage[0] }}
    </div>
  </div>
</template>

<script>
/**
 * @baseMode {string} 头像形状
 * circle: 圆形
 * square: 方形
 * rectangle: 矩形
 */
const baseMode = ['circle', 'square', 'rectangle'];
/**
 * @baseIconType {string} 头像类别，icon形式
 * image 图片
 * person 个人
 * company 公司
 * group 群组
 * goods 商品
 * */ 
const baseIconType = ['image', 'person', 'company', 'group', 'goods'];
const baseTheme = ['dark', 'light'];

const whiteList = ['.png', '.jpg', '.jpeg'];

import Vue from 'vue'
import { Image } from 'element-ui';

Vue.use(Image)

export default {
  name: "tmAvatar",
  props: {
    // 图片地址
    imageSource: {
      type: String,
      default: ''
    },
    // 头像形状
    mode: {
      type: String,
      default: 'square',
      validator: (val) => {
        return baseMode.includes(val);
      }
    },
    // 头像类型
    iconType: {
      type: String,
      default: 'image',
      validator: (val) => {
        return baseIconType.includes(val);
      }
    },
    // 自定义icon
    customIcon: {
      type: String,
      default: ''
    },
    // 主题
    theme: {
      type: String,
      default: 'dark',
      validator: (val) => {
        return baseTheme.includes(val);
      }
    },
    // 头像宽度
    width: {
      type: [Number, String],
      default: 40
    },
    // 头像高度
    height: {
      type: [Number, String],
      default: 40
    },
    // icon字体大小
    iconSize: {
      type: Number,
      default: 16,
      validator: (val) => {
        return val >= 12 && val <= 30;
      }
    },
    // 
    tipTitle: {
      type: String,
      default: ''
    },
    // 是否裁剪
    isCrop: {
      type: Boolean,
      default: () => false
    },
    // 裁剪参数
    crop: {
      type: String,
      default: () => 'm40x40'
    },
    // 文本图片，取文本的首个字符
    textImage: {
      type: String,
      default: () => ''
    },
    // 类名前缀
    classPrefix: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      curImageSource: this.imageSource
    }
  },
  computed: {
    imageUrl () {
      const { curImageSource, isCrop, crop } = this
      let url = curImageSource

      if (isCrop && curImageSource) {
        const imageType = curImageSource.match(/.[a-zA-Z_]+$/)?.[0]
        if (!whiteList.includes(imageType)) return url
        url = `${url}!${crop}${imageType}`
      }

      return url
    },
    mainStyles () {
      const width = this.width ? `${parseInt(this.width)}px` : '100%';
      const height = this.height ? `${parseInt(this.height)}px` : '100%';
      return {
        height,
        width
      };
    },
    setClass () {
      return {
        'tm-avatar__circle': this.mode === 'circle',
        'tm-avatar__square': this.mode === 'square',
        'tm-avatar__light': this.theme === 'light'
      };
    },
    setIconClass () {
      const { classPrefix, iconType, customIcon } = this;
      const iconTypeEnum = {
        image: 'tm-icon-zhaopian',
        person: 'tm-icon-touxiang',
        company: 'tm-icon-qiye',
        group: 'tm-icon-qunyunying1',
        goods: 'tm-icon-goods'
      }
      let className = customIcon || iconTypeEnum[iconType] || '';

      return [ className, classPrefix ]
    },
    setIconStyle () {
      return {
        'font-size': `${this.iconSize}px`
      }
    }
  },
  watch: {
    imageSource (newValue) {
      this.curImageSource = newValue;
    }
  },
  methods: {
    handleImageError (e) {
      const reg = /.+(?=!)/g;
      if (this.curImageSource.includes('!')) {
        this.curImageSource = this.curImageSource.match(reg)[0];
      }
    }
  }
}
</script>