<template>
  <tm-tag 
    class="tm-tag-pro"
    :class="setClass"
    :closable="closable"
    :style="setStyle"
    v-title="setTipName"
    @click="handleClick"
    @close="handleClose"
  >
  <span class="tm-tag-pro__icon">
    <slot name="icon">
      <i
        :class="setIconClass"
        :style="{'color': iconColor}"
      ></i>
    </slot>
  </span>
    <slot>
      {{ setName }}
    </slot>
  </tm-tag>
</template>

<script>
  const PREFIX = 'tm-tag-pro--';
  const TYPE_CONTENT = 'content';
  const TYPE_INDIVIDUAL = 'individual';
  const TYPE_COMPANY = 'company';
  const TYPE_DEPARTMENT = 'department';
  const TYPE_EMPLOYEE = 'employee';
  const TYPE_GROUP = 'group';

  const TYPEINFO = {
    [TYPE_CONTENT]: {
      icon: 'tm-icon-biaoqian1',
      name: '内容标签'
    },
    [TYPE_INDIVIDUAL]: {
      icon: 'tm-icon-biaoqian1',
      name: '个人标签'
    },
    [TYPE_COMPANY]: {
      icon: 'tm-icon-biaoqian1',
      name: '公司标签'
    },
    [TYPE_DEPARTMENT]: {
      icon: 'tm-icon-wenjianjia',
      name: '部门标签'
    },
    [TYPE_EMPLOYEE]: {
      icon: 'tm-icon-touxiang',
      name: '员工标签'
    },
    [TYPE_GROUP]: {
      icon: 'tm-icon-qun',
      name: '运营群'
    }
  }

  const TYPES = [TYPE_CONTENT, TYPE_INDIVIDUAL, TYPE_COMPANY, TYPE_DEPARTMENT, TYPE_EMPLOYEE, TYPE_GROUP]

  export default {
    name: "tmTagPro",
    props: {
      // 类型
      // `content` `individual` `company` `department` `employee` `group`
      type: {
        type: String,
        default: TYPE_EMPLOYEE, 
        validator(value) {
          return TYPES.includes(value);
        }
      },
      // 是否可关闭
      closable: {
        type: Boolean,
        default: false
      },
      // 自定义icon
      icon: {
        type: String,
        default: ''
      },
      // 标签内容
      name: {
        type: String,
        default: ''
      },
      // 背景色
      color: {
        type: String,
        default: ''
      },
      // icon颜色
      iconColor: {
        type: String,
        default: ''
      },
      // 字体颜色
      fontColor: {
        type: String,
        default: ''
      },
      // 标签内容超出多少后显示...
      limit: {
        type: Number,
        default: 10
      },
      // 类名前缀
      classPrefix: {
        type: String,
        default: ''
      }
    },
    computed: {
      setClass() {
        const { type = '' } = this;
        return {
          [`${PREFIX}${type}`]: !!type
        }
      },
      setStyle() {
        const { color, fontColor } = this;
        return {
          'background-color': color,
          'color': fontColor
        }
      },
      setIconClass() {
        const { type = '', icon: customIcon, classPrefix } = this;
        const { icon: internalIcon } = TYPEINFO[type];
        const className = customIcon || internalIcon;
        return {
          [className]: true,
          [classPrefix]: true
        }
      },
      setName() {
        const { limit } = this;
        const name = this.getName();
        if (name.length > limit) return `${name.slice(0, limit)}...`;
        return name;
      },
      setTipName() {
        const { limit } = this;
        const name = this.getName();
        if(name.length > limit) return name;
        return null;
      }
    },
    methods: {
      handleClick() {
        this.$emit('click');
      },
      handleClose() {
        this.$emit('close');
      },
      getName() {
        const { type = '', name: customName } = this;
        const { name: internalName } = TYPEINFO[type];
        return customName || internalName;
      },
    },
  }
</script>