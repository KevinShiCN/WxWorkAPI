---
title: "连接BLE设备"
source: "https://developer.work.weixin.qq.com/document/path/100558"
last_update: "2024/11/13"
crawl_date: "2026-02-17"
---

# 连接BLE设备

## ww.createBLEConnection(params)

> 兼容性：企业微信

### 功能描述

连接低功耗蓝牙设备。

      **
      
```ts
ww.createBLEConnection({
  deviceId: deviceId
})
```

    
### 参数说明

#### params: Object

|  | 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
|  | deviceId | string | 是 | 蓝牙设备 ID |
|  | success | Function | 否 | 成功回调 |
|  | fail | Function | 否 | 失败回调 |
|  | cancel | Function | 否 | 取消回调 |
|  | complete | Function | 否 | 完成回调 |

### 返回说明

**Promise<Object>**

|  | 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
|  | errMsg | string | 是 | 通用错误信息 |
|  | errCode | number | 是 | 通用错误码 |

### 使用说明

- 安卓手机上如果多次调用 createBLEConnection 创建连接，有可能导致系统持有同一设备多个连接的实例，导致调用 closeBLEConnection 的时候并不能真正的断开与设备的连接。因此请保证尽量成对的调用 create 和 close 接口
- 蓝牙链接随时可能断开，建议监听 onBLEConnectionStateChange 回调事件，当蓝牙设备断开时按需执行重连操作
- 若对未连接的设备或已断开连接的设备调用数据读写操作的接口，会返回 10006 错误，建议进行重连操作

## 旧版jweixin调用

### 示例代码

      
```javascript
wx.createBLEConnection({
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接 
  deviceId: deviceId,
  success: function (res) {
    console.log(res)
  }
})
```
