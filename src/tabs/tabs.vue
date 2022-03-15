<template>
  <div
    class="tm-flex__center--col tm-tabs"
    :class="[`tm-tabs--${type}`, `tm-tabs--${size}`]"
  >
    <slot name="left"></slot>
    <span
      v-if="showPaginationBtn"
      class="iconfont icon-zuojiantou icon-prev"
      :class="{'is-disabled': isPrevDisabled}"
      @click="handlePrev"
    ></span>
    <div ref="tabsGroup" class="tm-tabs-group">
      <div
        ref="tabsContent"
        class="tm-tabs-group__content"
        :class="[`is-${position}`]"
        :style="{ transform: `translateX(${translateX}px)` }"
      >
        <div
          v-for="(item, index) in options"
          :key="item.key || index"
          class="tm-tabs__pane"
          ref="items"
          :class="{
            'is-active': currentKey === item.key,
            'is-round': round,
          }"
          @click="handleTabClick(item, item.key, $event)"
        >
          <slot :name="item.key" :tab="item" :index="index">
            <span class="tm-tabs__pane-title">{{ item.title }}</span>
          </slot>
        </div>
      </div>
    </div>
    <span
      v-if="showPaginationBtn"
      class="iconfont icon-youjiantou icon-next"
      :class="{'is-disabled': isNextDisabled}"
      @click="handleNext"
    ></span>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "tmTabs",
  props: {
    // 绑定值 value/v-model
    value: {
      type: [String],
      default: ''
    },
    // 类型
    // text / underline / button
    type: {
      type: String,
      default: 'underline',
      validator (value) {
        return ['text', 'underline', 'button'].includes(value);
      }
    },
    // 标签list, {key, title}
    options: {
      type: Array,
      default: () => ([])
    },
    // 控制大小
    // medium / small
    size: {
      type: String,
      default: 'medium',
      validator (value) {
        return ['medium', 'small'].includes(value);
      }
    },
    // 是否圆角，type = button 有效
    round: {
      type: Boolean,
      default: false
    },
    // 标签在整行中的位置
    // left / center / right
    position: {
      type: String,
      default: 'left',
      validator (value) {
        return ['left', 'center', 'right'].includes(value)
      }
    }
  },
  data () {
    return {
      currentKey: this.value,
      showPaginationBtn: false,
      translateX: 0
    }
  },
  watch: {
    options: {
      deep: true,
      handler: 'initEle'
    }
  },
  computed: {
    isPrevDisabled () {
      return this.translateX === 0;
    },
    isNextDisabled () {
      return this.translateX === -(this.contentWidth - this.groupWidth);
    }
  },
  created () {
    if (!this.currentKey) {
      const first = this.options[0];
      first && this.setCurrentKey(first.key);
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.setTimeout(() => {
        this.initEle();
      }, 30);
    })
    window.addEventListener('resize', this.initEle);
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.initEle);
  },
  methods: {
    initEle () {
      window.requestAnimationFrame(() => {
        const group = this.$refs.tabsGroup;
        const content = this.$refs.tabsContent;
        if (!group || !content) return;
        this.groupWidth = group.clientWidth;
        this.contentWidth = content.clientWidth;
        if (this.contentWidth > this.groupWidth) {
          if (!this.showPaginationBtn) {
            this.showPaginationBtn = true;
            // 减去两边按钮的宽度
            this.groupWidth -= 40 * 2;
          }
          this.scrollIntoView();
        } else {
          this.showPaginationBtn = false;
        }
      })
    },
    setCurrentKey (key) {
      this.currentKey = key;
      this.$emit('input', key);
    },
    handleTabClick (tab, key, event) {
      this.setCurrentKey(key);
      this.$emit('tab-click', tab, event);
      this.scrollIntoView();
    },
    scrollIntoView () {
      const currentKey = this.currentKey;
      const index = this.options.findIndex((tab) => tab.key === currentKey);
      if (index < 0) return;
      this.$nextTick(() => {
        const items = this.$refs.items;
        const currentItem = items[index];
        const move = (currentItem.offsetLeft - this.groupWidth / 2 + currentItem.offsetWidth / 2);
        this.translateX =  move < 0 ? 0 : move > (this.contentWidth - this.groupWidth) ? (-this.contentWidth + this.groupWidth) : -move;
      })
    },
    handlePrev () {
      let move = this.translateX + this.groupWidth;
      if (move > 0) {
        move = 0;
      }
      this.translateX = move;
    },
    handleNext () {
      let move = this.translateX - this.groupWidth;
      const max = this.contentWidth - this.groupWidth;
      if (move < -max) {
        move = -max;
      }
      this.translateX = move;
    }
  }
}
</script>
