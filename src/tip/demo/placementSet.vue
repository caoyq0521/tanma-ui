<template>
  <div>
    <ul>
      <li v-for="item in tips" :key="item.placement">
        <span>{{ item.content }}</span>
        <tm-tip :content="item.content" :isWhite="true" :placement="item.placement" styleCls="margin: 0 5px" />
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tips: [
          {
            content: '左边',
            placement: 'left'
          },
          {
            content: '右边',
            placement: 'right'
          },
          {
            content: '上边',
            placement: 'top'
          },
          {
            content: '下边',
            placement: 'bottom'
          }
        ]
      }
    }
  }
</script>