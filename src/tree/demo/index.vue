<template>  
  <div>
    <tm-tree 
      :height="390"
      :virtual-scroll="true" 
      show-checkbox 
      :data="data" 
      :props="{label: 'name', children: 'children'}" 
    />
  </div>
</template>
<script>
import Vue from 'vue'
import { Button } from 'element-ui'
import { deptList } from './data';
Vue.use(Button)
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
       data: [...deptList, ...new Array(10000).fill(0).map((i, m) => ({ id: uuid(), name: `uuid-${m}`}))]
     }
   }
 }
</script>