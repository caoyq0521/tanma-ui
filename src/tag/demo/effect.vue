<template>
  <div>
    <div class="tag-group">
      <span class="tag-group__title">light</span>
      <tm-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="light"
      >
        {{ item.label }}
      </tm-tag>
    </div>
    <div class="tag-group">
      <span class="tag-group__title">dot</span>
      <tm-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="dot"
      >
        {{ item.label }}
      </tm-tag>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { type: '', label: '标签一' },
          { type: 'success', label: '标签二' },
          { type: 'info', label: '标签三' },
          { type: 'danger', label: '标签四' },
          { type: 'warning', label: '标签五' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.tag-group {
  margin-bottom: 10px;

  &__title {
    display: inline-block;
    margin-right: 6px;
  }
}
</style>