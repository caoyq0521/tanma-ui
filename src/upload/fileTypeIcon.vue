<template>
  <!-- <img :src="iconUrl" alt=""> -->
  <div>
    <img :src="require(./img/jpg.png)" alt="">
  </div>
</template>

<script>
  export default {
    name: "fileTypeIcon",
    props: ['type'],
    // watch: {
    //   type: {
    //     handler (type) {
    //       // console.log('type', type)
    //       // // this.iconUrl = require('./img/jpg.png')
    //       this.iconUrl = require('./img/jpg.png')
    //     },
    //     immediate: true
    //   }
    // },
    // data () {
    //   return {
    //     iconUrl: '',
    //     typeMap: {
    //       'image/jpeg': require('./img/jpg.png')
    //     }
    //   }
    // }
  }
</script>