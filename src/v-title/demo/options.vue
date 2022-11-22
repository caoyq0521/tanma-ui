<template>
  <tm-button v-title.right="options">
    指令使用-绑定一个对象
  </tm-button>
</template>

<script>
  import Vue from 'vue';

  export default {
    data() {
      return {
        options: {
          title: '这里是标题',
          content: '显示内容',
          //  tip 的容器，在不设置的情况下，tip 会自动绑定在document.body下，但推荐手动设置一个 tip 对象容器
          container: document.body,
          customProps: { msg: '自定义渲染' },
          // 这里通过 customComponent 定义了一个自定义组件
          customComponent: Vue.extend({
            props: ['msg'],
            render (h) {
              return h('span', this.msg)
            }
          }),
          placements: ['top', 'buttom'],
          duration: 400,
          transition: true
        }
      }
    },
  }
</script>