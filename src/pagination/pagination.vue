<template>
  <div class="tm-pagination">
    <span class="tm-pagination__total">共{{ total }}条</span>
    <span
      class="button-prev"
      :disabled="currentPage <= 1"
    >
      <i class="iconfont icon-zuojiantou"></i>
    </span>
    <div class="tm-pagination__pager">
      <span
        v-if="pageCount > 0"
        class="number" 
        :class="{'active': currentPage === 1}"
      >
        1
      </span>
      <span
        v-if="showPreMore"
        class="iconfont icon-gengduo2 more"
      ></span>
      <span 
        class="number" 
        v-for="item in pagers" 
        :class="{'active': currentPage === item}" 
        :key="item"
      >
        {{ item }}
      </span>
      <span
        v-if="showNextMore"
        class="iconfont icon-gengduo2 more"
      ></span>
      <span
        v-if="pageCount > 1"
        class="number" 
        :class="{'active': currentPage === pageCount}"
      >
        {{ pageCount }}
      </span>
    </div>
    <span
      class="button-next"
      :disabled="currentPage === pageCount"
    >
      <i class="iconfont icon-youjiantou"></i>
    </span>
    <span class="tm-pagination__sizes">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in pageSizes"
          :key="item"
          :value="item"
          :label="paginationOption(item)"
        >
        </el-option>
      </el-select>
    </span>
  </div>
</template>

<script>
  import { Select, Option } from 'element-ui';

  export default {
    name: "tmPagination",
    components: {
      [Select.name]: Select,
      [Option.name]: Option
    },
    props: {
      pagerCount: {
        type: Number,
        default: 7
      },
      currentPage: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 20
      },
      pageSizes: {
        type: Array,
        default() {
          return [20, 30, 40, 50, 10000];
        }
      },
      total: {
        type: Number,
        default: 510
      }
    },
    data() {
      return {
        showPreMore: false,
        showNextMore: false,
        value: 20
      }
    },
    computed: {
      paginationOption() {
        return (num) => {
          return `${num}条/页`;
        }
      },
      pageCount() {
        const { total, pageSize } = this;
        return Math.ceil(total / pageSize);
      },
      pagers() {
        const { pagerCount, currentPage, pageCount } = this;
        const halfPagerCount = (pagerCount - 1) / 2;
        this.showPreMore = false;
        this.showNextMore = false;
        if(pageCount > pagerCount) {
          if(currentPage > (pagerCount - halfPagerCount)) {
            this.showPreMore = true;
          }

          if(currentPage < (pageCount - halfPagerCount)) {
            this.showNextMore = true;
          }
        }

        const arr = [];
        const { showPreMore, showNextMore } = this;
        if(showPreMore && !showNextMore) {
          const startPage = pageCount - (pagerCount - 2);
          for(let i = startPage; i < pageCount; i++) {
            arr.push(i);
          }
        }else if(!showPreMore && showNextMore) {
          for(let i = 2; i < pagerCount; i++) {
            arr.push(i);
          }
        }else if(showPreMore && showNextMore) {
          const offset = Math.floor(pagerCount/ 2) - 1;
          for(let i = currentPage - offset; i <= currentPage + offset; i++) {
            arr.push(i);
          };
        }else {
          for(let i = 2; i < pageCount; i++) {
            arr.push(i);
          }
        }
        return arr;
      }
    }
  }
</script>