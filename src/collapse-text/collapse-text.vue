<template>
  <div class="tm-collapse-text" ref="collapseText">
    <div v-if="!(showPopover && showPopoverJudge)">
      <span class="tm-collapse-text__content" :style="expandStyle">{{ (text === null || text === undefined || text === '') ? '--' : text }}</span>
      <div class="tm-collapse-text__action" v-if="showBtn && showBtnJudge">
        <span
          v-if="!showFull"
          class="action action__open"
          @click.stop="showFullFn(true)"
        >
          {{ openBtnText }}
          <i v-if="showIcon" class="iconfont icon-xiajiantou" />
        </span>
        <span
          v-else
          class="action action__close"
          @click.stop="showFullFn(false)"
        >
          {{ closeBtnText }}
          <i v-if="showIcon" class="iconfont icon-shangjiantou" />
        </span>
      </div>
    </div>
    <el-popover
      v-else
      :placement="popoverPlace"
      trigger="hover">
      <div class="tm-collapse-text__popover">
        {{ text }}
      </div>
      <span class="tm-collapse-text__content" :style="expandStyle" slot="reference">{{ text }}</span>
    </el-popover>
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
      },
      // popover展示位置
      popoverPlace: {
        type: String,
        default: 'bottom'
      }
  },
  data () {
    return {
      showFull: false, // 是否展示全文本
      expandStyle: '',
      showBtnJudge: false, // 判断是否需要折叠展示按钮
      showPopoverJudge: false // 判断是否需要折叠展示popover
    }
  },
  watch: {
    text () {
      this.judgeExpand()
    }
  },
  mounted () { // 判断是否需要折叠
    this.judgeExpand()
  },
  methods: {
    showFullFn (value) {
      this.expandStyle = value ? '' : `display: -webkit-box;word-break: break-all;-webkit-line-clamp: ${this.lines};-webkit-box-orient: vertical;text-overflow: ellipsis;overflow: hidden;`
      this.showFull = value
    },
    judgeExpand () {
      this.showBtnJudge = false
      this.showPopoverJudge = false
      this.$nextTick(() => {
        const { lines } = this;
        const collapseTextStyle = window.getComputedStyle(this.$refs.collapseText)
        const collapseTextHeight = parseFloat(collapseTextStyle.height) // 获取总高度
        const collapseTextLineHeight = parseFloat(collapseTextStyle.lineHeight === 'normal' ? parseFloat(collapseTextStyle.fontSize) * 1.2 : collapseTextStyle.lineHeight) // 获取行高
        // 计算行高
        const rects = Math.ceil(collapseTextHeight / collapseTextLineHeight)
        if (rects <= lines) { // 不需要折叠展示
          this.showBtnJudge = false
          this.showPopoverJudge = false
        } else {
          this.showBtnJudge = true
          this.showPopoverJudge = true
          this.expandStyle = `display: -webkit-box;word-break: break-all;-webkit-line-clamp: ${this.lines};-webkit-box-orient: vertical;text-overflow: ellipsis;overflow: hidden;`
        }
      })
    }
  }
  }
</script>