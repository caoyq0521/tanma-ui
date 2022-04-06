<template>
  <div class="tm-pagination">
    <div class="tm-pagination__total">共{{ total }}条</div>
    <div
      class="button-prev"
      :disabled="prevButtonDisabled"
      @click="handlePrev"
    >
      <i class="tm-icon-zuojiantou"></i>
    </div>
    <div
      class="tm-pagination__pager"
      :class="{'tm-pagination--easy': isEasyMode}"
      @click="handlePagerChange"
    >
      <!-- 简单模式 -->
      <template v-if="isEasyMode">
        <span class="number">{{ internalCurrentPage }}</span>
        <span class="interval">/</span>
        <span class="number">{{ pageCount }}</span>
      </template>
      <!-- 正常模式 -->
      <template v-else>
        <span
          v-if="pageCount >= 0"
          class="number" 
          :class="{'active': internalCurrentPage === 1}"
        >
          1
        </span>
        <span
          v-if="showPreMore"
          class="tm-icon-gengduo2 more"
        ></span>
        <span 
          class="number" 
          v-for="item in pagers" 
          :class="{'active': internalCurrentPage === item}"
          :key="item"
        >
          {{ item }}
        </span>
        <span
          v-if="showNextMore"
          class="tm-icon-gengduo2 more"
        ></span>
        <span
          v-if="pageCount > 1"
          class="number" 
          :class="{'active': internalCurrentPage === pageCount}"
        >
          {{ pageCount }}
        </span>
      </template>
    </div>
    <div
      class="button-next"
      :disabled="nextButtonDisabled"
      @click="handleNext"
    >
      <i class="tm-icon-youjiantou"></i>
    </div>
    <div
      v-if="pager"
      class="tm-pagination__sizes"
    >
      <el-select
        v-model="internallPageSize"
        placeholder="请选择"
        :disabled="!total"
        popper-class="tm-pagination__select-popper"
        @change="handlePageSizeChange"
      >
        <el-option
          v-for="item in pageSizes"
          :key="item"
          :value="item"
          :label="paginationOption(item)"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Select, Option } from 'element-ui';

  Vue.use(Select);
  Vue.use(Option);

  // 正常模式
  const MODE_NORMAL = 'normal';
  // 简单模式
  const MODE_EASY = 'easy';
  const TYPE_MODE = [MODE_NORMAL, MODE_EASY];

  export default {
    name: "tm-pagination",
    props: {
      // 模式
      mode: {
        type: String,
        default: MODE_NORMAL,
        validator(value) {
          return TYPE_MODE.includes(value);
        }
      },
      // 页码按钮的数量，当总页数超过该值时会折叠
      pagerCount: {
        type: Number,
        default: 7,
        validator(value) {
          return (value | 0) === value && value > 4 && value < 22 && (value % 2) === 1;
        },
      },
      // 当前页数，支持 .sync 修饰符
      currentPage: {
        type: Number,
        default: 1,
      },
      // 每页显示个数选择器的选项设置
      pageSizes: {
        type: Array,
        default: () => [20, 30, 40, 50, 100],
        validator(value) {
          return value.every(item => item && typeof item === 'number')
        }
      },
      // 每页显示条目个数，支持 .sync 修饰符
      pageSize: {
        type: Number,
        default: 20
      },
      // 总条目数
      total: {
        type: Number,
        default: 0
      },
      // 是否可调整每页显示条数
      pager: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        showPreMore: false,
        showNextMore: false,
        internallPageSize: 0,
        internalCurrentPage: 1
      }
    },
    computed: {
      isEasyMode() {
        return this.mode === MODE_EASY;
      },
      paginationOption() {
        return (num) => {
          return `${num}条/页`;
        }
      },
      pageCount() {
        const { total, internallPageSize } = this;
        return Math.ceil(total / internallPageSize);
      },
      pagers() {
        const { pagerCount, internalCurrentPage, pageCount } = this;
        // 用于判断当前页所在的区间范围
        const halfPagerCount = (pagerCount - 1) / 2;
        this.showPreMore = false;
        this.showNextMore = false;
        if(pageCount > pagerCount) {
          // 当前页和前区间比较
          if(internalCurrentPage > (pagerCount - halfPagerCount)) {
            this.showPreMore = true;
          }
          // 当前页和后区间比较
          if(internalCurrentPage < (pageCount - halfPagerCount)) {
            this.showNextMore = true;
          }
        }

        const arr = [];
        const { showPreMore, showNextMore } = this;
        // 四种情况
        // ✅pre ❌next
        // ❌pre ✅next
        // ✅pre next
        // ❌pre ❌next
        if(showPreMore && !showNextMore) {
          // 1 ... 5 6 7 8 9 10
          // array 5 6 7 8 9
          // 2: 首页+尾页
          const startPage = pageCount - (pagerCount - 2);
          for(let i = startPage; i < pageCount; i++) {
            arr.push(i);
          }
        }else if(!showPreMore && showNextMore) {
          // 1 2 3 4 5 6 ... 10
          // array 2 3 4 5 6
          for(let i = 2; i < pagerCount; i++) {
            arr.push(i);
          }
        }else if(showPreMore && showNextMore) {
          // 1 ... 3 4 5 6 7 ... 10
          // array 3 4 5 6 7
          // [-offset, offset]
          const offset = Math.floor(pagerCount/ 2) - 1;
          for(let i = internalCurrentPage - offset; i <= internalCurrentPage + offset; i++) {
            arr.push(i);
          };
        }else {
          for(let i = 2; i < pageCount; i++) {
            arr.push(i);
          }
        }
        return arr;
      },
      prevButtonDisabled() {
        return this.internalCurrentPage <= 1;
      },
      nextButtonDisabled() {
        return this.internalCurrentPage >= this.pageCount;
      }
    },
    watch: {
      currentPage: {
        immediate: true,
        handler(newValue) {
          this.internalCurrentPage = (newValue && newValue >= 1) ? newValue : 1;
        }
      },
      pageSize: {
        immediate: true,
        handler(newValue) {
          this.internallPageSize = newValue || 20;
        }
      }
    },
    methods: {
      handlePagerChange(e) {
        const { target } = e;
        if(this.isEasyMode || !target.className.includes('number')) return;

        const currentPage = +e.target.innerText;
        if(currentPage === this.internalCurrentPage) return;
        this.internalCurrentPage = currentPage;
        this.emitCurrentChange();
      },
      handlePageSizeChange(pageSize) {
        this.internallPageSize = pageSize;
        this.$emit('update:pageSize', pageSize);
        this.$emit('size-change', pageSize);
        this.$nextTick(() => {
          if(this.pageCount < this.internalCurrentPage) {
            this.internalCurrentPage = this.pageCount;
            this.emitCurrentChange();
          }
        });
      },
      handlePrev() {
        if(this.prevButtonDisabled) return;

        this.internalCurrentPage--;
        this.$emit('prev-click', this.internalCurrentPage);
        this.emitCurrentChange();
      },
      handleNext() {
        if(this.nextButtonDisabled) return;
        
        this.internalCurrentPage++;
        this.$emit('next-click', this.internalCurrentPage);
        this.emitCurrentChange();
      },
      emitCurrentChange() {
        this.$emit('update:currentPage', this.internalCurrentPage);
        this.$emit('current-change', this.internalCurrentPage);
      }
    },
  }
</script>