<template>
  <div class="wrap">
    <div>
      <p class="desc">父子关联</p>
      <tm-cascader
        :options="options"
        :props="props"
        collapse-tags
        clearable
        @change="handleChange"
      />
    </div>
    <div class="bar"></div>
    <div>
      <p class="desc">父子不关联</p>
      <tm-cascader
        :options="options"
        :props="props1"
        collapse-tags
        clearable
        @change="handleChange"
      />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      options: [],
      props: {
        multiple: true,
        checkStrictly: false
      },
      props1: {
        multiple: true,
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
  },
  methods: {
    handleChange (value) {
      console.log('change', value);
    }
  }
}
</script>
<style lang="less" scoped>
.wrap {
  display: flex;
  justify-content: space-around;
  padding: 10px 20px;
  text-align: center;

  .bar {
    border-right: 1px solid #ddd;
  }

  .desc {
    margin-bottom: 10px;
    color: #858985;
  }
}
</style>