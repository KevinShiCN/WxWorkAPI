---
title: "监听BLE设备连接状态"
source: "https://developer.work.weixin.qq.com/document/path/100560"
last_update: "2024/11/13"
crawl_date: "2026-02-17"
---

# 监听BLE设备连接状态

## ww.onBLEConnectionStateChange(callback)

> 兼容性：企业微信

### 功能描述

监听低功耗蓝牙连接状态的改变事件，包括开发者主动连接或断开连接，设备丢失，连接异常断开等等。

      **
      
```ts
ww.onBLEConnectionStateChange(function(event) {
  console.log(event)
})
```

    
### 参数说明

#### callback: Function

**参数**

**event: Object**

|  | 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
|  | deviceId | string | 是 | 蓝牙设备 ID |
|  | connected | boolean | 是 | 连接目前的状态 |

## 旧版jweixin调用

### 示例代码

      
```javascript
wx.onBLEConnectionStateChange(function(res) {
  // 该方法回调中可以用于处理连接意外断开等异常情况
  console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)
})
```
