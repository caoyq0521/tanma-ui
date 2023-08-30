<template>  
  <div>
    <tm-button @click="onOpen" type="primary">
      获取ref
    </tm-button>
    <tm-deptTree ref="tree" :data="data" :modal="modal" class="tree-box" />
  </div>
</template>
<script>

function uuid() {
  var temp_url = URL.createObjectURL(new Blob());
  var uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  return uuid.substr(uuid.lastIndexOf("/") + 1);
}

 export default {
   name: 'demo',
   data(){
     return {
       data: new Array(100).fill(0).map((i, m) => ({ id: uuid(), name: `uuid-${m}`.repeat(10)})),
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