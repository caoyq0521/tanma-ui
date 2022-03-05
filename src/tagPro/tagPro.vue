<template>
  <tm-tag 
    class="tm-tag-pro"
    :class="setClass"
    :closable="closable"
    :style="setStyle"
  >
    <slot>
      <i 
        class="iconfont icon"
        :class="setIconClass"
        :style="{'color': iconColor}"
      ></i>
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
      icon: 'icon-biaoqian1',
      name: '内容标签'
    },
    [TYPE_INDIVIDUAL]: {
      icon: 'icon-biaoqian1',
      name: '个人标签'
    },
    [TYPE_COMPANY]: {
      icon: 'icon-biaoqian1',
      name: '公司标签'
    },
    [TYPE_DEPARTMENT]: {
      icon: 'icon-wenjianjia',
      name: '部门标签'
    },
    [TYPE_EMPLOYEE]: {
      icon: 'icon-touxiang',
      name: '员工标签'
    },
    [TYPE_GROUP]: {
      icon: 'icon-qun',
      name: '运营群'
    }
  }

  const TYPES = [TYPE_CONTENT, TYPE_INDIVIDUAL, TYPE_COMPANY, TYPE_DEPARTMENT, TYPE_EMPLOYEE, TYPE_GROUP]

  export default {
    name: "tmTagPro",
    props: {
      // 类型
      type: {
        type: String,
        default: TYPE_EMPLOYEE, // `content` `individual` `company` `department` `employee` `group`
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
        const { type = '', icon: customIcon } = this;
        const { icon: internalIcon } = TYPEINFO[type];
        const className = customIcon || internalIcon;
        return {
          [className]: true
        }
      },
      setName() {
        const { type = '', name: customName } = this;
        const { name: internalName } = TYPEINFO[type];
        return customName || internalName;
      }
    },
  }
</script>