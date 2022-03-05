<template>
  <div>
    <tm-tag
      v-for="tag in tags"
      :key="tag.name"
      closable
      :type="tag.type">
      {{ tag.name }}
    </tm-tag>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ]
      };
    }
  }
</script>