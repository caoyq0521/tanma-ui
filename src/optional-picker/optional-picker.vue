<template>
  <div class="tm-optional-picker">
    <div class="tm-optional-picker-types" v-if="selectDateList.length > 1">
      <template v-for="(item,index) in selectDateList">
        <div
          :key="item.type"
          class="type-item"
          @click="selectDate(item.type)"
        >
          <span>{{ item.name }}</span>
          <div 
            v-if="selectDateMode === item.type" 
            class="type-item__active" 
            :class="{'type-item__active-first': index === 0, 'type-item__active-last': index === selectDateList.length-1}">
            {{ item.name }}
          </div>
        </div>
      </template>
    </div>
    <div class="tm-optional-picker-range">
      <el-date-picker
        v-if="['day', 'month'].includes(selectDateMode)"
        v-model="currentDate"
        :key="pickerKey"
        :clearable="false"
        :type="selectDateMode === 'day' ? 'daterange' : 'monthrange'"
        range-separator="~"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy-MM-dd HH:mm:ss"
        :format="selectDateMode === 'day' ? 'yyyy-MM-dd' : 'yyyy-MM'"
        @change="handlePickDate"
      ></el-date-picker>
      <div
        v-else-if="selectDateMode === 'week'"
        class="week-range"
      >
        <el-date-picker
          v-model="currentDate[0]"
          :key="pickerKey"
          :clearable="false"
          type="week"
          :picker-options="{ firstDayOfWeek: 1 }"
          value-format="yyyy-MM-dd HH:mm:ss"
          placeholder="选择开始周"
          format="yyyy 第 WW 周"
          @change="handlePickWeek($event, 'start')"
        >
        </el-date-picker>
        ~
        <el-date-picker
          v-model="currentDate[1]"
          :clearable="false"
          type="week"
          :picker-options="{ firstDayOfWeek: 1 }"
          value-format="yyyy-MM-dd HH:mm:ss"
          placeholder="选择结束周"
          format="yyyy 第 WW 周"
          @change="handlePickWeek($event, 'end')"
        >
        </el-date-picker>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { DatePicker } from 'element-ui';

  Vue.use(DatePicker);
  const selectDateList = [
    {
      type: "day",
      name: "日"
    },
    {
      type: "week",
      name: "周"
    },
    {
      type: "month",
      name: "月"
    }
  ]
  export default {
    name: "tm-optional-picker",
    props:{
      // 默认值`[startDate,endDate]`
      defaultTime:{
        type: Array,
        default: ()=> []
      },
      // 可选择模式
      // `day` `week` `month` `['day','week']`...
      mode:{
        type: [ String, Array ],
        default: ()=> ['day', 'week', 'month']
      }
    },
    data () {
      return {
        rangePickerObj: {
          _type: 'day',
          startDate: '',
          endDate: ''
        },
        selectDateList: [],
        selectDateMode: "day",
        currentDate: ['','']
      }
    },
    computed: {
      pickerKey () {
        return this.selectDateMode + new Date().getTime()
      }
    },
    watch:{
      mode: {
        handler(val){
          if (!Array.isArray(val)){
            if (val === '') {
              this.selectDateList = selectDateList[0]
            } else {
              this.selectDateList = selectDateList.filter(x => x.type === val)
            }
            this.rangePickerObj._type = this.selectDateList[0].type
          } else{
            if (!val.length) {
              this.selectDateList = selectDateList
            } else {
              this.selectDateList = selectDateList.filter(x => val.includes(x.type))
            }
            this.rangePickerObj._type = this.selectDateList[0].type
          }
          this.selectDate(this.rangePickerObj._type)
        },
        immediate:true
      },
      defaultTime: {
        handler(val){
          if (val.length){
            this.initTime(val[0],val[1])
          }
        },
        immediate:true
      }
    },
    methods: {
      formatTime(time){
        if (!time){
          return ''
        }
        const d = new Date(time)
        const year = d.getFullYear()
        const month = (d.getMonth() + 1 < 10) ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1)
        const day = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate()
        return year + '-' + month + '-' + day + ' 00:00:00'
      },
      initTime (start, end) {
        const startText = this.formatTime(start)
        const endText = this.formatTime(end).replace(/00:00:00/g,  '23:59:59')
        this.currentDate = [startText, endText]
        this.rangePickerObj.startDate = startText
        this.rangePickerObj.endDate = endText
        this.$emit("change", this.rangePickerObj)
      },
      // 选择日周月
      selectDate (type) {
        const start = new Date()
        const end = new Date()

        this.selectDateMode = type;
        this.rangePickerObj._type = type;
        if (type === 'day') {
          // 默认限制 30 天内容
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
        }
        if (type === 'week') {
          // 默认限制 10 周内容
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 63)
          start.setDate(start.getDate() - start.getDay() + 1)
          end.setDate(end.getDate() - end.getDay() + 1)
          end.setDate(end.getDate() + 6)
        }
        if (type === 'month') {
          // 默认限制 12 个月
          let startMonth = start.getMonth() - 10
          if (startMonth < 0) {
            start.setFullYear(start.getFullYear() - 1)
            startMonth = 11 + startMonth
          }
          start.setMonth(startMonth)
          start.setDate(1)
          end.setDate(1)
          end.setMonth(end.getMonth() + 1)
          end.setDate(end.getDate() - 1)
        }
        this.initTime(start, end)
      },
      // 选择具体日期
      handlePickDate (val) {
        if (this.selectDateMode === 'day') {
          this.initTime(val[0], val[1])
        } else if (this.selectDateMode === 'month') {
          const end = new Date(val[1])
          end.setDate(1)
          end.setMonth(end.getMonth() + 1)
          end.setDate(end.getDate() - 1)
          this.initTime(val[0], end)
        }
      },
      handlePickWeek (val, type) {
        const { currentDate } = this
        let start = currentDate[0]
        let end = currentDate[1]
        if (new Date(start).getTime() > new Date(end).getTime()) {
          this.$forceUpdate()
          this.currentDate[1] = ""
          return
        }

        if (type === 'start') {
          start = new Date(val)
          start = start.setDate(start.getDate() - start.getDay() + 1)
        }
        if (type === 'end') {
          end = new Date(val)
          end.setDate(end.getDate() - end.getDay() + 1)
          end.setDate(end.getDate() + 6)
        }
        this.initTime(start, end)
      }
    }
  }
</script>