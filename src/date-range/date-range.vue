<template>
  <div class="tm-date-range">
    <el-date-picker
      :style="styleClass"
      v-model="currentValue"
      :type="type"
      popper-class="v-popper"
      :clearable="clearable"
      :size="size"
      @focus="$emit('focus')"
      @change="change()"
      :value-format="valueFormat || defaultValFormat"
      :default-time="defaultTime"
      range-separator="~"
      :start-placeholder="placeholder ? placeholder : '开始日期'"
      :end-placeholder="placeholder ? placeholder : '结束日期'"
      :picker-options="pickerOptions">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'tmDateRange',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Array || String,
      default: function (a) {
        return []
      }
    },
    type: {
      type: String,
      default: 'daterange'
    },
    placeholder: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: false
    },
    styleClass: {
      type: String,
      default: 'width: 215px'
    },
    // 可传入快捷方式数组
    shortcuts: {
      type: Array,
      default: () => {
        return [
          {
            text: '今天',
            onClick (picker) {
              const end = dayjs().endOf('date').toDate();
              const start = dayjs().startOf('date').toDate();
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '昨天',
            onClick (picker) {
              const start = dayjs().startOf('date').subtract(1, 'day').toDate();
              const end = dayjs().endOf('date').subtract(1, 'day').toDate();
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '最近7天',
            onClick (picker) {
              const end = dayjs().endOf('date').toDate();
              const start = dayjs().startOf('date').subtract(6, 'day').toDate();
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '最近一个月',
            onClick (picker) {
              const end = dayjs().endOf('date').toDate();
              const start = dayjs().startOf('date').subtract(30, 'day').toDate();
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '最近三个月',
            onClick (picker) {
              const end = dayjs().endOf('date').toDate();
              const start = dayjs().startOf('date').subtract(90, 'day').toDate();
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '最近一年',
            onClick (picker) {
              const end = dayjs().endOf('date').toDate();
              const start = dayjs().startOf('date').subtract(365, 'day').toDate();
              picker.$emit('pick', [start, end]);
            }
          }
        ]
      }
    },
    // 可查询***天内
    dayNum: {
      type: Number,
      default: 0
    },
    valueFormat: {
      type: String,
      default: ''
    },
    defaultTime: {
      type: Array,
      default: () => ['00:00:00', '23:59:59']
    }
  },
  data: function () {
    return {
      vDom: {},
      pickerOptions: {},
      // clearable: false,
      size: "small",
      currentValue: [],
      time: new Date()
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
    },
    currentValue (newValue, oldValue) {
      //console.log(this.currentValue);
    }
  },
  created () {
    this.pickerOptions.shortcuts = this.shortcuts;
    this.pickerOptions.disabledDate = (time) => {
      if (this.dayNum) {
        return time.getTime() > Date.now() || time.getTime() < Date.now() - this.dayNum * 24 * 60 * 60 * 1000;
      } else {
        return false;
      }
    }
    this.currentValue = this.value
  },
  methods: {
    change () {
      this.$emit('change', this.currentValue)
    }
  }
}
</script>