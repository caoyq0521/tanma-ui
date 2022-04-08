<template>
  <tm-cascader
    :options="options"
    :props="props"
    clearable
  />
</template>
<script>
export default {
  data () {
    return {
      options: [],
      props: {
        checkStrictly: true
      }
    }
  },
  created () {
    const options = [];
    for (let index = 0; index < 10; index++) {
      options.push({
        label: '选项-' + index,
        value: 'value-' + index
      })
    }
    options[4].children = [];
    for (let index = 0; index < 10000; index++) {
      options[4].children.push({
        label: '子选项4-' + index,
        value: 'value4-' + index
      });
    }
    options[3].children = [];
    for (let index = 0; index < 3; index++) {
      options[3].children.push({
        label: '子选项3-' + index,
        value: 'value3-' + index
      });
    }
    options[3].children[0].children = [];
    for (let index = 0; index < 3; index++) {
      if (index === 1) {
        options[3].children[0].children.push({
          label: '子子选项-' + index,
          value: 'value30-' + index,
          disabled: true
        });
      } else {
        options[3].children[0].children.push({
          label: '子子选项-' + index,
          value: 'value30-' + index
        });
      }
    }
    this.options = options;
  }
}
</script>