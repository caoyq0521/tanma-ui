<template>
  <div class="tm-empty__demo">
    <tm-tabs 
      v-model="currentType"
      :options="options" 
      type="button" 
    />
    <tm-empty :type="currentType" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentType: 'empty',
        options: [
          {
            key: 'empty',
            title: 'Empty'
          },
          {
            key: 'error',
            title: 'Error'
          },
          {
            key: 'build',
            title: 'Build'
          }
        ]
      }
    },
  }
</script>