<template>
  <tm-timeline>
    <tm-timeline-item
      v-for="(item, index) in activities" 
      :timestamp="item.timestamp"
      :key="index"
    >
    <template #header>
      {{ item.name }}
    </template>
    {{ item.content }}
    </tm-timeline-item>
  </tm-timeline>
</template>
<script>
export default {
  data() {
    return {
      activities: [
        {
          content: '活动按期开始',
          timestamp: '2018-04-15',
          name: '张三'
        }, 
        {
          content: '通过审核',
          timestamp: '2018-04-13',
          name: '李四'
        }, 
        {
          content: '创建成功',
          timestamp: '2018-04-11',
          name: '王五'
        }
      ]
    }
  },
}
</script>