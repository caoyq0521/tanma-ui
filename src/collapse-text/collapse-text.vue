<template>
  <div class="tm-collapse-text" ref="collapseText">
    <div v-if="!(showPopover && showPopoverJudge)">
      <span class="tm-collapse-text__content" :style="expandStyle">{{ (text === null || text === undefined || text === '') ? '--' : text }}</span>
      <div class="tm-collapse-text__action">
        <span
          v-if="showBtn && showBtnJudge"
        >
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
    text: { // 文本内容
      type: String,
      default: () => ''
    },
    lines: { // 折叠显示行数
      type: Number,
      default: () => 3
    },
    showBtn: { // 展开、收起按钮
      type: Boolean,
      default: true
    },
    showIcon: { // 展开、收起icon
      type: Boolean,
      default: true
    },
    openBtnText: { // 展开按钮文本
      type: String,
      default: '展开'
    },
    closeBtnText: { // 收起按钮文本
      type: String,
      default: '收起'
    },
    showPopover: { // popover显示全文本
      type: Boolean,
      default: false
    },
    popoverPlace: { // popover位置
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