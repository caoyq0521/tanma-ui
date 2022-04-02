<template>
  <tm-timeline>
    <tm-timeline-item
      v-for="(item, index) in activities" 
      :timestamp="item.timestamp"
      :key="index"
    >
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
          timestamp: '2018-04-15'
        }, 
        {
          content: '通过审核',
          timestamp: '2018-04-13'
        }, 
        {
          content: '创建成功',
          timestamp: '2018-04-11'
        }
      ]
    }
  },
}
</script>