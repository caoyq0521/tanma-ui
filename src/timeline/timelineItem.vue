<template>
  <div class="tm-timeline-item">
    <div class="tm-timeline-item__header">
      <div
        class="tm-timeline-item__dot" 
        :style="{backgroundColor: color}"
      ></div>
      <div class="tm-timeline-item__header-wrapper">
        <div 
          v-if="!hideTimestamp" 
          class="tm-ellipsis tm-timeline-item__timestamp"
        >
          {{ timestamp }}
        </div>
        <slot name="header"></slot>
      </div>
    </div>
    <div class="tm-timeline-item__content">
      <div
        class="tm-timeline-item__tail" 
        :style="{'border-color': color}"
      ></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tmTimelineItem',
    props: {
      // 时间戳
      timestamp: {
        type: String,
        default: ''
      },
      // 是否隐藏时间戳
      hideTimestamp: {
        type: Boolean,
        default: false
      },
      // 节点颜色
      color: {
        type: String,
        default: 'var(--main-color)'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>