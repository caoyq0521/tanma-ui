<template>
  <div>
    <tm-button @click="open2">成功</tm-button>
    <tm-button @click="open3">警告</tm-button>
    <tm-button @click="open1">消息</tm-button>
    <tm-button @click="open4">错误</tm-button>
  </div>
</template>
<script>
export default {
  methods: {
     open1() {
        this.$tmMessage('这是一条消息提示');
      },
      open2() {
        this.$tmMessage({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$tmMessage({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$tmMessage.error('错了哦，这是一条错误消息');
      }
  },
}
</script>