<template>
  <tm-tag-combo
    :dept-list="deptList"
    :sales-list="salesList"
    :props="props"
  />
</template>
<script>
export default {
  data() {
    return {
      props: {
        id: 'id',
        name: 'title'
      },
      deptList: [
        {
          id: 1,
          title: '前端前端前端前端前端前端前端前端前端'
        },
        {
          id: 2,
          title: '后端'
        },
        {
          id: 3,
          title: '测试'
        }
      ],
      salesList: [
        {
          id: 11,
          title: '张三'
        },
        {
          id: 12,
          title: '李四'
        },
        {
          id: 13,
          title: '王五'
        }
      ]
    }
  }
}
</script>