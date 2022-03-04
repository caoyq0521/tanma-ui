<template>
  <el-select v-model="selectModel" ref="select" popper-class="v-tree-checkbox" :placeholder="placeholder" style="width: 100%">
    <el-option :value="optValue" style="height: auto">
      <el-tree
        ref="tree"
        :data="data"
        :props="defaultProps"
        :node-key="(defaultProps || {}).value"
        @node-click="onClick"
        highlight-current
        :default-expanded-keys="data[0] ? [data[0].id] : []"
      >
        <span class="custom-tree-node" slot-scope="{node,data}">
          <span
            class="text-clamp-1"
            :title="data[propsKeys.label]"
          >
            {{ data[propsKeys.label].length > 20 ? `${data[propsKeys.label].slice(0, 20)}...`: data[propsKeys.label] }}
        </span>
        </span>
      </el-tree>
    </el-option>
  </el-select>
</template>

<script>
import Vue from 'vue'
import { Select, Option, Tree } from 'element-ui'
Vue.use(Select)
Vue.use(Option)
Vue.use(Tree)
export default {
  name: 'tmTreeSelect',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    beforeSelect: { // 函数返回一个promise函数
      type: Function,
      default: null,
    },
    placeholder: {
      type: String,
      default: '请选择部门'
    },
    defaultProps : {
      type: Object,
      default: () => {}
    },
    propsKeys: {
      type: Object,
      default: () => ({
        children: 'children',
        label: 'label',
        value: 'id'
      })
    }
  },
  data: function () {
    return {
      optValue: [],
      selectModel: [],
    }
  },
  created () {
  },
  methods: {
    getValue () {
      return this.optValue
    },
    afterClick(param) {
      this.optValue = param.id
      this.selectModel = param.label
      this.$refs.select.blur()
      this.$emit("deptTreeClick", param)
    },
    onClick (data) {
      if(this.beforeSelect) {
        return this.beforeSelect(data).then(() => {
          this.afterClick(data)
        }).catch(_=> {});
      } 
      this.afterClick(data)
    }
  }
}
</script>

<style scoped>
.el-select-dropdown__item {
  padding: 0;
}
</style>
