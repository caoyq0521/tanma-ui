<template>
  <div>
    <el-button @click="handleCustom">自定义内容</el-button>
  </div>
</template>

<script>
  export default {
    methods: {
      handleCustom() {
        this.$tmDialog({
          title:'测试',
          okType: 'danger',
          render: () => {
            return (
              <div class="render-main">
                <div>若删除后，有关此页面的编辑结果均会丢失。</div>
                <div>是否确认删除【1】页？</div>
              </div>
            );
          },
          onOk: () => {
            console.log('oK');
          },
          onCancel: () => {
            console.log('cancel');
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.render-main {
  text-align: center;

  &>div:last-child {
    margin-top: 10px;
  }
}
</style>