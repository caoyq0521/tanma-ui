<template>
  <div class="tm-avatar-card">
    <!-- 头像 -->
    <tm-avatar
      mode="square"
      :icon-type="iconType"
      :image-source="imageSource"
      :text-image="textImage"
      :iconSize="21"
      :width="imgSize"
      :height="imgSize"
    />
    <!-- 介绍 -->
    <div class="tm-avatar-card__info">
      <!-- 标题 -->
      <div class="info-title" :class="{'clickable':canClick}">
        <p class="tm-ellipsis info-title__name" v-title="title"><slot name="title">{{ title }}</slot></p>
        <p class="info-title__tip" v-if="tip"><tm-tip :content="tip" placement="right"></tm-tip></p>
      </div>
      <!-- 描述 -->
      <template v-if="!hideDescription">
        <div class="info-description" :title="description" v-if="description || $slots.description">
          <slot name="description">
            <i class="tm-icon-wechat icon-wechat" v-if="!hideWechatIcon"></i>
            <span class="tm-ellipsis">{{ description }}</span>
          </slot>
        </div>
        <div class="tm-ellipsis info-description" v-else>
          <template v-if="!hideWechatIcon">
            <i class="tm-icon-wechat icon-wechat-unadded color-gray"></i>待添加
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Avatar from "../avatar";
import Tip from "../tip";

const IconTypeEnum = ['image', 'person', 'company', 'group', 'goods'];

export default {
  name: "tmAvatarCard",
  components: {
    [Avatar.name]: Avatar,
    [Tip.name]: Tip
  },
  props: {
    // 图片尺寸
    imgSize: {
      type: Number,
      default: 45
    },
    // 图片地址
    imageSource: {
      type: String,
      default: ""
    },
    // 文本图片
    textImage: {
      type: String,
      default: ""
    },
    // 用户昵称
    title: {
      type: String,
      default: "",
    },
    // 提示信息
    tip: {
      type: String,
      default: ""
    },
    // 是否有描述信息
    hideDescription: {
      type: Boolean,
      default: false
    },
    // 昵称可否点击
    canClick: {
      type: Boolean,
      default: false
    },
    // 描述信息
    description: {
      type: String,
      default: ""
    },
    // 是否有微信图标
    hideWechatIcon: {
      type: Boolean,
      default: false
    },
    // 头像类型
    // `image` `person` `company` `group`
    iconType: {
      type: String,
      default: "person",
      validator: (value) => {
        return IconTypeEnum.includes(value);
      }
    }
  },
  computed: {
    isPersonType() {
      return (this.iconType || 'person') === 'person';
    },
    // titleInfo() {
    //   return this.isPersonType ? undefined : this.title;
    // },
    // descriptionInfo() {
    //   return this.isPersonType ? undefined : this.description;
    // }
  }
}
</script>