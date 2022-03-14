<template>
  <tm-tag-combo
    :dept-list="deptList"
    :sales-list="salesList"
  />
</template>
<script>
export default {
  data() {
    return {
      deptList: [
        {
          id: 1,
          name: '前端前端前端前端前端前端前端前端前端'
        },
        {
          id: 2,
          name: '后端'
        },
        {
          id: 3,
          name: '测试'
        }
      ],
      salesList: [
        {
          id: 11,
          name: '张三'
        },
        {
          id: 12,
          name: '李四'
        },
        {
          id: 13,
          name: '王五'
        }
      ]
    }
  }
}
</script>