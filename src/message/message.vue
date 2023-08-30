<template>
  <transition
    name="tm-message-fade"
    @after-leave="handleAfterLeave"
  >
    <div
      v-show="visible"
      :class="setMessageClass"
      :style="setMessageStyle"
    >
      <i :class="setMessageIconClass"></i>
      <p v-if="!dangerouslyUseHTMLString" class="tm-message__content">{{ message }}</p>
      <p v-else v-html="message" class="tm-message__content"></p>
    </div>
  </transition>
</template>

<script>
  const TYPE_ICON = {
    success: 'tm-icon-duihao',
    warning: 'tm-icon-jingshi',
    error: 'tm-icon-qingchu',
    info: 'tm-icon-jingshi'
  }
  export default {
    name: "tmMessage",
    data() {
      return {
        visible: false,
        closed: false,
        type: 'info', // 主题 `success` `warning` `error` `info`
        message: '', // 消息文字
        classPrefix: '', // 类名前缀
        iconClass: '', // 自定义图标的类名，会覆盖`type`
        customClass: '', // 自定义类名
        duration: 3000, // 显示时间, 毫秒。设为 0 则不会自动关闭 
        offset: 20, // Message 距离窗口顶部的偏移量
        onClose: null, // 关闭时的回调函数, 参数为被关闭的 message 实例
        dangerouslyUseHTMLString: false // 是否将 message 属性作为 HTML 片段处理
      }
    },
    computed: {
      setMessageClass() {
        const { type, customClass } = this;
        return {
          'tm-message': true,
          [`tm-message--${type}`]: true,
          [customClass]: true
        }
      },
      setMessageStyle() {
        const { offset } = this;
        return {
          top: `${offset}px`
        }
      },
      setMessageIconClass() {
        const { type, iconClass, classPrefix } = this;
        const internalIconClass = TYPE_ICON[type];
        return {
          'tm-message__icon': true,
          [internalIconClass]: true,
          [classPrefix]: true,
          [iconClass]: true
        }
      }
    },
    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false;
        }
      }
    },
    mounted() {
      this.startTimer();
      document.addEventListener('keydown', this.keydown);
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.keydown);
    },
    methods: {
      handleAfterLeave() {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },
      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close();
            }
          }, this.duration);
        }
      },
      close() {
        this.closed = true;
        if (typeof this.onClose === 'function') {
          this.onClose(this);
        }
      },
      keydown(e) {
        // esc关闭消息
        if (e.keyCode === 27) {
          if (!this.closed) {
            this.close();
          }
        }
      }
    },
  }
</script>