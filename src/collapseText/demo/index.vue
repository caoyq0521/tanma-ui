<template>
  <div>
    <tm-collapse-text :text="text" :lines="1"/>
    <drawer
    :visible.sync="visible"
    >
      <tm-collapse-text :text="text" :lines="1"/>
    </drawer>
    <button @click="open">打开</button>
  </div>
</template>

<script>
import {Drawer} from 'element-ui'

export default {
  components: { Drawer },
  data(){
    return {
      visible:false,
      text: '这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容'
    }
  },
  methods:{
    open(){
      this.visible = true
      this.text = '1' + this.text
    }
  }
}
</script>