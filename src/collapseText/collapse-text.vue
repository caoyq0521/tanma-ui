<template>
<div>
  <div class="tm-collapse-text" ref="collapseText">
    <div v-if="!(showPopover && showPopoverJudge)">
      <div class="tm-collapse-text__content" ref="collapseTextContent" :style="expandStyle">{{ (text === null || text === undefined || text === '') ? '--' : text }}</div>
      <div class="tm-collapse-text__action" v-if="showButton && showButtonJudge">
        <span
          v-if="!showFull"
          class="action action__open"
          @click.stop="showFullFn(true)"
        >
          {{ openButtonText }}
          <i v-if="showIcon" class="tm-icon-xiajiantou" />
        </span>
        <span
          v-else
          class="action action__close"
          @click.stop="showFullFn(false)"
        >
          {{ closeButtonText }}
          <i v-if="showIcon" class="tm-icon-shangjiantou" />
        </span>
      </div>
    </div>
    <div 
      v-else 
      :style="expandStyle" 
      v-title="text">
      {{ text }}
    </div>
  </div>
</div>
</template>

<script>
  import Vue from 'vue';
  import { Popover } from 'element-ui';

  Vue.use(Popover);
  export default {
    name: "tm-collapse-text",
    props: {
      // 文本内容
      text: {
        type: String,
        default: ''
      },
      // 折叠显示行数
      lines: {
        type: Number,
        default: 3
      },
      // 是否显示'展开'/'收起'按钮
      showButton: {
        type: Boolean,
        default: true
      },
      // 是否显示'展开'/'收起'按钮图标
      showIcon: {
        type: Boolean,
        default: true
      },
      // '展开'按钮文本
      openButtonText: {
        type: String,
        default: '展开'
      },
      // '收起'按钮文本
      closeButtonText: {
        type: String,
        default: '收起'
      },
      // 是否采用popover显示全文本模式
      showPopover: {
        type: Boolean,
        default: false
      }
  },
  data () {
    return {
      showFull: false, // 是否展示全文本
      expandStyle: '',
      showButtonJudge: false, // 判断是否需要折叠展示按钮
      showPopoverJudge: false, // 判断是否需要折叠展示popover
      minHeight:'',
      maxHeight: ''
    }
  },
  watch: {
    text () {
      this.resetStatus()
    }
  },
  mounted () { // 判断是否需要折叠
    this.judgeExpand()
  },
  methods: {
    resetStatus(){
      Object.assign(this.$data, this.$options.data())
      this.$refs.collapseTextContent.style.height = ''
      this.judgeExpand()
    },
    showFullFn (value) {
      this.expandStyle = value ? '' : `display: -webkit-box;word-break: break-all;-webkit-line-clamp: ${this.lines};-webkit-box-orient: vertical;text-overflow: ellipsis;overflow: hidden;`
      this.showFull = value
      this.$refs.collapseTextContent.style.height = value ? `${this.maxHeight}px` : `${this.minHeight}px`;
    },
    judgeExpand () {
      this.showButtonJudge = false
      this.showPopoverJudge = false
      this.$nextTick(() => {
        const { lines } = this;
        const collapseTextStyle = window.getComputedStyle(this.$refs.collapseText)
        const collapseTextHeight = parseFloat(collapseTextStyle.height) // 获取总高度
        const collapseTextLineHeight = parseFloat(collapseTextStyle.lineHeight === 'normal' ? parseFloat(collapseTextStyle.fontSize) * 1.2 : collapseTextStyle.lineHeight) // 获取行高
        // 计算行高
        const rects = Math.ceil(collapseTextHeight / collapseTextLineHeight)
        this.maxHeight = parseFloat(window.getComputedStyle(this.$refs.collapseTextContent).height)
        if (rects <= lines) { // 不需要折叠展示
          this.showButtonJudge = false
          this.showPopoverJudge = false
        } else {
          this.showButtonJudge = true
          this.showPopoverJudge = true
          this.expandStyle = `display: -webkit-box;word-break: break-all;-webkit-line-clamp: ${this.lines};-webkit-box-orient: vertical;text-overflow: ellipsis;overflow: hidden;`
          this.minHeight = collapseTextLineHeight
          this.$refs.collapseTextContent.style.height = `${this.minHeight}px`
        }
      })
    }
  }
  }
</script>