<template>
  <div 
    class="tm-title"
    :class="{'tm-title--bgc': withBackgroundColor}"
    :style="titleStyle"
  >
    <div class="tm-title__basic">
      <span 
        class="tm-title__content"
        :class="{'is-required': required}"
        :style="contentStyle"
      >
        {{ title }}
      </span>
      <span
        v-if="showOptional"
        class="tm-title__optional"
      >
        (选填)
      </span>
      <span
        v-if="tipsResult"
        class="tm-title__tips"
        :class="{'tm-title__tips--danger': tipsThemeIsDanger}"
        :style="tipsStyle"
      >
        {{ tipsResult }}
      </span>
      <slot>
      </slot>
    </div>
    <slot name="right"></slot>
  </div>
</template>

<script>
// 最小字大小
const MINI_FONT_SIZE = 14;
const DANGER = 'danger';
const TIPS_THEME = ['normal', DANGER];
class BaseValidator {
  constructor () {
    this.titleSize = 16;
    this.tipsSize = 14;
  }

  /**
   * 校验 tips字大小
   * tips 字体大小必须 大于等于 最小字体 并且 小于 标题字体大小
   */
  checkTipsSize () {
    return this.tipsSize >= MINI_FONT_SIZE && this.tipsSize <= this.titleSize;
  }
}
const Validator = new BaseValidator();

export default {
  name: 'tm-title',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    titleSize: {
      type: [Number, String],
      default: 14,
      validator (value) {
        const size = parseInt(value);
        Validator.titleSize = size;
        return size >= MINI_FONT_SIZE;
      }
    },
    required: {
      type: Boolean,
      default: false
    },
    showOptional: {
      type: Boolean,
      default: false
    },
    tips: {
      type: String,
      default: ''
    },
    tipsSize: {
      type: [Number, String],
      default: 14,
      validator (value) {
        Validator.tipsSize = parseInt(value);
        return Validator.checkTipsSize();
      }
    },
    tipsInBrackets: {
      type: Boolean,
      default: false
    },
    tipsTheme: {
      type: String,
      default: 'normal',
      validator (value) {
        return TIPS_THEME.includes(value);
      }
    },
    // 是否带有背景
    withBackgroundColor: {
      type: Boolean,
      default: false
    },
    // 背景色，在 withBackgroundColor 为 true 是生效
    backgroundColor: {
      type: String,
      default: '#F4F4F6'
    },
    // 圆角，在 withBackgroundColor 为 true 是生效
    radius: {
      type: [String, Number],
      default: 5
    }
  },
  computed: {
    titleStyle () {
      const radiusSize = parseInt(this.radius);
      if (this.withBackgroundColor) {
        return {
          'border-radius': `${radiusSize}px`,
          'background-color': this.backgroundColor
        }
      }
      return {}
    },
    contentStyle () {
      const size = parseInt(this.titleSize);
      return {
        'font-size': `${size}px`
      };
    },
    tipsResult () {
      return this.tipsInBrackets ? `(${this.tips})` : this.tips;
    },
    tipsStyle () {
      const size = parseInt(this.tipsSize);
      return {
        'font-size': `${size}px`
      }
    },
    tipsThemeIsDanger() {
      return this.tipsTheme === DANGER;
    }
  },
};
</script>
