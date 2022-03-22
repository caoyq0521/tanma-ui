<template>
  <div class="tm-progress">
    <el-progress
      :percentage="percentage"
      :color="progressColor"
    ></el-progress>
  </div>
</template>
<script>
import Vue from 'vue';
import { Progress } from 'element-ui';
import { getRootCss } from "../util"
Vue.use(Progress);

export default {
  name: 'tmProgress',
  props: {
    start: {
      type: Boolean,
      default: false
    },
    end: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      percentage: 0,
      step: 2,
      interval: 100,
      timer: null,
      progressColor: this.mainColor,
      status: null
    }
  },
  watch: {
    start: {
      immediate: true,
      handler (val) {
        if (val) {
          this.status = null
          this.timer = setInterval(this.onprogress, this.interval)
        }
      }
    },
    end: {
      immediate: true,
      handler (val) {
        if (val) {
          this.percentage = 100
          this.progressColor = this.sucColor
          this.status = 'success'
          this.clearInterval()
        }
      }
    },
    error: {
      immediate: true,
      handler (val) {
        if (val) {
          this.percentage = 100
          this.progressColor = this.errorColor
          this.status = 'exception'
          this.clearInterval()
        }
      }
    }
  },
  mounted() {
    this.mainColor = getRootCss('--main-color')
    this.sucColor = getRootCss('--tm-progress-success-color')
    this.errorColor = getRootCss('--tm-progress-error-color')
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  },
  methods: {
    onprogress () {
      const { percentage, step } = this

      if (percentage + step >= 100) {
        this.percentage = 100
        return this.clearInterval()
      }

      if (percentage < 50) {}
      if (percentage > 50 && percentage < 80) {
        this.interval = 400
        this.step = 1
        this.clearInterval()
        this.timer = setInterval(this.onprogress, this.interval)
        return
      }
      if (percentage > 80 && percentage < 95) {
        this.interval = 1000
        this.step = 1
        this.clearInterval()
        this.timer = setInterval(this.onprogress, this.interval)
        return
      }
      if (percentage >= 95) {
        return this.clearInterval()
      }
      this.percentage += step
    },
    clearInterval () {
      clearInterval(this.timer)
      this.timer = null
    }
  }
}
</script>
