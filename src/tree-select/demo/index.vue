<template>
  <tm-tree-select :data="data"  />
</template>
<script>
import { treeData } from '../mock'
export default {
  name: 'index-demo',
  data() {
    return {
      data: treeData
    }
  }
}
</script>