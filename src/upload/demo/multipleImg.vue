<template>
  <div class="upload-container">
    <tm-upload
      model="image"
      :limit="2"
      :upload-list="uploadList"
      @remove="remove"
      :data="{corpid: 'ww9c5530210a0d5116'}"
      action="https://dev.tanmarket.cn/resourceServer/file/uploadForClient"
    />
  </div>
</template>
<script>
export default {
  data () {
    return {
      uploadList: [
        {
          name: '12.jpg',
          type: 'image/jpg',
          url: 'https://dev.tanmarket.cn/fdfsServer/group1/M00/2B/7F/rBHDtmHuW4KAdK-FAAlCIhvI5Gc40.jpeg'
        }
      ]
    }
  },
  methods: {
    remove(file) {
      console.log(file)
    }
  }
}
</script>