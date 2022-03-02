<template>
  <div class="tm-file-icon">
    <svg-icon icon-class="png"></svg-icon>
    <!-- <svg-icon :icon-class="fileType"></svg-icon> -->
    <!-- <svg-icon
      v-if="'pngPNG'.includes(fileType)"
      icon-class="png"
    >
    </svg-icon>
    <svg-icon
      v-else-if="'jpgJPG'.includes(fileType)"
      icon-class="jpg"
    >
    </svg-icon>
    <svg-icon
      v-else-if="'gifGIF'.includes(fileType)"
      icon-class="gif"
    >
    </svg-icon>
    <svg-icon
      v-else-if="'mp43gpavimkvwmvmpgvobflvswfmovMP43GPAVIMKVWMVMPGVOBFLVSWFMOV'.includes(fileType)"
      icon-class="mp4"
    >
    </svg-icon>
    <svg-icon
      v-else-if="'mp3waveaiffmpeg-4midiwmaamrapeflacaacMP3WAVEAIFFMPEG-4MIDIWMAAMRAPEFLACAAC'.includes(fileType)"
      icon-class="mp3"
    >
    </svg-icon>
    <svg-icon
      v-else-if="'gziprar7ztarcabuuejarbz2GZIPRAR7ZTARCABUUEJARBZ2'.includes(fileType)"
      icon-class="zip"
    >
    </svg-icon>
    <svg-icon
      v-else-if="'rarRAR'.includes(fileType)"
      icon-class="rar"
    >
    </svg-icon>
    <svg-icon
      v-else-if="'pdfPDF'.includes(fileType)"
      icon-class="pdf"
    >
    </svg-icon>
    <svg-icon
      v-else-if="'pptxPPTX'.includes(fileType)"
      icon-class="ppt"
    >
    </svg-icon>
    <svg-icon
      v-else-if="'xlsxcsvCSVXLSX'.includes(fileType)"
      icon-class="xsl"
    >
    </svg-icon>
    <svg-icon
      v-else-if="'docxDOCX'.includes(fileType)"
      icon-class="doc"
    >
    </svg-icon>
    <svg-icon
      v-else-if="'htmlcssjsoncmdxmlHTMLCSSJSONCMDXML'.includes(fileType)"
      icon-class="html"
    >
    </svg-icon>
    <svg-icon
      v-else-if="'txtTXT'.includes(fileType)"
      icon-class="txt"
    >
    </svg-icon>
    <svg-icon
      v-else
      icon-class="nonetype"
    >
    </svg-icon> -->
  </div>
</template>

<script>
const FileTypeEnum = {
  png: 'png',
  jpg: 'jpgjpeg',
  gif: 'gif',
  mp4: 'mp43gpavimkvwmvmpgvobflvswfmov',
  mp3: 'mp3waveaiffmpeg-4midiwmaamrapeflacaac',
  zip: 'gziprar7ztarcabuuejarbz2',
  rar: 'rar',
  pdf: 'pdf',
  ppt: 'pptx',
  xsl: 'xlsxcsv',
  doc: 'docx',
  html: 'htmlcssjsoncmdxml',
  txt: 'txt'
}

export default {
  name: "tmFileIcon",
  props: {
    // 传入确定的type
    type: {
      type: String,
      default: ""
    },
    // 文件的地址，如果没有后缀就不会识别类型
    url: {
      type: String,
      default: ""
    }
  },
  computed: {
    fileType() {
      // 传type，以type为主
      // 未传type，以url为主
      let type = this.type ? this.type :
                 this.url ? this.url.split(".").pop() : '';

      for(let key in FileTypeEnum){
        if(FileTypeEnum[key].includes(type.toLowerCase())){
          type = key
          break;
        };
      }
      return type ? type: 'nonetype'
    }
  }
}
</script>