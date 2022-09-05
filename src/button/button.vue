<template>
  <button 
    class="tm-button" 
    :class="className"
    :disabled="disabled || loading || DIS_BUTTON.includes(type)"
    :type="nativeType"
    @click="handleClick"
  >
    <i class="tm-icon-load" v-if="loading"></i>
    <slot></slot>
  </button>
</template>

<script>
const DIS_BUTTON = ['forbidden','wicked']
  export default {
    name: "tmButton",
    props:{
      //按钮类型
      type: {
        type: String,
        default: 'default'
      },
      //原生类型
      nativeType: {
        type: String,
        default: 'button'
      },
      //是否禁用状态
      disabled: {
        type: Boolean,
        default: false
      },
      //是否加载中状态
      loading: {
        type: Boolean,
        default: false
      },
      //按钮尺寸
      size:{
        type: String,
        default:'medium'
      },
      //圆角按钮
      round:{
        type: Boolean,
        default: false
      }
    },
    data(){
      return{
        DIS_BUTTON
      }
    },
    computed:{
      className(){
        const { type, disabled, size, round} = this
        return{
          [`tm-button--${size}`]: true,
          [`tm-button--${type}`]: true,
          'disabled': disabled || DIS_BUTTON.includes(type),
          'is-round': round
          
        }
      }
    },
    methods: {
      handleClick(evt){
        this.$emit('click', evt);
      }
    }
  }
</script>

