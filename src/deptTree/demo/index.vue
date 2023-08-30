<template>  
  <div>
    <tm-button @click="onOpen" type="primary">
      添加员工
    </tm-button>
    <tm-deptTree :data="data" :modal="this.modal" class="tree-box" />
    <div v-if="select.length">已选择：{{ select }}</div>
  </div>
</template>
<script>

function uuid() {
  var temp_url = URL.createObjectURL(new Blob());
  var uuid = temp_url.toString(); // blob:https://xxx.com/b250d159-e1b6-4a87-9002-885d90033be3
  URL.revokeObjectURL(temp_url);
  return uuid.substr(uuid.lastIndexOf("/") + 1);
}

 export default {
   name: 'demo',
   data(){
     return {
       modal: {
         visible: false,
         onOk: this.onOk
       },
       data: new Array(100).fill(0).map((i, m) => ({ id: uuid(), name: `uuid-${m}`.repeat(10)})),
       select: []
     }
   },
   methods: {
     onOk(sel) {
       this.select = sel
     },
     onOpen() {
       this.modal.visible = true
     },
   }
 }
</script>