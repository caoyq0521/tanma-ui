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
          this.$tmMessage.success('删除成功');
        },
        onCancel: () => {
          this.$tmMessage('取消删除');
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
          this.$tmMessage.success('删除成功');
        },
        onCancel: () => {
          this.$tmMessage('取消删除');
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
            this.$tmMessage.success('删除成功');
          }, 2000);
        },
        onCancel: () => {
          this.$tmMessage('取消删除');
        }
      });
    }
  },
}
</script>