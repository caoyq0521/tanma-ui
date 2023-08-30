<template>
  <div
    class="tm-flex__center--col tm-tabs"
    :class="[`tm-tabs--${type}`, `tm-tabs--${size}`]"
  >
    <slot name="left"></slot>
    <span
      v-if="showPaginationBtn"
      class="tm-icon-zuojiantou icon-prev"
      :class="{ 'tm-is-disabled': isPrevDisabled }"
      @click="handlePrev"
    ></span>
    <div ref="wrapper" class="tm-tabs__wrapper">
      <div
        ref="content"
        class="tm-tabs__content"
        :class="[`tm-is-${position}`]"
        :style="{ transform: `translateX(${translateX}px)` }"
      >
        <div
          v-for="(item, index) in options"
          :key="item.key || index"
          class="tm-tabs__pane"
          ref="items"
          :class="{
            'tm-is-active': currentKey === item.key,
            'tm-is-round': round,
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
      class="tm-icon-youjiantou icon-next"
      :class="{ 'tm-is-disabled': isNextDisabled }"
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
    // 是否监听和切换标签时修改路由
    router: {
      type: Boolean,
      default: false
    },
    // 路由查询参数名称
    queryname: {
      type: String,
      default: 'tab'
    },
    // 控制大小
    // default / small
    size: {
      type: String,
      default: 'default',
      validator (value) {
        return ['default', 'small'].includes(value);
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
      return this.translateX === -(this.contentWidth - this.wrapperWidth);
    }
  },
  created () {
    let currentKey = this.currentKey;

    // 如果开启路由监听，则优先从路由取当前标签的key
    if (this.router) {
      const tab = this.queryname;
      currentKey = this.$route.query[tab];
    }
    if (!currentKey) {
      const first = this.options[0];
      first && (currentKey = first.key);
    }
    this.setCurrentKey(currentKey);
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
        const { wrapper, content } = this.$refs;
        if (!wrapper || !content) return;
        this.wrapperWidth = wrapper.clientWidth;
        this.contentWidth = content.clientWidth;
        if (this.contentWidth > this.wrapperWidth) {
          if (!this.showPaginationBtn) {
            this.showPaginationBtn = true;
            // 减去两边按钮的宽度
            this.wrapperWidth -= 21 * 2;
          }
          this.scrollIntoView();
        } else {
          this.showPaginationBtn = false;
          this.translateX = 0;
        }
      })
    },
    setCurrentKey (key) {
      this.currentKey = key;
      this.$emit('input', key);
    },
    handleTabClick (tab, key, event) {
      if (key === this.currentKey) return;
      if (this.router) {
        const query = this.$route.query;
        this.$router.replace({
          query: {
            ...query,
            [this.queryname]: key
          }
        });
      }
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
        const move = (currentItem.offsetLeft - this.wrapperWidth / 2 + currentItem.offsetWidth / 2);
        this.translateX = move < 0 ? 0 : move > (this.contentWidth - this.wrapperWidth) ? (-this.contentWidth + this.wrapperWidth) : -move;
      })
    },
    handlePrev () {
      if (this.isPrevDisabled) return;
      let move = this.translateX + this.wrapperWidth;
      if (move > 0) {
        move = 0;
      }
      this.translateX = move;
    },
    handleNext () {
      if (this.isNextDisabled) return;
      let move = this.translateX - this.wrapperWidth;
      const max = this.contentWidth - this.wrapperWidth;
      if (move < -max) {
        move = -max;
      }
      this.translateX = move;
    }
  }
}
</script>
