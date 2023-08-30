<template>
  <div :class="['tm-empty', 'tm-empty--'+type]">
    <div 
      class="tm-empty__image"
      :style="setImageStyle"
    >
      <slot name="image">
        <img :src="imageSrc" alt="">
      </slot>
    </div>
    <div class="tm-empty__description">
      <slot name="description">
        {{ internalDesc }}
      </slot>
    </div>
  </div>
</template>

<script>
  import Empty from './images/empty.png';
  import Error from './images/error.png';
  import Build from './images/build.png';

  const TYPE_INFO = {
    empty: {
      image: Empty,
      description: '暂无数据~'
    },
    error: {
      image: Error,
      description: '数据异常~'
    },
    build: {
      image: Build,
      description: '正在开发中，敬请期待~'
    }
  }

  export default {
    name: "tmEmpty",
    props: {
      // 类型
      // `empty` `error` `build`
      type: {
        type: String,
        default: 'empty',
        validator(value) {
          return ['empty', 'error', 'build'].includes(value);
        }
      },
      // 图片地址
      image: {
        type: String,
        default: ''
      },
      // 图片大小（宽度）
      imageSize: {
        type: [Number,String],
        default: 260
      },
      // 文本描述
      description: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        Empty
      }
    },
    computed: {
      currentType() {
        return TYPE_INFO[this.type];
      },
      imageSrc() {
        const { image, currentType } = this;
        return image || currentType.image;
      },
      setImageStyle() {
        const width = parseInt(this.imageSize);
        return {
          width: `${width}px`
        }
      },
      internalDesc() {
        const { description, currentType } = this;
        return description || currentType.description;
      }

    },  
  }
</script>