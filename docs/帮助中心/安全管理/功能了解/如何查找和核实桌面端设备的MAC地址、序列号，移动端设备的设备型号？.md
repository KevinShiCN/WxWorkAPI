---
title: "如何查找和核实桌面端设备的MAC地址、序列号，移动端设备的设备型号？"
source: "https://open.work.weixin.qq.com/help2/pc/19759"
crawl_date: "2026-03-26"
---

# 如何查找和核实桌面端设备的MAC地址、序列号，移动端设备的设备型号？

收到了管理员邀请我确认设备归属的通知，如何核实当前设备是否为需要确认的设备？本文将针对不同操作系统，介绍查找通知中信息的方式，方便进行设备核实。

### [](https://open.work.weixin.qq.com)一、Mac

1、序列号：关于本机->序列号
2、MAC地址
**方式一（推荐）**：系统偏好设置->网络中->选择网络类型（推荐以太网/Wi-Fi/雷雳网桥）->高级->MAC地址
**方式二（推荐）**：终端->输入命令【ifconfig -a】->根据使用的网络类型（如WLAN、以太网）查看ether字段

### [](https://open.work.weixin.qq.com)二、Windows

1、MAC地址
**方式一（推荐）**：网络和Internet->选择网络类型（如WLAN、以太网）->硬件属性—>物理地址（MAC）
**方式二**：快捷键【win+R】打开运行窗口->输入命令【cmd】打开命令提示符->输入命令【ipconfig/all】->根据使用的网络类型（如WLAN、以太网）查看对应的物理地址（MAC）

2、主板UUID
快捷键【win+R】打开运行窗口->输入命令【cmd】打开命令提示符->输入命令【wmic csproduct get uuid】即可查看UUID。

3、硬盘序列号
快捷键【win+R】打开运行窗口->输入命令【cmd】打开命令提示符->输入命令【wmic diskdrive get serialnumber, mediatype】->mediatype为“Fixed hard disk media”为所需的固定硬盘序列号。

### [](https://open.work.weixin.qq.com)三、iOS/iPadOS

设备型号查找方式：设置->通用->关于本机->型号名称。

### [](https://open.work.weixin.qq.com)四、Android

设备型号查找方式：设置->关于手机，不同品牌手机设备型号的名称不同，例如，华为叫“型号代码”，小米叫“认证型号”，索尼叫“型号”。
