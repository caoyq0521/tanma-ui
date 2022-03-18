<template>  
  <div>
    <el-button @click="onOpen" type="primary">
      获取ref
    </el-button>
    <tm-deptTree ref="tree" :data="data" :modal="modal" class="tree-box" />
  </div>
</template>
<script>
import Vue from 'vue'
import { Button } from 'element-ui'
import { deptList } from './data';
Vue.use(Button)
 export default {
   name: 'demo',
   data(){
     return {
       data: deptList,
       ref: null,
       modal: {
         visible: false,
         onOk: this.onOk,
       }
     }
   },
   methods: {
     onOpen() {
       this.modal.visible = true
       setTimeout(() => (console.log(this.$refs.tree.getTreeRef())))
     },
   }
 }
</script>