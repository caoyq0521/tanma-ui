<template>
  <el-dialog
    :visible.sync="visible"
    :title="title"
    :width="width"
    :custom-class="setCustomClass"
    :fullscreen="fullscreen"
    :top="top"
    :modal="modal"
    :modal-append-to-body="modalAppendToBody"
    :append-to-body="appendToBody"
    :lock-scroll="lockScroll"
    :close-on-click-modal="closeOnClickModal"
    :close-on-press-escape="closeOnPressEscape"
    :show-close="showClose"
    :destroy-on-close="destroyOnClose"
    :before-close="beforeClose"
    @open="handleDialogOpen"
    @opened="handleDialogOpened"
    @close="handleDialogClose"
    @closed="handleDialogClosed"
  >
    <slot></slot>
    <div
      v-if="!footerHide"
      class="tm-dialog__footer"
    >
      <slot name="footer">
        <tm-button
          class="cancel-button"
          @click="handleDialogCancel"
        >
          {{ cancelText }}
        </tm-button>
        <tm-button
          :type="okType"
          class="ok-button"
          :loading="buttonLoading"
          @click="handleDialogOk"
        >
          {{ okText }}
        </tm-button>
      </slot>
    </div>
  </el-dialog>
</template>

<script>
  import Vue from 'vue';
  import { Dialog, Button } from 'element-ui';

  Vue.use(Dialog);
  Vue.use(Button);

  const TYPES = ["primary", "danger"];

  export default {
    name: "tm-dialog",
    props: {
      // 对话框是否显示，可使用 v-model 双向绑定数据。
      value: {
        type: Boolean,
        default: false
      },
      // Dialog 的标题
      title: {
        type: String,
        default: ''
      },
      // Dialog 的宽度
      width: {
        type: String,
        default: '50%'
      },
      // 是否为全屏 Dialog
      fullscreen: {
        type: Boolean,
        default: false
      },
      // Dialog CSS 中的 margin-top 值
      top: {
        type: String,
        default: '15vh'
      },
      // 是否需要遮罩层
      modal: {
        type: Boolean,
        default: true
      },
      // 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上
      modalAppendToBody: {
        type: Boolean,
        default: true
      },
      // Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true
      appendToBody: {
        type: Boolean,
        default: false
      },
      // 是否在 Dialog 出现时将 body 滚动锁定
      lockScroll: {
        type: Boolean,
        default: true
      },
      // Dialog 的自定义类名
      customClass: {
        type: String,
        default: ''
      },
      // 是否可以通过点击 modal 关闭 Dialog
      closeOnClickModal: {
        type: Boolean,
        default: true
      },
      // 是否可以通过按下 ESC 关闭 Dialog
      closeOnPressEscape: {
        type: Boolean,
        default: true
      },
      // 是否显示关闭按钮
      showClose: {
        type: Boolean,
        default: true
      },
      // 关闭前的回调，会暂停 Dialog 的关闭
      beforeClose: {
        type: Function,
        default: null
      },
      //  确定前的回调，会暂停 Dialog 的关闭
      beforeOk: {
        type: Function,
        default: () => {
          return true;
        }
      },
      // 关闭时销毁 Dialog 中的元素
      destroyOnClose: {
        type: Boolean,
        default: false
      },
      // 点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置value来关闭对话框
      loading: {
        type: Boolean,
        default: false
      },
      // 是否显示底部按钮
      footerHide: {
        type: Boolean,
        default: false
      },
      // 取消按钮文字
      cancelText: {
        type: String,
        default: '取消'
      },
      // 确定按钮文字
      okText: {
        type: String,
        default: '确定'
      },
      // 确定按钮类型
      // `primary` `danger`
      okType: {
        type: String,
        default: "primary",
        validator (value) {
          return TYPES.includes(value);
        }
      }
    },
    data() {
      return {
        buttonLoading: false
      }
    },
    computed: {
      visible: {
        get () {
          return this.value;
        },
        set (val) {
          this.$emit('input', val);
        }
      },
      setCustomClass() {
        const { customClass } = this;
        return customClass ? `tm-dialog ${customClass}` : 'tm-dialog';
      }
    },
    methods: {
      handleDialogCancel () {
        if (typeof this.beforeClose === 'function') {
          this.beforeClose(this.hide);
        } else {
          this.hide();
        }
      },
      hide () {
        if (this.cancel !== false) {
          this.visible = false;
          this.buttonLoading = false;
          this.handleDialogClose();
        }
      },
      handleDialogOk () {
        if(this.loading) {
          this.buttonLoading = true;
          this.$emit("ok");
          return;
        }
        const beforeOk = this.beforeOk();
        if (beforeOk && beforeOk.then) {
          this.buttonLoading = true;
          beforeOk.then(res => {
            if (res) {
              this.visible = false;
              this.buttonLoading = false;
              this.$emit("ok");
            }
          });
        } else if (beforeOk) {
            this.visible = false;
            this.$emit("ok");
          }
        
      },
      handleDialogOpen () {
        this.buttonLoading = false;
        this.$emit('open');
      },
      handleDialogOpened () {
        this.$emit('opened');
      },
      handleDialogClose () {
        this.$emit('close');
      },
      handleDialogClosed () {
        this.$emit('closed');
      }
    }
  }
</script>