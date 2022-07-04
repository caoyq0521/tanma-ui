# 更新日志

### 介绍

tanma design 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布节奏

- 修订号：每周发布，包含新特性和问题修复。

- 次版本号：每隔一至二个月发布，包含新特性和较大的功能更新，向下兼容。

- 主版本号：无固定发布时间，包含不兼容更新。

## 更新内容

### v1.1.13

`2022-07-04`

#### Bug Fixes

- v-title: 优化。

### v1.1.12

`2022-07-04`

#### Bug Fixes

- message: 调整高度。

- v-title: 优化。

### v1.1.11

`2022-06-29`

#### Bug Fixes

- steps: 水平方向的步骤条文字高亮。

- dialog: 调整样式。

### v1.1.10

`2022-05-26`

#### Feature

- avatar: 新增goods类型头像。

#### Bug Fixes

- pagination: 处理ling-height被覆盖的问题。

- 样式: 调整font-family。

### v1.1.9

`2022-05-13`

#### 新组件

- block: 带标题的块内容。

### v1.1.8

`2022-05-12`

#### Bug Fixes

- tabs: 修复翻页按钮消失时，选项位置不正确问题。


### v1.1.7

`2022-05-10`

#### Bug Fixes

- tree: 处理搜索过滤时虚拟列表显示不全问题。

#### Feature

- tree: 调整虚拟列表默认高度为300。

### v1.1.6

`2022-04-28`

#### Bug Fixes

- tip: 处理文字行高问题以及调整类名。

### v1.1.5

`2022-04-28`

#### Bug Fixes

- tip: 处理文字行高问题。

- avatarCard: 处理默认微信图标未显示问题。

### v1.1.4

`2022-04-25`

#### Feature

- message: 调整宽度。

### v1.1.3

`2022-04-25`

#### Feature

- message: 提示信息样式调整，如果想修改样式必须手动修改less或者css变量。

### v1.1.2

`2022-04-25`

#### Feature

- message: 增加dangerouslyUseHTMLString参数。

### v1.1.1

`2022-04-22`

#### Feature

- tagPro: 增加icon插槽。

#### Bug Fixes

- message: 修改message层级低的问题。

- dataRange: 修改shortcutsEnum传参类型。

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
