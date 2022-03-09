<template>
  <div>
    <el-button @click="handleNormal">标准</el-button>
    <el-button @click="handleCustom">自定义按钮内容</el-button>
    <el-button @click="handleAsync">异步关闭</el-button>
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
          // this.$message('删除成功');
        },
        onCancel: () => {
          // this.$message('取消删除');
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
          // this.$message('删除成功');
        },
        onCancel: () => {
          // this.$message('取消删除');
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
            // this.$message('删除成功');
          }, 2000);
        },
        onCancel: () => {
          // this.$message('取消删除');
        }
      });
    }
  },
}
</script>