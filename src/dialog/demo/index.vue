<template>
  <div>
    <button @click="visible = true">点击</button>
    <tm-dialog v-model="visible" title="提示信息">some info</tm-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  mounted () {
    console.log(this.$tmDialog({
      title:'测试',
      render: () => {
        return (
          <div class="render-main">
            <div>若删除后，有关此页面的编辑结果均会丢失。</div>
            <div>是否确认删除【1】页？</div>
          </div>
        );
      },
    }));
  },
}
</script>