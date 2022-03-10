<template>
  <div
    class="tm-flex__center--col tm-tabs"
    :class="[`tm-tabs--${type}`, `tm-tabs--${size}`]"
  >
    <slot name="left"></slot>
    <div
      class="tm-tabs-group"
      :class="[`is-${placement}`]"
    >
      <div
        v-for="(item, index) in options"
        :key="item.key || index"
        class="tm-tabs__pane"
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
      currentKey: this.value
    }
  },
  created () {
    if (!this.currentKey) {
      const first = this.options[0];
      first && this.setCurrentKey(first.key);
    }
  },
  methods: {
    setCurrentKey (key) {
      this.currentKey = key;
      this.$emit('input', key);
    },
    handleTabClick (tab, key, event) {
      this.setCurrentKey(key);
      this.$emit('tab-click', tab, event);
    }
  }
}
</script>
