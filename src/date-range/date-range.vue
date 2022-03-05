<template>
  <div class="tm-date-range">
    <el-date-picker
      :style="styleClass"
      v-model="currentValue"
      :type="type"
      popper-class="v-popper"
      :clearable="clearable"
      :size="size"
      @focus="handleFocus"
      @change="handleChange"
      :value-format="valueFormat || defaultValFormat"
      :default-time="defaultTime"
      range-separator="~"
      :start-placeholder="startPlaceholder"
      :end-placeholder="endPlaceholder"
      :picker-options="pickerOptions"
      >
    </el-date-picker>
  </div>
</template>

<script>
import Vue from "vue";
import {DatePicker} from "element-ui"
Vue.use(DatePicker);

import dayjs from 'dayjs';

// 快捷选项函数配置
function ShortcutOptions () {
  const today = dayjs();
  return [
    {
      text: '今天',
      onClick (picker) {
        const end = today.endOf('date').toDate();
        const start = today.startOf('date').toDate();
        picker.$emit('pick', [start, end]);
      }
    },
    {
      text: '昨天',
      onClick (picker) {
        const start = today.startOf('date').subtract(1, 'day').toDate();
        const end = today.endOf('date').subtract(1, 'day').toDate();
        picker.$emit('pick', [start, end]);
      }
    },
    {
      text: '最近7天',
      onClick (picker) {
        const end = today.endOf('date').toDate();
        const start = today.startOf('date').subtract(6, 'day').toDate();
        picker.$emit('pick', [start, end]);
      }
    },
    {
      text: '最近一个月',
      onClick (picker) {
        const end = today.endOf('date').toDate();
        const start = today.startOf('date').subtract(30, 'day').toDate();
        picker.$emit('pick', [start, end]);
      }
    },
    {
      text: '最近三个月',
      onClick (picker) {
        const end = today.endOf('date').toDate();
        const start = today.startOf('date').subtract(90, 'day').toDate();
        picker.$emit('pick', [start, end]);
      }
    },
    {
      text: '最近一年',
      onClick (picker) {
        const end = today.endOf('date').toDate();
        const start = today.startOf('date').subtract(365, 'day').toDate();
        picker.$emit('pick', [start, end]);
      }
    }
  ]
}

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
    // 自定义样式
    styleClass: {
      type: String,
      default: 'width: 215px'
    },
    // 快捷方式数组
    shortcuts: {
      type: Array,
      default: ShortcutOptions
    },
    // 选择日期范围
    dateRange: {
      type: Number,
      default: 0
    },
    // 绑定值的格式
    valueFormat: {
      type: String,
      default: ''
    },
    // 范围选择时选中日期所使用的当日内具体时刻
    defaultTime: {
      type: Array,
      default: () => ['00:00:00', '23:59:59']
    },
    // 范围选择时开始日期的占位内容
    startPlaceholder:{
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
      default: "small" // `large` `small` `mini`
    }
  },
  data() {
    return {
      pickerOptions: {},
      currentValue: []
    }
  },
  computed: {
    defaultValFormat ({ type }) {
      return type === 'daterange' ? 'yyyy-MM-dd' : 'yyyy-MM-dd HH:mm:ss'
    }
  },
  watch: {
    value (newValue) {
      this.currentValue = newValue
    }
  },
  created () {
    this.pickerOptions.shortcuts = this.shortcuts;
    this.pickerOptions.disabledDate = (time) => {
      if (this.dateRange) {
        return time.getTime() > Date.now() || time.getTime() < Date.now() - this.dateRange * 24 * 60 * 60 * 1000;
      } else {
        return false;
      }
    }
    this.currentValue = this.value
  },
  methods: {
    handleFocus() {
      this.$emit('focus')
    },
    handleChange () {
      this.$emit('change', this.currentValue)
    }
  }
}
</script>