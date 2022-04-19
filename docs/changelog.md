# 更新日志

### 介绍

tanma design 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布节奏

- 修订号：每周发布，包含新特性和问题修复。

- 次版本号：每隔一至二个月发布，包含新特性和较大的功能更新，向下兼容。

- 主版本号：无固定发布时间，包含不兼容更新。


## 更新内容

### v1.1.0

`2022-04-19`

#### 新组件

- buttonTabs: 基于button按钮定制的按钮组。

- empty: 空状态时的占位提示。

- message: 常用于主动操作后的反馈提示。

- timeLine: 对一系列信息进行时间排序时，垂直地展示。

- steps: 引导用户按照流程完成任务的分步导航条。

#### Feature

- collapseText: 新增展开/收起的动画。

- dataRange: 新增快捷项手动配置。

- tagCombo: 新增 trigger 参数，允许控制查看全部标签触发方式。

- vTitle: 优化提示内容插入位置，默认到document.body下

#### Bug Fixes

- upload: 处理上传文件类型icon显示不正确问题。

- upload: 处理背景定位问题。