<template>
  <div class="tm-icon__list">
    <div v-for="item in glyphs" class="tm-icon__item" @click.prevent="handleClick($event, item)">
      <i :class="`${cssPrefix}${item.font_class}`"></i>
      <span class="name">{{ item.name }}</span>
      <span class="class-name">{{ cssPrefix }}{{ item.font_class }}</span>
      <div class="copy">复制成功</div>
    </div>
  </div>
</template>
<script>
import { css_prefix_text, glyphs } from '../../style/fonts/iconfont.json';
export default {
  data() {
    return {
      cssPrefix: css_prefix_text,
      glyphs
    }
  },
  methods: {
    handleClick(e, info) {
      const { cssPrefix } = this;
      const { font_class } = info;
      this.copyToClipboard(`<i class="${cssPrefix}${font_class}"></i>`);

      e.target.children[3].classList.add('copy--success');
      const timer = setTimeout(() => {
        e.target.children[3].classList.remove('copy--success');
        clearTimeout(timer);
      }, 1000);
    },
    copyToClipboard(str) {
      const el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);

      const selection = document.getSelection();

      if (!selection) {
        return;
      }

      const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;

      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);

      if (selected) {
        selection.removeAllRanges();
        selection.addRange(selected);
      }
    }
  },
}
</script>
<style lang="less" scoped>
.tm-icon {
  &__list {
    display: flex;
    flex-wrap: wrap;
    border-left: 1px solid #eaeefb;
    border-top: 1px solid #eaeefb;
  }

  &__item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 137px;
    font-size: 20px!important;
    cursor: pointer;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
    overflow: hidden;

    & > i, & > span {
      pointer-events: none;
    }

    &:hover {
      color: #3470ff;
    }

    .name {
      margin: 16px 0 0px;
    }

    .name, .class-name {
      font-size: 13px;
    }

    .copy {
      position: absolute;
      left: 0;
      bottom: -28px;
      display: none;
      width: 100%;
      height: 28px;
      line-height: 26px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      cursor: pointer;
      background-color: #3daf30;
    }
    .copy--success {
      display: block;
      animation: move 1s 1;
    }

    @keyframes move
    {
      0% {bottom:-28px}
      50% {bottom: 0}
      100% {bottom:-28px;}
    }
  }
}
</style>