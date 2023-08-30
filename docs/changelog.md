# 更新日志

### 介绍

tanma design 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布节奏

- 修订号：每周发布，包含新特性和问题修复。

- 次版本号：每隔一至二个月发布，包含新特性和较大的功能更新，向下兼容。

- 主版本号：无固定发布时间，包含不兼容更新。

## 更新内容

### v1.1.32

`2023-04-11`

#### Bug Fixes

- dialog: dialog打开时重置loading状态

### v1.1.31

`2023-02-13`

#### Bug Fixes

- button：: line-height

### v1.1.30

`2023-02-13`

#### Bug Fixes

- collapseText: 处理text文字改变，初始化问题

- button：: 更安全的line-height

### v1.1.29

`2023-02-07`

#### Bug Fixes

- vTitle: 处理超出边界问题

### v1.1.27

`2023-01-13`

#### Bug Fixes

- button: 添加样式 line-height: 1

### v1.1.26

`2022-12-15`

#### Bug Fixes

- upload: 修改多文件上传初始化未显示上传按钮

### v1.1.25

`2022-12-06`

#### Bug Fixes

- upload: 修改多文件上传达到限制数量后隐藏上传按钮，同时删除了文件交互动画

### v1.1.24

`2022-11-24`

#### Bug Fixes

- dataRange: 处理时间快捷项获取时间有误的问题

### v1.1.23

`20222-11-22`

#### Bug Fixes

- 所有文件夹名转驼峰。

### v1.1.22

`2022-11-22`

#### Bug Fixes

- tagCombo、tagPro、tagGroup、vTitle转为tag-combo、tag-pro、tag-group、v-title。

### v1.1.21

`2022-11-21`

#### Feature

- Button: 修改默认字体颜色为#000
- Dialog: 修改footer按钮最小宽度为70px

### v1.1.20

`2022-11-16`

#### Bug Fixes

- upload: 处理删除所有上传文件后，依然有文件显示的问题。

### v1.1.19

`2022-11-09`

#### Bug Fixes

- upload: 处理多张图片上传压缩报错问题。

#### Feature

- title: titleSize默认值由14px改为16px。

- vTitle: 增加max-height，避免内容过多显示问题。

### v1.1.18

`2022-10-25`

#### Bug Fixes

- tabs: 调整marginRight为24，调整underline模式line-height为40px。

- block: 调整块间距为8px，调整padding为15px, 白底块圆角为5px，标题文字为14px。

- 修改babel配置。

### v1.1.17

`2022-09-05`

#### Feature

- button: 补充原生类型文档。

### v1.1.16

`2022-09-05`

#### Feature

- button: 新增原始类型。

### v1.1.15

`2022-08-26`

#### Feature

- dialog: 新增`beforeOk`参数。

### v1.1.14

`2022-07-04`

#### Bug Fixes

- v-title: 优化。

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
