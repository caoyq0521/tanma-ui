<template>
  <span
    class="tm-tag"
    :class="setClass"
    :style="{'background-color': color}"
    @click="handleTagClick"
  >
    <span
      v-if="isDotEffect"
      class="dot" 
      :style="{'background-color': color}"
    ></span>
    <slot></slot>
    <!-- dot主题下不显示删除 -->
    <span
      v-if="!isDotEffect && closable"
      class="tm-tag__closable"
    >
      <i class="tm-icon-guanbi tm-tag__closable-icon"></i>
      <i
        class="tm-icon-qingchu tm-tag__closable-icon"
        @click.stop="handleClose"
      ></i>
    </span>
  </span>
</template>

<script>
  const TYPES = ['success', 'info', 'warning', 'danger'];
  const PREFIX = 'tm-tag--';

  const EFFECTS_DOT = 'dot';
  const EFFECTS_LIGHT= 'light';
  const EFFECTS = [EFFECTS_LIGHT, EFFECTS_DOT];

  export default {
    name: "tmTag",
    props: {
      // 类型
      // `success` `info` `warning` `danger`
      type: {
        type: String,
        default: '',
        validator(value) {
          return !value || TYPES.includes(value);
        }
      },
      // 背景色
      color: {
        type: String,
        default: ''
      },
      // 是否可关闭
      closable: {
        type: Boolean,
        default: false
      },
      // 主题
      // `dot` `light`
      effect: {
        type: String,
        default: EFFECTS_LIGHT,
        validator(value) {
          return EFFECTS.includes(value);
        }
      }
    },
    computed: {
      isDotEffect() {
        return this.effect === EFFECTS_DOT;
      },
      setClass() {
        const { type = '', isDotEffect } = this;
        return {
          [`${PREFIX}dot`]: isDotEffect,
          [`${PREFIX}${type}`]: !!type
        }
      }
    },
    methods: {
      handleTagClick() {
        this.$emit('click');
      },
      handleClose() {
        this.$emit('close');
      }
    },
  }
</script>