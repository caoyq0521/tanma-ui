<template>
  <div class="tm-tip">
    <el-tooltip
      effect="dark"
    >
      <div slot="content">
        <slot>
          <div
            class="global-tips"
            v-html="121"
          ></div>
        </slot>
      </div>
      <i :class="['icon-tips iconfont', iconName, isWhite?'icon-tips-white':'']" :style="{color:iconColor,fontSize:iconSize}"></i>
    </el-tooltip>
  </div>
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
      width: {
        type: String,
        default: "500px"
      },
      isWhite: {
        type: Boolean,
        default: false
      },
      iconColor: {
        type: String,
        default: 'rgba(193, 193, 202, .5)'
      },
      iconName: {
        type: String,
        default: 'iconwenhao11'
      },
      iconSize: {
        type: String,
        default: '16px'
      }
    }
  }
</script>