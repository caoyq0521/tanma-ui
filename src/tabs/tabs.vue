<template>
  <div
    class="tm-flex__center--col tm-tabs"
    :class="[`tm-tabs--${type}`, `tm-tabs--${size}`]"
  >
    <slot name="left"></slot>
    <span
      v-if="showPaginationBtn"
      class="iconfont icon-zuojiantou icon-prev"
      @click="handlePrev"
    ></span>
    <div ref="tabsGroup" class="tm-tabs-group" :class="[`is-${placement}`]">
      <div
        ref="tabsContent"
        class="tm-tabs-group__content"
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
    placement: {
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
  created () {
    if (!this.currentKey) {
      const first = this.options[0];
      first && this.setCurrentKey(first.key);
    }
  },
  mounted () {
    this.initEle();
  },
  methods: {
    initEle () {
      const group = this.$refs.tabsGroup;
      const content = this.$refs.tabsContent;
      if (content.clientWidth > group.clientWidth) {
        this.showPaginationBtn = true;
        this.scrollIntoView();
      } else {
        this.showPaginationBtn = false;
      }
      window.addEventListener('resize', () => {
        this.scrollIntoView();
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
      const group = this.$refs.tabsGroup;
      const content = this.$refs.tabsContent;
      const currentKey = this.currentKey;
      const index = this.options.findIndex((tab) => tab.key === currentKey);
      if (index < 0) return;
      this.$nextTick(() => {
        const items = this.$refs.items;
        const currentItem = items[index];
        const move = (currentItem.offsetLeft - group.clientWidth / 2 + currentItem.offsetWidth / 2)
        this.translateX =  move < 0 ? 0 : move > (content.clientWidth - group.clientWidth) ? (-content.clientWidth + group.clientWidth) : -move;
      })
    },
    handlePrev () {
      const group = this.$refs.tabsGroup;
      let move = this.translateX + group.clientWidth;
      if (move > 0) {
        move = 0;
      }
      this.translateX = move;
    },
    handleNext () {
      const group = this.$refs.tabsGroup;
      const content = this.$refs.tabsContent;
      let move = this.translateX - group.clientWidth;
      if (Math.abs(move) > content.clientWidth - group.clientWidth) {
        move = -content.clientWidth + group.clientWidth;
      }
      this.translateX = move;
    },
    onResize () {

    }
  }
}
</script>
