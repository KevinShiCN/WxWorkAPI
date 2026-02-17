---
title: "微信小程序API支持情况"
source: "https://developer.work.weixin.qq.com/document/path/91503"
last_update: "2022/06/10"
crawl_date: "2026-02-17"
---

# 微信小程序API支持情况

## 基础

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.env | 环境变量 | 支持 |
| wx.canIUse | 判断小程序的API，回调，参数，组件等是否在当前版本可用 | 支持 |

### 系统

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.openSystemBluetoothSetting | 跳转系统蓝牙设置页 | 不支持 |
| wx.openAppAuthorizeSetting | 跳转系统微信授权管理页 | 不支持 |
| wx.getWindowInfo | 获取窗口信息 | 不支持 |
| wx.getSystemSetting | 获取设备设置 | 不支持 |
| wx.getSystemInfoSync | wx.getSystemInfo 的同步版本 | 支持 |
| wx.getSystemInfoAsync | 异步获取系统信息。需要一定的微信客户端版本支持，在不支持的客户端上，会使用同步实现来返回。 | 仅移动端支持 |
| wx.getSystemInfo | 获取系统信息 | 支持 |
| wx.getDeviceInfo | 获取设备基础信息 | 仅安卓支持 |
| wx.getAppBaseInfo | 获取微信APP基础信息 | 不支持 |
| wx.getAppAuthorizeSetting | 获取微信APP授权设置 | 不支持 |

### 更新

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.updateWeChatApp | 更新客户端版本。当判断用户小程序所在客户端版本过低时，可使用该接口跳转到更新微信页面。 | 支持 |
| wx.getUpdateManager | 获取全局唯一的版本更新管理器，用于管理小程序更新 | 支持 |

#### UpdateManager

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| UpdateManager.applyUpdate | 强制小程序重启并使用新版本 | win不支持 |
| UpdateManager.onCheckForUpdate | 监听向微信后台请求检查更新结果事件 | win不支持 |
| UpdateManager.onUpdateFailed | 监听小程序更新失败事件 | win不支持 |
| UpdateManager.onUpdateReady | 监听小程序有版本更新事件 | win不支持 |

### 小程序

#### 生命周期

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.getLaunchOptionsSync | 获取小程序启动时的参数 | 支持 |
| wx.getEnterOptionsSync | 获取本次小程序启动时的参数。如果当前是冷启动，则返回值与 App.onLaunch 的回调参数一致；如果当前是热启动，则返回值与 App.onShow 一致。 | 支持 |

#### 应用级事件

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.onUnhandledRejection | 监听未处理的 Promise 拒绝事件 | 支持 |
| wx.onThemeChange | 监听系统主题改变事件 | 不支持 |
| wx.onPageNotFound | 监听小程序要打开的页面不存在事件 | 支持 |
| wx.onError | 监听小程序错误事件 | 支持 |
| wx.onAppShow | 监听小程序切前台事件 | 支持 |
| wx.onAppHide | 监听小程序切后台事件 | 支持 |
| wx.offUnhandledRejection | 取消监听未处理的 Promise 拒绝事件 | mac不支持 |
| wx.offThemeChange | 取消监听系统主题改变事件 | 不支持 |
| wx.offPageNotFound | 取消监听小程序要打开的页面不存在事件 | 支持 |
| wx.offError | 取消监听小程序错误事件 | 支持 |
| wx.offAppShow | 取消监听小程序切前台事件 | 支持 |
| wx.offAppHide | 取消监听小程序切后台事件 | 支持 |

### 调试

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.setEnableDebug | 设置是否打开调试开关 | win不支持 |
| wx.getRealtimeLogManager | 获取实时日志管理器对象 | 支持 |
| wx.getLogManager | 获取日志管理器对象 | 支持 |

#### console

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| console.debug | 向调试面板中打印 debug 日志 | 支持 |
| console.error | 向调试面板中打印 error 日志 | 支持 |
| console.group | 在调试面板中创建一个新的分组 | 不支持 |
| console.groupEnd | 结束由 console.group 创建的分组 | 不支持 |
| console.info | 向调试面板中打印 info 日志 | 支持 |
| console.log | 向调试面板中打印 log 日志 | 支持 |
| console.warn | 向调试面板中打印 warn 日志 | 支持 |

#### LogManager

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| LogManager.debug | 写 debug 日志 | 支持 |
| LogManager.info | 写 info 日志 | 支持 |
| LogManager.log | 写 log 日志 | 支持 |
| LogManager.warn | 写 warn 日志 | 支持 |

#### RealtimeLogManager

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| RealtimeLogManager.addFilterMsg | 添加过滤关键字，暂不支持在插件使用 | 支持 |
| RealtimeLogManager.error | 写 error 日志，暂不支持在插件使用 | 支持 |
| RealtimeLogManager.getCurrentState | 实时日志会将一定时间间隔内缓存的日志聚合上报 | 不支持 |
| RealtimeLogManager.in | 设置实时日志page参数所在的页面，暂不支持在插件使用 | 支持 |
| RealtimeLogManager.info | 写 info 日志，暂不支持在插件使用 | 支持 |
| RealtimeLogManager.setFilterMsg | 写 info 日志，暂不支持在插件使用 | 支持 |
| RealtimeLogManager.tag | 设置过滤关键字，暂不支持在插件使用 | 仅移动端支持 |
| RealtimeLogManager.warn | 写 warn 日志，暂不支持在插件使用 | 支持 |

#### RealtimeTagLogManager

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| RealtimeTagLogManager.addFilterMsg | 添加过滤关键字 | 仅移动端支持 |
| RealtimeTagLogManager.error | 写 error 日志 | 仅移动端支持 |
| RealtimeTagLogManager.info | 写 info 日志 | 仅移动端支持 |
| RealtimeTagLogManager.setFilterMsg | 设置过滤关键字 | 仅移动端支持 |
| RealtimeTagLogManager.warn | 写 warn 日志 | 仅移动端支持 |

### 性能

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.reportPerformance | 小程序测速上报 | 支持 |
| wx.getPerformance | 获取当前小程序性能相关的信息 | 支持 |

#### EntryList

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| EntryList.getEntries | 该方法返回当前列表中的所有性能数据 | 支持 |
| EntryList.getEntriesByName | 获取当前列表中所有指定名称且指定类型的性能数据 | 支持 |
| EntryList.EntryList.getEntriesByType | 获取当前列表中所有指定的性能数据 | 支持 |

#### Performance

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| Performance.createObserver | 创建全局性能事件监听器 | 支持 |
| Performance.getEntries | 该方法返回当前缓冲区中的所有性能数据 | 支持 |
| Performance.getEntriesByName | 获取当前缓冲区所有指定名称且指定类型的性能数据 | 支持 |
| Performance.getEntriesByType | 获取当前缓冲区中所有指定的性能数据 | 支持 |
| Performance.setBufferSize | 设置缓冲区大小， 默认缓冲 30 条性能数据 | 支持 |

#### PerformanceObserver

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| PerformanceObserver.disconnect | 停止监听 | 支持 |
| PerformanceObserver.observe | 开始监听 | 支持 |

### 加密

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.getUserCryptoManager | 获取用户加密模块 | 仅安卓支持 |

#### UserCryptoManager

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| UserCryptoManager.getLatestUserKey | 获取最新的用户加密密钥 | 仅安卓支持 |
| UserCryptoManager.getRandomValues | 获取密码学安全随机数 | 不支持 |

 

## 路由

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.switchTab | 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 | 支持 |
| wx.reLaunch | 关闭所有页面，打开到应用内的某个页面 | 支持 |
| wx.redirectTo | 关闭当前页面，跳转到应用内的某个页面 | 支持 |
| wx.navigateTo | 保留当前页面，跳转到应用内的某个页面 | 支持 |
| wx.navigateBack | 关闭当前页面，返回上一页面或多级页面 | 支持 |

### EventChannel

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| EventChannel.emit | 触发一个事件 | 支持 |
| EventChannel.off | 取消监听一个事件 | 支持 |
| EventChannel.on | 持续监听一个事件 | 支持 |
| EventChannel.once | 监听一个事件一次，触发后失效 | 支持 |

## 跳转

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.openEmbeddedMiniProgram | 打开半屏小程序 | 不支持 |
| wx.navigateToMiniProgram | 打开另一个小程序 | 支持 |
| wx.navigateBackMiniProgram | 返回到上一个小程序 | 支持 |
| wx.exitMiniProgram | 退出当前小程序 | 仅安卓支持 |

## 转发

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.updateShareMenu | 更新转发属性 | 不支持withShareTicket 参数，win不支持 |
| wx.showShareMenu | 显示当前页面的转发按钮 | 不支持withShareTicket 参数，win不支持 |
| wx.showShareImageMenu | 打开分享图片弹窗，可以将图片发送给朋友、收藏或下载 | 不支持 |
| wx.shareFileMessage | 转发文件到聊天 | 不支持 |
| wx.onCopyUrl | 监听用户点击右上角菜单的「复制链接」按钮时触发的事件 | 不支持 |
| wx.offCopyUrl | 取消监听用户点击右上角菜单的「复制链接」按钮时触发的事件 | 不支持 |
| wx.hideShareMenu | 隐藏转发按钮 | win不支持 |
| wx.getShareInfo | 获取转发详细信息 | 不支持 |
| wx.authPrivateMessage | 验证私密消息 | 不支持 |

## 界面

### 交互

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.showToast | 显示消息提示框 | 支持 |
| wx.showModal | 显示模态对话框 | 支持 |
| wx.showLoading | 显示 loading 提示框 | 支持 |
| wx.showActionSheet | 显示操作菜单 | 支持 |
| wx.hideToast | 隐藏消息提示框 | 支持 |
| wx.hideLoading | 隐藏 loading 提示框 | 支持 |
| wx.enableAlertBeforeUnload | 开启小程序页面返回询问对话框 | 不支持 |
| wx.disableAlertBeforeUnload | 关闭小程序页面返回询问对话框 | 不支持 |

### 导航栏

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.showNavigationBarLoading | 在当前页面显示导航条加载动画 | 支持 |
| wx.setNavigationBarTitle | 动态设置当前页面的标题 | 支持 |
| wx.setNavigationBarColor | 设置页面导航条颜色 | 支持 |
| wx.hideNavigationBarLoading | 在当前页面隐藏导航条加载动画 | 支持 |
| wx.hideHomeButton | 隐藏返回首页按钮 | win不支持 |

### 背景

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.setBackgroundTextStyle | 动态设置下拉背景字体、loading 图的样式 | 支持 |
| wx.setBackgroundColor | 动态设置窗口的背景色 | 支持 |

### Tab Bar

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.showTabBarRedDot | 显示 tabBar 某一项的右上角的红点 | win不支持 |
| wx.showTabBar | 显示 tabBar | 支持 |
| wx.setTabBarStyle | 动态设置 tabBar 的整体样式 | 支持 |
| wx.setTabBarItem | 动态设置 tabBar 某一项的内容 | 支持 |
| wx.setTabBarBadge | 为 tabBar 某一项的右上角添加文本 | 支持 |
| wx.removeTabBarBadge | 移除 tabBar 某一项右上角的文本 | 支持 |
| wx.hideTabBarRedDot | 隐藏 tabBar 某一项的右上角的红点 | win不支持 |
| wx.hideTabBar | 隐藏 tabBar | 支持 |

### 字体

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.loadFontFace | 动态加载网络字体 | 支持 |

### 下拉刷新

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.stopPullDownRefresh | 停止当前页面下拉刷新 | 支持 |
| wx.startPullDownRefresh | 开始下拉刷新 | 支持 |

### 滚动

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.pageScrollTo | 将页面滚动到目标位置 | 支持 |

### 动画

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.createAnimation | 创建一个动画实例 animation | 支持 |

#### Animation

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| Animation.backgroundColor | 设置背景色 | 支持 |
| Animation.bottom | 设置 bottom 值 | 支持 |
| Animation.export | 导出动画队列 | 支持 |
| Animation.height | 设置高度 | 支持 |
| Animation.left | 设置 left 值 | 支持 |
| Animation.matrix | 同 transform-function matrix | 支持 |
| Animation.matrix3d | 同 transform-function matrix3d | 支持 |
| Animation.opacity | 设置透明度 | 支持 |
| Animation.right | 设置 right 值 | 支持 |
| Animation.rotate | 从原点顺时针旋转一个角度 | 支持 |
| Animation.rotate3d | 从 X 轴顺时针旋转一个角度 | 支持 |
| Animation.rotateX | 从 X 轴顺时针旋转一个角度 | 支持 |
| Animation.rotateY | 从 Y 轴顺时针旋转一个角度 | 支持 |
| Animation.rotateZ | 从 Z 轴顺时针旋转一个角度 | 支持 |
| Animation.scale | 缩放 | 支持 |
| Animation.scale3d | 缩放 | 支持 |
| Animation.scaleX | 缩放 X 轴 | 支持 |
| Animation.scaleY | 缩放 Y 轴 | 支持 |
| Animation.scaleZ | 缩放 Z 轴 | 支持 |
| Animation.skew | 对 X、Y 轴坐标进行倾斜 | 支持 |
| Animation.skewX | 对 X 轴坐标进行倾斜 | 支持 |
| Animation.skewY | 对 Y 轴坐标进行倾斜 | 支持 |
| Animation.step | 表示一组动画完成 | 支持 |
| Animation.top | 设置 top 值 | 支持 |
| Animation.translate | 平移变换 | 支持 |
| Animation.translate3d | 对 xyz 坐标进行平移变换 | 支持 |
| Animation.translateX | 对 X 轴平移 | 支持 |
| Animation.translateY | 对 Y 轴平移 | 支持 |
| Animation.translateZ | 对 Z 轴平移 | 支持 |
| Animation.width | 设置宽度 | 支持 |

### 置顶

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.setTopBarText | 动态设置置顶栏文字内容 | 不支持 |

### 自定义组件

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.nextTick | 延迟一部分操作到下一个时间片再执行 | 支持 |

### 菜单

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.getMenuButtonBoundingClientRect | 获取菜单按钮（右上角胶囊按钮）的布局位置信息 | 支持 |

### 窗口

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.onWindowResize | 监听窗口尺寸变化事件 | 不支持 |
| wx.offWindowResize | 取消监听窗口尺寸变化事件 | 不支持 |
| wx.setWindowSize | 设置窗口大小 | 不支持 |

## 网络

### 发起请求

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.request | 发起 HTTPS 网络请求 | 支持 |

#### RequestTask

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| RequestTask.abort | 中断请求任务 | 支持 |
| RequestTask.offChunkReceived | 取消监听 Transfer-Encoding Chunk Received 事件 | 不支持 |
| RequestTask.onChunkReceived | 监听 Transfer-Encoding Chunk Received 事件 | 不支持 |
| RequestTask.onHeadersReceived | 监听 HTTP Response Header 事件 | 支持 |

### 下载

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.downloadFile | 下载文件资源到本地 | 支持 |

### 上传

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.uploadFile | 将本地资源上传到服务器 | 支持 |

### WebSocket

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.sendSocketMessage | 通过 WebSocket 连接发送数据 | 支持 |
| wx.onSocketOpen | 监听 WebSocket 连接打开事件 | 支持 |
| wx.onSocketMessage | 监听 WebSocket 接受到服务器的消息事件 | 支持 |
| wx.onSocketError | 监听 WebSocket 错误事件 | 支持 |
| wx.onSocketClose | 监听 WebSocket 连接关闭事件 | 支持 |
| wx.connectSocket | 创建一个 WebSocket 连接 | 支持 |
| wx.closeSocket | 关闭 WebSocket 连接 | 支持 |

#### SocketTask

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| SocketTask.close | 关闭 WebSocket 连接 | 支持 |
| SocketTask.onClose | 监听 WebSocket 连接关闭事件 | 支持 |
| SocketTask.onError | 监听 WebSocket 错误事件 | 支持 |
| SocketTask.onMessage | 监听 WebSocket 接受到服务器的消息事件 | 支持 |
| SocketTask.onOpen | 监听 WebSocket 连接打开事件 | 支持 |
| SocketTask.send | 通过 WebSocket 连接发送数据 | 支持 |

### mDNS

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.stopLocalServiceDiscovery | 停止搜索 mDNS 服务 | 不支持 |
| wx.startLocalServiceDiscovery | 开始搜索局域网下的 mDNS 服务 | 不支持 |
| wx.onLocalServiceResolveFail | 监听 mDNS 服务解析失败的事件 | 不支持 |
| wx.onLocalServiceLost | 监听 mDNS 服务离开的事件 | 不支持 |
| wx.onLocalServiceFound | 监听 mDNS 服务发现的事件 | 不支持 |
| wx.onLocalServiceDiscoveryStop | 监听 mDNS 服务停止搜索的事件 | 不支持 |
| wx.offLocalServiceResolveFail | 取消监听 mDNS 服务解析失败的事件 | 不支持 |
| wx.offLocalServiceLost | 取消监听 mDNS 服务离开的事件 | 不支持 |
| wx.offLocalServiceFound | 取消监听 mDNS 服务发现的事件 | 不支持 |
| wx.offLocalServiceDiscoveryStop | 取消监听 mDNS 服务停止搜索的事件 | 不支持 |

### TCP通信

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.createTCPSocket | 创建一个 TCP Socket 实例 | 不支持 |

#### TCPSocket

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| TCPSocket.close | 关闭连接 | 不支持 |
| TCPSocket.connect | 在给定的套接字上启动连接 | 不支持 |
| TCPSocket.offClose | 取消监听一旦 socket 完全关闭就发出该事件 | 不支持 |
| TCPSocket.offConnect | 取消监听当一个 socket 连接成功建立的时候触发该事件 | 不支持 |
| TCPSocket.offError | 取消监听当错误发生时触发 | 不支持 |
| TCPSocket.offMessage | 取消监听当接收到数据的时触发该事件 | 不支持 |
| TCPSocket.onClose | 监听一旦 socket 完全关闭就发出该事件 | 不支持 |
| TCPSocket.onConnect | 监听当一个 socket 连接成功建立的时候触发该事件 | 不支持 |
| TCPSocket.onError | 监听当错误发生时触发 | 不支持 |
| TCPSocket.onMessage | 监听当接收到数据的时触发该事件 | 不支持 |
| TCPSocket.write | 在 socket 上发送数据 | 不支持 |

### UDP 通信

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.createUDPSocket | 创建一个 UDP Socket 实例 | 仅移动端支持 |

#### UDPSocket

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| UDPSocket.bind | 绑定一个系统随机分配的可用端口，或绑定一个指定的端口号 | 仅移动端支持 |
| UDPSocket.close | 关闭 UDP Socket 实例，相当于销毁 | 仅移动端支持 |
| UDPSocket.connect | 预先连接到指定的 IP 和 port，需要配合 write 方法一起使用 | 仅移动端支持 |
| UDPSocket.offClose | 取消监听关闭事件 | 仅移动端支持 |
| UDPSocket.offError | 取消监听错误事件 | 仅移动端支持 |
| UDPSocket.offListening | 取消监听开始监听数据包消息的事件 | 仅移动端支持 |
| UDPSocket.offMessage | 取消监听收到消息的事件 | 仅移动端支持 |
| UDPSocket.onClose | 监听关闭事件 | 仅移动端支持 |
| UDPSocket.onError | 监听错误事件 | 仅移动端支持 |
| UDPSocket.onListening | 监听开始监听数据包消息的事件 | 仅移动端支持 |
| UDPSocket.onMessage | 监听收到消息的事件 | 仅移动端支持 |
| UDPSocket.send | 向指定的 IP 和 port 发送消息 | 仅移动端支持 |
| UDPSocket.setTTL | 设置 IP_TTL 套接字选项 | 仅安卓支持 |
| UDPSocket.write | 用法与 send 方法相同 | 仅移动端支持 |

## 支付

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.requestPayment | 发起微信支付 | 支持 |
| wx.requestOrderPayment | 创建自定义版交易组件订单，并发起支付 | 仅移动端支持 |

## 数据缓存

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.setStorageSync | wx.setStorage 的同步版本 | 支持 |
| wx.setStorage | 将数据存储在本地缓存中指定的 key 中 | 支持 |
| wx.revokeBufferURL | 根据 URL 销毁存在内存中的数据 | mac不支持 |
| wx.removeStorageSync | wx.removeStorage 的同步版本 | 支持 |
| wx.removeStorage | 从本地缓存中移除指定 key | 支持 |
| wx.getStorageSync | wx.getStorage 的同步版本 | 支持 |
| wx.getStorageInfoSync | wx.getStorageInfo 的同步版本 | 支持 |
| wx.getStorageInfo | 异步获取当前storage的相关信息 | 支持 |
| wx.getStorage | 从本地缓存中异步获取指定 key 的内容 | 支持 |
| wx.createBufferURL | 根据传入的 buffer 创建一个唯一的 URL 存在内存中 | mac不支持 |
| wx.clearStorageSync | wx.clearStorage 的同步版本 | 支持 |
| wx.clearStorage | 清理本地数据缓存 | 支持 |

## 数据分析

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.reportMonitor | 自定义业务数据监控上报接口 | 支持 |
| wx.reportEvent | 事件上报 | 不支持 |
| wx.reportAnalytics | 自定义分析数据上报接口 | 支持 |
| wx.getExptInfoSync | 给定实验参数数组，获取对应的实验参数值 | 仅移动端支持 |

## 画布

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.createCanvasContext | 创建 canvas 的绘图上下文 CanvasContext 对象 | 支持 |
| wx.canvasToTempFilePath | 把当前画布指定区域的内容导出生成指定大小的图片 | 支持 |
| wx.canvasPutImageData | 将像素数据绘制到画布 | win不支持 |
| wx.canvasGetImageData | 获取 canvas 区域隐含的像素数据 | 支持 |

### CanvasContext

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| CanvasContext.arc | 创建一条弧线 | 支持 |
| CanvasContext.arcTo | 根据控制点和半径绘制圆弧路径 | 支持 |
| CanvasContext.beginPath | 开始创建一个路径 | 支持 |
| CanvasContext.bezierCurveTo | 创建三次方贝塞尔曲线路径 | 支持 |
| CanvasContext.clearRect | 清除画布上在该矩形区域内的内容 | 支持 |
| CanvasContext.clip | 从原始画布中剪切任意形状和尺寸 | 支持 |
| CanvasContext.closePath | 关闭一个路径 | 支持 |
| CanvasContext.createCircularGradient | 创建一个圆形的渐变颜色 | 支持 |
| CanvasContext.createLinearGradient | 创建一个线性的渐变颜色 | 支持 |
| CanvasContext.createPattern | 对指定的图像创建模式的方法，可在指定的方向上重复元图像 | 支持 |
| CanvasContext.draw | 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中 | 支持 |
| CanvasContext.drawImage | 绘制图像到画布 | 支持 |
| CanvasContext.fill | 对当前路径中的内容进行填充 | 支持 |
| CanvasContext.fillRect | 填充一个矩形 | 支持 |
| CanvasContext.fillText | 在画布上绘制被填充的文本 | 支持 |
| CanvasContext.lineTo | 增加一个新点，然后创建一条从上次指定点到目标点的线 | 支持 |
| CanvasContext.measureText | 测量文本尺寸信息 | 支持 |
| CanvasContext.moveTo | 把路径移动到画布中的指定点，不创建线条 | 支持 |
| CanvasContext.quadraticCurveTo | 创建二次贝塞尔曲线路径 | 支持 |
| CanvasContext.rect | 创建一个矩形路径 | 支持 |
| CanvasContext.restore | 恢复之前保存的绘图上下文 | 支持 |
| CanvasContext.rotate | 以原点为中心顺时针旋转当前坐标轴 | 支持 |
| CanvasContext.save | 保存绘图上下文 | 支持 |
| CanvasContext.scale | 在调用后，之后创建的路径其横纵坐标会被缩放 | 支持 |
| CanvasContext.setFillStyle | 设置填充色 | 支持 |
| CanvasContext.setFontSize | 设置字体的字号 | 支持 |
| CanvasContext.setGlobalAlpha | 设置全局画笔透明度 | 支持 |
| CanvasContext.setLineCap | 设置线条的端点样式 | 支持 |
| CanvasContext.setLineDash | 设置虚线样式 | 支持 |
| CanvasContext.setLineJoin | 设置线条的交点样式 | 支持 |
| CanvasContext.setLineWidth | 设置线条的宽度 | 支持 |
| CanvasContext.setMiterLimit | 设置最大斜接长度 | 支持 |
| CanvasContext.setShadow | 设定阴影样式 | 支持 |
| CanvasContext.setStrokeStyle | 设置描边颜色 | 支持 |
| CanvasContext.setTextAlign | 设置文字的对齐 | 支持 |
| CanvasContext.setTextBaseline | 设置文字的竖直对齐 | 支持 |
| CanvasContext.setTransform | 使用矩阵重新设置（覆盖）当前变换的方法 | 支持 |
| CanvasContext.stroke | 画出当前路径的边框 | 支持 |
| CanvasContext.strokeRect | 画一个矩形(非填充) | 支持 |
| CanvasContext.strokeText | 给定的 (x, y) 位置绘制文本描边的方法 | 支持 |
| CanvasContext.transform | 使用矩阵多次叠加当前变换的方法 | 支持 |
| Color | 颜色 | 支持 |
| Image | 图片对象 | 支持 |
| ImageData | ImageData对象 | 支持 |

## 媒体

### 地图

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.createMapContext | 创建 map 上下文 MapContext 对象 | 支持 |

#### MapContext

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| MapContext.addVisualLayer | 添加可视化图层 | 不支持 |
| MapContext.getCenterLocation | 获取当前地图中心的经纬度 | 支持 |
| MapContext.getScale | 获取当前地图的缩放级别 | 支持 |
| MapContext.moveToLocation | 将地图中心移动到当前定位点 | 支持 |
| MapContext.removeVisualLayer | 移除可视化图层 | 不支持 |
| MapContext.translateMarker | 平移marker，带动画 | 支持 |

### 图片

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.saveImageToPhotosAlbum | 保存图片到系统相册 | 支持 |
| wx.previewMedia | 预览图片和视频 | 不支持 |
| wx.previewImage | 在新页面中全屏预览图片 | 支持 |
| wx.getImageInfo | 获取图片信息 | 支持 |
| wx.compressImage | 压缩图片接口，可选压缩质量 | 仅移动端支持 |
| wx.chooseMessageFile | 从客户端会话选择文件 | 不支持 |
| wx.chooseImage | 从本地相册选择图片或使用相机拍照 | 支持 |

### 视频

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.saveVideoToPhotosAlbum | 保存视频到系统相册 | 支持 |
| wx.openVideoEditor | 打开视频编辑器 | 不支持 |
| wx.getVideoInfo | 获取视频详细信息 | 仅安卓和win支持 |
| wx.createVideoContext | 创建 video 上下文 VideoContext 对象 | 支持 |
| wx.compressVideo | 压缩视频接口 | 仅安卓支持 |
| wx.chooseVideo | 拍摄视频或从手机相册中选视频 | 支持 |
| wx.chooseMedia | 拍摄或从手机相册中选择图片或视频 | 仅安卓支持 |

#### VideoContext

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| VideoContext.exitBackgroundPlayback | 退出后台音频播放模式 | 不支持 |
| VideoContext.exitFullScreen | 退出全屏 | 支持 |
| VideoContext.exitPictureInPicture | 退出小窗 | 支持 |
| VideoContext.hideStatusBar | 隐藏状态栏，仅在iOS全屏下有效 | 支持 |
| VideoContext.pause | 暂停视频 | 支持 |
| VideoContext.play | 播放视频 | 支持 |
| VideoContext.playbackRate | 设置倍速播放 | 支持 |
| VideoContext.requestBackgroundPlayback | 进入后台音频播放模式 | 不支持 |
| VideoContext.requestFullScreen | 进入全屏 | 支持 |
| VideoContext.seek | 跳转到指定位置 | 支持 |
| VideoContext.sendDanmu | 发送弹幕 | win不支持 |
| VideoContext.showStatusBar | 显示状态栏，仅在iOS全屏下有效 | 支持 |
| VideoContext.stop | 停止视频 | 支持 |

### 音频

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.stopVoice | 结束播放语音 | 支持 |
| wx.setInnerAudioOption | 设置 InnerAudioContext 的播放选项 | 仅移动端支持 |
| wx.playVoice | 开始播放语音 | 支持 |
| wx.pauseVoice | 暂停正在播放的语音 | 支持 |
| wx.getAvailableAudioSources | 获取当前支持的音频输入源 | 仅移动端支持 |
| wx.createWebAudioContext | 创建 WebAudio 上下文 | 不支持 |
| wx.createInnerAudioContext | 创建内部 audio 上下文 InnerAudioContext 对象 | 支持 |
| wx.createAudioContext | 创建 audio 上下文 AudioContext 对象 | 支持 |

#### AudioBuffer

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| AudioBuffer.copyFromChannel | 从AudioBuffer的指定频道复制到数组终端 | 不支持 |
| AudioBuffer.copyToChannel | 从指定数组复制样本到audioBuffer的特定通道 | 不支持 |
| AudioBuffer.getChannelData | 返回一个 Float32Array，包含了带有频道的PCM数据 | 不支持 |

#### AudioContext

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| AudioContext.pause | 暂停音频 | 支持 |
| AudioContext.play | 播放音频 | 支持 |
| AudioContext.seek | 跳转到指定位置 | 支持 |
| AudioContext.setSrc | 设置音频地址 | 支持 |

#### InnerAudioContext

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| InnerAudioContext.destroy | 销毁当前实例 | 支持 |
| InnerAudioContext.offCanplay | 取消监听音频进入可以播放状态的事件 | 支持 |
| InnerAudioContext.offEnded | 取消监听音频自然播放至结束的事件 | 支持 |
| InnerAudioContext.offError | 取消监听音频播放错误事件 | 支持 |
| InnerAudioContext.offPause | 取消监听音频暂停事件 | 支持 |
| InnerAudioContext.offPlay | 取消监听音频播放事件 | 支持 |
| InnerAudioContext.offSeeked | 取消监听音频完成跳转操作的事件 | 支持 |
| InnerAudioContext.offSeeking | 取消监听音频进行跳转操作的事件 | 支持 |
| InnerAudioContext.offStop | 取消监听音频停止事件 | 支持 |
| InnerAudioContext.offTimeUpdate | 取消监听音频播放进度更新事件 | 支持 |
| InnerAudioContext.offWaiting | 取消监听音频加载中事件 | 支持 |
| InnerAudioContext.onCanplay | 监听音频进入可以播放状态的事件 | 支持 |
| InnerAudioContext.onEnded | 监听音频自然播放至结束的事件 | 支持 |
| InnerAudioContext.onError | 监听音频播放错误事件 | 支持 |
| InnerAudioContext.onPause | 监听音频暂停事件 | 支持 |
| InnerAudioContext.onPlay | 监听音频播放事件 | 支持 |
| InnerAudioContext.onSeeked | 监听音频完成跳转操作的事件 | 支持 |
| InnerAudioContext.onSeeking | 监听音频进行跳转操作的事件 | 支持 |
| InnerAudioContext.onStop | 监听音频停止事件 | 支持 |
| InnerAudioContext.onTimeUpdate | 监听音频播放进度更新事件 | 支持 |
| InnerAudioContext.onWaiting | 监听音频加载中事件 | 支持 |
| InnerAudioContext.pause | 暂停 | 支持 |
| InnerAudioContext.play | 播放 | 支持 |
| InnerAudioContext.seek | 跳转到指定位置 | 支持 |
| InnerAudioContext.stop | 停止 | 支持 |

#### WebAudioContext

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| WebAudioContext.close | 关闭WebAudioContext | 不支持 |
| WebAudioContext.createBiquadFilter | 创建一个BiquadFilterNode | 不支持 |
| WebAudioContext.createBuffer | 创建一个AudioBuffer，代表着一段驻留在内存中的短音频 | 不支持 |
| WebAudioContext.createBufferSource | 创建一个BufferSourceNode实例，通过AudioBuffer对象来播放音频数据 | 不支持 |
| WebAudioContext.createChannelMerger | 创建一个ChannelMergerNode | 不支持 |
| WebAudioContext.createChannelSplitter | 创建一个ChannelSplitterNode | 不支持 |
| WebAudioContext.createConstantSource | 创建一个ConstantSourceNode | 不支持 |
| WebAudioContext.createDelay | 创建一个DelayNode | 不支持 |
| WebAudioContext.createDynamicsCompressor | 创建一个DynamicsCompressorNode | 不支持 |
| WebAudioContext.createGain | 创建一个GainNode | 不支持 |
| WebAudioContext.createIIRFilter | 创建一个IIRFilterNode | 不支持 |
| WebAudioContext.createOscillator | 创建一个OscillatorNode | 不支持 |
| WebAudioContext.createPanner | 创建一个PannerNode | 不支持 |
| WebAudioContext.createPeriodicWave | 创建一个PeriodicWaveNode | 不支持 |
| WebAudioContext.createScriptProcessor | 创建一个ScriptProcessorNode | 不支持 |
| WebAudioContext.createWaveShaper | 创建一个WaveShaperNodeNode | 不支持 |
| WebAudioContext.decodeAudioData | 异步解码一段资源为AudioBuffer | 不支持 |
| WebAudioContext.resume | 同步恢复已经被暂停的WebAudioContext上下文 | 不支持 |
| WebAudioContext.suspend | 同步暂停WebAudioContext上下文 | 不支持 |
| WebAudioContextNode | 一类音频处理模块 | 不支持 |

### 背景音频

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.stopBackgroundAudio | 停止播放音乐 | 不支持 |
| wx.seekBackgroundAudio | 控制音乐播放进度 | 不支持 |
| wx.playBackgroundAudio | 使用后台播放器播放音乐 | 不支持 |
| wx.pauseBackgroundAudio | 暂停播放音乐 | 不支持 |
| wx.onBackgroundAudioStop | 监听音乐停止事件 | 不支持 |
| wx.onBackgroundAudioPlay | 监听音乐播放事件 | 不支持 |
| wx.onBackgroundAudioPause | 监听音乐暂停事件 | 不支持 |
| wx.getBackgroundAudioPlayerState | 获取后台音乐播放状态 | 不支持 |
| wx.getBackgroundAudioManager | 获取全局唯一的背景音频管理器 | 不支持 |

#### BackgroundAudioManager

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| BackgroundAudioManager.onCanplay | 监听背景音频进入可播放状态事件 | 部分支持 |
| BackgroundAudioManager.onEnded | 监听背景音频自然播放结束事件 | 部分支持 |
| BackgroundAudioManager.onError | 监听背景音频播放错误事件 | 部分支持 |
| BackgroundAudioManager.onNext | 监听用户在系统音乐播放面板点击下一曲事件（仅iOS） | 部分支持 |
| BackgroundAudioManager.onPause | 监听背景音频暂停事件 | 部分支持 |
| BackgroundAudioManager.onPlay | 监听背景音频播放事件 | 部分支持 |
| BackgroundAudioManager.onPrev | 监听用户在系统音乐播放面板点击上一曲事件（仅iOS） | 部分支持 |
| BackgroundAudioManager.onSeeked | 监听背景音频完成跳转操作事件 | 部分支持 |
| BackgroundAudioManager.onSeeking | 监听背景音频开始跳转操作事件 | 部分支持 |
| BackgroundAudioManager.onStop | 监听背景音频停止事件 | 部分支持 |
| BackgroundAudioManager.onTimeUpdate | 监听背景音频播放进度更新事件 | 部分支持 |
| BackgroundAudioManager.onWaiting | 监听音频加载中事件 | 部分支持 |
| BackgroundAudioManager.pause | 暂停音乐 | 部分支持 |
| BackgroundAudioManager.play | 播放音乐 | 部分支持 |
| BackgroundAudioManager.seek | 跳转到指定位置 | 部分支持 |
| BackgroundAudioManager.stop | 停止音乐 | 部分支持 |

### 实时音视频

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.createLivePusherContext | 创建 live-pusher 上下文 LivePusherContext 对象 | 支持 |
| wx.createLivePlayerContext | 创建 live-player 上下文 LivePlayerContext 对象 | 支持 |

#### LivePlayerContext

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| LivePlayerContext.exitFullScreen | 退出全屏 | 支持 |
| LivePlayerContext.mute | 静音 | 支持 |
| LivePlayerContext.pause | 暂停 | 支持 |
| LivePlayerContext.play | 播放 | 支持 |
| LivePlayerContext.requestFullScreen | 进入全屏 | 支持 |
| LivePlayerContext.resume | 恢复 | 支持 |
| LivePlayerContext.snapshot | 截图 | 支持 |
| LivePlayerContext.stop | 停止 | 支持 |

#### LivePusherContext

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| LivePusherContext.pause | 暂停推流 | 支持 |
| LivePusherContext.pauseBGM | 暂停背景音 | 支持 |
| LivePusherContext.playBGM | 播放背景音 | 支持 |
| LivePusherContext.resume | 恢复推流 | 支持 |
| LivePusherContext.resumeBGM | 恢复背景音 | 支持 |
| LivePusherContext.sendMessage | 发送SEI消息 | win不支持 |
| LivePusherContext.setBGMVolume | 设置背景音音量 | 支持 |
| LivePusherContext.setMICVolume | 设置麦克风音量 | 支持 |
| LivePusherContext.snapshot | 快照 | 支持 |
| LivePusherContext.start | 播放推流 | 支持 |
| LivePusherContext.startPreview | 开启摄像头预览 | 支持 |
| LivePusherContext.stop | 停止推流 | 支持 |
| LivePusherContext.stopBGM | 停止背景音 | 支持 |
| LivePusherContext.stopPreview | 关闭摄像头预览 | 支持 |
| LivePusherContext.switchCamera | 切换前后摄像头 | 仅移动端支持 |
| LivePusherContext.toggleTorch | 切换 | 支持 |

### 录音

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.stopRecord | 停止录音 | 支持 |
| wx.startRecord | 开始录音 | 支持 |
| wx.getRecorderManager | 获取全局唯一的录音管理器 RecorderManager | 支持 |

#### RecorderManager

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| RecorderManager.onError | 监听录音错误事件 | 仅移动端支持 |
| RecorderManager.onFrameRecorded | 监听已录制完指定帧大小的文件事件 | 仅移动端支持 |
| RecorderManager.onInterruptionBegin | 监听录音因为受到系统占用而被中断开始事件 | 仅移动端支持 |
| RecorderManager.onInterruptionEnd | 监听录音中断结束事件 | 仅移动端支持 |
| RecorderManager.onPause | 监听录音暂停事件 | 仅移动端支持 |
| RecorderManager.onResume | 监听录音继续事件 | 仅移动端支持 |
| RecorderManager.onStart | 监听录音开始事件 | 仅移动端支持 |
| RecorderManager.onStop | 监听录音结束事件 | 仅移动端支持 |
| RecorderManager.pause | 暂停录音 | 支持 |
| RecorderManager.resume | 继续录音 | 支持 |
| RecorderManager.start | 开始录音 | 支持 |
| RecorderManager.stop | 停止录音 | 支持 |

### 相机

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.createCameraContext | 创建 camera 上下文 CameraContext 对象 | 支持 |

#### CameraContext

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| CameraContext.onCameraFrame | 获取 Camera 实时帧数据 | 仅移动端支持 |
| CameraContext.setZoom | 设置缩放级别 | 仅移动端支持 |
| CameraContext.startRecord | 开始录像 | 支持 |
| CameraContext.stopRecord | 结束录像 | 支持 |
| CameraContext.takePhoto | 拍摄照片 | 支持 |

#### CameraFrameListener

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| CameraFrameListener.start | 开始监听帧数据 | 支持 |
| CameraFrameListener.stop | 停止监听帧数据 | 支持 |

### 富文本

### EditorContext

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| EditorContext.blur | 编辑器失焦，同时收起键盘 | 支持 |
| EditorContext.clear | 清空编辑器内容 | 支持 |
| EditorContext.format | 修改样式 | 支持 |
| EditorContext.getContents | 获取编辑器内容 | 支持 |
| EditorContext.getSelectionText | 获取编辑器已选区域内的纯文本内容 | 不支持 |
| EditorContext.insertDivider | 插入分割线 | 支持 |
| EditorContext.insertImage | 插入图片 | 支持 |
| EditorContext.insertText | 覆盖当前选区，设置一段文本 | 支持 |
| EditorContext.redo | 恢复 | 支持 |
| EditorContext.removeFormat | 清除当前选区的样式 | 支持 |
| EditorContext.scrollIntoView | 使得编辑器光标处滚动到窗口可视区域内 | 不支持 |
| EditorContext.setContents | 初始化编辑器内容 | 支持 |
| EditorContext.undo | 撤销 | 支持 |

### 实时语音

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.updateVoIPChatMuteConfig | 更新实时语音静音设置 | 不支持 |
| wx.subscribeVoIPVideoMembers | 订阅视频画面成员 | 不支持 |
| wx.setEnable1v1Chat | 开启双人通话 | 不支持 |
| wx.onVoIPVideoMembersChanged | 监听实时语音通话成员视频状态变化事件 | 不支持 |
| wx.onVoIPChatStateChanged | 监听房间状态变化事件 | 不支持 |
| wx.onVoIPChatSpeakersChanged | 监听实时语音通话成员通话状态变化事件 | 不支持 |
| wx.onVoIPChatMembersChanged | 监听实时语音通话成员在线状态变化事件 | 不支持 |
| wx.onVoIPChatInterrupted | 监听被动断开实时语音通话事件 | 不支持 |
| wx.offVoIPVideoMembersChanged | 取消监听实时语音通话成员视频状态变化事件 | 不支持 |
| wx.offVoIPChatStateChanged | 取消监听房间状态变化事件 | 不支持 |
| wx.offVoIPChatMembersChanged | 取消监听实时语音通话成员在线状态变化事件 | 不支持 |
| wx.offVoIPChatInterrupted | 取消监听被动断开实时语音通话事件 | 不支持 |
| wx.joinVoIPChat | 加入 (创建) 实时语音通话 | 不支持 |
| wx.exitVoIPChat | 退出（销毁）实时语音通话 | 不支持 |

### 画面录制器

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.createMediaRecorder | 创建 WebGL 画面录制器，可逐帧录制在 WebGL 上渲染的画面并导出视频文件 | win不支持，其余端部分支持 |

### 视频解码器

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.createVideoDecoder | 创建视频解码器，可逐帧获取解码后的数据 | 移动端部分支持 |

## 位置

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.stopLocationUpdate | 关闭监听实时位置变化 | 仅移动端支持 |
| wx.startLocationUpdateBackground | 开启小程序进入前后台时均接收位置消息 | 仅移动端支持 |
| wx.startLocationUpdate | 开启小程序进入前台时接收位置消息 | 仅移动端支持 |
| wx.openLocation | 使用微信内置地图查看位置 | win不支持 |
| wx.onLocationChangeError | 监听持续定位接口返回失败时触发 | 不支持 |
| wx.onLocationChange | 监听实时地理位置变化事件 | 仅移动端支持 |
| wx.offLocationChangeError | 取消监听持续定位接口返回失败时触发 | 不支持 |
| wx.offLocationChange | 取消监听实时地理位置变化事件 | 仅移动端支持 |
| wx.getLocation | 获取当前的地理位置、速度 | 支持 |
| wx.choosePoi | 打开POI列表选择位置 | 不支持 |
| wx.chooseLocation | 打开地图选择位置 | 仅移动端支持 |

## 文件

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.saveFileToDisk | 保存文件系统的文件到用户磁盘 | 仅桌面端支持 |
| wx.saveFile | 保存文件到本地 | 支持 |
| wx.removeSavedFile | 删除本地缓存文件 | 支持 |
| wx.openDocument | 新开页面打开文档 | win不支持，其余端部分支持(不支持showMenu属性) |
| wx.getSavedFileList | 获取该小程序下已保存的本地缓存文件列表 | 支持 |
| wx.getSavedFileInfo | 获取本地文件的文件信息 | 支持 |
| wx.getFileSystemManager | 获取全局唯一的文件管理器 | 支持 |
| wx.getFileInfo | 获取文件信息 | 支持 |

### FileSystemManager

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| FileSystemManager.access | 判断文件/目录是否存在 | 支持 |
| FileSystemManager.accessSync | FileSystemManager.access 的同步版本 | 支持 |
| FileSystemManager.appendFile | 在文件结尾追加内容 | 支持 |
| FileSystemManager.appendFileSync | FileSystemManager.appendFile 的同步版本 | 支持 |
| FileSystemManager.close | 关闭文件 | 仅移动端支持 |
| FileSystemManager.closeSync | 同步关闭文件 | 仅移动端支持 |
| FileSystemManager.copyFile | 复制文件 | 支持 |
| FileSystemManager.copyFileSync | FileSystemManager.copyFile 的同步版本 | 支持 |
| FileSystemManager.fstat | 获取文件的状态信息 | 仅移动端支持 |
| FileSystemManager.fstatSync | 同步获取文件的状态信息 | 仅移动端支持 |
| FileSystemManager.ftruncate | 对文件内容进行截断操作 | 仅移动端支持 |
| FileSystemManager.ftruncateSync | 同步对文件内容进行截断操作 | 仅移动端支持 |
| FileSystemManager.getFileInfo | 获取该小程序下的 本地临时文件 或 本地缓存文件 信息 | 支持 |
| FileSystemManager.getSavedFileList | 获取该小程序下已保存的本地缓存文件列表 | 支持 |
| FileSystemManager.mkdir | 创建目录 | 支持 |
| FileSystemManager.mkdirSync | FileSystemManager.mkdir 的同步版本 | 支持 |
| FileSystemManager.open | 打开文件，返回文件描述符 | 仅移动端支持 |
| FileSystemManager.openSync | 同步打开文件，返回文件描述符 | 仅移动端支持 |
| FileSystemManager.read | 读文件 | 仅移动端支持 |
| FileSystemManager.readdir | 读取目录内文件列表 | 支持 |
| FileSystemManager.readdirSync | FileSystemManager.readdir 的同步版本 | 支持 |
| FileSystemManager.readFile | 读取本地文件内容 | 支持 |
| FileSystemManager.readFileSync | FileSystemManager.readFile 的同步版本 | 支持 |
| FileSystemManager.readSync | 读文件 | 仅移动端支持 |
| FileSystemManager.readZipEntry | 读取压缩包内的文件 | 仅安卓支持 |
| FileSystemManager.removeSavedFile | 删除该小程序下已保存的本地缓存文件 | 支持 |
| FileSystemManager.rename | 重命名文件 | 支持 |
| FileSystemManager.renameSync | FileSystemManager.rename 的同步版本 | 支持 |
| FileSystemManager.rmdir | 删除目录 | 支持 |
| FileSystemManager.rmdirSync | FileSystemManager.rmdir 的同步版本 | 支持 |
| FileSystemManager.saveFile | 保存临时文件到本地 | 支持 |
| FileSystemManager.saveFileSync | FileSystemManager.saveFile 的同步版本 | 支持 |
| FileSystemManager.stat | 获取文件 Stats 对象 | 支持 |
| FileSystemManager.statSync | FileSystemManager.stat 的同步版本 | 支持 |
| FileSystemManager.truncate | 对文件内容进行截断操作 | 仅移动端支持 |
| FileSystemManager.truncateSync | FileSystemManager.truncate的同步版本 | 仅移动端支持 |
| FileSystemManager.unlink | 删除文件 | 支持 |
| FileSystemManager.unlinkSync | FileSystemManager.unlink 的同步版本 | 支持 |
| FileSystemManager.unzip | 解压文件 | 支持 |
| FileSystemManager.write | 写入文件 | 仅移动端支持 |
| FileSystemManager.writeFile | 写文件 | 支持 |
| FileSystemManager.writeFileSync | FileSystemManager.writeFile 的同步版本 | 支持 |
| FileSystemManager.writeSync | 同步写入文件 | 仅移动端支持 |

### ReadResult

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| ReadResult | 文件读取结果。通过 FileSystemManager.readSync 接口返回 | 仅移动端支持 |

### Stats

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| Stats.isDirectory | 判断当前文件是否一个目录 | mac不支持 |
| Stats.isFile | 判断当前文件是否一个普通文件 | mac不支持 |

### WriteResult

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| WriteResult | 文件读取结果。通过 FileSystemManager.writeSync 接口返回 | 仅移动端支持 |

## 开放接口

### 登录

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.pluginLogin | 调用接口获得插件用户标志凭证（code） | 不支持 |
| wx.login | 调用接口获取登录凭证（code） | 支持 |
| wx.checkSession | 检查登录态是否过期 | 支持 |

 

### 账号信息

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.getAccountInfoSync | 获取当前账号信息 | 支持 |

### 用户信息

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.getUserInfo | 获取用户信息 | mac不支持 |
| getPaidUnionId | 用户支付完成后，获取该用户的 UnionId，无需用户授权 | 支持 |
| UserInfo | 用户信息 | 支持 |

### 授权

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.authorize | 提前向用户发起授权请求 | 支持 |

### 设置

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.openSetting | 调起客户端小程序设置界面，返回用户设置的操作结果 | win不支持 |
| wx.getSetting | 获取用户的当前设置 | 支持 |
| AuthSetting | 用户授权设置信息，详情参考权限 | 支持 |
| SubscriptionsSetting | 订阅消息设置 | win不支持 |

 

### 收货地址

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.chooseAddress | 获取用户收货地址 | 仅移动端支持 |

### 卡券

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.openCard | 查看微信卡包中的卡券 | 仅移动端支持 |
| wx.addCard | 批量添加卡券 | 仅移动端支持 |

### 发票

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.chooseInvoiceTitle | 选择用户的发票抬头 | 仅移动端支持 |
| wx.chooseInvoice | 选择用户已有的发票 | 仅移动端支持 |

### 生物认证

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.startSoterAuthentication | 开始 SOTER 生物认证 | 不支持 |
| wx.checkIsSupportSoterAuthentication | 获取本机支持的 SOTER 生物认证方式 | 不支持 |
| wx.checkIsSoterEnrolledInDevice | 获取设备内是否录入如指纹等生物信息的接口 | 不支持 |

### 微信运动

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.shareToWeRun | 分享数据到微信运动 | 仅移动端支持 |
| wx.getWeRunData | 获取用户过去三十天微信运动步数 | 仅移动端支持 |

### 微信红包

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.showRedPackage | 拉取h5领取红包封面页 | 仅移动端支持 |

### 收藏

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.addVideoToFavorites | 收藏视频 | 不支持 |
| wx.addFileToFavorites | 收藏文件 | 不支持 |

### 车牌

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.chooseLicensePlate | 选择车牌号 | 不支持 |

### 视频号

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.reserveChannelsLive | 预约视频号直播 | 不支持 |
| wx.openChannelsUserProfile | 打开视频号主页 | 不支持 |
| wx.openChannelsLive | 打开视频号直播 | 不支持 |
| wx.openChannelsEvent | 打开视频号活动页 | 不支持 |
| wx.openChannelsActivity | 打开视频号视频 | 不支持 |
| wx.getChannelsLiveNoticeInfo | 获取视频号直播预告信息 | 不支持 |
| wx.getChannelsLiveInfo | 获取视频号直播信息 | 仅移动端支持 |

### 微信群

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.getGroupEnterInfo | 获取微信群聊场景下的小程序启动信息 | 不支持 |

### 微信客服

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.openCustomerServiceChat | 打开微信客服 | 不支持 |

## 设备

### 蓝牙-通用

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.stopBluetoothDevicesDiscovery | 停止搜寻附近的蓝牙外围设备 | 仅移动端支持 |
| wx.startBluetoothDevicesDiscovery | 开始搜寻附近的蓝牙外围设备 | 仅移动端支持 |
| wx.openBluetoothAdapter | 初始化蓝牙模块 | 仅移动端支持 |
| wx.onBluetoothDeviceFound | 监听寻找到新设备的事件 | 仅移动端支持 |
| wx.onBluetoothAdapterStateChange | 监听蓝牙适配器状态变化事件 | 仅移动端支持 |
| wx.makeBluetoothPair | 蓝牙配对接口 | 仅安卓支持 |
| wx.isBluetoothDevicePaired | 查询蓝牙设备是否配对 | 不支持 |
| wx.getConnectedBluetoothDevices | 根据 uuid 获取处于已连接状态的设备 | 仅移动端支持 |
| wx.getBluetoothDevices | 获取在蓝牙模块生效期间所有已发现的蓝牙设备 | 仅移动端支持 |
| wx.getBluetoothAdapterState | 获取本机蓝牙适配器状态 | 仅移动端支持 |
| wx.closeBluetoothAdapter | 关闭蓝牙模块 | 仅移动端支持 |

### 蓝牙-低功耗中心设备

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.writeBLECharacteristicValue | 向蓝牙低功耗设备特征值中写入二进制数据 | 仅移动端支持 |
| wx.setBLEMTU | 协商设置蓝牙低功耗的最大传输单元 | 仅安卓支持 |
| wx.readBLECharacteristicValue | 读取蓝牙低功耗设备特征值的二进制数据 | 仅移动端支持 |
| wx.onBLEMTUChange | 监听蓝牙低功耗的最大传输单元变化事件 | 不支持 |
| wx.onBLEConnectionStateChange | 监听蓝牙低功耗连接状态的改变事件 | 仅移动端支持 |
| wx.onBLECharacteristicValueChange | 监听蓝牙低功耗设备的特征值变化事件 | 仅移动端支持 |
| wx.offBLEMTUChange | 取消监听蓝牙低功耗的最大传输单元变化事件 | 不支持 |
| wx.notifyBLECharacteristicValueChange | 启用蓝牙低功耗设备特征值变化时的 notify 功能，订阅特征 | 仅移动端支持 |
| wx.getBLEMTU | 获取蓝牙低功耗的最大传输单元 | 不支持 |
| wx.getBLEDeviceServices | 获取蓝牙低功耗设备所有服务 | 仅移动端支持 |
| wx.getBLEDeviceRSSI | 获取蓝牙低功耗设备的信号强度 | 仅移动端支持 |
| wx.getBLEDeviceCharacteristics | 获取蓝牙低功耗设备某个服务中所有特征 | 仅移动端支持 |
| wx.createBLEConnection | 连接蓝牙低功耗设备 | 仅移动端支持 |
| wx.closeBLEConnection | 断开与蓝牙低功耗设备的连接 | 仅移动端支持 |

### 蓝牙-低功耗外围设备

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.createBLEPeripheralServer | 建立本地作为蓝牙低功耗外围设备的服务端，可创建多个 | 仅安卓支持 |

#### BLEPeripheralServer

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| BLEPeripheralServer.addService | 添加服务 | 仅安卓支持 |
| BLEPeripheralServer.close | 关闭当前服务端 | 仅安卓支持 |
| BLEPeripheralServer.offCharacteristicReadRequest | 取消监听已连接的设备请求读当前外围设备的特征值事件 | 不支持 |
| BLEPeripheralServer.offCharacteristicSubscribed | 取消监听特征订阅事件 | 不支持 |
| BLEPeripheralServer.offCharacteristicUnsubscribed | 取消监听取消特征订阅事件 | 不支持 |
| BLEPeripheralServer.offCharacteristicWriteRequest | 取消监听已连接的设备请求写当前外围设备的特征值事件 | 不支持 |
| BLEPeripheralServer.onCharacteristicReadRequest | 监听已连接的设备请求读当前外围设备的特征值事件 | 不支持 |
| BLEPeripheralServer.onCharacteristicSubscribed | 监听特征订阅事件 | 不支持 |
| BLEPeripheralServer.onCharacteristicUnsubscribed | 监听取消特征订阅事件 | 不支持 |
| BLEPeripheralServer.onCharacteristicWriteRequest | 监听已连接的设备请求写当前外围设备的特征值事件 | 不支持 |
| BLEPeripheralServer.removeService | 移除服务 | 仅安卓支持 |
| BLEPeripheralServer.startAdvertising | 开始广播本地创建的外围设备 | 不支持 |
| BLEPeripheralServer.stopAdvertising | 停止广播 | 不支持 |
| BLEPeripheralServer.writeCharacteristicValue | 往指定特征写入二进制数据值，并通知已连接的主机 | 仅安卓支持 |

### 蓝牙-信标(Beacon)

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.stopBeaconDiscovery | 停止搜索附近的 Beacon 设备 | 仅移动端支持 |
| wx.startBeaconDiscovery | 开始搜索附近的 Beacon 设备 | 仅移动端支持 |
| wx.onBeaconUpdate | 监听 Beacon 设备更新事件，仅能注册一个监听 | 仅移动端支持 |
| wx.onBeaconServiceChange | 监听 Beacon 服务状态变化事件，仅能注册一个监听 | 仅移动端支持 |
| wx.offBeaconUpdate | 取消监听 Beacon 设备更新事件 | 仅移动端支持 |
| wx.offBeaconServiceChange | 取消监听 Beacon 服务状态变化事件 | 仅移动端支持 |
| wx.getBeacons | 获取所有已搜索到的 Beacon 设备 | 仅移动端支持 |
| BeaconInfo | Beacon 设备 | 仅移动端支持 |

### Wi-Fi

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.stopWifi | 关闭 Wi-Fi 模块 | 仅移动端支持 |
| wx.startWifi | 初始化 Wi-Fi 模块 | 仅移动端支持 |
| wx.setWifiList | 设置 wifiList 中 AP 的相关信息 | 仅iOS支持 |
| wx.onWifiConnected | 监听连接上 Wi-Fi 的事件 | 仅移动端支持 |
| wx.onGetWifiList | 监听获取到 Wi-Fi 列表数据事件 | 仅移动端支持 |
| wx.getWifiList | 请求获取 Wi-Fi 列表 | 仅移动端支持 |
| wx.getConnectedWifi | 获取已连接中的 Wi-Fi 信息 | 仅移动端支持 |
| wx.connectWifi | 连接 Wi-Fi | 仅移动端支持 |
| WifiInfo | Wifi 信息 | 仅移动端支持 |

### 日历

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.addPhoneRepeatCalendar | 向系统日历添加重复事件 | 不支持 |
| wx.addPhoneCalendar | 向系统日历添加事件 | 仅移动端支持 |

### 联系人

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.chooseContact | 拉起手机通讯录，选择联系人 | 仅移动端支持 |
| wx.addPhoneContact | 添加手机通讯录联系人 | 仅移动端支持 |

### 无障碍

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.checkIsOpenAccessibility | 检测是否开启视觉无障碍功能 | 仅移动端支持 |

### 电量

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.getBatteryInfoSync | wx.getBatteryInfo 的同步版本 | 仅安卓支持 |
| wx.getBatteryInfo | 获取设备电量 | 仅移动端支持 |

### 剪贴板

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.setClipboardData | 设置系统剪贴板的内容 | 支持 |
| wx.getClipboardData | 获取系统剪贴板的内容 | 支持 |

### 网络

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.onNetworkWeakChange | 监听弱网状态变化事件 | 不支持 |
| wx.onNetworkStatusChange | 监听网络状态变化事件 | 仅移动端支持 |
| wx.offNetworkWeakChange | 取消监听弱网状态变化事件 | 不支持 |
| wx.offNetworkStatusChange | 取消监听网络状态变化事件 | 仅移动端支持 |
| wx.getNetworkType | 获取网络类型 | 支持 |
| wx.getLocalIPAddress | 获取局域网IP地址 | 不支持 |

### 加密

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.getRandomValues | 获取密码学安全随机数 | 不支持 |

### 屏幕

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.setVisualEffectOnCapture | 设置截屏/录屏时屏幕表现 | 不支持 |
| wx.setScreenBrightness | 设置屏幕亮度 | 仅移动端支持 |
| wx.setKeepScreenOn | 设置是否保持常亮状态 | 仅移动端支持 |
| wx.onUserCaptureScreen | 监听用户主动截屏事件 | 仅移动端支持 |
| wx.offUserCaptureScreen | 取消监听用户主动截屏事件 | 仅移动端支持 |
| wx.getScreenBrightness | 获取屏幕亮度 | 支持 |

### 键盘

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.onKeyboardHeightChange | 监听键盘高度变化 | 仅移动端支持 |
| wx.hideKeyboard | 在input、textarea等focus拉起键盘之后，手动调用此接口收起键盘 | 仅移动端支持 |
| wx.getSelectedTextRange | 在input、textarea等focus之后，获取输入框的光标位置 | 仅移动端支持 |

### 电话

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.makePhoneCall | 拨打电话 | 仅移动端支持 |

### 加速计

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.stopAccelerometer | 停止监听加速度数据 | 仅移动端支持 |
| wx.startAccelerometer | 开始监听加速度数据 | 仅移动端支持 |
| wx.onAccelerometerChange | 监听加速度数据事件 | 仅移动端支持 |
| wx.offAccelerometerChange | 取消监听加速度数据事件 | 仅移动端支持 |

### 罗盘

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.stopCompass | 停止监听罗盘数据 | 仅移动端支持 |
| wx.startCompass | 开始监听罗盘数据 | 仅移动端支持 |
| wx.onCompassChange | 监听罗盘数据变化事件 | 仅移动端支持 |
| wx.offCompassChange | 取消监听罗盘数据变化事件 | 仅移动端支持 |

### 设备方向

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.stopDeviceMotionListening | 停止监听设备方向的变化 | 仅移动端支持 |
| wx.startDeviceMotionListening | 开始监听设备方向的变化 | 仅移动端支持 |
| wx.onDeviceMotionChange | 监听设备方向变化事件 | 仅移动端支持 |
| wx.offDeviceMotionChange | 取消监听设备方向变化事件 | 仅移动端支持 |

### 陀螺仪

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.stopGyroscope | 停止监听陀螺仪数据 | 仅移动端支持 |
| wx.startGyroscope | 开始监听陀螺仪数据 | 仅移动端支持 |
| wx.onGyroscopeChange | 监听陀螺仪数据变化事件 | 仅移动端支持 |
| wx.offGyroscopeChange | 取消监听陀螺仪数据变化事件 | 仅移动端支持 |

 

### 扫码

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.scanCode | 调起客户端扫码界面进行扫码 | 仅移动端支持 |

### 振动

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.vibrateShort | 使手机发生较短时间的振动（15 ms） | 仅移动端支持 |
| wx.vibrateLong | 使手机发生较长时间的振动（400 ms) | 仅移动端支持 |

## AI

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.createVKSession | 创建 vision kit 会话对象 | 不支持 |

### 视觉算法

#### VKCamera

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| VKCamera.getProjectionMatrix | 获取投影矩阵 | 不支持 |

#### VKFrame

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| VKFrame.getCameraTexture | 获取当前帧纹理，目前只支持 YUV 纹理 | 不支持 |
| VKFrame.getDisplayTransform | 获取纹理调整矩阵 | 不支持 |

#### VKSession

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| VKSession.cancelAnimationFrame | 取消由 requestAnimationFrame 添加到计划中的动画帧请求 | 不支持 |
| VKSession.destroy | 销毁会话 | 不支持 |
| VKSession.getVKFrame | 获取帧对象 | 不支持 |
| VKSession.hitTest | 触摸检测 | 不支持 |
| VKSession.off | 取消监听会话事件 | 不支持 |
| VKSession.on | 监听会话事件 | 不支持 |
| VKSession.requestAnimationFrame | 监听会话事件 | 不支持 |
| VKSession.start | 开启会话 | 不支持 |
| VKSession.stop | 停止会话 | 不支持 |

#### 人脸识别

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.stopFaceDetect | 停止人脸识别 | 不支持 |
| wx.initFaceDetect | 初始化人脸识别 | 不支持 |
| wx.faceDetect | 人脸识别 | 不支持 |

## Worker

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.createWorker | 创建一个 Worker 线程 | 支持 |

### Worker

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| Worker.onMessage | 监听主线程/Worker 线程向当前线程发送的消息的事件 | win不支持 |
| Worker.onProcessKilled | 监听 worker线程被系统回收事件 | win不支持 |
| Worker.postMessage | 向主线程/Worker 线程发送的消息 | win不支持 |
| Worker.terminate | 结束当前 Worker 线程 | win不支持 |

## WXML

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.createSelectorQuery | 返回一个 SelectorQuery 对象实例 | 支持 |
| wx.createIntersectionObserver | 创建并返回一个 IntersectionObserver 对象实例 | 支持 |

### IntersectionObserver

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| IntersectionObserver.disconnect | 停止监听 | 支持 |
| IntersectionObserver.observe | 指定目标节点并开始监听相交状态变化情况 | 支持 |
| IntersectionObserver.relativeTo | 使用选择器指定一个节点，作为参照区域之一 | 支持 |
| IntersectionObserver.relativeToViewport | 指定页面显示区域作为参照区域之一 | 支持 |

### NodesRef

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| NodesRef.boundingClientRect | 添加节点的布局位置的查询请求 | 支持 |
| NodesRef.fields | 获取节点的相关信息 | 支持 |
| NodesRef.scrollOffset | 添加节点的滚动位置查询请求 | 支持 |

### SelectorQuery

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| SelectorQuery.exec | 执行所有的请求 | 支持 |
| SelectorQuery.in | 将选择器的选取范围更改为自定义组件 component 内 | 支持 |
| SelectorQuery.select | 在当前页面下选择第一个匹配选择器 selector 的节点 | 支持 |
| SelectorQuery.selectAll | 在当前页面下选择匹配选择器 selector 的所有节点 | 支持 |
| SelectorQuery.selectViewport | 选择显示区域 | 支持 |

## 第三方平台

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.getExtConfigSync | wx.getExtConfig 的同步版本 | 支持 |
| wx.getExtConfig | 获取第三方平台自定义的数据字段 | 支持 |

## 广告

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| wx.createRewardedVideoAd | 创建激励视频广告组件 | 不支持 |
| wx.createInterstitialAd | 创建插屏广告组件 | 不支持 |

### InterstitialAd

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| InterstitialAd.destroy | 销毁插屏广告实例 | 不支持 |
| InterstitialAd.load | 加载插屏广告 | 不支持 |
| InterstitialAd.offClose | 取消监听插屏广告关闭事件 | 不支持 |
| InterstitialAd.offError | 取消监听插屏错误事件 | 不支持 |
| InterstitialAd.offLoad | 取消监听插屏广告加载事件 | 不支持 |
| InterstitialAd.onClose | 监听插屏广告关闭事件 | 不支持 |
| InterstitialAd.onError | 监听插屏错误事件 | 不支持 |
| InterstitialAd.onLoad | 监听插屏广告加载事件 | 不支持 |
| InterstitialAd.show | 显示插屏广告 | 不支持 |

### RewardedVideoAd

        
| API | 说明 | 企业微信支持情况 |
| --- | --- | --- |
| RewardedVideoAd.destroy | 销毁激励视频广告实例 | 不支持 |
| RewardedVideoAd.load | 加载激励视频广告 | 不支持 |
| RewardedVideoAd.offClose | 取消监听用户点击 关闭广告 按钮的事件 | 不支持 |
| RewardedVideoAd.offError | 取消监听激励视频错误事件 | 不支持 |
| RewardedVideoAd.offLoad | 取消监听激励视频错误事件 | 不支持 |
| RewardedVideoAd.onClose | 监听用户点击 关闭广告 按钮的事件 | 不支持 |
| RewardedVideoAd.onError | 监听激励视频错误事件 | 不支持 |
| RewardedVideoAd.onLoad | 监听激励视频广告加载事件 | 不支持 |
| RewardedVideoAd.show | 显示激励视频广告 | 不支持 |
