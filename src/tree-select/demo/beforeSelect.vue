<template>
  <tm-tree-select :beforeSelect="beforeSelect" :data="data"  />
</template>
<script>
import { Message } from 'element-ui'
import { treeData } from '../mock';
export default {
  name: 'before-select',
  data() {
    return {
      data: treeData
    }
  },
  methods: {
    beforeSelect(data) {
      return new Promise((resolve, reject) => {
        if (data.id === 2) {
          Message.error(`${data.label}没有权限`);
          reject()
        } else {
          resolve()
        }
      })
    }
  }
}
</script>