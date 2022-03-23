# dept-tree

### 介绍

组件介绍

### 引入

```js
  import Vue from 'vue';
  import { DeptTree } from 'tanma-design';
  
  Vue.use(DeptTree);
```

## 代码演示

### 基本用法

<demo-code>./demo/index.vue</demo-code>

### 获取tree的ref

<demo-code>./demo/getTreeRef.vue</demo-code>

### Props

参数 | 说明 | 类型 | 可选值 | 默认值 
-- | -- | -- | -- | --
check | tree check函数 | _function_ | - | null
check-keys | 被check的key列表 | _array_ | - | []
data | 树形列表 | _array_ | - | []
data-keys | 树形列表的key对象 | _object_ | - | ({ label: 'name', id: 'id', children: 'children' })
expand-keys | 展开的key列表 | _array_ | - | []
modal | el-dialog 所有属性以及方法, visible 默认使用.sync, 以及自定义的okText, cancelText, 点击确定的回调onOk, 点击关闭的回调onCancel | _object_ | - | {}
placeholder | tree 搜索框placeholder | _string_ | - | '搜索员工或部门'
select-title | tree 选择结果列表标题 | _string_ | - | '已选择的部门或成员'
tree | el-tree 所有属性以及方法 | _object_ | - | {}
