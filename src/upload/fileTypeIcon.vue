<template>
    <img class="file-type" :src="url" alt="">
</template>

<script>
import jpg from './img/jpg.png'
import png from './img/png.png'
import text from './img/text.png'
import gif from './img/gif.png'
import html from './img/html.png'
import pdf from './img/pdf.png'
import word from './img/doc.png'
import mp3 from './img/mp3.png'
import mp4 from './img/mp4.png'
import ppt from './img/ppt.png'
import zip from './img/zip.png'
// import mp4 from './img/pmp4.png'
  export default {
    name: "fileTypeIcon",
    props: ['type'],
    watch: {
      type: {
        handler (type) {
          console.log(type)
          this.url = this.typeMap[type] || text
        },
        immediate: true
      }
    },
    data () {
      return {
        url: '',
        typeMap: {
          'image/jpeg': jpg,
          'image/png': png,
          'text/plain': text,
          'image/gif': gif,
          'text/html': html,
          'application/pdf': pdf,
          'application/msword': word,
          'audio/mp3': mp3,
          'audio/mp4': mp4,
          'application/x-ppt': ppt,
          'application/zip': zip
        }
      }
    }
  }
</script>

<style scoped>
  .file-type {
    width: 40px;
    height: 40px;
  }
</style>