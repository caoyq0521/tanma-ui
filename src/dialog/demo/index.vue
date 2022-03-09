<template>
  <div>
    <tm-button @click="handleNormal">标准</tm-button>
    <tm-button @click="handleCustom">自定义按钮内容</tm-button>
    <tm-button @click="handleAsync">异步关闭</tm-button>
  </div>
</template>
<script>
export default {
  methods: {
    handleNormal() {
      this.$tmDialog({
        title: '提示信息',
        content: '确定要删除该内容？',
        okType: 'danger',
        onOk: () => {
          console.log('ok');
        },
        onCancel: () => {
          console.log('cancel');
        }
      });
    },
    handleCustom() {
      this.$tmDialog({
        title: '提示信息',
        content: '确定要删除该内容？',
        okType: 'danger',
        okText: '删除',
        cancelText: '不删',
        onOk: () => {
          console.log('ok');
        },
        onCancel: () => {
          console.log('cancel');
        }
      });
    },
    handleAsync() {
      this.$tmDialog({
        title: '提示信息',
        content: '确定要删除该内容？',
        okType: 'danger',
        loading: true,
        onOk: () => {
          setTimeout(() => {
            this.$tmDialog.remove();
            console.log('ok');
          }, 2000);
        },
        onCancel: () => {
          console.log('cancel');
        }
      });
    }
  },
}
</script>