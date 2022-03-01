<template>
  <el-input
    ref="querySearchRef"
    v-model="inputVal"
    size="medium"
    :placeholder="placeholder"
    :clearable="isClear"
    v-bind="$attrs"
    class="tm-search"
    :maxlength="maxlength"
    :show-word-limit="showWordLimit"
    @change="handleChange"
    @input="handleInput"
    @blur="onInputBlur"
    :type="type"
  >
    <i slot="suffix" v-if="!inputVal&&isShowIcon" class="el-input__icon el-icon-search"></i>
    <template #prepend>
      <slot name="prepend"></slot>
    </template>
  </el-input>
</template>

<script>
import Vue from 'vue';
import { Input } from 'element-ui';

Vue.use(Input);

export default {
  name: "tmSearch",
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    maxlength: {
      type: [String, Number],
      default: ""
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    // 是否可清空
    isClear: {
      type: Boolean,
      default: false
    },
    isShowIcon: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "text"
    },
    allowSpecialChar: {
      // 是否允许输入特殊字符
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

  methods: {
    inputClear () {
      this.$refs.querySearchRef.clear()
    },
    inputFocus () {
      this.$refs.querySearchRef.focus()
    },
    handleInput (val) {
      if (!this.allowSpecialChar) {
        this.inputVal = val.replace(/[@|<|>|*|%|&|?|#|(|)!|;|"|']/g, "");
      }

      this.inputVal = this.inputVal.trim();
      this.$emit("input", this.inputVal);
    },
    handleChange (val) {
      this.$emit("handleEnter", val); // 失去焦点或者回车触发
    },
    onInputBlur () {
      this.$emit('blur')
    }
  }
}
</script>