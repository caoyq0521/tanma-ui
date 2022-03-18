<template>
<div>
  <tm-tag
    v-for="item in showItems"
    :key="item.label"
    :type="item.type"
    effect="light"
  >
    {{ item.label }}
  </tm-tag>
  <tm-tag-group>
    <tm-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="light"
    >
      {{ item.label }}
    </tm-tag>
  </tm-tag-group>
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
  },
  computed: {
    showItems() {
      return this.items.slice(0, 3);
    }
  },
}
</script>