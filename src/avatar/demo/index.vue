<template>
  <tm-avatar
    :image-source="imageSource"
  />
</template>
<script>
export default {
  data () {
    return {
      imageSource: window.location.origin + '/logo.png'
    }
  }
}
</script>
