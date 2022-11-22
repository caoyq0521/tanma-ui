<template>
  <div class="tm-tag-combo">
    <template v-for="item in limitDeptList">
      <slot name="deptL" :info="item"></slot>
      <tm-tag-pro
        type="department"
        :name="setName(item)"
        :closable="closable"
        :limit="nameLimit"
        @close="handleClose('dept', item)"
        @click="handleClick('dept', item)"
      >
      </tm-tag-pro>
      <slot name="deptR" :info="item"></slot>
    </template>
    <template v-for="item in limitSalesList">
      <slot name="employeeL" :info="item"></slot>
      <tm-tag-pro
        type="employee"
        :name="setName(item)"
        :closable="closable"
        :limit="nameLimit"
        @close="handleClose('employee', item)"
        @click="handleClick('employee', item)"
      >
      </tm-tag-pro>
      <slot name="employeeR" :info="item"></slot>
    </template>
    <tm-tag-group 
      v-if="showMore" 
      :popper-class="popperClass"
      :trigger="trigger"
    >
      <template v-for="item in deptList">
        <slot name="deptL" :info="item"></slot>
        <tm-tag-pro
          type="department"
          :name="setName(item)"
          :closable="closable"
          :limit="nameLimit"
          @close="handleClose('dept', item)"
          @click="handleClick('dept', item)"
        >
        </tm-tag-pro>
        <slot name="deptR" :info="item"></slot>
      </template>
      <template v-for="item in salesList">
        <slot name="employeeL" :info="item"></slot>
        <tm-tag-pro
          type="employee"
          :name="setName(item)"
          :closable="closable"
          :limit="nameLimit"
          @close="handleClose('employee', item)"
          @click="handleClick('employee', item)"
        >
        </tm-tag-pro>
        <slot name="employeeR" :info="item"></slot>
      </template>
    </tm-tag-group>
  </div>
</template>

<script>
  export default {
    name: "tmTagCombo",
    props: {
      // 触发方式
      // `click` `focus` `hover` `manual`
      trigger: {
        type: String,
        default: 'click'
      },
      // 标签超出多少个后显示 更多按钮
      limit: {
        type: Number,
        default: 3
      },
      // 名字超出多少字后显示...
      nameLimit: {
        type: Number,
        default: 10
      },
      // 部门标签
      deptList: {
        type: Array,
        default: () => []
      },
      // 销售标签
      salesList: {
        type: Array,
        default: () => []
      },
      // 自定义配置
      props: {
        type: Object,
        default: () => {
          return {
            id: 'id',
            name: 'name'
          }
        }
      },
      // 是否可关闭
      closable: {
        type: Boolean,
        default: false
      },
      // 为 Tooltip 的 popper 添加类名
      popperClass: {
        type: String,
        default: ''
      }
    },
    computed: {
      showMore () {
        return this.limit && this.deptList.length + this.salesList.length > this.limit
      },
      limitDeptList () {
        return this.limit ? this.deptList.slice(0, this.limit) : this.deptList;
      },
      limitSalesList () {
        if (this.limit) {
          const { length } = this.limitDeptList;
          const diff = this.limit - length;
          if (diff > 0) {
            return this.salesList.slice(0, diff);
          }
          return [];
        }
        return this.salesList;
      },
    },
    methods: {
      setName(info) {
        const { name } = this.props;
        return info[name];
      },
      handleClick(type, info) {
        this.$emit('click', type, info);
      },
      handleClose(type, info) {
        this.$emit('close', type, info);
      }
    },
  }
</script>