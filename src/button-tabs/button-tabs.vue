<template>
  <div class="tm-button-tabs">
    <div :class="[buttonTabsClass.className]">
      <tm-button :class="[buttonTabsClass.left.children]"  @click="handleLeft" v-show="isLeftButtonShow">{{buttonTabsClass.left.content}}</tm-button>
      <tm-button :type="buttonType" :class="[buttonTabsClass.right.children]" v-show="isRightButtonShow" @click="handleRight">{{buttonTabsClass.right.content}}</tm-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TmButtonTabs",
    props:{
      //类型
      type:{
        type: String,
        default: 'step'
      },
      //自定义按钮内容
      leftContent:{
        type: String,
        default:''
      },
      //自定义按钮内容
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
      }
    },
    computed:{
      buttonTabsClass(){
        const { type, leftContent, rightContent } = this
        const prefix = 'tm-button-tabs'
        const form = type === 'step' ? ['prve','next'] : ['cancel','confirm']
        const className = type === 'step' ? `${prefix}__step` : `${prefix}__certainty`
        const leftLabel = leftContent ||  type === 'step' ? '上一步' : '取消'
        const rightLabel = rightContent ||  type === 'step' ? '下一步' : '确定'
        return{
          className,
          left:{
            content: leftLabel,
            children: `${className}-${form[0]}`
          },
          right:{
            content: rightLabel,
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
      }
    },
    methods: {
      handleLeft(){
        const { buttonTabsClass } = this
        this.$emit('click',buttonTabsClass.form[0] )
      },
      handleRight(){
        const { buttonTabsClass } = this
        this.$emit('click', buttonTabsClass.form[1])
      }
    }
  }
</script>