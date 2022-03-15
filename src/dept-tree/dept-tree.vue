<template>
  <tm-dialog
    class="tm-dept-tree"
    destroy-on-close
    @ok="internalOk"
    @close="init"
    :title=" modal.title || '选择部门/员工'"
    v-bind="{...modal}"
    v-model="modal.visible"
  >
    <div class="tm-dept-tree__flex">
      <div class="tm-dept-tree__tree-search">
      <div class="tm-dept-tree__tree-ctx">
        <el-input v-model="filterText" :placeholder="placeholder" />
        <tm-tree
          ref="tree"
          :filter-node-method="filterNode"
          class="tm-dept-tree__tree"
          :props="dataKeys"
          :data="data"
          show-checkbox
          node-key="id"
          :height="390"
          :virtual-scroll="true"
          :expand-on-click-node="false"
          @check="handleCheck"
          v-bind="{...tree}"
        >
          <p class="tm-dept-tree__node-wrapper" slot-scope="{ node, data }">
            <span
              class="tm-dept-tree__icon iconfont"
              :class=" data.departmentId ? 'icon-touxiang': 'icon-wenjianjia'"
            />
            <span class="tm-dept-tree__node-box">
              <span class="ml-6">{{ node.label }}</span>
              <span
                v-if="data.alias"
                class="alias"
              >({{ data.alias }})</span>
            </span>
          </p>
        </tm-tree>
      </div>
    </div>
    <div class="tm-dept-tree__select-result">
      <p class="tm-dept-tree__select-title">{{ selectTitle }}</p>
      <ul class="tm-dept-tree__select-list">
        <li class="tm-dept-tree__select-list-item" :key="m" v-for="(i, m) in select">
          <span
            class="tm-dept-tree__icon iconfont"
            :class=" i.departmentId ? 'icon-touxiang': 'icon-wenjianjia'"
          />
          <span class="tm-dept-tree__ml8">{{ i[dataKeys.label] }}</span>
          <span class="icon-qingchu iconfont tm-dept-tree__close-icon" @click="handleClear(i)" />
        </li>
      </ul>
    </div>
    </div>
  </tm-dialog>
</template>
<script>
import Vue from 'vue'
import { 
  Dialog, 
  Input,
} from 'element-ui'
Vue.use(Dialog);
Vue.use(Input);
export default {
  name: 'tmDeptTree',
  props: {
    // el-dialog 所有属性以及方法, visible 默认使用.sync, 以及自定义的okText, cancelText, 点击确定的回调onOk, 点击关闭的回调onCancel
    modal: {
      type: Object,
      default: () => ({}),
    },
    // el-tree 所有属性以及方法
    tree: {
      type: Object,
      default: () =>({})
    },
    // 树形列表
    data: {
      type: Array,
      default: () => [],
    },
    // 树形列表的key对象
    dataKeys: {
      type: Object,
      default: () => ({ label: 'name', id: 'id', children: 'children' }),
    },
    // 展开的key列表
    expandKeys: {
      type: Array,
      default: () => [],
    },
    // 被check的key列表
    checkKeys: {
      type: Array,
      default: () => [],
    },
    // tree check函数
    check: {
      type: Function,
      default: null,
    },
    // tree 搜索框placeholder
    placeholder: {
      type: String,
      default: '搜索员工或部门',
    },
    // tree 选择结果列表
    selectTitle: {
      type: String,
      default: '已选择的部门或成员',
    }
  },
  data() {
    return {
      select: [],
      filterText: undefined,
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  methods: {
    init() {
      this.select = []
    },
    internalOk() {
      const { onOk, onCancel } = this.modal
      typeof onOk === 'function' && 
        onOk(this.select)
      typeof onCancel === 'function' && onCancel()
    },
    getTreeRef() {
      return this.$refs.tree
    },
    handleCheck(_, { checkedNodes }) {
      this.select = checkedNodes
    },
    handleClear(i) {
      const id = this.dataKeys.id
      const { setChecked } = this.$refs.tree
      this.select = this.select.filter(m => m[id] !== i[id])
      setChecked(i[id], false)
    },
    filterNode(value, data) {
      if (!value) return true;
      return data[this.dataKeys.label].indexOf(value) !== -1;
    }
  },
};
</script>