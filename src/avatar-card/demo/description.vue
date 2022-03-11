<template>
  <ul>
    <li>
      <h4>通过属性展示描述信息</h4>
      <tm-avatar-card title="我是标题信息" description="这是描述信息" />
    </li>
    <li>
      <h4>通过插槽展示描述信息</h4>
      <tm-avatar-card title="我是标题信息">
        <template #description>
          <span class="description">我是通过插槽来展示描述信息</span>
        </template>
      </tm-avatar-card>
    </li>
    <li>
      <h4>隐藏微信图标</h4>
      <tm-avatar-card title="我是标题信息" hide-wechat-icon description="这是描述信息这是描述信息" />
    </li>
  </ul>
</template>

<style lang="less" scoped>
@import "./demo.less";
ul {
  li{
    margin-right: 100px;

    &:last-child{
      width: 200px;
    }
  }
}

.description {
  padding: 0 4px;
  font-size: 12px;
  background-color: #eee;
  border-radius: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>