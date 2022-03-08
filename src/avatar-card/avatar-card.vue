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
      <!-- 昵称 -->
      <div class="info-nickname" :class="{'pointer':canClick}" :title="titleInfo">
        <p class="tm-ellipsis"><slot name="nickname">{{ nickname }}</slot></p>
        <p v-if="tipInfo"><tm-tip :content="tipInfo" placement="right"></tm-tip></p>
      </div>
      <!-- 描述 -->
      <template v-if="showDescription">
        <div class="tm-ellipsis info-description" :title="titleInfo" v-if="description || $slots.info">
          <slot name="description">
            <i class="iconfont iconweixin2 wechat-icon" v-if="hasWechatIcon"></i>{{ description }}
          </slot>
        </div>
        <div class="tm-ellipsis info-description" v-else>
          <template v-if="hasWechatIcon">
            <i class="iconfont icondaitianjia wechat-icon c-gray"></i>
            待添加
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Avatar from "../avatar";
import Tip from "../tip";

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
    nickname: {
      type: String,
      default: "我是标题我是标题我是标题我是标题"
    },
    // 提示信息
    tipInfo: {
      type: String,
      default: "提示信息"
    },
    // 是否有描述信息
    showDescription: {
      type: Boolean,
      default: true
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
    hasWechatIcon: {
      type: Boolean,
      default: true
    },
    // 头像类型
    // `image` `person` `company` `group`
    iconType: {
      type: String,
      default: "person"
    }
  },
  computed: {
    titleInfo() {
      const isPerson = (this.iconType || 'person') === 'person';
      return isPerson ? undefined : this.info;
    }
  }
}
</script>