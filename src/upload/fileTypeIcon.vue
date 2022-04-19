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
import xslx from './img/xlsx.png'
  export default {
    name: "fileTypeIcon",
    props: ['type'],
    watch: {
      type: {
        handler (type) {
          const fileTypeList = type.split('.')
          const fileType = fileTypeList[fileTypeList.length - 1]
          if (this.typeMap[fileType]) {
            this.url = this.typeMap[fileType]
          } else {
            this.url = text
          }
        },
        immediate: true
      }
    },
    data () {
      return {
        url: '',
        typeMap: {
          'jpg': jpg,
          'png': png,
          'text': text,
          'gif': gif,
          'html': html,
          'pdf': pdf,
          'doc': word,
          'docx': word,
          'xlsx': xslx,
          'xls': xslx,
          'csv': xslx,
          'mp3': mp3,
          'wav': mp3,
          'ogg': mp3,
          'mp4': mp4,
          'avi': mp4,
          'mkv': mp4,
          'webm': mp4,
          '3gp': mp4,
          'wmv': mp4,
          'mov': mp4,
          'swf': mp4,
          'mpg': mp4,
          'vob': mp4,
          'ppt': ppt,
          'pptx': ppt,
          'zip': zip
        }
      }
    },
  }
</script>

<style scoped>
  .file-type {
    width: 40px;
    height: 40px;
  }
</style>