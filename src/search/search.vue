<template>
  <el-input
    size="medium"
    class="tm-search"
    ref="searchRef"
    v-bind="$attrs"
    v-model="inputVal"
    :placeholder="placeholder"
    :maxlength="maxlength"
    :show-word-limit="showWordLimit"
    @change="handleChange"
    @input="handleInput"
    @blur="handleBlur"
  >
    <template #suffix>
      <i v-if="showSearchIcon" class="el-input__icon el-icon-search"></i>
      <i v-else-if="clearable" class="icon tm-icon-qingchu" @click="handleInput('')"></i>
    </template>
    <template #prepend>
      <slot name="prepend"></slot>
    </template>
  </el-input>
</template>

<script>

export default {
  name: "tmSearch",
  props: {
    value: {
      type: String,
      default: ""
    },
    // 占位符
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    // 最大输入长度
    maxlength: {
      type: [String, Number],
      default: ""
    },
    // 是否显示输入字数统计
    showWordLimit: {
      type: Boolean,
      default: false
    },
    // 是否可清空
    clearable: {
      type: Boolean,
      default: false
    },
    // 显示搜索Icon
    showIcon: {
      type: Boolean,
      default: true
    },
    // 是否允许输入特殊字符
    allowSpecialChar: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      inputVal: ""
    };
  },
  watch: {
    value: {
      handler (cur) {
        this.inputVal = cur;
      },
      immediate: true
    }
  },
  computed: {
    showSearchIcon() {
      return !this.inputVal && this.showIcon;
    }
  },
  methods: {
    // Methods
    clear () {
      this.$refs.searchRef.clear();
    },
    focus () {
      this.$refs.searchRef.focus();
    },

    // Events
    handleInput (val) {
      if (!this.allowSpecialChar) {
        this.inputVal = val.replace(/[@|<|>|*|%|&|?|#|(|)!|;|"|']/g, "");
      }
      this.inputVal = this.inputVal.trim();
      this.$emit("input", this.inputVal);
    },
    handleChange (val) {
      this.$emit("change", val); // 失去焦点或者回车触发
    },
    handleBlur () {
      this.$emit('blur');
    }
  }
}
</script>