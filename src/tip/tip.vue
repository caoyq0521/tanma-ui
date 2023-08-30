<template>
  <el-tooltip
    v-if="content"
    effect="dark"
    :style="styleCls"
    class="tm-tooltip"
    :placement="placement"
    :popper-class="popperClass"
  >
    <div slot="content">
      <slot>
        <div
          class="tm-tooltip__content"
          :style="{ width: width }"
          v-html="content"
        ></div>
      </slot>
    </div>
    <i
      :class="['tm-tooltip__icon', classPrefix, iconName]"
      :style="{ color:iconColor, fontSize:iconSize }"
    >
    </i>
  </el-tooltip>
</template>

<script>
  import Vue from 'vue';
  import { Tooltip } from 'element-ui';

  Vue.use(Tooltip);

  export default {
    name: "tmTip",
    props: {
      placement: {
        type: String,
        default: "left-start"
      },
      content: {
        type: String,
        default: ""
      },
      // 提示框宽度
      width: {
        type: String,
        default: "auto"
      },
      // icon颜色
      iconColor: {
        type: String,
        default: 'rgba(193, 193, 202, .5)'
      },
      // icon名字
      iconName: {
        type: String,
        default: 'tm-icon-wenhao11'
      },
      // size大小
      iconSize: {
        type: String,
        default: '16px'
      },
      // 定制样式：如margin
      styleCls: {
        type: String,
        default: ''
      },
      // 类名前缀
      classPrefix: {
        type: String,
        default: ''
      },
      // 为 Tooltip 的 popper 添加类名
      popperClass: {
        type: String,
        default: ''
      }
    }
  }
</script>