<template>
  <div class="tm-date-range">
    <el-date-picker
      v-model="currentValue"
      :align="align"
      :type="type"
      :clearable="clearable"
      :size="size"
      :value-format="valueFormat || defaultValFormat"
      :default-time="defaultTime"
      :picker-options="defaultPickerOptions"
      :range-separator="rangeSeparator"
      :end-placeholder="endPlaceholder"
      :start-placeholder="startPlaceholder"
      @focus="handleFocus"
      @change="handleChange"
      >
    </el-date-picker>
  </div>
</template>

<script>
import Vue from "vue";
import {DatePicker} from "element-ui"
Vue.use(DatePicker);

import dayjs from 'dayjs';
import {isMobile} from '../util';

const ShortcutOptionsEnum = {
  '0': {
    text: '今天',
    onClick (picker) {
      const today = dayjs();
      const end = today.endOf('date').toDate();
      const start = today.startOf('date').toDate();
      picker.$emit('pick', [start, end]);
    }
  },
  '1': {
    text: '昨天',
    onClick (picker) {
      const today = dayjs();
      const start = today.startOf('date').subtract(1, 'day').toDate();
      const end = today.endOf('date').subtract(1, 'day').toDate();
      picker.$emit('pick', [start, end]);
    }
  },
  '7': {
    text: '最近7天',
    onClick (picker) {
      const today = dayjs();
      const end = today.endOf('date').toDate();
      const start = today.startOf('date').subtract(6, 'day').toDate();
      picker.$emit('pick', [start, end]);
    }
  },
  '30': {
    text: '最近一个月',
    onClick (picker) {
      const today = dayjs();
      const end = today.endOf('date').toDate();
      const start = today.startOf('date').subtract(30, 'day').toDate();
      picker.$emit('pick', [start, end]);
    }
  },
  '90': {
    text: '最近三个月',
    onClick (picker) {
      const today = dayjs();
      const end = today.endOf('date').toDate();
      const start = today.startOf('date').subtract(90, 'day').toDate();
      picker.$emit('pick', [start, end]);
    }
  },
  '365': {
    text: '最近一年',
    onClick (picker) {
      const today = dayjs();
      const end = today.endOf('date').toDate();
      const start = today.startOf('date').subtract(365, 'day').toDate();
      picker.$emit('pick', [start, end]);
    }
  }
}

const defaultShortcuts =  [...Object.values(ShortcutOptionsEnum)];

export default {
  name: 'tmDateRange',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    // 绑定值
    value: {
      type: [Array, String],
      default: () => []
    },
    // 显示类型
    type: {
      type: String,
      default: 'daterange'
    },
    // 是否显示清除按钮
    clearable: {
      type: Boolean,
      default: false
    },
    // 自定义快捷方式数组
    shortcuts: {
      type: Array,
      default: () => []
    },
    // 枚举快捷方式数组
    shortcutsEnum: {
      type: Array,
      default: () => []
    },
    // 选择日期范围
    dateRange: {
      type: [Number, String],
      default: 0
    },
    // 绑定值的格式
    valueFormat: {
      type: String,
      default: ''
    },
    // 范围选择时选中日期所使用的当日内具体时刻
    defaultTime: {
      type: [String, Array],
      default: () => ['00:00:00', '23:59:59']
    },
    // 范围选择时开始日期的占位内容
    startPlaceholder: {
      type: String,
      default: "开始日期"
    },
    // 范围选择时结束日期的占位内容
    endPlaceholder: {
      type: String,
      default: "结束日期"
    },
    // 输入框尺寸
    size: {
      type: String,
      default: "small"
    },
    // 选择范围时的分隔符
    rangeSeparator: {
      type: String,
      default: "~"
    },
    // 隐藏快捷方式
    hideShortcuts: {
      type: Boolean,
      default: false
    },
    // 自定义选择器配置
    pickerOptions: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      defaultPickerOptions: null,
      defaultShortcuts: [...defaultShortcuts],
      currentValue: [],
      align: isMobile() ? 'right' : 'left'
    }
  },
  computed: {
    defaultValFormat ({ type }) {
      return type === 'daterange' ? 'yyyy-MM-dd' : 'yyyy-MM-dd HH:mm:ss'
    }
  },
  watch: {
    value: {
      handler(newValue) {
        this.currentValue = newValue
      },
      immediate: true
    },
    pickerOptions: {
      handler(newValue) {
        this.defaultPickerOptions = newValue ? { ...newValue } : null;
      },
      immediate: true
    },
    shortcuts: {
      handler(newValue) {
        this.defaultShortcuts = newValue.length ? newValue : [...defaultShortcuts];
      },
      immediate: true
    }
  },
  created () {
    // 初始化快捷配置
    this.initShortcuts();
    // 如果未配置pickerOptions，走默认配置
    !this.defaultPickerOptions && this.initPickerOptions();
  },
  methods: {
    initShortcuts() {
      let { shortcutsEnum } = this;
      // 如果设置了枚举值
      if(shortcutsEnum.length) {
        this.defaultShortcuts = [];
        shortcutsEnum.sort((a,b) => a-b).forEach(key => {
          const option = ShortcutOptionsEnum[key];
          option && this.defaultShortcuts.push(option);
        })
      }
    },
    initPickerOptions() {
      this.defaultPickerOptions = {};
      if(!this.hideShortcuts) this.defaultPickerOptions.shortcuts = this.defaultShortcuts;
      this.defaultPickerOptions.disabledDate = (time) => {
        if (+this.dateRange) {
          const now = new Date(new Date().toLocaleDateString()).getTime() + 8.64e7 - 1;
          return time.getTime() > now || time.getTime() <= now - this.dateRange * 8.64e7;
        } else {
          return false;
        }
      };
    },
    // Event
    handleFocus() {
      this.$emit('focus')
    },
    handleChange () {
      this.$emit('change', this.currentValue)
    }
  }
}
</script>