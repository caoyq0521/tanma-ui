<template>
  <div class="tm-button-tabs" :class="[buttonTabsClass.className]">
      <tm-button :disabled='leftDisabled' :class="[buttonTabsClass.left.children]"  @click="handleLeft" v-if="isLeftButtonShow">{{buttonTabsClass.left.content}}</tm-button>
      <tm-button :disabled='rightDisabled' :loading="loading" :type="buttonTypeFilter" :class="[buttonTabsClass.right.children]" v-if="isRightButtonShow" @click="handleRight">{{buttonTabsClass.right.content}}</tm-button>
  </div>
</template>

<script>
const SHOW_BUTTON_TYPE = ['primary','danger']
  export default {
    name: "TmButtonTabs",
    props:{
      //类型
      type:{
        type: String,
        default: 'step'
      },
      //自定义左侧按钮内容
      leftContent:{
        type: String,
        default:''
      },
      //自定义右侧按钮内容
      rightContent:{
        type: String,
        default:''
      },
      //隐藏按钮 left/right
      hide:{
        type: String,
        default:''
      },
      //主要按钮类型 primary/danger
      buttonType:{
        type:String,
        default:'primary'
      },
      //是否禁用状态 left/right/all
      disabled: {
        type: String,
        default:''
      },
      //主要按钮是否显示loading
      loading:{
        type:Boolean,
        default:false
      }
    },
    computed:{
      buttonTabsClass(){
        const { type, leftContent, rightContent } = this
        const prefix = 'tm-button-tabs'
        const form = type === 'step' ? ['prve','next'] : ['cancel','confirm']
        const className = type === 'step' ? `${prefix}__step` : `${prefix}__certainty`
        const leftLabel = type === 'step' ? '上一步' : '取消'
        const rightLabel = type === 'step' ? '下一步' : '确定'

        return{
          className,
          left:{
            content: leftContent||leftLabel,
            children: `${className}-${form[0]}`
          },
          right:{
            content: rightContent||rightLabel,
            children: `${className}-${form[1]}`
          },
          form
        }
      },
      isLeftButtonShow(){
        return this.hide!=='left'
      },
      isRightButtonShow(){
        return this.hide!=='right'
      },
      buttonTypeFilter(){
        const { buttonType } = this
        return SHOW_BUTTON_TYPE.includes(buttonType) ? buttonType : 'primary'
      },
      leftDisabled(){
        return this.disabled==='left'||this.disabled==='all'
      },
      rightDisabled(){
        return this.disabled==='right'||this.disabled==='all'
      }
    },
    methods: {
      handleLeft(){
        this.$emit('click', 'cancel' )
      },
      handleRight(){
        this.$emit('click', 'confirm' )
      }
    }
  }
</script>