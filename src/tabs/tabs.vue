<template>
  <div
    class="tm-flex__center--col tm-tabs"
    :class="{
      'tm-tabs--underline': type === 'underline',
      'tm-tabs--button': type === 'button',
      'tm-tabs--small': size === 'small',
    }"
  >
    <slot name="left"></slot>
    <div
      class="tm-tabs-group"
      :class="{
        'is-left': placement === 'left',
        'is-center': placement === 'center',
        'is-right': placement === 'right'
      }"
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
        <span>{{ item.title }}</span>
      </div>
    </div>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "tmTabs",
  props: {
    value: {
      type: [String],
      default: ''
    },
    type: {
      type: String,
      default: 'underline',
      validator (value) {
        return ['underline', 'button'].includes(value);
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator (value) {
        return ['medium', 'small'].includes(value);
      }
    },
    round: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => ([])
    },
    placement: {
      type: String,
      default: 'left',
      validator () {
        return ['left', 'center', 'right']
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
