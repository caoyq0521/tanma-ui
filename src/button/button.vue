<template>
  <div class="tm-button" :class="className">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tmButton",
    props:{
      //是否禁用
      disabled: {
        type: Boolean,
        default: false
      },
      //按钮类型
      type: {
        type: String,
        default: 'default'
      }
    },
    computed:{
      className(){
        const { type, disabled } = this
        return{
          [`tm-button--${type}`]: true,
          'tm-button--disabled': disabled
        }
      }
    }
  }
</script>

