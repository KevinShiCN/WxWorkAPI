---
title: "获取BLE设备所有服务"
source: "https://developer.work.weixin.qq.com/document/path/100561"
last_update: "2024/11/13"
crawl_date: "2026-02-17"
---

# 获取BLE设备所有服务

## ww.getBLEDeviceServices(params)

> 兼容性：企业微信

### 功能描述

获取蓝牙设备所有 service（服务）。

      **
      
```ts
ww.getBLEDeviceServices({
  deviceId: deviceId
})
```

    
### 参数说明

#### params: Object

|  | 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
|  | deviceId | string | 是 | 蓝牙设备 ID，需要已经通过 createBLEConnection 与对应设备建立链接 |
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
|  | services | Object[] | 是 | 设备服务列表 |
|  | 属性类型必填说明uuidstring是蓝牙设备服务的 uuidisPrimaryboolean是该服务是否为主服务 |  | 属性 | 类型 | 必填 | 说明 |  | uuid | string | 是 | 蓝牙设备服务的 uuid |  | isPrimary | boolean | 是 | 该服务是否为主服务 |
|  | 属性 | 类型 | 必填 | 说明 |
|  | uuid | string | 是 | 蓝牙设备服务的 uuid |
|  | isPrimary | boolean | 是 | 该服务是否为主服务 |

## 旧版jweixin调用

### 示例代码

      
```javascript
wx.getBLEDeviceServices({
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接 
  deviceId: deviceId,
  success: function (res) {
    console.log('device services:', res.services)
  }
})
```
