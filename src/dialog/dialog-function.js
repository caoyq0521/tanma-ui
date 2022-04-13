import Vue from 'vue';
import tmDialogComponents from './dialog.vue';

const BaseProps = {
  visible: false,
  title: '提示',
  content: '',
  width: '50%',
  top: '15vh',
  lockScroll: true,
  showClose: true,
  closeOnClickModal: true,
  footerHide: false,
  cancelHide: false,
  modal: true,
  cancelText: '取消',
  okText: '确定',
  okType: 'primary',
  render: undefined,
  loading: false,
  closing: false,
  buttonLoading: false
};
tmDialogComponents.newInstance = (properties = {}) => {
  const _props = properties;

  const Instance = new Vue({
    data: Object.assign({}, _props, BaseProps),
    methods: {
      cancelDialog () {
        if (this.closing) return;
        this.$children[0].visible = false;
        this.buttonLoading = false;
        this.onCancel();
        this.remove();
      },
      okDialog () {
        if (this.closing) return;
        if(this.loading) {
          this.buttonLoading = true;
        }else {
          this.$children[0].visible = false;
          this.remove();
        }
        this.onOk();
      },
      remove () {
        this.closing = true;
        setTimeout(() => {
          this.closing = false;
          this.destroy();
        }, 500);
      },
      destroy () {
        this.$destroy();
        if (this.$el) document.body.removeChild(this.$el);
        this.onRemove();
      },
      onOk () {},
      onCancel () {},
      onRemove() {},
      getBodyVNodes () {
        let bodyContent = '';
        if (this.render) {
          bodyContent = this.render();
        } else {
          bodyContent = (<div class='tm-dialog__body'>{ this.content }</div>)
        }
        return bodyContent;
      },
      getFooterVNodes () {
        if (!this.footerHide) {
          return (
            <div>
              {!this.cancelHide
                ? (<tm-button
                  onClick={() => this.cancelDialog()}
                  class='cancel-button'
                >
                  { this.cancelText }
                </tm-button>)
                : ''
              }
              <tm-button type={this.okType} loading={this.buttonLoading} onClick={() => this.okDialog()}>
                { this.okText }
              </tm-button>
            </div>
          );
        }
      }
    },
    render () {
      return (
        <tm-dialog
          title={this.title}
          vModel={this.visible}
          width={this.width}
          top={this.top}
          showClose={this.showClose}
          lockScroll={this.lockScroll}
          closeOnClickModal={this.closeOnClickModal}
          footerHide={this.footerHide}
          fullscreen={this.fullscreen}
          onClose={() => this.cancelDialog()}
        >
          <template slot='default'>
            {this.getBodyVNodes()}
          </template>
          <template slot='footer'>{this.getFooterVNodes()}</template>
        </tm-dialog>
      )
    }
  });
  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const dialog = Instance.$children[0];
  return {
    show (props) {
      Object.keys(BaseProps).forEach(key => {
        if (key in props) dialog.$parent[key] = props[key];
      })
      if ('onCancel' in props) {
        dialog.$parent.onCancel = props.onCancel;
      }
      if ('onOk' in props) {
        dialog.$parent.onOk = props.onOk;
      }

      dialog.$parent.onRemove = props.onRemove;
      dialog.visible = true;
    },
    remove () {
      dialog.visible = false;
      dialog.$parent.buttonLoading = false;
      dialog.$parent.remove();
    },
    component: dialog
  }
}

let dialogInstance;

function getDialogInstance () {
  dialogInstance = dialogInstance || tmDialogComponents.newInstance({});

  return dialogInstance;
}

function TmDialog (options) {
  const instance = getDialogInstance();

  options.onRemove = function () {
    dialogInstance = null;
  };

  instance.show(options);
}

TmDialog.remove = function () {
  if (!dialogInstance) {
    return false;
  }

  const instance = getDialogInstance();
  instance.remove();
};

export default TmDialog;
